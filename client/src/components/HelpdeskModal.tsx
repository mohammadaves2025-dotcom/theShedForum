import React, { useState } from 'react';
import { 
  X, Send, Sparkles, CheckCircle2, User, Phone, 
  Mail, GraduationCap, HelpCircle, MessageSquare, ShieldCheck
} from 'lucide-react';
import { ApiService } from '../services/api';

interface HelpdeskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpdeskModal: React.FC<HelpdeskModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    university: 'MANUU',
    type: 'CUET Coaching / Entrance Support',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await ApiService.submitContact(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        setError(res.message || 'Submission failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-[28px] sm:rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 max-w-lg w-full overflow-hidden relative animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        
        {/* Modern Editorial Header */}
        <div className="bg-gradient-to-br from-[#0c162c] via-[#003D87] to-[#0052B4] p-6 sm:p-7 text-white relative shrink-0">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            aria-label="Close Helpdesk Form"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer border border-white/10"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="space-y-1.5 relative z-10 pr-8">
            <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider text-amber-300 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>100% Free Public Student Service</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-white tracking-tight">
              ShED Admission & Coaching Helpdesk
            </h3>
            
            <p className="text-xs text-blue-100 font-normal leading-relaxed">
              Connect directly with university student leaders for CUET prep, campus entrance guidance, hostel verification, and scholarship aid.
            </p>
          </div>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl border border-emerald-200 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Request Confirmed
                </span>
                <h4 className="text-2xl font-serif-heading font-bold text-slate-900">
                  Helpdesk Request Dispatched!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900 font-bold">{formData.name}</strong>. A volunteer from the <strong className="text-[#0052B4] font-bold">{formData.university} Chapter</strong> will connect with you on <strong className="text-slate-900 font-mono font-bold">{formData.phone || formData.email}</strong> shortly.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#0052B4] hover:bg-[#003D87] text-white px-7 py-3 rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  Return to Campus Unit
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-700 text-xs p-3.5 rounded-2xl border border-red-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
                  <span>{error}</span>
                </div>
              )}

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <User className="w-3.5 h-3.5 text-[#0052B4]" />
                  <span>Full Name</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Md Tariq Anwer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#0052B4] focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              {/* Phone & Email (2 Cols on Tablet+) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-[#0052B4]" />
                    <span>Phone / WhatsApp</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#0052B4] focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-[#0052B4]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#0052B4] focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              {/* Target University & Assistance Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <GraduationCap className="w-3.5 h-3.5 text-[#0052B4]" />
                    <span>Target University</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:border-[#0052B4] focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold cursor-pointer appearance-none pr-8"
                    >
                      <option value="MANUU">MANUU (Hyderabad)</option>
                      <option value="JMI">Jamia Millia Islamia (New Delhi)</option>
                      <option value="AMU">AMU (Aligarh)</option>
                      <option value="JNU">JNU (New Delhi)</option>
                      <option value="DU">Delhi University</option>
                      <option value="HCU">University of Hyderabad</option>
                      <option value="Patna University">Patna University</option>
                      <option value="Other">Other Premier University</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <HelpCircle className="w-3.5 h-3.5 text-[#0052B4]" />
                    <span>Assistance Type</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:border-[#0052B4] focus:ring-4 focus:ring-blue-100 outline-none transition-all font-semibold cursor-pointer appearance-none pr-8"
                    >
                      <option value="CUET Coaching / Entrance Support">CUET Coaching Support</option>
                      <option value="Admission Form Help">Admission Form Help</option>
                      <option value="Hostel & Accommodation">Hostel & Accommodation</option>
                      <option value="One-to-One Mentorship">One-to-One Mentorship</option>
                      <option value="Financial Aid / Scholarship">Financial Aid / Scholarship</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Specific Query / Notes */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <MessageSquare className="w-3.5 h-3.5 text-[#0052B4]" />
                  <span>Specific Query / Course Stream</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention your preferred course, subjects, or questions for our mentors..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#0052B4] focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none font-medium"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#0052B4] via-[#00479E] to-[#003D87] hover:from-[#003D87] hover:to-[#00285a] text-white font-black py-3.5 px-5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer disabled:opacity-70 text-xs sm:text-sm"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Submitting Request...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Submit Helpdesk Request</span>
                    </>
                  )}
                </button>

                <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Confidential student aid under ShED Forum Welfare Charter</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
