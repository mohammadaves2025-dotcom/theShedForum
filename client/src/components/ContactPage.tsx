import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react';
import { ApiService } from '../services/api';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    university: 'General',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await ApiService.submitContact(formData);
      setSubmitted(true);
    } catch (e) {
      alert('Submission failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <div className="bg-gradient-to-r from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-700">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-white tracking-tight leading-tight">
            Contact ShED Forum
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            Have questions about CUET coaching, campus student units, mentorship, or financial aid? Connect with our central coordination desk.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-lg font-serif-heading font-semibold text-slate-900 border-b border-slate-100 pb-3">Official Communication Channels</h2>
            
            <div className="space-y-5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0052B4] flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-slate-900">Phone Helplines</span>
                  <p className="text-slate-600 font-medium">+91 77372-80758</p>
                  <p className="text-slate-600 font-medium">+91 85649-68595</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#009A44] flex items-center justify-center shrink-0 border border-emerald-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-slate-900">Official Email</span>
                  <p className="text-[#0052B4] font-mono font-semibold">theshedforum@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#00A3E0] flex items-center justify-center shrink-0 border border-cyan-100">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-slate-900">Website & Portal</span>
                  <p className="text-slate-600 font-medium">www.shedforum.org</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#D91B24] flex items-center justify-center shrink-0 border border-red-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-slate-900">Regional & Campus Presence</span>
                  <p className="text-slate-600 font-normal">Seemanchal Region (Katihar, Purnea, Araria, Kishanganj) & University Units (MANUU, JMI, AMU, JNU, DU, HCU, Patna Univ)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#009A44] mx-auto" />
              <h3 className="text-2xl font-serif-heading font-semibold text-slate-900">Message Received!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto font-normal">
                Thank you for contacting ShED Forum. Our student coordination volunteer will respond to your query shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-serif-heading font-semibold text-slate-900 mb-2">Send Us a Direct Message</h2>
              
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Md Tariq Anwer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0052B4] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0052B4] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0052B4] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Inquiry Details</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your query regarding admissions, mentorship, or coaching..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0052B4] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0052B4] hover:bg-[#003D87] text-white font-semibold py-3.5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>{loading ? 'Sending Message...' : 'Submit Inquiry'}</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
