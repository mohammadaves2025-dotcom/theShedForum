import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, BookOpen, Award, Sparkles, ArrowRight, 
  Megaphone, Download, ChevronRight, MapPin, Quote,
  ShieldCheck, Compass
} from 'lucide-react';
import { ApiService } from '../services/api';
import { impactStoriesData } from './ImpactWall';
import { ReachImpactSection } from './ReachImpactSection';

interface HomePageProps {
  onOpenHelpdesk: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenHelpdesk }) => {
  const [units, setUnits] = useState<any[]>([]);
  const [initiatives, setInitiatives] = useState<any[]>([]);
  const [patrons, setPatrons] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    ApiService.getUnits().then(setUnits);
    ApiService.getInitiatives().then(setInitiatives);
    ApiService.getPatrons().then(setPatrons);
    ApiService.getEvents().then(setEvents);
  }, []);

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* --- HERO SECTION: AUTHENTIC NGO EDITORIAL --- */}
      <section className="relative min-h-[75vh] flex items-center bg-white text-slate-900 py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Mission Narrative & Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Organization Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full ngo-badge-blue text-xs font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#0052B4]" />
                <span>Community-Led Educational NGO • Est. 2018</span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="text-4xl sm:text-6xl font-serif-heading font-semibold tracking-tight leading-[1.15] text-slate-900">
                Empowering Rural Youth to Access <span className="text-[#0052B4]">Higher Education</span>
              </h1>

              {/* Motto Ribbon */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-slate-600">
                <span className="text-[#D91B24] bg-red-50 px-2.5 py-1 rounded border border-red-100">EDUCATE</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#0052B4] bg-blue-50 px-2.5 py-1 rounded border border-blue-100">EMPOWER</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#009A44] bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">EXCEL</span>
              </div>

              {/* Core Narrative */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
                <strong className="text-slate-900 font-semibold">The ShED Forum</strong> bridges the educational divide for marginalized Shershahbadi youth across Seemanchal, connecting students to India’s premier central universities through 100% free entrance coaching, campus guidance, and dedicated alumni mentorship.
              </p>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenHelpdesk}
                  className="bg-[#0052B4] hover:bg-[#003D87] text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Free Admission Helpdesk</span>
                </button>

                <Link
                  to="/centre"
                  className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-300 shadow-xs transition-all text-sm flex items-center gap-2 hover:border-[#0052B4]"
                >
                  <BookOpen className="w-4 h-4 text-[#0052B4]" />
                  <span>Explore SCG Coaching</span>
                </Link>

                <Link
                  to="/publications"
                  className="text-xs text-slate-600 hover:text-[#0052B4] font-semibold underline underline-offset-4 flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-[#009A44]" />
                  Download Annual Booklet (PDF)
                </Link>
              </div>

              {/* Horizontal Rectangular Active University Units Bar */}
              <div className="pt-2">
                <div className="bg-gradient-to-r from-slate-50 via-blue-50/40 to-emerald-50/30 rounded-2xl p-4 sm:p-4.5 border border-slate-200/90 shadow-xs space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#0052B4] flex items-center justify-center border border-blue-100 shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-[#0052B4]" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-slate-900 leading-tight">
                        Active University Units
                      </span>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <span className="hidden sm:inline text-[11px] text-slate-500 font-medium">
                        7 Central University Campuses Across India
                      </span>
                    </div>

                    <Link 
                      to="/units" 
                      className="group inline-flex items-center gap-1 text-xs font-bold text-[#0052B4] hover:text-[#003D87] bg-white px-2.5 py-1 rounded-lg border border-slate-200 hover:border-blue-300 transition-all shadow-2xs shrink-0"
                    >
                      <span>View All 7 Units</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* 4 Horizontal Rectangular Unit Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    
                    {/* MANUU */}
                    <Link 
                      to="/manuu-unit"
                      className="p-2.5 bg-white rounded-xl border border-slate-200/90 hover:border-[#0052B4]/50 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9.5px] font-black text-[#0052B4] bg-blue-50 px-1.5 py-0.2 rounded border border-blue-100">
                          MANUU
                        </span>
                        <span className="text-[9px] text-slate-400 font-bold">Est. 2018</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#0052B4] transition-colors leading-snug">
                          MANUU Hyderabad
                        </div>
                        <div className="text-[10.5px] text-[#0052B4] font-bold mt-0.5 flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          <span>200+ Students</span>
                        </div>
                      </div>
                    </Link>

                    {/* AMU */}
                    <Link 
                      to="/amu-unit"
                      className="p-2.5 bg-white rounded-xl border border-slate-200/90 hover:border-emerald-500/50 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9.5px] font-black text-[#009A44] bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-100">
                          AMU
                        </span>
                        <span className="text-[9px] text-slate-400 font-bold">Est. 2022</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#009A44] transition-colors leading-snug">
                          AMU Aligarh
                        </div>
                        <div className="text-[10.5px] text-[#009A44] font-bold mt-0.5 flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          <span>220+ Students</span>
                        </div>
                      </div>
                    </Link>

                    {/* JMI */}
                    <Link 
                      to="/jmi-unit"
                      className="p-2.5 bg-white rounded-xl border border-slate-200/90 hover:border-red-500/50 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9.5px] font-black text-[#D91B24] bg-red-50 px-1.5 py-0.2 rounded border border-red-100">
                          JMI
                        </span>
                        <span className="text-[9px] text-slate-400 font-bold">Est. 2021</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#D91B24] transition-colors leading-snug">
                          Jamia Millia
                        </div>
                        <div className="text-[10.5px] text-[#D91B24] font-bold mt-0.5 flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          <span>170+ Students</span>
                        </div>
                      </div>
                    </Link>

                    {/* Central Hubs */}
                    <Link 
                      to="/units"
                      className="p-2.5 bg-white rounded-xl border border-slate-200/90 hover:border-cyan-500/50 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9.5px] font-black text-[#00A3E0] bg-cyan-50 px-1.5 py-0.2 rounded border border-cyan-100">
                          CENTRAL
                        </span>
                        <span className="text-[9px] text-slate-400 font-bold">4 Hubs</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#00A3E0] transition-colors leading-snug">
                          JNU • DU • HCU
                        </div>
                        <div className="text-[10.5px] text-slate-600 font-bold mt-0.5 flex items-center gap-1">
                          <Compass className="w-3 h-3 text-[#00A3E0]" />
                          <span>Active Hubs</span>
                        </div>
                      </div>
                    </Link>

                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Authentic Photography */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-3 shadow-2xl overflow-hidden group hover:shadow-3xl transition-shadow">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[560px]">
                  <img 
                    src="/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg" 
                    alt="ShED Forum Student Community at Jamia Millia Islamia Centenary Gate" 
                    className="w-full h-full object-cover object-[center_35%] group-hover:scale-104 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/gallery/manuu-unit/manuu-group-night-01.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>
                  
                  {/* Verified Community Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Ground Photo • Jamia Millia Islamia</span>
                    </span>
                  </div>

                  {/* Caption Card */}
                  <div className="absolute bottom-4 inset-x-4 text-white flex justify-between items-end backdrop-blur-md p-3.5 rounded-2xl bg-slate-900/60 border border-white/15 shadow-xl">
                    <div className="pr-2">
                      <span className="text-[10px] font-black text-cyan-300 uppercase tracking-widest block">
                        Centenary Gate • New Delhi
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white leading-tight block">
                        ShED Forum Student Community
                      </span>
                      <p className="text-[11px] text-slate-300 mt-0.5 font-medium line-clamp-1">
                        Rural youth scholars excelling at premier central universities
                      </p>
                    </div>
                    <span className="bg-[#009A44] text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md shrink-0">
                      7 Active Units
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ANNOUNCEMENTS TICKER RIBBON --- */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:-mt-8 md:-mt-12 mb-4 sm:mb-0 relative z-20">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-slate-200/90 p-3 sm:p-4 transition-all">
          
          {/* Mobile view (< md): Compact 2-row layout */}
          <div className="flex flex-col gap-2 md:hidden">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
              <div className="flex items-center gap-1.5 bg-blue-50 text-[#0052B4] px-2.5 py-1 rounded-lg text-[10.5px] font-bold border border-blue-200/80 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <Megaphone className="w-3.5 h-3.5 text-[#0052B4]" />
                <span>LATEST ANNOUNCEMENTS</span>
              </div>
              <Link
                to="/news-and-events"
                className="text-[11px] font-bold text-[#0052B4] hover:text-[#003D87] shrink-0 flex items-center gap-0.5"
              >
                <span>View All</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="min-w-0 overflow-hidden text-xs text-slate-800 font-medium">
              {events.length > 0 ? (
                <div className="line-clamp-2 leading-relaxed">
                  <span className="inline-block bg-[#0052B4]/10 text-[#0052B4] px-1.5 py-0.5 rounded text-[10px] font-bold mr-1.5 align-middle">
                    {events[0].category}
                  </span>
                  <span className="font-semibold text-slate-900">{events[0].title}</span>
                  {events[0].summary && (
                    <span className="text-slate-600"> — {events[0].summary}</span>
                  )}
                </div>
              ) : (
                <span className="line-clamp-2">Free CUET Entrance Coaching 2026-27 Registration Open for Shershahbadi Students.</span>
              )}
            </div>
          </div>

          {/* Desktop & Tablet view (>= md): Sleek 1-row ticker layout */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-blue-50 text-[#0052B4] px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <Megaphone className="w-4 h-4 text-[#0052B4]" />
              <span>LATEST ANNOUNCEMENTS</span>
            </div>
            
            <div className="text-xs sm:text-sm text-slate-800 font-medium flex-1 min-w-0 truncate">
              {events.length > 0 ? (
                <span className="truncate inline-block max-w-full">
                  <span className="bg-[#0052B4]/10 text-[#0052B4] px-2 py-0.5 rounded-md text-xs font-bold mr-2">
                    {events[0].category}
                  </span>
                  <span className="font-semibold text-slate-900">{events[0].title}</span>
                  {events[0].summary && (
                    <span className="text-slate-600"> — {events[0].summary}</span>
                  )}
                </span>
              ) : (
                <span>Free CUET Entrance Coaching 2026-27 Registration Open for Shershahbadi Students.</span>
              )}
            </div>

            <Link
              to="/news-and-events"
              className="text-xs font-bold text-[#0052B4] hover:text-[#003D87] shrink-0 flex items-center gap-1"
            >
              <span>View All Events</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* --- OUR REACH 2025-26 METRICS SECTION --- */}
      <ReachImpactSection title="Reach 2025-26" />

      {/* --- ABOUT & FOUNDING PHILOSOPHY --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#0052B4] font-semibold text-xs uppercase tracking-wider bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 shadow-xs">
              <Compass className="w-4 h-4 text-[#0052B4]" />
              <span>About ShED Forum</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-tight">
              A Community Movement Born Out of Purpose
            </h2>

            <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-serif italic border-l-4 border-[#D91B24] pl-4 py-1">
              “Every household in the Shershahbadi community should have access to higher education and the opportunities it creates.”
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              The Shershahbadi community, primarily residing in the Seemanchal region of Bihar (Katihar, Purnea, Araria, Kishanganj) as well as parts of West Bengal and Jharkhand, continues to face significant socio-economic and educational challenges. As an educationally deprived community, many families struggle to meet daily needs and have limited access to quality educational guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                <div className="text-sm font-semibold text-[#0052B4] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0052B4]" />
                  Vision
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  To build an educated, empowered, and progressive Shershahbadi community that actively participates in academic and economic mainstreams.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                <div className="text-sm font-semibold text-[#009A44] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#009A44]" />
                  Mission
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Provide 100% free guidance, mentorship, campus help-desks, and alumni support to nurture future leaders.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 bg-[#0052B4] hover:bg-[#003D87] text-white font-semibold px-7 py-3.5 rounded-2xl transition-all text-sm shadow-md hover:shadow-lg"
              >
                <span>Read Full Founding Story & Governance</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </Link>
            </div>
          </div>

          {/* Right Column: Authentic Photography & Patron's Vision */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Real Campus Educational Movement Photo */}
            <div className="bg-white rounded-3xl p-2.5 border border-slate-200 shadow-md overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 h-56 sm:h-64">
                <img 
                  src="/gallery/jmi-unit/jmi-seminar-indoor-01.jpg" 
                  alt="ShED Forum Community Movement & Academic Guidance Seminar" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3.5 inset-x-3.5 text-white flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-black text-cyan-300 uppercase tracking-widest block">
                      Community Educational Assembly
                    </span>
                    <span className="text-xs font-bold text-slate-100">
                      Leadership Dialogue & Academic Guidance
                    </span>
                  </div>
                  <span className="bg-[#0052B4] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-blue-300/40 shrink-0">
                    JMI • New Delhi
                  </span>
                </div>
              </div>
            </div>

            {/* Patron's Vision Quote Card */}
            <div className="bg-gradient-to-br from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden border border-slate-700">
              <Quote className="w-32 h-32 text-white/5 absolute top-2 right-2 pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-cyan-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Patron's Vision</span>
                </div>

                <blockquote className="text-base sm:text-lg font-serif leading-relaxed text-slate-100 italic">
                  “Education is not merely a means of personal advancement; it is the foundation of community empowerment and lasting social transformation.”
                </blockquote>

                <div className="pt-3 border-t border-white/20 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-cyan-400 flex items-center justify-center font-bold text-cyan-300 text-lg shadow-inner shrink-0">
                    MR
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm sm:text-base">Prof. Mujibur Rahman</div>
                    <div className="text-[11px] text-cyan-300 font-medium">Chief Academic Patron • ShED Forum</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- IDEA BEHIND SHED FORUM TIMELINE --- */}
      <section className="bg-[#0F172A] text-white py-16 relative overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00A3E0] bg-[#00A3E0]/10 px-4 py-1.5 rounded-full border border-[#00A3E0]/30">
              Grassroots Evolution
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-white">
              The Idea Behind ShED Forum
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              How a few students at Maulana Azad National Urdu University (MANUU) turned a shared concern into a nationwide movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 space-y-4 hover:border-[#D91B24] transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 text-[#D91B24] flex items-center justify-center font-bold text-lg border border-red-500/30">
                1
              </div>
              <h3 className="text-xl font-serif-heading font-semibold text-white">1. The Initial Realization (2018)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                When a few Shershahbadi students reached MANUU, they realized that student representation from their community was severely limited due to missing guidance, exposure, and awareness.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 space-y-4 hover:border-[#0052B4] transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-[#00A3E0] flex items-center justify-center font-bold text-lg border border-blue-500/30">
                2
              </div>
              <h3 className="text-xl font-serif-heading font-semibold text-white">2. The "Pay It Forward" Model</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Every student who secures university admission commits to guiding at least one more student from the community the following year, transforming success into a collective responsibility.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-[#009A44] flex items-center justify-center font-bold text-lg border border-emerald-500/30">
                3
              </div>
              <h3 className="text-xl font-serif-heading font-semibold text-white">3. International Women's Day</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                March 8th was intentionally chosen as Foundation Day to champion female higher education. Today, female participation in ShED coaching programs stands at 38%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VOICES OF EMPOWERMENT: STUDENT STORIES & IMPACT --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-semibold text-[#009A44] uppercase tracking-widest bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 shadow-xs">
              Voices of Empowerment
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight mt-2">
              Stories of Impact Across Campuses
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl font-medium">
              Over 1,000 scholars from Seemanchal have reached premier central universities through ShED Forum's free guidance and mentorship network.
            </p>
          </div>
          <Link
            to="/student-stories"
            className="text-sm font-semibold text-[#0052B4] hover:text-[#003D87] flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl border border-slate-300 shadow-xs hover:border-[#0052B4] transition-all"
          >
            <span>View All Student Stories & Wall</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactStoriesData.slice(0, 3).map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-[#0052B4] shadow-xs shrink-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/extracted_ShEd _p1_1.jpg';
                    }}
                  />
                  <div>
                    <h3 className="text-base font-serif-heading font-semibold text-slate-900 group-hover:text-[#0052B4] transition-colors">
                      {story.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#0052B4]">{story.degree}</div>
                    <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#D91B24]" />
                      <span>{story.nativeDistrict}</span>
                    </div>
                  </div>
                </div>

                <blockquote className="text-xs text-slate-700 italic leading-relaxed font-serif bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70 relative">
                  <Quote className="w-4 h-4 text-slate-300 absolute top-2 right-2 pointer-events-none" />
                  "{story.quote}"
                </blockquote>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex justify-between items-center text-xs">
                <span className="text-[11px] font-semibold text-[#009A44] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {story.tag}
                </span>
                <Link to="/student-stories" className="font-semibold text-[#0052B4] hover:underline flex items-center gap-1">
                  <span>Read Profile</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- UNIVERSITY UNITS SHOWCASE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-semibold text-[#0052B4] uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 shadow-xs">
              Campus Footprint
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight mt-2">
              Our 7 University Campus Units
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl font-medium">
              From Delhi to Hyderabad, our campus units ensure new students find immediate peer mentorship, hostel help, and academic support.
            </p>
          </div>
          <Link
            to="/units"
            className="text-sm font-semibold text-[#0052B4] hover:text-[#003D87] flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl border border-slate-300 shadow-xs hover:border-[#0052B4] transition-all"
          >
            <span>View All 7 Units Detailed Info</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, idx) => {
            const badgeColors = [
              "bg-[#0052B4] text-white",
              "bg-[#009A44] text-white",
              "bg-[#D91B24] text-white",
              "bg-[#00A3E0] text-white",
              "bg-amber-600 text-white",
              "bg-purple-600 text-white",
              "bg-indigo-600 text-white"
            ];
            return (
              <div 
                key={unit.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img 
                      src={unit.image} 
                      alt={unit.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/90 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-300/30">
                      Est. {unit.established}
                    </div>
                    <div className={`absolute bottom-3 left-3 ${badgeColors[idx % badgeColors.length]} text-xs font-semibold px-3 py-1 rounded-lg shadow-md`}>
                      {unit.code}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>{unit.location}</span>
                    </div>

                    <h3 className="text-xl font-serif-heading font-semibold text-slate-900 group-hover:text-[#0052B4] transition-colors">
                      {unit.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {unit.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex justify-between items-center">
                  <span className="text-xs font-semibold text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
                    {unit.studentsCount}+ Active Students
                  </span>
                  <Link
                    to={`/${unit.id}`}
                    className="text-xs font-semibold text-slate-800 hover:text-[#0052B4] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Unit Details</span>
                    <ChevronRight className="w-4 h-4 text-[#0052B4]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- OUR 8 INITIATIVES SHOWCASE --- */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#009A44] bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 shadow-xs">
              Impact Programs
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900">
              Our 8 Educational Initiatives
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              End-to-end guidance from high school completion to campus placement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item, idx) => {
              const iconBgs = [
                "bg-red-50 text-[#D91B24] border-red-200",
                "bg-blue-50 text-[#0052B4] border-blue-200",
                "bg-emerald-50 text-[#009A44] border-emerald-200",
                "bg-cyan-50 text-[#00A3E0] border-cyan-200"
              ];
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 space-y-3 flex flex-col justify-between border border-slate-200 shadow-xs hover:shadow-md transition-all"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${iconBgs[idx % iconBgs.length]} flex items-center justify-center mb-4 border shadow-xs`}>
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {item.category}
                    </span>
                    <h3 className="text-base font-serif-heading font-semibold text-slate-900 mt-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">{item.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{item.timeline}</span>
                    <Link to="/projects" className="text-[#0052B4] font-semibold hover:underline">
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- PATRONS & LEADERSHIP --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 shadow-xs">
            Leadership & Advisory
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900">
            Our Respected Patrons & Guidance Board
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Guided by prominent academicians, judicial officers, legislators, and community leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {patrons.slice(0, 8).map((patron) => (
            <div key={patron.id} className="bg-white rounded-3xl p-6 text-center space-y-3 border border-slate-200 shadow-xs">
              <img 
                src={patron.image} 
                alt={patron.name} 
                className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-[#0052B4] shadow-md"
              />
              <div>
                <h3 className="text-base font-serif-heading font-semibold text-slate-900">{patron.name}</h3>
                <p className="text-xs font-semibold text-[#0052B4]">{patron.title}</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">{patron.designation}</p>
              </div>
              <p className="text-[11px] text-slate-700 italic bg-slate-50 p-3 rounded-xl border border-slate-200/60 font-serif">
                "{patron.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-slate-700">
          
          <div className="space-y-3 max-w-2xl relative z-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
              Join The Educational Dialogue
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-white leading-tight">
              Are you aspiring for Higher Education or want to Mentor?
            </h2>
            <p className="text-sm text-slate-200 font-normal">
              Connect with ShED Forum to get free CUET guidance, campus admission assistance, hostel guidance, or join our Alumni Mentorship Network.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10 w-full sm:w-auto">
            <button
              onClick={onOpenHelpdesk}
              className="bg-white hover:bg-slate-100 text-[#0052B4] font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all text-center text-sm"
            >
              Get Free Guidance
            </button>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-2xl border border-white/30 backdrop-blur-md transition-all text-center text-sm"
            >
              Contact ShED Forum
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
