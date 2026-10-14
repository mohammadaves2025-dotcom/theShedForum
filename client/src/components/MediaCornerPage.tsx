import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Share2, Globe, Calendar } from 'lucide-react';

const pressReleasesList = [
  {
    date: "March 8, 2026",
    title: "ShED Forum Celebrates Annual Foundation Day on International Women's Day",
    summary: "Over 400 scholars and academicians gathered to celebrate female educational breakthroughs in the Shershahbadi community across premier central universities.",
    details: "The 8th Foundation Day convention emphasized the transformative impact of the 38% female enrollment milestone in central universities. Patrons praised grassroots volunteer cells in Katihar, Kishanganj, and Malda for active family counseling.",
    link: "/publications",
    tag: "Foundation Day"
  },
  {
    date: "January 15, 2026",
    title: "ShED Forum Launches Free CUET Entrance Coaching Batch 2026-27",
    summary: "Registration opened for rural high school graduates targeting Jamia, AMU, MANUU, JNU, DU, HCU, and Patna University under the SCG initiative.",
    details: "SCG Centre announced comprehensive online live classes covering General Test (Section III), English verbal ability, and domain social sciences. Study materials and mock tests are provided at zero cost.",
    link: "/sgc-centre",
    tag: "CUET 2026"
  },
  {
    date: "November 28, 2025",
    title: "ShED Forum Establishes 7th Campus Unit at Patna University",
    summary: "Expanding state capital representation with an on-ground helpdesk and student mentoring cell in Bihar's oldest university.",
    details: "The Patna Unit will serve as an essential academic bridge for students from Seemanchal pursuing undergraduate and postgraduate degrees in Bihar's capital.",
    link: "/units",
    tag: "Expansion"
  }
];

import { PageHeroBanner } from './PageHeroBanner';

export const MediaCornerPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image="/gallery/jmi-unit/jmi-book-launch-indoor-01.jpg"
        badgeText="MEDIA CORNER"
        alt="ShED Forum Media Hub"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        
        {/* Editorial Heading */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Media & Public Relations
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-tight">
            Media Corner & Press Hub
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Official press announcements, media kits, branding guidelines, and booklet downloads for journalists, researchers, and community partners.
          </p>
        </div>

      {/* Brand Assets Download Card */}
      <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-xs">
        <h2 className="text-xl font-serif-heading font-semibold text-slate-900">Official Media Assets & Booklet</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <FileText className="w-8 h-8 text-[#0052B4]" />
              <h3 className="font-serif-heading font-semibold text-slate-900 text-sm">ShED Forum Official Booklet PDF</h3>
              <p className="text-xs text-slate-600 font-normal">Complete 9-page comprehensive organizational profile booklet.</p>
            </div>
            <Link to="/publications" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0052B4] hover:underline pt-2">
              <Download className="w-4 h-4" /> Download PDF
            </Link>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <Share2 className="w-8 h-8 text-[#009A44]" />
              <h3 className="font-serif-heading font-semibold text-slate-900 text-sm">Official High-Res Logos</h3>
              <p className="text-xs text-slate-600 font-normal">Official emblem & typography logo files.</p>
            </div>
            <a href="/logo.png" download className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0052B4] hover:underline pt-2">
              <Download className="w-4 h-4" /> Download Logo PNG
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <Globe className="w-8 h-8 text-[#D91B24]" />
              <h3 className="font-serif-heading font-semibold text-slate-900 text-sm">Press Contact & Media Desk</h3>
              <p className="text-xs text-slate-600 font-normal">Direct media queries to our Central Media Desk.</p>
            </div>
            <span className="text-xs font-mono font-semibold text-[#0052B4] pt-2">theshedforum@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Press Statements */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-serif-heading font-semibold text-slate-900">Recent Press Releases</h2>
          <Link to="/press-release" className="text-xs font-semibold text-[#0052B4] hover:underline">
            View All Press Statements →
          </Link>
        </div>
        <div className="space-y-4">
          {pressReleasesList.map((pr, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#0052B4] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">{pr.tag}</span>
                  <span className="text-xs font-semibold text-slate-500">{pr.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-serif-heading font-semibold text-slate-900">{pr.title}</h3>
                <p className="text-xs text-slate-600 font-normal">{pr.summary}</p>
              </div>
              <Link to={pr.link} className="bg-[#0052B4] hover:bg-[#003D87] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shrink-0">
                Read Release
              </Link>
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
};

export const PressReleasePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image="/gallery/jmi-unit/jmi-book-launch-indoor-01.jpg"
        badgeText="PRESS RELEASES"
        alt="ShED Forum Official Statements"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        
        {/* Editorial Heading */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Official Dispatches
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-tight">
            Press Releases & Statements
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Authoritative statements, media dispatches, and public communications released by the Governing Body of The ShED Forum.
          </p>
        </div>

      {/* Press Releases Detailed Cards */}
      <div className="space-y-6">
        {pressReleasesList.map((pr, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-[#0052B4] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {pr.tag}
              </span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> {pr.date}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-slate-900">
              {pr.title}
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {pr.details}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 font-medium">Issued by: Central Media &amp; Communication Cell, ShED Forum</span>
              <Link 
                to={pr.link} 
                className="bg-[#0052B4] hover:bg-[#003D87] text-white px-5 py-2.5 rounded-xl font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Media Inquiries Card */}
      <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 text-center space-y-3">
        <h3 className="text-lg font-serif-heading font-bold text-slate-900">Journalist &amp; Media Inquiries</h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          For interviews, press access, and high-resolution photography, contact our Central Media Relations Desk at <strong className="text-slate-900">theshedforum@gmail.com</strong>.
        </p>
      </div>

    </div>
  </div>
);
};

