import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { initialData } from './data.js';
import { sendHelpdeskNotification } from './emailService.js';
import { connectDB, isConnected } from './db.js';
import { Submission } from './models/Submission.js';
import { GalleryItem } from './models/Gallery.js';
import { Event } from './models/Event.js';
import { Stats } from './models/Stats.js';
import multer from 'multer';
import { uploadBufferToCloudinary, isCloudinaryConfigured } from './cloudinary.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const isVercel = Boolean(process.env.VERCEL || process.env.VERCEL_ENV);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static gallery assets if requested directly from backend
app.use('/gallery', express.static(path.join(__dirname, '../../client/public/gallery')));
app.use('/images', express.static(path.join(__dirname, '../../client/public/images')));

// In-Memory Database store with initial data fallback
let db = { ...initialData };

// --- Automatic Seeding for Fresh MongoDB Atlas Instance ---
async function seedInitialDataIfEmpty() {
  try {
    if (!isConnected()) return;

    // Seed Gallery
    const galleryCount = await GalleryItem.countDocuments();
    if (galleryCount === 0 && initialData.gallery?.length > 0) {
      await GalleryItem.insertMany(initialData.gallery.map(item => ({
        title: item.title,
        unit: item.unit || 'general',
        category: item.category || 'Campus Life',
        eventTag: item.category || 'Unit Gathering',
        type: item.type || 'photo',
        url: item.url,
        caption: item.caption || '',
        isHero: item.url === '/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg'
      })));
      console.log('✓ [MongoDB Seed] Seeded authentic campus gallery assets');
    }

    // Seed Events
    const eventsCount = await Event.countDocuments();
    if (eventsCount === 0 && initialData.events?.length > 0) {
      await Event.insertMany(initialData.events);
      console.log('✓ [MongoDB Seed] Seeded initial events and announcements');
    }

    // Seed Stats
    const statsCount = await Stats.countDocuments();
    if (statsCount === 0 && initialData.stats) {
      await Stats.create(initialData.stats);
      console.log('✓ [MongoDB Seed] Seeded organization impact numbers');
    }
  } catch (err) {
    console.error('Seed check warning:', err.message);
  }
}

// Initial DB connect attempt on startup
connectDB().then(() => {
  if (isConnected()) {
    seedInitialDataIfEmpty();
  }
});

// Multer configuration: store file buffers in memory for streaming to Cloudinary
const upload = multer({ 
  storage: multer.memoryStorage(), 
  limits: { fileSize: 12 * 1024 * 1024 } // 12MB limit
});

// Middleware to ensure DB connection is ready on each request
app.use(async (req, res, next) => {
  if (process.env.MONGODB_URI && !isConnected()) {
    await connectDB();
  }
  next();
});

// --- Express Router for Dual /api and Root Mounting ---
const router = express.Router();

// Health Check
router.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    environment: NODE_ENV,
    isVercel,
    database: isConnected() ? 'MongoDB Atlas (Connected)' : 'In-Memory (Fallback)',
    cloudinary: isCloudinaryConfigured() ? 'Cloudinary (Ready)' : 'Awaiting credentials in .env',
    organization: 'The ShED Forum', 
    timestamp: new Date().toISOString() 
  });
});

// Organization Stats
router.get('/stats', async (req, res) => {
  try {
    if (isConnected()) {
      const statsDoc = await Stats.findOne().sort({ createdAt: -1 });
      if (statsDoc) return res.json({ success: true, data: statsDoc });
    }
    res.json({ success: true, data: db.stats });
  } catch (e) {
    res.json({ success: true, data: db.stats });
  }
});

router.put('/stats', async (req, res) => {
  try {
    if (isConnected()) {
      const updated = await Stats.findOneAndUpdate({}, req.body, { upsert: true, new: true });
      return res.json({ success: true, message: 'Stats updated in MongoDB', data: updated });
    }
    db.stats = { ...db.stats, ...req.body };
    res.json({ success: true, message: 'Stats updated successfully', data: db.stats });
  } catch (e) {
    db.stats = { ...db.stats, ...req.body };
    res.json({ success: true, message: 'Stats updated', data: db.stats });
  }
});

// University Units (Static NGO units definition)
router.get('/units', (req, res) => {
  res.json({ success: true, data: db.universityUnits });
});

