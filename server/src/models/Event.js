import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    default: () => new Date().toISOString().split('T')[0]
  },
  category: {
    type: String,
    default: 'Coaching'
  },
  location: {
    type: String,
    default: 'Online'
  },
  summary: {
    type: String,
    default: ''
  },
  details: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id.toString();
      return ret;
    }
  },
  toObject: { virtuals: true }
});

export const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);
