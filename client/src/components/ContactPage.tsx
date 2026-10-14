import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Globe, Send, CheckCircle2, 
  ChevronRight, Clock, Building2, GraduationCap
} from 'lucide-react';
import { ApiService } from '../services/api';
import { PageHeroBanner } from './PageHeroBanner';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    university: 'General Inquiry',
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
    <div className="bg-slate-50 min-h-screen">
      
      {/* ========================================================================= */}
      {/* TOP FULL-WIDTH IMAGE HERO (EXACT PRATHAM-STYLE BANNER)                    */}
      {/* ========================================================================= */}
      <PageHeroBanner
        image="/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg"
        badgeText="CONTACT"
        alt="The ShED Forum Community and Scholars"
      />

      {/* ========================================================================= */}
      {/* MAIN TWO-COLUMN CONTENT AREA (LOCATE US NEAR YOU & SEND US A MESSAGE)     */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT COLUMN: LOCATE US NEAR YOU                                         */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Pratham-Style Yellow Banner Bar */}
            <div className="bg-[#ffbe00] text-black font-bold uppercase tracking-wider text-base sm:text-lg px-5 py-3 flex items-center gap-2 shadow-sm rounded-t-lg sm:rounded-none">
              <ChevronRight className="w-5 h-5 stroke-[3] text-black" />
              <span>LOCATE US NEAR YOU</span>
            </div>

            <div className="space-y-8 text-slate-800">
              
              {/* Central Offices */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0052B4] border-b border-slate-200 pb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#0052B4]" />
                  <span>CENTRAL COORDINATION OFFICES</span>
                </h3>

                {/* Delhi Office */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="font-bold text-slate-900 text-base">New Delhi National Coordination Desk</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    ShED Forum Secretariat, Jamia Nagar, Okhla, New Delhi – 110025
                  </p>
                  <div className="pt-2 space-y-1.5 text-xs text-slate-700">
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#0052B4] shrink-0" />
                      <span>Email: <a href="mailto:theshedforum@gmail.com" className="font-semibold text-[#0052B4] hover:underline">theshedforum@gmail.com</a></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#009A44] shrink-0" />
                      <span>WhatsApp Desk: <span className="font-mono font-semibold text-slate-800">+91 98710 00000</span></span>
                    </p>
                    <p className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>Hours: Mon – Sat (9:00 AM – 7:00 PM IST)</span>
                    </p>
                  </div>
                </div>

                {/* Seemanchal Regional Headquarters */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="font-bold text-slate-900 text-base">Seemanchal Regional Headquarters (Bihar)</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Main Grassroots Coordination Desk, Seemanchal Hub (Katihar & Kishanganj District Units), Bihar
                  </p>
                  <div className="pt-2 space-y-1.5 text-xs text-slate-700">
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#0052B4] shrink-0" />
                      <span>Email: <a href="mailto:seemanchal@theshedforum.org" className="font-semibold text-[#0052B4] hover:underline">seemanchal@theshedforum.org</a></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#D91B24] shrink-0" />
                      <span>Serving: Katihar, Purnea, Araria, Kishanganj, Malda, Murshidabad</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Campus Units & University Desks */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0052B4] border-b border-slate-200 pb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#0052B4]" />
                  <span>ACTIVE UNIVERSITY CHAPTERS</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-1">
                    <span className="font-bold text-slate-900 block">MANUU Hyderabad</span>
                    <span className="text-slate-500 block">Maulana Azad National Urdu Univ</span>
                    <span className="text-[#009A44] font-semibold text-[11px]">Est. 2018 • 200+ Scholars</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-1">
                    <span className="font-bold text-slate-900 block">JMI New Delhi</span>
                    <span className="text-slate-500 block">Jamia Millia Islamia Campus</span>
                    <span className="text-[#0052B4] font-semibold text-[11px]">Est. 2021 • 170+ Scholars</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-1">
                    <span className="font-bold text-slate-900 block">AMU Aligarh</span>
                    <span className="text-slate-500 block">Aligarh Muslim University</span>
                    <span className="text-[#ffbe00] text-amber-700 font-semibold text-[11px]">Est. 2022 • 220+ Scholars</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs space-y-1">
                    <span className="font-bold text-slate-900 block">JNU & DU Delhi</span>
                    <span className="text-slate-500 block">JNU, Delhi University & HCU</span>
                    <span className="text-indigo-600 font-semibold text-[11px]">Active Admission Desks</span>
                  </div>

                </div>
              </div>

              {/* Portal & Social Presence */}
              <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#0052B4]" />
                  <span className="font-semibold text-slate-800">Official Portal:</span>
                  <span>www.theshedforum.org</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Registered community-led educational initiative dedicated to 100% free entrance coaching and student empowerment.
                </p>
              </div>

            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: SEND US A MESSAGE (CONTACT FORM)                          */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pratham-Style Yellow Banner Bar */}
            <div className="bg-[#ffbe00] text-black font-bold uppercase tracking-wider text-base sm:text-lg px-5 py-3 flex items-center gap-2 shadow-sm rounded-t-lg sm:rounded-none">
              <ChevronRight className="w-5 h-5 stroke-[3] text-black" />
              <span>SEND US A MESSAGE</span>
            </div>

            {/* Introductory Instruction (Matching Pratham exact wording) */}
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Please feel free to drop all your queries at{' '}
              <a href="mailto:theshedforum@gmail.com" className="font-bold text-[#0052B4] hover:underline">
                theshedforum@gmail.com
              </a>{' '}
              or fill out the direct inquiry form below.
            </p>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#009A44] flex items-center justify-center mx-auto border-2 border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif-heading font-semibold text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to The ShED Forum. Our dedicated student coordination desk will review your inquiry and connect with you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        university: 'General Inquiry',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 bg-[#0052B4] hover:bg-[#003D87] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Md Tariq Anwer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#ffbe00] focus:border-[#ffbe00] outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#ffbe00] focus:border-[#ffbe00] outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#ffbe00] focus:border-[#ffbe00] outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Inquiry Category */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Subject / Inquiry Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#ffbe00] focus:border-[#ffbe00] outline-none transition-all bg-white text-slate-800"
                    >
                      <option value="General Inquiry">General Community Inquiry</option>
                      <option value="CUET & SCG Coaching">Free CUET Entrance Coaching & Guidance</option>
                      <option value="Campus Admission Guidance">Central University Admission & Hostel Aid</option>
                      <option value="1-on-1 Mentorship">Senior Scholar Mentorship & Career Guidance</option>
                      <option value="Spoken English Bootcamp">Spoken English & Soft Skills Bootcamp</option>
                      <option value="Alumni Placement Network">ShED Alumni Network & Corporate Placements</option>
                      <option value="Volunteer / Donate">Volunteer with ShED / Financial Support</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Message / Question Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please describe your query regarding university admissions, coaching batches, or campus helpdesk..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#ffbe00] focus:border-[#ffbe00] outline-none transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Submit Button (Pratham Yellow Accent) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto bg-[#ffbe00] hover:bg-[#e6ab00] text-black font-extrabold px-9 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm uppercase tracking-wider active:scale-98 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4 text-black" />
                      <span>{loading ? 'Submitting Inquiry...' : 'Submit Message'}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 pt-1">
                    * The ShED Forum provides 100% free assistance to all students and does not charge any consultation fees.
                  </p>

                </form>
              )}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
