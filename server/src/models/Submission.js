import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    default: ''
  },
  university: {
    type: String,
    default: 'General'
  },
  course: {
    type: String,
    default: 'CUET / Undergraduate Entrance'
  },
  district: {
    type: String,
    default: 'Seemanchal Region'
  },
  type: {
    type: String,
    default: 'General Inquiry'
  },
  message: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['New Inquiry', 'Contacted', 'Mentor Assigned', 'Admitted', 'Archived'],
    default: 'New Inquiry'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Avoid model recompilation errors in serverless environments
export const Submission = mongoose.models.Submission || mongoose.model('Submission', submissionSchema);
