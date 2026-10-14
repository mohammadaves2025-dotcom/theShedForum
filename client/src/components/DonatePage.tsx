import React, { useState } from 'react';
import { Heart, Copy, CheckCheck, Building2, Smartphone, QrCode, Shield, Star, Users } from 'lucide-react';
import { PageHeroBanner } from './PageHeroBanner';

export const DonatePage: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copy = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(key);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const CopyBtn = ({ value, label }: { value: string; label: string }) => (
    <button
      onClick={() => copy(value, label)}
      className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 hover:bg-blue-100 text-[#0052B4] text-[11px] font-semibold transition-all border border-blue-200/70"
      title="Copy"
    >
      {copiedField === label ? (
        <><CheckCheck className="w-3 h-3 text-emerald-500" /> Copied!</>
      ) : (
        <><Copy className="w-3 h-3" /> Copy</>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-white pb-20">

      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image="/images/hero/hero-3.jpg"
        badgeText="DONATE"
        alt="Support The ShED Forum"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-8">

        {/* Editorial Heading */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 inline-flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            Support The ShED Forum NGO
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-tight">
            Donate &amp; Empower Rural Youth
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Your contribution helps us provide free guidance, coaching, and mentorship to first-generation scholars from Seemanchal and beyond.
          </p>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg">
          {[
            { icon: Users, val: '1,000+', label: 'Scholars Guided' },
            { icon: Building2, val: '7', label: 'Campus Units' },
            { icon: Star, val: '100%', label: 'Free Coaching' },
          ].map(({ icon: Icon, val, label }) => (
            <div key={label} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
              <Icon className="w-5 h-5 mx-auto mb-1 text-[#0052B4]" />
              <div className="text-xl font-serif-heading font-bold text-slate-900">{val}</div>
              <div className="text-[11px] text-slate-500 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">

          {/* Bank Transfer Card */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-lg border border-slate-200/80 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#0052B4]" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Bank Transfer (NEFT / IMPS / RTGS)</h2>
                <p className="text-[11px] text-slate-500">Direct transfer to our registered NGO account</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Account Name', value: 'The ShED Forum', key: 'accname' },
                { label: 'Account Number', value: '12345678901234', key: 'accno' },
                { label: 'IFSC Code', value: 'SBIN0012345', key: 'ifsc' },
                { label: 'Bank Name', value: 'State Bank of India', key: 'bank' },
                { label: 'Branch', value: 'Kishanganj Branch, Bihar — 855107', key: 'branch' },
                { label: 'Account Type', value: 'Current Account', key: 'type' },
              ].map(({ label, value, key }) => (
                <div key={key} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                  <span className="text-xs text-slate-500 font-medium w-36 shrink-0">{label}</span>
                  <div className="flex items-center gap-1 flex-1 justify-end">
                    <span className="text-xs font-bold text-slate-800 text-right">{value}</span>
                    <CopyBtn value={value} label={key} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-amber-50 border border-amber-200/70 rounded-xl flex items-start gap-2">
              <Shield className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[11px] text-amber-800 font-medium leading-relaxed">
                After transferring, please email your transaction receipt / screenshot to <strong className="text-amber-950 font-bold">theshedforum@gmail.com</strong> for acknowledgment and official receipt.
              </p>
            </div>
          </div>

          {/* UPI Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200/80 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">UPI Payment</h2>
                <p className="text-[11px] text-slate-500">Pay instantly via any UPI app</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {[
                { label: 'UPI ID', value: 'theshedforum@sbi', key: 'upi1' },
                { label: 'UPI ID (Alt)', value: 'shedforum@ybl', key: 'upi2' },
              ].map(({ label, value, key }) => (
                <div key={key} className="py-2.5 border-b border-slate-100">
                  <div className="text-[10.5px] text-slate-400 font-medium mb-1">{label}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-800">{value}</span>
                    <CopyBtn value={value} label={key} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-1">
              {['Google Pay', 'PhonePe', 'Paytm', 'BHIM', 'Amazon Pay'].map(app => (
                <span key={app} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-5 bg-white rounded-3xl shadow-lg border border-slate-200/80 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center">
              <QrCode className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Scan &amp; Pay via QR Code</h2>
              <p className="text-[11px] text-slate-500">Open any UPI app → Scan QR → Enter amount → Pay</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* QR Placeholder */}
            <div className="shrink-0 w-44 h-44 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50">
                <QrCode className="w-16 h-16 text-[#0052B4] mb-2 opacity-30" />
                <span className="text-[10px] font-bold text-slate-500 text-center px-2">Official QR<br />Coming Soon</span>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">How to donate via QR</h3>
                <ol className="space-y-2">
                  {[
                    'Open Google Pay, PhonePe, Paytm, or BHIM UPI',
                    'Tap "Scan QR" and point your camera at the QR code',
                    'Enter your donation amount (any amount is appreciated)',
                    'Add a note: "Donation – The ShED Forum" and confirm payment',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-[#0052B4] text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200/60 rounded-xl">
                <p className="text-[11px] text-blue-800 font-medium">
                  🎗️ <strong>80G Tax Exemption</strong> — Donations to The ShED Forum may be eligible for income tax deduction under Section 80G. Request a receipt after payment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-5 bg-gradient-to-r from-[#0052B4] to-[#003D87] rounded-3xl p-6 text-white text-center">
          <Heart className="w-8 h-8 mx-auto mb-3 text-red-300 animate-pulse" />
          <h3 className="text-lg font-bold mb-2">Every Rupee Makes a Difference</h3>
          <p className="text-blue-100 text-sm max-w-lg mx-auto">
            ₹500 funds a student's mentorship session. ₹2,000 covers study materials for a month. ₹10,000 sponsors a scholar's guidance for a full semester.
          </p>
          <p className="mt-4 text-xs text-blue-200">
            For any queries or donation receipts, write to us at <strong className="text-white">theshedforum@gmail.com</strong>
          </p>
        </div>

      </div>
    </div>
  );
};