router.get('/units/:id', (req, res) => {
  const unit = db.universityUnits.find(u => u.id === req.params.id || u.code.toLowerCase() === req.params.id.toLowerCase());
  if (!unit) {
    return res.status(404).json({ success: false, message: 'Unit not found' });
  }
  res.json({ success: true, data: unit });
});

// Initiatives
router.get('/initiatives', (req, res) => {
  res.json({ success: true, data: db.initiatives });
});

router.get('/initiatives/:id', (req, res) => {
  const item = db.initiatives.find(i => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ success: false, message: 'Initiative not found' });
  }
  res.json({ success: true, data: item });
});

// Patrons & Leadership
router.get('/patrons', (req, res) => {
  res.json({ success: true, data: db.patrons });
});

// News & Events
router.get('/events', async (req, res) => {
  try {
    if (isConnected()) {
      const events = await Event.find().sort({ createdAt: -1 });
      if (events.length > 0) return res.json({ success: true, data: events });
    }
    res.json({ success: true, data: db.events });
  } catch (e) {
    res.json({ success: true, data: db.events });
  }
});

router.post('/events', async (req, res) => {
  try {
    if (isConnected()) {
      const newEvent = await Event.create(req.body);
      return res.status(201).json({ success: true, message: 'Event added to MongoDB', data: newEvent });
    }
    const newEvent = {
      id: Date.now().toString(),
      ...req.body,
      date: req.body.date || new Date().toISOString().split('T')[0]
    };
    db.events.unshift(newEvent);
    res.status(201).json({ success: true, message: 'Event added', data: newEvent });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.delete('/events/:id', async (req, res) => {
  try {
    if (isConnected()) {
      await Event.findByIdAndDelete(req.params.id);
      return res.json({ success: true, message: 'Event deleted from MongoDB' });
    }
    db.events = db.events.filter(e => e.id !== req.params.id);
    res.json({ success: true, message: 'Event deleted' });
  } catch (e) {
    db.events = db.events.filter(e => e.id !== req.params.id);
    res.json({ success: true, message: 'Event deleted' });
  }
});

// Gallery Items
router.get('/gallery', async (req, res) => {
  try {
    if (isConnected()) {
      const items = await GalleryItem.find().sort({ createdAt: -1 });
      if (items.length > 0) return res.json({ success: true, data: items });
    }
    res.json({ success: true, data: db.gallery });
  } catch (e) {
    res.json({ success: true, data: db.gallery });
  }
});

// Standalone Image Upload Endpoint (Returns Cloudinary CDN URL)
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file uploaded' });
    }

    if (!isCloudinaryConfigured()) {
      return res.status(503).json({ 
        success: false, 
        message: 'Cloudinary credentials are not set in server/.env. Please configure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.' 
      });
    }

    const uploadResult = await uploadBufferToCloudinary(req.file.buffer, 'shed_forum/gallery');
    res.status(201).json({
      success: true,
      message: 'Image uploaded to Cloudinary successfully',
      url: uploadResult.url,
      public_id: uploadResult.public_id,
      format: uploadResult.format,
      width: uploadResult.width,
      height: uploadResult.height
    });
  } catch (err) {
    console.error('Cloudinary upload error:', err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Gallery Asset Publisher (Supports JSON or Direct Multipart File Upload)
router.post('/gallery', upload.single('image'), async (req, res) => {
  try {
    let imageUrl = req.body.url;

    // If an image file was attached in the request, upload it to Cloudinary
    if (req.file) {
      if (isCloudinaryConfigured()) {
        const uploadResult = await uploadBufferToCloudinary(req.file.buffer, 'shed_forum/gallery');
        imageUrl = uploadResult.url;
      } else {
        return res.status(503).json({
          success: false,
          message: 'Cloudinary credentials are not set in server/.env. Please configure your Cloudinary keys to upload files.'
        });
      }
    }

    if (!imageUrl) {
      return res.status(400).json({ success: false, message: 'An image file or valid image URL is required' });
    }

    const assetData = {
      title: req.body.title || 'Campus Photo',
      unit: req.body.unit || 'general',
      category: req.body.category || 'Campus Life',
      eventTag: req.body.eventTag || 'Unit Gathering',
      type: req.body.type || 'photo',
      url: imageUrl,
      caption: req.body.caption || '',
      isHero: req.body.isHero === true || req.body.isHero === 'true'
    };

    if (isConnected()) {
      const newItem = await GalleryItem.create(assetData);
      return res.status(201).json({ success: true, message: 'Gallery asset saved to MongoDB Atlas', data: newItem });
    }

    const newItem = {
      id: 'g_' + Date.now().toString(),
      ...assetData
    };
    db.gallery.unshift(newItem);
    res.status(201).json({ success: true, message: 'Gallery item added', data: newItem });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.delete('/gallery/:id', async (req, res) => {
  try {
    if (isConnected()) {
      await GalleryItem.findByIdAndDelete(req.params.id);
      return res.json({ success: true, message: 'Gallery item deleted from MongoDB' });
    }
    db.gallery = db.gallery.filter(g => g.id !== req.params.id);
    res.json({ success: true, message: 'Gallery item deleted' });
  } catch (e) {
    db.gallery = db.gallery.filter(g => g.id !== req.params.id);
    res.json({ success: true, message: 'Gallery item deleted' });
  }
});

// Contact Form Submission (Helpdesk CRM)
router.post('/contact', async (req, res) => {
  const { name, email, phone, university, course, district, message, type } = req.body;
  if (!name || (!email && !phone)) {
    return res.status(400).json({ success: false, message: 'Name and contact info are required.' });
  }

  let savedDoc = null;
  const submissionData = {
    name,
    email: email || '',
    phone,
    university: university || 'General',
    course: course || 'CUET / Entrance Preparation',
    district: district || 'Seemanchal Region',
    message: message || '',
    type: type || 'General Inquiry',
    status: req.body.status || 'New Inquiry'
  };

  try {
    if (isConnected()) {
      savedDoc = await Submission.create(submissionData);
    }
  } catch (dbErr) {
    console.error('MongoDB save error (falling back to memory):', dbErr.message);
  }

  if (!savedDoc) {
    savedDoc = {
      id: Date.now().toString(),
      ...submissionData,
      createdAt: new Date().toISOString()
    };
    db.contactSubmissions.unshift(savedDoc);
  }

  // Send email notification to client via SMTP
  const emailResult = await sendHelpdeskNotification(savedDoc);

  res.status(201).json({ 
    success: true, 
    message: 'Inquiry submitted successfully! Our help desk will connect with you soon.', 
    data: savedDoc,
    emailStatus: emailResult
  });
});

router.get('/contact', async (req, res) => {
  try {
    if (isConnected()) {
      const submissions = await Submission.find().sort({ createdAt: -1 });
      if (submissions.length > 0) return res.json({ success: true, data: submissions });
    }
    res.json({ success: true, data: db.contactSubmissions });
  } catch (e) {
    res.json({ success: true, data: db.contactSubmissions });
  }
});

// Update submission status in CRM
router.put('/contact/:id', async (req, res) => {
  try {
    if (isConnected()) {
      const updated = await Submission.findByIdAndUpdate(
        req.params.id, 
        { status: req.body.status }, 
        { new: true }
      );
      if (updated) return res.json({ success: true, message: 'Status updated in MongoDB', data: updated });
    }

    const item = db.contactSubmissions.find(s => s.id === req.params.id || s._id === req.params.id);
    if (item) {
      if (req.body.status) item.status = req.body.status;
      return res.json({ success: true, message: 'Status updated', data: item });
    }
    res.status(404).json({ success: false, message: 'Submission not found' });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// Admin Auth Login
router.post('/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === 'shed2026' || password === 'admin123' || password === 'admin') {
    return res.json({
      success: true,
      token: 'shed_admin_secret_token_2026',
      user: { name: 'ShED Forum Admin', role: 'SuperAdmin' }
    });
  }
  res.status(401).json({ success: false, message: 'Invalid password. Try "admin" or "shed2026"' });
});

// Mount router on both '/api' and '/' to ensure 100% compatibility in all environments
app.use('/api', router);
app.use('/', router);

// --- Universal Execution Controller (Local Machine, Vercel Services, and Serverless) ---
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`[${NODE_ENV.toUpperCase()}] ShED Forum Backend Server running on port ${PORT}`);
  console.log(`Database:  ${isConnected() ? 'MongoDB Atlas' : 'In-Memory (Awaiting MONGODB_URI)'}`);
  console.log(`=======================================================`);
});

// Export app for Vercel functions/services runtime
export default app;
