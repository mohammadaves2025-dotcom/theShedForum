import React from 'react';
import { Download, FileText } from 'lucide-react';
import { PageHeroBanner } from './PageHeroBanner';

export const PublicationsPage: React.FC = () => {
  const publications = [
    {
      title: "The ShED Forum Official Profile Booklet (PDF)",
      pages: "9 Pages",
      size: "4.1 MB",
      desc: "Complete comprehensive overview of ShED Forum, university units, governance structure, SCG coaching, and contact directories.",
      downloadPath: "/ShEd Forum Booklet.pdf",
      fileName: "ShEd Forum Booklet.pdf"
    },
    {
      title: "Organisational Structure & Annual Budget Document",
      pages: "17 Pages",
      size: "2.0 MB",
      desc: "Detailed blueprint of Governing Body, Executive Committee, Central Placement Cell, and estimated annual budget breakdown.",
      downloadPath: "/The ShED Forum.pdf",
      fileName: "The ShED Forum.pdf"
    },
    {
      title: "CUET Entrance & Central University Guidance Booklet 2026",
      pages: "12 Pages",
      size: "1.5 MB",
      desc: "Handbook for high school graduates with subject combinations, eligibility criteria, and form instructions.",
      downloadPath: "/ShEd Forum Booklet.pdf",
      fileName: "ShEd Forum Booklet.pdf"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image="/gallery/jmi-unit/jmi-book-launch-indoor-01.jpg"
        badgeText="PUBLICATIONS"
        alt="ShED Forum Official Booklets & Publications"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        {/* Editorial Heading */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Resources & Downloads
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-tight">
            Publications & Policy Handbooks
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Access official PDF booklets, organizational policy documents, and student guidance handbooks.
          </p>
        </div>

      {/* Publications Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {publications.map((pub, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0052B4] flex items-center justify-center border border-blue-100 group-hover:bg-[#0052B4] group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                <span className="bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">{pub.pages}</span>
                <span className="text-[#009A44] font-mono">{pub.size}</span>
              </div>
              
              <h3 className="text-lg font-serif-heading font-semibold text-slate-900 group-hover:text-[#0052B4] transition-colors">
                {pub.title}
              </h3>
              
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {pub.desc}
              </p>
            </div>

            <a
              href={pub.downloadPath}
              download={pub.fileName}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0052B4] hover:bg-[#003D87] text-white font-semibold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-xs active:scale-98 min-h-[44px]"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>Download PDF Document</span>
            </a>
          </div>
        ))}
      </div>

    </div>
  </div>
);
};
