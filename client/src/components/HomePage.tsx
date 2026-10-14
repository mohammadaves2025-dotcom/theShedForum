import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight,
  Megaphone, ChevronRight, MapPin
} from 'lucide-react';
import { ApiService } from '../services/api';
import { impactStoriesData } from './ImpactWall';
import { ReachImpactSection } from './ReachImpactSection';
import { ScholarLifecycleSection } from './ScholarLifecycleSection';
import { HeroSlider } from './HeroSlider';
import { AboutUsVideoSection } from './AboutUsVideoSection';
import { OurJourneyTimeline } from './OurJourneyTimeline';
import { MobileImpactStoriesSlider } from './MobileImpactStoriesSlider';
import { MobileUniversityUnitsSlider } from './MobileUniversityUnitsSlider';
import { MobilePatronsSlider } from './MobilePatronsSlider';

interface HomePageProps {
  onOpenHelpdesk: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenHelpdesk }) => {
  const [units, setUnits] = useState<any[]>([]);
  const [patrons, setPatrons] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [ticker, setTicker] = useState<any>(null);

  useEffect(() => {
    ApiService.getUnits().then(setUnits);
    ApiService.getPatrons().then(setPatrons);
    ApiService.getEvents().then(setEvents);
    ApiService.getTicker().then((t) => {
      if (t) setTicker(t);
    });
  }, []);

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* --- HERO SECTION: FULL-SCREEN SLIDER (PRATHAM-STYLE) --- */}
      <HeroSlider onOpenHelpdesk={onOpenHelpdesk} />

      {/* --- ANNOUNCEMENTS TICKER RIBBON (Controlled by Admin CMS) --- */}
      {(!ticker || ticker.enabled !== false) && (
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:-mt-8 md:-mt-12 mb-4 sm:mb-0 relative z-20">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-slate-200/90 p-3 sm:p-4 transition-all">
            
            {/* Mobile view (< md): Compact 2-row layout */}
            <div className="flex flex-col gap-2 md:hidden">
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-1.5 bg-blue-50 text-[#0052B4] px-2.5 py-1 rounded-lg text-[10.5px] font-bold border border-blue-200/80 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <Megaphone className="w-3.5 h-3.5 text-[#0052B4]" />
                  <span>{ticker?.category || 'LATEST ANNOUNCEMENTS'}</span>
                </div>
                <Link
                  to={ticker?.link || "/news-and-events"}
                  className="text-[11px] font-bold text-[#0052B4] hover:text-[#003D87] shrink-0 flex items-center gap-0.5"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="min-w-0 overflow-hidden text-xs text-slate-800 font-medium">
                {ticker?.text ? (
                  <span className="line-clamp-2 leading-relaxed">{ticker.text}</span>
                ) : events.length > 0 ? (
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
                <span>{ticker?.category || 'LATEST ANNOUNCEMENTS'}</span>
              </div>
              
              <div className="text-xs sm:text-sm text-slate-800 font-medium flex-1 min-w-0 truncate">
                {ticker?.text ? (
                  <span className="truncate inline-block max-w-full font-semibold text-slate-900">
                    {ticker.text}
                  </span>
                ) : events.length > 0 ? (
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
                to={ticker?.link || "/news-and-events"}
                className="text-xs font-bold text-[#0052B4] hover:text-[#003D87] shrink-0 flex items-center gap-1"
              >
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* --- OUR REACH 2025-26 METRICS SECTION --- */}
      <ReachImpactSection title="Reach 2025-26" />

      {/* --- ABOUT US (PRATHAM-STYLE VIDEO & NARRATIVE) --- */}
      <AboutUsVideoSection />

      {/* --- OUR JOURNEY: PRATHAM-STYLE ANIMATED TIMELINE ON STATIC BACKGROUND --- */}
      <OurJourneyTimeline />

      {/* --- VOICES OF EMPOWERMENT: STUDENT STORIES & IMPACT --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* --- ONLY FOR MOBILE VIEW: Pratham.org-style interactive peeking slider --- */}
        <div className="block md:hidden">
          <MobileImpactStoriesSlider />
        </div>

        {/* --- DESKTOP & TABLET VIEW: Modern 3-Column Editorial Grid --- */}
        <div className="hidden md:block space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#ffbe00] text-black px-4 py-1.5 rounded-sm shadow-xs">
                Voices of Empowerment
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
                Stories of Impact Across Campuses
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                Real human journeys of first-generation scholars from Seemanchal who cleared national entrances and are transforming their communities.
              </p>
            </div>
            <Link
              to="/student-stories"
              className="text-xs sm:text-sm font-bold text-slate-900 hover:text-black flex items-center gap-2 bg-[#ffbe00] hover:bg-[#e6ab00] px-5 py-3 rounded-xl shadow-md transition-all shrink-0 uppercase tracking-wider group cursor-pointer"
            >
              <span>All Stories of Change</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Modern Editorial Stories Grid (Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStoriesData.slice(0, 3).map((story) => (
              <Link
                key={story.id}
                to={`/student-stories/${story.id}`}
                className="group bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Image Banner with Pratham Signature Yellow Badge */}
                  <div className="relative overflow-hidden h-64 bg-slate-950">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    
                    {/* Pratham Signature Yellow Tag Badge anchored at bottom-left */}
                    <div className="absolute bottom-0 left-0 bg-[#ffbe00] text-black text-[11px] font-black uppercase tracking-wider px-4 py-1.5 shadow-md">
                      {story.tag || "Story of Change"}
                    </div>

                    {/* Native District badge top-right */}
                    <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                      <MapPin className="w-3.5 h-3.5 text-[#ffbe00]" />
                      <span>{story.nativeDistrict}</span>
                    </div>
                  </div>

                  {/* Story Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Name & Academic Path */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-slate-900 group-hover:text-[#0052B4] transition-colors leading-tight">
                        {story.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#0052B4] mt-1">
                        {story.degree} • {story.university}
                      </p>
                    </div>

                    {/* Editorial Standfirst / Quote */}
                    <p className="text-xs sm:text-sm font-serif italic text-slate-700 leading-relaxed border-l-3 border-[#ffbe00] pl-3.5 py-1 line-clamp-3 bg-amber-50/40 rounded-r-xl">
                      "{story.quote}"
                    </p>

                    {/* Mentorship Impact Pill */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 text-xs text-slate-600 line-clamp-2">
                      <strong className="text-slate-900 font-bold">Mentorship Impact: </strong>
                      {story.mentorContribution}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{story.batch}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-black text-slate-900 group-hover:text-[#0052B4] transition-colors uppercase tracking-wider">
                    Read Full Story <ChevronRight className="w-4 h-4 text-[#ffbe00] group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- UNIVERSITY UNITS SHOWCASE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* --- ONLY FOR MOBILE VIEW: Pratham.org-style interactive peeking slider --- */}
        <div className="block md:hidden">
          <MobileUniversityUnitsSlider units={units && units.length > 0 ? units : undefined} />
        </div>

        {/* --- DESKTOP & TABLET VIEW: Modern 3-Column Grid --- */}
        <div className="hidden md:block space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#0052B4] text-white px-4 py-1.5 rounded-sm shadow-xs">
                Pan-India Campus Network
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
                Our 7 University Campus Units
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                From Delhi to Hyderabad, our active student units ensure new scholars find immediate peer mentorship, hostel navigation, and zero imposter syndrome.
              </p>
            </div>
            <Link
              to="/units"
              className="text-xs sm:text-sm font-bold text-slate-900 hover:text-black flex items-center gap-2 bg-[#ffbe00] hover:bg-[#e6ab00] px-5 py-3 rounded-xl shadow-md transition-all shrink-0 uppercase tracking-wider group cursor-pointer"
            >
              <span>Explore All 7 Units</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Modern University Units Grid with Signature Pratham Badges (Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {units.map((unit) => (
              <div 
                key={unit.id}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Campus Archival Photo with Pratham Signature Yellow Badge */}
                  <div className="relative h-60 overflow-hidden bg-slate-950">
                    <img 
                      src={unit.image} 
                      alt={unit.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Yellow Badge anchored bottom-left (Pratham Brand Language) */}
                    <div className="absolute bottom-0 left-0 bg-[#ffbe00] text-black text-[11px] font-black uppercase tracking-wider px-4 py-1.5 shadow-md">
                      {unit.code} CAMPUS UNIT
                    </div>

                    {/* Foundation Year badge top-right */}
                    <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-300/30">
                      Est. {unit.established}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 space-y-3.5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>{unit.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif-heading font-semibold text-slate-900 group-hover:text-[#0052B4] transition-colors leading-snug">
                      {unit.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {unit.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex justify-between items-center">
                  <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                    {unit.studentsCount}+ Active Scholars
                  </span>
                  <Link
                    to={`/${unit.id}`}
                    className="text-xs font-black text-slate-900 hover:text-[#0052B4] flex items-center gap-1.5 group-hover:translate-x-1 transition-all uppercase tracking-wider"
                  >
                    <span>Unit Page</span>
                    <ChevronRight className="w-4 h-4 text-amber-500" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR 8 INITIATIVES LIFECYCLE SHOWCASE (PRATHAM-INSPIRED TEMPLATE) --- */}
      <ScholarLifecycleSection onOpenHelpdesk={onOpenHelpdesk} />

      {/* --- PATRONS & LEADERSHIP --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* --- ONLY FOR MOBILE VIEW: Pratham.org-style interactive peeking slider --- */}
        <div className="block md:hidden">
          <MobilePatronsSlider patrons={patrons && patrons.length > 0 ? patrons : undefined} />
        </div>

        {/* --- DESKTOP & TABLET VIEW: Modern 4-Column Grid (NO CHANGES) --- */}
        <div className="hidden md:block space-y-10">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {patrons.slice(0, 8).map((patron) => (
              <Link
                key={patron.id}
                to={`/patrons-message?id=${patron.id}`}
                className="group bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Large Portrait Photo */}
                <div className="relative overflow-hidden aspect-[3/4] bg-slate-100">
                  <img
                    src={patron.image}
                    alt={patron.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  {/* Name on image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-sm leading-tight drop-shadow-md">{patron.name}</p>
                    <p className="text-blue-200 text-[10px] font-semibold truncate mt-0.5">{patron.title}</p>
                  </div>
                  {/* Hover arrow */}
                  <div className="absolute top-3 right-3 w-7 h-7 bg-[#0052B4] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Quote preview */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-[11px] text-slate-500 italic leading-relaxed line-clamp-3 font-serif">
                    "{patron.quote}"
                  </p>
                  <span className="mt-3 text-[10.5px] font-semibold text-[#0052B4] flex items-center gap-1 group-hover:underline">
                    Read Message <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/patrons-message"
              className="inline-flex items-center gap-2 bg-[#0052B4] hover:bg-[#003D87] text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-sm hover:shadow-md transition-all"
            >
              View All Patron Messages
            </Link>
          </div>
        </div>
      </section>



      {/* --- CTA BANNER (PRATHAM-INSPIRED FULL-BLEED DOCUMENTARY CALLOUT) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-14 text-white shadow-2xl border border-slate-800">
          {/* Documentary Photo Background */}
          <img
            src="/images/hero/hero-1.jpg"
            alt="The ShED Forum Community Action"
            className="absolute inset-0 w-full h-full object-cover opacity-25 filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-[#0052B4]/40" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="inline-block bg-[#ffbe00] text-black text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-sm shadow-md">
                Join The Educational Movement
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-white leading-tight">
                Aspiring for Higher Education or Looking to Mentor?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Connect with ShED Forum to access 100% free CUET entrance coaching, campus admission guidance, hostel verification, or join our Pan-India Alumni Mentorship Network.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={onOpenHelpdesk}
                className="bg-[#ffbe00] hover:bg-[#e6ab00] text-black font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all text-center text-xs sm:text-sm uppercase tracking-wider active:scale-95 cursor-pointer"
              >
                Get Free Guidance
              </button>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-xl border border-white/30 backdrop-blur-md transition-all text-center text-xs sm:text-sm uppercase tracking-wider active:scale-95"
              >
                Contact ShED Forum
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
