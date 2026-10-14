import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, CheckCircle2, ChevronRight, 
  ChevronLeft, LayoutGrid, GitCommit, ArrowUpRight, ShieldCheck
} from 'lucide-react';

interface ScholarLifecycleSectionProps {
  onOpenHelpdesk: () => void;
  showFullDetailsLink?: boolean;
}

export interface LifecycleStage {
  id: string;
  stepNum: string;
  title: string;
  shortTitle: string;
  category: string;
  phaseLabel: string;
  targetAudience: string;
  timeline: string;
  budget: string;
  image: string;
  tagline: string;
  summary: string;
  narrative: string;
  deliverables: string[];
  metrics: string;
  iconPath: string; // Custom SVG path for silhouette
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: "grassroots-campaigns",
    stepNum: "01",
    shortTitle: "Village Outreach",
    title: "Grassroots Village Outreach",
    category: "Awareness & Outreach",
    phaseLabel: "Phase 01 • High School & Village Community",
    targetAudience: "Rural Students, Parents & High School Leavers",
    timeline: "Vacation Periods (Summer & Winter)",
    budget: "₹2,50,000 – ₹3,00,000 / drive",
    image: "/gallery/manuu-unit/manuu-outdoor-audience-day-01.jpg",
    tagline: "Overcoming educational hesitation at the doorstep of remote villages.",
    summary: "Outreach volunteers travel across Seemanchal villages counseling parents and identifying first-generation matriculate scholars.",
    narrative: "Direct village-level and rural high school outreach across 12+ districts (Katihar, Purnea, Araria, Kishanganj, Malda, Murshidabad, Sahibganj) to eliminate hesitation about central universities, break stereotypes around girls' education, and guide families toward premier education.",
    deliverables: [
      "Direct outreach across 12+ districts in Bihar, Bengal & Jharkhand",
      "Parental counseling sessions addressing financial and hostel safety doubts",
      "Distribution of central university prospectuses and scholarship schedules",
      "Early identification of talented students before board exam results"
    ],
    metrics: "12+ Districts • 50+ Village Assemblies",
    // Silhouette: Megaphone / rural speaker reaching out
    iconPath: "M11 5L6 9H2v6h4l5 4V5zm4.5 3.5a5 5 0 0 1 0 7m2.5-9.5a8.5 8.5 0 0 1 0 12"
  },
  {
    id: "scg-centre",
    stepNum: "02",
    shortTitle: "Free SCG Coaching",
    title: "SCG Centre Entrance Prep",
    category: "Academic Coaching",
    phaseLabel: "Phase 02 • Entrance Examination Preparation",
    targetAudience: "Class 12th Graduates & Undergraduate Aspirants",
    timeline: "November to June (Annual Drive)",
    budget: "₹3,00,000 – ₹3,50,000 / year • 100% Free",
    image: "/gallery/jmi-unit/jmi-scg-session-indoor-01.jpg",
    tagline: "Rigorous 100% free CUET coaching with zero compromise on quality.",
    summary: "100% free academic coaching, structured mock tests, and daily mentoring for Class 12 graduates aspiring for central universities.",
    narrative: "Provides 100% free comprehensive coaching, printed study modules, daily practice papers, and expert guest lectures for rural youth aspiring to enter premier central universities including Jamia Millia Islamia, AMU, MANUU, DU, JNU, HCU, and Patna University.",
    deliverables: [
      "Daily structured classes covering General Test, Domain Subjects & Languages",
      "NTA pattern computer-based mock tests with detailed performance analysis",
      "Free distribution of standard reference books and curated notes",
      "Special weekend masterclasses by research scholars and university professors"
    ],
    metrics: "450+ Admissions Secured • 100% Free Tuition",
    // Silhouette: Scholar reading book with study lamp / graduation cap
    iconPath: "M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm-7 9.18V17c0 3 3.13 5 7 5s7-2 7-5v-5.82l-7 3.18-7-3.18z"
  },
  {
    id: "career-helpdesk",
    stepNum: "03",
    shortTitle: "Admission Helpdesk",
    title: "University Admission Helpdesk",
    category: "Student Support",
    phaseLabel: "Phase 03 • University Admissions & Campus Reception",
    targetAudience: "CUET Qualified Applicants & First-Time Freshers",
    timeline: "January to June (Peak Admissions)",
    budget: "₹25,000 – ₹30,000 / season",
    image: "/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg",
    tagline: "Physical booths at university gates and 24/7 online application helplines.",
    summary: "Campus units set up seasonal helpdesks assisting rural applicants with subject choices, form filling, and hostel applications.",
    narrative: "Navigating central university entrance portals, preference filling, document affidavits, and university cut-offs can be overwhelming for first-generation learners. ShED Forum volunteers run active helpdesks right at university gates and coordinate digital helplines across India.",
    deliverables: [
      "Physical reception desks at Jamia, AMU, MANUU, DU, and JNU campuses",
      "Live support for online preference filling, CUET counseling, and seat acceptance",
      "Affidavit and category reservation certificate verification assistance",
      "Emergency accommodation and verified hostel navigation for newcomers"
    ],
    metrics: "7 Central Campuses • 24/7 Digital Helpline",
    // Silhouette: Compass / campus navigation & gate guidance
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-1-11a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4zm1-4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"
  },
  {
    id: "mentorship-program",
    stepNum: "04",
    shortTitle: "1-on-1 Mentorship",
    title: "Unit-Wise 1-to-1 Mentorship",
    category: "Mentorship",
    phaseLabel: "Phase 04 • Campus Acculturation & Peer Adoption",
    targetAudience: "1st & 2nd Year Enrolled University Scholars",
    timeline: "Year-Round (Active Every Semester)",
    budget: "Self-Sustaining Community Effort",
    image: "/gallery/amu-unit/amu-circle-meeting-mosque-night-01.jpg",
    tagline: "Every enrolled fresher is adopted by a senior research scholar.",
    summary: "Pairs newly enrolled students with senior scholars and doctoral fellows for academic navigation and mental well-being.",
    narrative: "Moving from a remote village to a metropolitan university campus can cause acute alienation and imposter syndrome. Our peer adoption system ensures every newcomer has an assigned senior mentor for library orientation, syllabus guidance, hostel life, and emotional support.",
    deliverables: [
      "Personalized 1-on-1 matching between fresher and senior department scholar",
      "Regular weekend study circles in campus lawns and central libraries",
      "Guidance on semester exam preparation, term papers, and reference reading",
      "Mental health check-ins and peer brotherhood/sisterhood support"
    ],
    metrics: "600+ Active Pairs • 0% Campus Dropout Target",
    // Silhouette: Mentor and mentee walking together / handshake
    iconPath: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm11 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"
  },
  {
    id: "spoken-english",
    stepNum: "05",
    shortTitle: "English & Soft Skills",
    title: "English Spoken & Soft Skills",
    category: "Skill Development",
    phaseLabel: "Phase 05 • Vernacular-to-English Fluency",
    targetAudience: "Vernacular-Medium Students & Rural Freshers",
    timeline: "July to December (6 Months)",
    budget: "₹1,50,000 – ₹2,00,000 / batch",
    image: "/gallery/jmi-unit/jmi-seminar-indoor-01.jpg",
    tagline: "Bridging the language barrier so rural talent shines in lecture halls.",
    summary: "6-month communication, personality development, and English language training to overcome hesitation in urban universities.",
    narrative: "Rural students often possess brilliant analytical minds but hesitate to participate in English-dominated seminar rooms. This intensive 6-month bootcamp builds conversational fluency, presentation skills, digital literacy, and professional writing to unlock their full academic potential.",
    deliverables: [
      "Daily conversational mock drills, vocabulary circles, and pronunciation workshops",
      "Weekly public speaking, extempore debates, and stage confidence training",
      "Professional email drafting, CV formulation, and presentation design",
      "Classes taught by bilingual alumni and English literature scholars"
    ],
    metrics: "6-Month Cohort • 100% Interactive Drills",
    // Silhouette: Speech bubbles / public speaking presentation
    iconPath: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 9h8m-8 4h5"
  },
  {
    id: "financial-aid",
    stepNum: "06",
    shortTitle: "Emergency Grants",
    title: "Student Financial Aid & Grants",
    category: "Financial Support",
    phaseLabel: "Phase 06 • Student Retention & Zero-Dropout Support",
    targetAudience: "Economically Marginalized Enrolled Students",
    timeline: "Continuous / Need-Based",
    budget: "Self-Sustaining Community Pool (100% Direct Delivery)",
    image: "/gallery/online-events/online-scg-google-meet-01.jpg",
    tagline: "Ensuring no capable scholar ever drops out due to lack of money.",
    summary: "Facilitates micro-grants for tuition fees, entrance forms, emergency hostel needs, and government scholarship applications.",
    narrative: "When sudden family distress, medical crises, or delayed government stipends threaten a student's degree, the ShED Emergency Student Fund steps in immediately with zero administrative delays to cover semester fees, books, or hostel deposits.",
    deliverables: [
      "100% community and alumni-backed transparent emergency micro-grants",
      "Zero administrative deduction — 100% of assistance reaches the student",
      "Hands-on assistance applying for National Scholarship Portal (NSP) & state schemes",
      "Emergency travel and medical distress grants for enrolled scholars"
    ],
    metrics: "Zero Dropouts Policy • 100% Direct Delivery",
    // Silhouette: Protective heart & helping hands / shield
    iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  },
  {
    id: "womens-day",
    stepNum: "07",
    shortTitle: "Women's Leadership",
    title: "Women's Empowerment Assembly",
    category: "Empowerment",
    phaseLabel: "Phase 07 • Gender Parity & Female Leadership",
    targetAudience: "Female Scholars, Parents & Community Leaders",
    timeline: "March 8th (Foundation Day Annually)",
    budget: "₹25,000 – ₹50,000 / event",
    image: "/gallery/jmi-unit/jmi-book-launch-indoor-01.jpg",
    tagline: "Normalizing higher education and leadership for rural female scholars.",
    summary: "Observed on International Women's Day, honoring female academic achievers and awarding micro-scholarships to inspire young girls.",
    narrative: "The ShED Forum was purposefully founded on March 8, 2018 (International Women's Day) to anchor women's education at the heart of community upliftment. Each year, prominent judicial officers, doctors, and women professors felicitate young female achievers.",
    deliverables: [
      "Annual Women's Higher Education Conclave and academic awards",
      "Special counseling for conservative parents to send daughters to universities",
      "Dedicated women-only mentorship circles across Delhi, Hyderabad & Aligarh",
      "Achieved over 38% female student representation across all 7 units"
    ],
    metrics: "38%+ Female Representation • Annual Awards",
    // Silhouette: Female achievement laurel & star / diploma
    iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  },
  {
    id: "alumni-placement",
    stepNum: "08",
    shortTitle: "Alumni & Placement",
    title: "ShED Alumni Connect & Placements",
    category: "Career & Placement",
    phaseLabel: "Phase 08 • Corporate, Civil Services & Research Pathways",
    targetAudience: "Final Year Degree Candidates, Postgraduates & Alumni",
    timeline: "Continuous • Annual February-April Placement Drives",
    budget: "Self-Sustaining Professional Network",
    image: "/gallery/jmi-unit/jmi-career-pathways-event-01.jpg",
    tagline: "Guiding graduates into prestigious careers and creating lifelong mentors.",
    summary: "Over 1,000+ alumni across India assist final-year scholars with job placements, competitive exams, and higher research.",
    narrative: "The journey culminates when graduates step into corporate careers, crack civil services, or clear NET-JRF for doctoral research. These alumni actively mentor the next generation, completing the virtuous cycle of community upliftment.",
    deliverables: [
      "Annual 'Career Pathways for Graduates' workshops with industry leaders",
      "Specialized study groups for UPSC, BPSC, UGC NET-JRF, and judicial services",
      "Direct referral pipelines for corporate jobs, IT roles, law chambers, and NGOs",
      "Lifelong commitment where every placed alumnus mentors new freshers"
    ],
    metrics: "1,000+ Working Alumni • Civil Services & Corporate Linkages",
    // Silhouette: Professional ascending stairs / briefcase to horizon
    iconPath: "M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z"
  }
];

