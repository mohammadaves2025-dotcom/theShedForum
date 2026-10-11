import mongoose from 'mongoose';

const statsSchema = new mongoose.Schema({
  totalGraduates: { type: Number, default: 1000 },
  activeUnits: { type: Number, default: 7 },
  districtsCovered: { type: Number, default: 12 },
  coachingBeneficiaries: { type: Number, default: 450 },
  womenParticipationRate: { type: String, default: '38%' },
  establishedYear: { type: Number, default: 2018 },
  ticker: {
    enabled: { type: Boolean, default: true },
    category: { type: String, default: 'CUET 2026 ALERT' },
    text: { type: String, default: 'CUET UG/PG 2026 Free Online Entrance Preparation Batch Registrations Now Open across all 7 University Units!' },
    link: { type: String, default: '/centre' }
  },
  ngoSettings: {
    helplinePhone: { type: String, default: '+91 77372-80758' },
    helplineEmail: { type: String, default: 'theshedforum@gmail.com' },
    whatsappGroupUrl: { type: String, default: 'https://chat.whatsapp.com/TheShEDForum' },
    delhiOffice: { type: String, default: 'Batla House, Jamia Nagar, Okhla, New Delhi 110025' },
    biharOffice: { type: String, default: 'Kishanganj City Center, Line Mohalla, Kishanganj 855107' },
    registrationNo: { type: String, default: 'S-712/NGO/2018 (Registered Educational Society)' }
  },
  heroImage: {
    url: { type: String, default: '/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg' },
    title: { type: String, default: 'Jamia Millia Islamia Centenary Gate' }
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

export const Stats = mongoose.models.Stats || mongoose.model('Stats', statsSchema);
