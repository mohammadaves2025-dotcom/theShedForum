import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface JourneyMilestone {
  id: string;
  year: string;
  phaseTitle: string;
  summary: string;
  details: string[];
  align: 'left' | 'right';
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "milestone-2018",
    year: "2018",
    phaseTitle: "The Initial Spark & Founding at MANUU",
    summary: "When a handful of first-generation Shershahbadi scholars arrived at Maulana Azad National Urdu University (MANUU) in Hyderabad, they realized representation from their region was severely limited due to lack of exposure and missing admission guidance.",
    details: [
      "Founded intentionally on March 8th (International Women's Day) to place female higher education at the center of the movement.",
      "Established the unwritten covenant: Every admitted scholar commits to guiding and mentoring the next junior cohort."
    ],
    align: "left"
  },
  {
    id: "milestone-2019-2020",
    year: "2019 – 2020",
    phaseTitle: "Grassroots Seemanchal Ground Outreach",
    summary: "Scholars returned to their home villages across Seemanchal during summer and winter vacations to mobilize families, counsel hesitant parents, and dispel long-standing misconceptions about university education.",
    details: [
      "Village-to-village assemblies in Katihar, Purnea, Araria, Kishanganj, Malda, Murshidabad, and Sahibganj.",
      "Overcoming parental doubts regarding sending daughters to metropolitan university hostels."
    ],
    align: "right"
  },
  {
    id: "milestone-2021",
    year: "2021",
    phaseTitle: "SCG Centre & Jamia Millia Islamia Expansion",
    summary: "Formal establishment of the Jamia Millia Islamia (JMI) Unit in New Delhi and inauguration of the SCG Centre (Shershahbadi Guidance & Coaching) to deliver structured, 100% free entrance exam preparation.",
    details: [
      "Free daily coaching, printed study modules, and NTA-pattern mock tests for CUET and central university tests.",
      "Over 450+ successful admissions secured in central universities through free coaching."
    ],
    align: "left"
  },
  {
    id: "milestone-2022",
    year: "2022",
    phaseTitle: "AMU Aligarh Unit & Soft Skills Revolution",
    summary: "Expansion to Aligarh Muslim University (AMU), building a powerhouse unit of 220+ scholars and launching an intensive 6-Month Spoken English & Soft Skills Bootcamp to break language barriers.",
    details: [
      "Empowered vernacular-medium rural students to excel in English-medium university seminar halls.",
      "Introduced weekly public speaking, debate circles, and digital literacy masterclasses."
    ],
    align: "right"
  },
  {
    id: "milestone-2023",
    year: "2023",
    phaseTitle: "Nationwide Central University Footprint",
    summary: "Expansion across Jawaharlal Nehru University (JNU), Delhi University (DU), University of Hyderabad (HCU), and Patna University, establishing seasonal admission booths at campus gates and verified hostel aid.",
    details: [
      "Active help-desks assisting rural applicants with preference filling, cut-offs, and affidavits.",
      "Peer adoption system ensuring zero loneliness or imposter syndrome for first-generation newcomers."
    ],
    align: "left"
  },
  {
    id: "milestone-2024-2025",
    year: "2024 – 2025",
    phaseTitle: "1,000+ Alumni Network & Central Placement Cell",
    summary: "The ShED Alumni network surpassed 1,000+ working professionals in civil services (UPSC/BPSC), multinational corporations, judiciary, academia, and banking, launching the Central Placement Cell.",
    details: [
      "Direct internship pipelines, civil service mentoring circles, and NET-JRF guidance.",
      "Emergency student grant pool ensuring zero capable scholars drop out due to financial hardship."
    ],
    align: "right"
  },
  {
    id: "milestone-2026",
    year: "2026 & Beyond",
    phaseTitle: "Sustainable Community Transformation",
    summary: "Today, The ShED Forum stands as a recognized benchmark of self-reliant community empowerment, achieving 38%+ female higher education representation and expanding digital learning access to thousands of rural households.",
    details: [
      "Permanent community learning libraries and digital coaching infrastructure across Seemanchal.",
      "Every generation lifting the next into the highest corridors of education and governance."
    ],
    align: "left"
  }
];

interface OurJourneyTimelineProps {
  showHeaderTitle?: boolean;
}

