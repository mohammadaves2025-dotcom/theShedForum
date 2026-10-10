import React from 'react';
import { Download, FileText, Share2, Globe } from 'lucide-react';

export const MediaCornerPage: React.FC = () => {
  const pressReleases = [
    {
      date: "March 8, 2026",
      title: "ShED Forum Celebrates Annual Foundation Day on International Women's Day",
      summary: "Over 400 scholars and academicians gathered to celebrate female educational breakthroughs in the Shershahbadi community.",
      link: "/publications"
    },
    {
      date: "January 15, 2026",
      title: "ShED Forum Launches Free CUET Entrance Coaching Batch 2026-27",
      summary: "Registration opened for high school graduates targeting Jamia, AMU, MANUU, JNU, DU, and Patna University.",
      link: "/centre"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-700">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
            Media & Public Relations
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-white tracking-tight leading-tight">
            Media Corner & Press Hub
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            Official press announcements, media kits, branding guidelines, and official logo downloads for journalists, researchers, and partners.
          </p>
        </div>
      </div>

      {/* Brand Assets Download Card */}
      <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-xs">
        <h2 className="text-xl font-serif-heading font-semibold text-slate-900">Official Media Assets & Booklet</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
            <FileText className="w-8 h-8 text-[#0052B4]" />
            <h3 className="font-serif-heading font-semibold text-slate-900 text-sm">ShED Forum Official Booklet PDF</h3>
            <p className="text-xs text-slate-600 font-normal">Complete 9-page organizational profile booklet.</p>
            <a href="/publications" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0052B4] hover:underline">
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
            <Share2 className="w-8 h-8 text-[#009A44]" />
            <h3 className="font-serif-heading font-semibold text-slate-900 text-sm">Official High-Res Logos</h3>
            <p className="text-xs text-slate-600 font-normal">Official emblem & typography logo files.</p>
            <a href="/logo.png" download className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0052B4] hover:underline">
              <Download className="w-4 h-4" /> Download Logo PNG
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
            <Globe className="w-8 h-8 text-[#D91B24]" />
            <h3 className="font-serif-heading font-semibold text-slate-900 text-sm">Press Contact & Media Kit</h3>
            <p className="text-xs text-slate-600 font-normal">Direct media queries to our Central Media Desk.</p>
            <span className="text-xs font-mono font-semibold text-[#0052B4]">theshedforum@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Press Statements */}
      <div className="space-y-6">
        <h2 className="text-2xl font-serif-heading font-semibold text-slate-900">Recent Press Releases</h2>
        <div className="space-y-4">
          {pressReleases.map((pr, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#0052B4]">{pr.date}</span>
                <h3 className="text-lg font-serif-heading font-semibold text-slate-900">{pr.title}</h3>
                <p className="text-xs text-slate-600 font-normal">{pr.summary}</p>
              </div>
              <a href={pr.link} className="bg-[#0052B4] text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003D87] transition-colors shrink-0">
                Read Release
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export const PressReleasePage: React.FC = () => <MediaCornerPage />;
