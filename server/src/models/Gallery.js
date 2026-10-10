import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  unit: {
    type: String,
    default: 'general'
  },
  category: {
    type: String,
    default: 'Campus Life'
  },
  eventTag: {
    type: String,
    default: 'Unit Gathering'
  },
  type: {
    type: String,
    default: 'photo'
  },
  url: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
  isHero: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const GalleryItem = mongoose.models.GalleryItem || mongoose.model('GalleryItem', gallerySchema);