export const OurJourneyTimeline: React.FC<OurJourneyTimelineProps> = ({ showHeaderTitle = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile viewport for fluid background handling
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate scroll progression through the timeline section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height;
      const currentScroll = windowHeight - rect.top;
      const progress = Math.min(Math.max((currentScroll / (totalHeight + windowHeight * 0.3)), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to sequentially activate/reveal milestone text items
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    JOURNEY_MILESTONES.forEach((m) => {
      const el = document.getElementById(`journey-${m.id}`);
      if (el) {
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveItems(prev => ({ ...prev, [m.id]: true }));
            }
          },
          { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach(o => o.disconnect());
    };
  }, []);

  const scrollToMilestone = (id: string) => {
    const target = document.getElementById(`journey-${id}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full">
      
      {/* Centered stylized "our journey" header right above the timeline (Matching Screenshot 4) */}
      {showHeaderTitle && (
        <div className="text-center py-8 sm:py-12">
          <h2 className="font-pratham-handwriting text-5xl sm:text-7xl lg:text-8xl text-slate-800 font-normal tracking-wide lowercase leading-none drop-shadow-xs">
            our journey
          </h2>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FULL-SCREEN EDGE-TO-EDGE TIMELINE WITH FIXED DOCUMENTARY BACKGROUND       */}
      {/* Breaks out of any container to cover 100vw full screen width              */}
      {/* ========================================================================= */}
      <section 
        ref={containerRef}
        className="relative text-white py-16 sm:py-28 lg:py-32 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen overflow-x-hidden shadow-2xl"
        style={{
          // Full-screen classroom documentary photo (Fixed on desktop, scroll on mobile)
          backgroundImage: `linear-gradient(to bottom, rgba(12, 16, 26, 0.85), rgba(18, 24, 38, 0.78), rgba(12, 16, 26, 0.88)), url('/images/timeline-bg.jpg')`,
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        {/* Subtle Warm Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/25 to-black/65 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Quick Era Jump Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-16">
            {JOURNEY_MILESTONES.map((m) => {
              const isActive = activeItems[m.id];
              return (
                <button
                  key={m.id}
                  onClick={() => scrollToMilestone(m.id)}
                  className={`text-[11px] sm:text-xs font-bold px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-300 cursor-pointer backdrop-blur-md border ${
                    isActive 
                      ? 'bg-[#ffbe00] text-slate-950 border-[#ffbe00] shadow-[0_0_12px_rgba(255,190,0,0.6)] scale-105' 
                      : 'bg-white/10 hover:bg-white/20 text-white/90 border-white/20 hover:border-white/40'
                  }`}
                >
                  {m.year.split('–')[0].trim()}
                </button>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* PRATHAM TIMELINE: CENTRAL SPINE & FLOATING EDITORIAL TEXT (NO BOX CARDS)  */}
          {/* ========================================================================= */}
          <div className="relative pt-6">
            
            {/* Continuous White Vertical Line (Pratham: .time-sec .container:before) */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-white/45" />

            {/* Top Starting Disc Node (Pratham: .container:after) */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 top-0 z-20 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,1)] border-4 border-slate-900" />

            {/* Dynamic Scroll-Revealed Line with Glowing Gradient */}
            <div 
              className="absolute left-4 sm:left-6 md:left-1/2 top-0 w-[4px] -translate-x-1/2 bg-gradient-to-b from-[#ffbe00] via-white to-[#ffbe00] shadow-[0_0_14px_rgba(255,190,0,0.9)] transition-all duration-150 ease-out rounded-full z-10"
              style={{
                height: `${Math.min(scrollProgress * 105, 100)}%`
              }}
            />

            {/* Timeline Milestones List */}
            <div className="space-y-16 sm:space-y-24 lg:space-y-28 pt-8 sm:pt-10">
              {JOURNEY_MILESTONES.map((milestone, idx) => {
                const isVisible = activeItems[milestone.id] || scrollProgress > ((idx + 0.2) / JOURNEY_MILESTONES.length);
                const isLeft = milestone.align === 'left';

                return (
                  <div
                    key={milestone.id}
                    id={`journey-${milestone.id}`}
                    className="relative flex flex-col md:flex-row items-start md:items-center group"
                  >
                    
                    {/* =================================================================== */}
                    {/* DESKTOP COLUMN 1: LEFT SIDE (50% WIDTH)                            */}
                    {/* =================================================================== */}
                    <div className={`w-full md:w-1/2 pl-10 sm:pl-14 md:pl-0 ${isLeft ? 'md:pr-14 md:text-right' : 'md:order-2 md:pl-14 md:text-left'}`}>
                      <div 
                        className={`transition-all duration-700 ease-out transform ${
                          isVisible
                            ? 'opacity-100 translate-x-0 translate-y-0'
                            : isLeft 
                              ? 'opacity-0 translate-y-4 md:translate-y-0 md:-translate-x-12' 
                              : 'opacity-0 translate-y-4 md:translate-y-0 md:translate-x-12'
                        }`}
                      >
                        {/* Floating Content directly on photo (NO HEAVY BOX CARDS - True to Pratham Screenshot 4) */}
                        <div className="space-y-2 sm:space-y-2.5">
                          
                          {/* Year Heading (Large, Bold White with crisp drop shadow) */}
                          <div className={`flex items-baseline gap-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                            <h3 className="text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] leading-tight">
                              {milestone.year}
                            </h3>
                          </div>

                          {/* Milestone Sub-heading in Warm Golden Yellow (#ffbe00) */}
                          <h4 className="text-sm sm:text-lg font-bold text-[#ffbe00] tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-snug">
                            {milestone.phaseTitle}
                          </h4>

                          {/* Narrative Editorial Text floating on the photograph */}
                          <p className="text-xs sm:text-base text-white font-semibold leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                            {milestone.summary}
                          </p>

                          {/* Bullet Highlights */}
                          <ul className={`space-y-1 sm:space-y-1.5 pt-1 text-xs sm:text-sm text-slate-200/90 font-medium ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                            {milestone.details.map((detail, dIdx) => (
                              <li key={dIdx} className={`flex items-start gap-2 sm:gap-2.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                                {isLeft ? (
                                  <>
                                    <span className="leading-relaxed">{detail}</span>
                                    <span className="text-[#ffbe00] font-black shrink-0 text-sm sm:text-base">•</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="text-[#ffbe00] font-black shrink-0 text-sm sm:text-base">•</span>
                                    <span className="leading-relaxed">{detail}</span>
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>

                        </div>
                      </div>
                    </div>

                    {/* =================================================================== */}
                    {/* CENTRAL SPINE NODE ICON (Pratham: .timeline-block-icon)              */}
                    {/* =================================================================== */}
                    <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 top-2 md:top-auto z-20 flex items-center justify-center pointer-events-none">
                      <div 
                        className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                          isVisible
                            ? 'bg-[#ffbe00] border-white scale-110 sm:scale-125 shadow-[0_0_18px_#ffbe00] ring-4 ring-[#ffbe00]/30'
                            : 'bg-slate-900 border-white/70 scale-95 shadow-md'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${isVisible ? 'bg-slate-950' : 'bg-white'}`} />
                      </div>
                    </div>

                    {/* =================================================================== */}
                    {/* DESKTOP COLUMN 2: EMPTY SPACER (50% WIDTH)                          */}
                    {/* =================================================================== */}
                    <div className={`hidden md:block md:w-1/2 ${isLeft ? 'order-2 pl-14' : 'order-1 pr-14'}`} />

                  </div>
                );
              })}
            </div>

            {/* Bottom Terminal Disc */}
            <div className="relative mt-20 flex justify-center">
              <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] border-4 border-slate-900 z-20" />
            </div>

          </div>

          {/* ========================================================================= */}
          {/* BOTTOM CALLOUT / LINK TO COMPLETE STORY                                  */}
          {/* ========================================================================= */}
          <div className="text-center pt-16 sm:pt-24">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-[#ffbe00] hover:bg-[#e6ab00] text-slate-950 font-bold px-8 py-4 rounded-full shadow-[0_4px_25px_rgba(255,190,0,0.35)] hover:shadow-[0_6px_30px_rgba(255,190,0,0.5)] transition-all duration-300 text-sm active:scale-95 group cursor-pointer"
            >
              <span>Explore Complete Founding Story & Governance Structure</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};
