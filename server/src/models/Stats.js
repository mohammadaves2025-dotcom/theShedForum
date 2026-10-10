import mongoose from 'mongoose';

const statsSchema = new mongoose.Schema({
  totalGraduates: { type: Number, default: 1000 },
  activeUnits: { type: Number, default: 7 },
  districtsCovered: { type: Number, default: 12 },
  coachingBeneficiaries: { type: Number, default: 450 },
  womenParticipationRate: { type: String, default: '38%' },
  establishedYear: { type: Number, default: 2018 }
}, { timestamps: true });

export const Stats = mongoose.models.Stats || mongoose.model('Stats', statsSchema);