export const ScholarLifecycleSection: React.FC<ScholarLifecycleSectionProps> = ({ 
  onOpenHelpdesk,
  showFullDetailsLink = true 
}) => {
  const [activeStageId, setActiveStageId] = useState<string>("scg-centre");
  const [viewMode, setViewMode] = useState<'roadmap' | 'catalog'>('roadmap');

  const activeStage = LIFECYCLE_STAGES.find(s => s.id === activeStageId) || LIFECYCLE_STAGES[0];
  const activeIndex = LIFECYCLE_STAGES.findIndex(s => s.id === activeStageId);

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % LIFECYCLE_STAGES.length;
    setActiveStageId(LIFECYCLE_STAGES[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + LIFECYCLE_STAGES.length) % LIFECYCLE_STAGES.length;
    setActiveStageId(LIFECYCLE_STAGES[prevIdx].id);
  };

  return (
    <section className="bg-gradient-to-b from-amber-50/40 via-white to-slate-50 py-16 sm:py-24 border-y border-amber-100/80 relative overflow-hidden">
      {/* Decorative Warm Ambient Glows (Inspired by Pratham Golden/Amber Palette) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">

        {/* --- HEADER: EDITORIAL & MISSION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-900 bg-amber-100/90 px-3.5 py-1.5 rounded-full border border-amber-300 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Educational Transformation Pipeline</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-[1.15]">
              Our 8 Educational Initiatives
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              An unbroken lifecycle of guidance—from grassroots door-to-door village outreach in remote Seemanchal to entrance coaching, campus mentorship, and corporate leadership.
            </p>
          </div>

          {/* View Mode Toggle Pill */}
          <div className="flex items-center gap-2 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 shadow-2xs self-start md:self-auto shrink-0">
            <button
              onClick={() => setViewMode('roadmap')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'roadmap'
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GitCommit className="w-3.5 h-3.5" />
              <span>Lifecycle Roadmap</span>
            </button>
            <button
              onClick={() => setViewMode('catalog')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'catalog'
                  ? 'bg-[#0052B4] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All 8 Cards</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: PRATHAM-INSPIRED SEQUENTIAL LIFECYCLE INFOGRAPHIC                 */}
        {/* ========================================================================= */}
        {viewMode === 'roadmap' && (
          <div className="space-y-10 sm:space-y-12">

            {/* --- PRATHAM-STYLE SEQUENTIAL LIFECYCLE TRACK --- */}
            <div className="relative">
              
              {/* Desktop / Large Screen: 2 Rows of 4 Stages or Scrollable Flow */}
              <div className="hidden lg:block bg-white/95 rounded-3xl p-8 border border-amber-200/90 shadow-lg backdrop-blur-xs space-y-8">
                
                {/* Top Row: Stages 1 to 4 */}
                <div className="grid grid-cols-4 gap-4 relative">
                  {LIFECYCLE_STAGES.slice(0, 4).map((stage, idx) => {
                    const isSelected = stage.id === activeStageId;
                    const hasNext = idx < 3;

                    return (
                      <div key={stage.id} className="relative flex flex-col items-center text-center group cursor-pointer" onClick={() => setActiveStageId(stage.id)}>
                        
                        {/* Connecting Horizontal Arrow to next circle */}
                        {hasNext && (
                          <div className="absolute top-12 left-[60%] w-[80%] h-0.5 z-0 flex items-center pointer-events-none">
                            <div className="w-full border-t-2 border-dashed border-amber-300"></div>
                            <ChevronRight className="w-4 h-4 text-amber-500 -ml-2 shrink-0" />
                          </div>
                        )}

                        {/* Concentric Circle Medallion (Pratham Style) */}
                        <div className="relative z-10 mb-4 transition-transform duration-300 group-hover:scale-105">
                          {/* Outer thin ring with spacing */}
                          <div className={`w-24 h-24 rounded-full p-1.5 transition-all duration-300 flex items-center justify-center ${
                            isSelected 
                              ? 'border-2 border-amber-500 ring-4 ring-amber-300/40 shadow-md scale-105' 
                              : 'border-2 border-dashed border-amber-300/80 group-hover:border-amber-400'
                          }`}>
                            {/* Inner Golden/Amber Disc */}
                            <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 shadow-inner ${
                              isSelected
                                ? 'bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-amber-500/30'
                                : 'bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 group-hover:from-amber-400 group-hover:to-amber-500'
                            }`}>
                              {/* Dark Charcoal Silhouette Icon inside */}
                              <svg 
                                className={`w-8 h-8 transition-transform ${isSelected ? 'text-slate-900 scale-110' : 'text-slate-800'}`} 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                              >
                                <path d={stage.iconPath} />
                              </svg>
                            </div>
                          </div>

                          {/* Step Number Badge */}
                          <span className={`absolute -top-1 -right-1 text-[10px] font-black font-mono w-6 h-6 rounded-full flex items-center justify-center shadow-xs border ${
                            isSelected 
                              ? 'bg-slate-900 text-amber-300 border-slate-700' 
                              : 'bg-white text-amber-700 border-amber-200'
                          }`}>
                            {stage.stepNum}
                          </span>
                        </div>

                        {/* Vertical Drop-Pin Stem with Round Node (Pratham Style) */}
                        <div className="flex flex-col items-center">
                          <div className={`w-0.5 h-6 transition-colors ${isSelected ? 'bg-amber-500' : 'bg-amber-300'}`} />
                          <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all ${
                            isSelected 
                              ? 'border-amber-600 bg-amber-500 ring-2 ring-amber-200' 
                              : 'border-amber-400 bg-white'
                          }`} />
                        </div>

                        {/* Title & Caption */}
                        <div className="mt-3 px-2 space-y-1">
                          <h4 className={`text-sm font-serif-heading font-bold transition-colors leading-tight ${
                            isSelected ? 'text-amber-800 underline decoration-amber-400 decoration-2 underline-offset-4' : 'text-slate-900 group-hover:text-amber-700'
                          }`}>
                            {stage.shortTitle}
                          </h4>
                          <p className="text-[11.5px] text-slate-600 line-clamp-3 leading-relaxed font-normal">
                            {stage.summary}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Serpent Connection Line Between Row 1 and Row 2 */}
                <div className="flex items-center justify-center py-1">
                  <div className="w-full flex items-center justify-between px-12">
                    <div className="h-0.5 flex-1 border-t-2 border-dashed border-amber-200"></div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/90 px-4 py-1 rounded-full border border-amber-300">
                      Continues into Campus Acculturation & Career Placement
                    </span>
                    <div className="h-0.5 flex-1 border-t-2 border-dashed border-amber-200"></div>
                  </div>
                </div>

                {/* Bottom Row: Stages 5 to 8 */}
                <div className="grid grid-cols-4 gap-4 relative">
                  {LIFECYCLE_STAGES.slice(4, 8).map((stage, idx) => {
                    const isSelected = stage.id === activeStageId;
                    const hasNext = idx < 3;

                    return (
                      <div key={stage.id} className="relative flex flex-col items-center text-center group cursor-pointer" onClick={() => setActiveStageId(stage.id)}>
                        
                        {/* Connecting Horizontal Arrow to next circle */}
                        {hasNext && (
                          <div className="absolute top-12 left-[60%] w-[80%] h-0.5 z-0 flex items-center pointer-events-none">
                            <div className="w-full border-t-2 border-dashed border-amber-300"></div>
                            <ChevronRight className="w-4 h-4 text-amber-500 -ml-2 shrink-0" />
                          </div>
                        )}

                        {/* Concentric Circle Medallion */}
                        <div className="relative z-10 mb-4 transition-transform duration-300 group-hover:scale-105">
                          <div className={`w-24 h-24 rounded-full p-1.5 transition-all duration-300 flex items-center justify-center ${
                            isSelected 
                              ? 'border-2 border-amber-500 ring-4 ring-amber-300/40 shadow-md scale-105' 
                              : 'border-2 border-dashed border-amber-300/80 group-hover:border-amber-400'
                          }`}>
                            <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 shadow-inner ${
                              isSelected
                                ? 'bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-amber-500/30'
                                : 'bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 group-hover:from-amber-400 group-hover:to-amber-500'
                            }`}>
                              <svg 
                                className={`w-8 h-8 transition-transform ${isSelected ? 'text-slate-900 scale-110' : 'text-slate-800'}`} 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                              >
                                <path d={stage.iconPath} />
                              </svg>
                            </div>
                          </div>

                          <span className={`absolute -top-1 -right-1 text-[10px] font-black font-mono w-6 h-6 rounded-full flex items-center justify-center shadow-xs border ${
                            isSelected 
                              ? 'bg-slate-900 text-amber-300 border-slate-700' 
                              : 'bg-white text-amber-700 border-amber-200'
                          }`}>
                            {stage.stepNum}
                          </span>
                        </div>

                        {/* Vertical Drop-Pin Stem with Round Node */}
                        <div className="flex flex-col items-center">
                          <div className={`w-0.5 h-6 transition-colors ${isSelected ? 'bg-amber-500' : 'bg-amber-300'}`} />
                          <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all ${
                            isSelected 
                              ? 'border-amber-600 bg-amber-500 ring-2 ring-amber-200' 
                              : 'border-amber-400 bg-white'
                          }`} />
                        </div>

                        {/* Title & Caption */}
                        <div className="mt-3 px-2 space-y-1">
                          <h4 className={`text-sm font-serif-heading font-bold transition-colors leading-tight ${
                            isSelected ? 'text-amber-800 underline decoration-amber-400 decoration-2 underline-offset-4' : 'text-slate-900 group-hover:text-amber-700'
                          }`}>
                            {stage.shortTitle}
                          </h4>
                          <p className="text-[11.5px] text-slate-600 line-clamp-3 leading-relaxed font-normal">
                            {stage.summary}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile & Tablet: Horizontal Scrollable Milestone Pills with Pratham Badges */}
              <div className="lg:hidden">
                <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none px-1">
                  {LIFECYCLE_STAGES.map((stage) => {
                    const isSelected = stage.id === activeStageId;
                    return (
                      <button
                        key={stage.id}
                        onClick={() => setActiveStageId(stage.id)}
                        className={`snap-start shrink-0 p-3.5 rounded-2xl border transition-all text-left flex items-center gap-3 w-64 cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500 text-white border-amber-600 shadow-md ring-2 ring-amber-300/60'
                            : 'bg-white text-slate-800 border-amber-200/80 hover:border-amber-300'
                        }`}
                      >
                        {/* Mini Concentric Pratham Circle */}
                        <div className={`w-11 h-11 rounded-full p-0.5 border shrink-0 flex items-center justify-center ${
                          isSelected ? 'border-white/60 bg-amber-600' : 'border-amber-300 bg-amber-100'
                        }`}>
                          <svg className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-amber-800'}`} viewBox="0 0 24 24" fill="currentColor">
                            <path d={stage.iconPath} />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <span className={`text-[10px] font-mono font-bold block ${isSelected ? 'text-amber-100' : 'text-amber-600'}`}>
                            STAGE {stage.stepNum}
                          </span>
                          <span className={`text-xs font-bold font-serif-heading truncate block ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                            {stage.shortTitle}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* --- ACTIVE STAGE DEEP-DIVE SPOTLIGHT CARD --- */}
            <div className="bg-white rounded-3xl border border-amber-200 shadow-xl overflow-hidden transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Column: Image with Authentic Archive Overlay */}
                <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[280px] overflow-hidden bg-slate-900">
                  <img
                    src={activeStage.image}
                    alt={activeStage.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.src = '/gallery/jmi-unit/jmi-scg-session-indoor-01.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

                  {/* Stage Badge on Photo */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      Stage {activeStage.stepNum} of 08
                    </span>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                      {activeStage.category}
                    </span>
                  </div>

                  {/* Caption on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider mb-1">
                      {activeStage.phaseLabel}
                    </div>
                    <p className="text-sm font-medium text-slate-200 italic leading-snug line-clamp-2">
                      "{activeStage.tagline}"
                    </p>
                  </div>
                </div>

                {/* Right Column: Detailed Narrative, Deliverables, Metrics & CTAs */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    
                    {/* Header Row with Stepper Arrows */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        {activeStage.targetAudience}
                      </span>

                      {/* Stepper Navigation */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePrev}
                          className="w-8 h-8 rounded-full border border-slate-200 hover:border-amber-400 bg-white hover:bg-amber-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
                          title="Previous Stage"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-mono font-bold text-slate-500">
                          {activeStage.stepNum} / 08
                        </span>
                        <button
                          onClick={handleNext}
                          className="w-8 h-8 rounded-full border border-slate-200 hover:border-amber-400 bg-white hover:bg-amber-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
                          title="Next Stage"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Headline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-slate-900 leading-tight">
                        {activeStage.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                        {activeStage.narrative}
                      </p>
                    </div>

                    {/* What ShED Forum Delivers Checklist */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Key Deliverables & Support Mechanism:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {activeStage.deliverables.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline & Budget Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                          Operational Window
                        </span>
                        <span className="text-xs font-bold text-slate-900 mt-0.5 block truncate">
                          {activeStage.timeline}
                        </span>
                      </div>
                      <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0052B4] block">
                          Community Budget
                        </span>
                        <span className="text-xs font-bold text-slate-900 mt-0.5 block truncate">
                          {activeStage.budget}
                        </span>
                      </div>
                      <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 col-span-2 sm:col-span-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#009A44] block">
                          Documented Impact
                        </span>
                        <span className="text-xs font-bold text-slate-900 mt-0.5 block truncate">
                          {activeStage.metrics}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={onOpenHelpdesk}
                      className="bg-[#0052B4] hover:bg-[#003D87] text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Inquire / Apply for Guidance</span>
                    </button>

                    {showFullDetailsLink && (
                      <Link
                        to="/projects"
                        className="text-xs font-bold text-[#0052B4] hover:text-[#003D87] flex items-center gap-1 group"
                      >
                        <span>View Full 8 Initiatives Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: ELEVATED ALL 8 INITIATIVE CARDS (GRID VIEW)                       */}
        {/* ========================================================================= */}
        {viewMode === 'catalog' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIFECYCLE_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="bg-white rounded-3xl p-6 flex flex-col justify-between border border-amber-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  
                  {/* Top Header: Pratham Golden Circle Badge + Step */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full p-1 border-2 border-dashed border-amber-300 bg-amber-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-xs">
                        <svg className="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                          <path d={stage.iconPath} />
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      STAGE {stage.stepNum}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      {stage.category}
                    </span>
                    <h3 className="text-base font-serif-heading font-semibold text-slate-900 mt-1 group-hover:text-amber-800 transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                      {stage.summary}
                    </p>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] text-slate-700 font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{stage.metrics}</span>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium truncate max-w-[130px]">{stage.timeline}</span>
                  <button
                    onClick={() => {
                      setActiveStageId(stage.id);
                      setViewMode('roadmap');
                    }}
                    className="text-amber-700 hover:text-amber-900 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
