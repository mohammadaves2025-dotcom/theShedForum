import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Users, HelpCircle, 
  Megaphone, HeartHandshake, Award, Sparkles, ArrowRight, 
  Calendar, CheckCircle2, ShieldCheck, Heart, 
  Briefcase
} from 'lucide-react';
import { ScholarLifecycleSection } from './ScholarLifecycleSection';
import { PageHeroBanner } from './PageHeroBanner';

interface ProjectsPageProps {
  onOpenHelpdesk: () => void;
}

interface InitiativeDetail {
  id: string;
  title: string;
  subtitle: string;
  category: 'Coaching' | 'Outreach' | 'Skill & Mentorship' | 'Empowerment';
  description: string;
  image: string;
  budget: string;
  timeline: string;
  targetAudience: string;
  icon: any;
  colorScheme: {
    accent: string;
    badgeBg: string;
    border: string;
    iconBg: string;
  };
  impactHighlights: string[];
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenHelpdesk }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const detailedInitiatives: InitiativeDetail[] = [
    {
      id: "scg-centre",
      title: "SCG Centre (Shershahbadi Guidance & Coaching)",
      subtitle: "Flagship CUET & Central University Entrance Prep",
      category: "Coaching",
      description: "Provides 100% free comprehensive academic coaching, structured mock tests, syllabus materials, and daily tutoring for Class 12 graduates aspiring to enter central universities (Jamia, AMU, MANUU, DU, JNU, HCU, Patna Univ).",
      image: "/gallery/jmi-unit/jmi-scg-session-indoor-01.jpg",
      budget: "₹3,00,000 – ₹3,50,000 / year",
      timeline: "November to June (Annual Drive)",
      targetAudience: "Class 12th & Undergraduate Aspirants across Seemanchal",
      icon: GraduationCap,
      colorScheme: {
        accent: "text-[#0052B4]",
        badgeBg: "bg-blue-50 text-[#0052B4] border-blue-200",
        border: "border-blue-200/80",
        iconBg: "bg-blue-50 text-[#0052B4]"
      },
      impactHighlights: [
        "100% free coaching & study materials for rural students",
        "Subject-specific mock tests aligned with latest NTA CUET patterns",
        "Expert guest lectures by research scholars and university alumni",
        "Over 450+ successful admissions secured in central universities"
      ]
    },
    {
      id: "grassroots-campaigns",
      title: "Grassroots Ground Outreach Campaigns",
      subtitle: "Village-to-Village Educational Mobilization",
      category: "Outreach",
      description: "Direct village-level and rural high school outreach across Seemanchal (Katihar, Purnea, Araria, Kishanganj, Malda, Murshidabad, Sahibganj) during vacation periods to eliminate educational hesitation and counsel parents.",
      image: "/gallery/manuu-unit/manuu-outdoor-audience-day-01.jpg",
      budget: "₹2,50,000 – ₹3,00,000 / drive",
      timeline: "Summer & Winter Vacations",
      targetAudience: "Rural Students, Parents & High School Leavers",
      icon: Megaphone,
      colorScheme: {
        accent: "text-[#009A44]",
        badgeBg: "bg-emerald-50 text-[#009A44] border-emerald-200",
        border: "border-emerald-200/80",
        iconBg: "bg-emerald-50 text-[#009A44]"
      },
      impactHighlights: [
        "Direct outreach across 12+ districts in Bihar, Bengal & Jharkhand",
        "Overcoming parental doubts about girl student higher education",
        "Information distribution on government scholarships (NSP/Post-Matric)",
        "Grassroots student identification before admission deadlines"
      ]
    },
    {
      id: "career-helpdesk",
      title: "Central University Admission Helpdesk",
      subtitle: "On-Ground & Online Form & Hostel Assistance",
      category: "Outreach",
      description: "Dedicated campus units set up seasonal help-desks across university gates and online helplines assisting rural first-generation applicants in course selection, form filling, certificate verification, and hostel applications.",
      image: "/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg",
      budget: "₹25,000 – ₹30,000 / season",
      timeline: "January to June (Peak Admissions)",
      targetAudience: "Prospective University Applicants",
      icon: HelpCircle,
      colorScheme: {
        accent: "text-amber-600",
        badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
        border: "border-amber-200/80",
        iconBg: "bg-amber-50 text-amber-600"
      },
      impactHighlights: [
        "Active help-desks at 7 premier Central Universities",
        "Guidance on quota reservations, certificates, and affidavit filings",
        "Hostel allotment guidance and local logistics for newcomers",
        "Direct helpline numbers with active volunteer coordinators"
      ]
    },
    {
      id: "mentorship-program",
      title: "Unit-Wise One-to-One Mentorship Initiative",
      category: "Skill & Mentorship",
      subtitle: "Peer-to-Peer Scholar Adoption System",
      description: "Pairs newly admitted first-year students with senior university scholars and doctoral research fellows for continuous one-to-one academic navigation, syllabus mastery, library orientation, and mental well-being.",
      image: "/gallery/amu-unit/amu-circle-meeting-mosque-night-01.jpg",
      budget: "Self-Sustaining Community Effort",
      timeline: "Year-Round (Active Every Semester)",
      targetAudience: "1st & 2nd Year Enrolled University Scholars",
      icon: Users,
      colorScheme: {
        accent: "text-indigo-600",
        badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
        border: "border-indigo-200/80",
        iconBg: "bg-indigo-50 text-indigo-600"
      },
      impactHighlights: [
        "Principle of 'Every admitted student mentors a junior scholar'",
        "Eliminates initial alienation and imposter syndrome in top cities",
        "Subject-specific tutoring circles in campus lawns and hostels",
        "Over 600+ active mentor-mentee pairs created since 2018"
      ]
    },
    {
      id: "spoken-english",
      title: "English Spoken & Soft Skills Program",
      subtitle: "Bridging the Vernacular-to-English Transition",
      category: "Skill & Mentorship",
      description: "Intensive 6-month communication, public speaking, personality development, and English language coaching to help vernacular-medium rural students excel in English-medium central university lectures and interviews.",
      image: "/gallery/jmi-unit/jmi-seminar-indoor-01.jpg",
      budget: "₹1,50,000 – ₹2,00,000 / batch",
      timeline: "July to December (6 Months)",
      targetAudience: "Newly Admitted Students & Rural Scholars",
      icon: BookOpen,
      colorScheme: {
        accent: "text-cyan-600",
        badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
        border: "border-cyan-200/80",
        iconBg: "bg-cyan-50 text-cyan-600"
      },
      impactHighlights: [
        "Daily vocabulary, reading circles, and conversational mock drills",
        "Overcoming stage fear through weekly presentations and debates",
        "Professional email writing, resume formatting, and digital literacy",
        "Instructors comprise bilingual alumni and English literature scholars"
      ]
    },
    {
      id: "alumni-placement",
      title: "Central Placement Cell & Career Support",
      subtitle: "Employment, Civil Services & Higher Research Pathways",
      category: "Skill & Mentorship",
      description: "A centralized professional bridge connecting final-year university scholars with working alumni in civil services, multinational corporations, teaching, banking, and law for internships, job placements, and competitive exam preparation.",
      image: "/gallery/jmi-unit/jmi-career-pathways-event-01.jpg",
      budget: "₹50,000 – ₹1,00,000",
      timeline: "February to April (Pre-Graduation)",
      targetAudience: "Final Year Degree & Master’s Candidates",
      icon: Briefcase,
      colorScheme: {
        accent: "text-purple-600",
        badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
        border: "border-purple-200/80",
        iconBg: "bg-purple-50 text-purple-600"
      },
      impactHighlights: [
        "Annual 'Career Pathways for Graduates' seminar and workshops",
        "UPSC / BPSC / NET-JRF guidance circles led by qualified officers",
        "Direct internship linkages with alumni in IT, Law, and Academia",
        "Over 1,000+ graduates active across corporate and public sectors"
      ]
    },
    {
      id: "womens-day",
      title: "International Women’s Day & Foundation Day",
      subtitle: "Championing Female Higher Education Enrollment",
      category: "Empowerment",
      description: "Observed annually on March 8th, honoring female academic achievers, awarding micro-scholarships, and bringing judicial luminaries, civil servants, and women activists together to inspire young girls to pursue higher education.",
      image: "/gallery/jmi-unit/jmi-book-launch-indoor-01.jpg",
      budget: "₹25,000 – ₹50,000 / event",
      timeline: "March 8th (Flagship Annual Assembly)",
      targetAudience: "Female Scholars, Parents & Community Leaders",
      icon: Award,
      colorScheme: {
        accent: "text-rose-600",
        badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
        border: "border-rose-200/80",
        iconBg: "bg-rose-50 text-rose-600"
      },
      impactHighlights: [
        "Foundation Day intentionally selected on Women's Day (March 8, 2018)",
        "Over 38% female enrollment achieved across university units",
        "Keynote addresses by judicial officers, doctors, and women professors",
        "Felicitating top female rank-holders in CUET and university exams"
      ]
    },
    {
      id: "financial-aid",
      title: "Emergency Student Financial Aid & Grants",
      subtitle: "Ensuring No Scholar Drops Out Due to Financial Need",
      category: "Empowerment",
      description: "Facilitates micro-grants for tuition fees, entrance application fee waivers, emergency hostel expenses, and dedicated application assistance for government and private scholarships (NSP, Post-Matric, Begum Hazrat Mahal, MANF).",
      image: "/gallery/online-events/online-scg-google-meet-01.jpg",
      budget: "Self-Sustaining Community Pool",
      timeline: "Continuous / Emergency Need-Based",
      targetAudience: "Economically Marginalized Enrolled Students",
      icon: HeartHandshake,
      colorScheme: {
        accent: "text-teal-600",
        badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
        border: "border-teal-200/80",
        iconBg: "bg-teal-50 text-teal-600"
      },
      impactHighlights: [
        "100% funded by voluntary alumni and community patron donations",
        "Zero administrative overhead deduction — 100% reaches the student",
        "Covers emergency examination fees and hostel security deposits",
        "Guidance team helps students secure government stipends"
      ]
    }
  ];

  const filterTabs = [
    { key: 'all', label: 'All 8 Initiatives', count: detailedInitiatives.length },
    { key: 'Coaching', label: 'Entrance Coaching', count: 1 },
    { key: 'Outreach', label: 'Ground Outreach & Helpdesk', count: 2 },
    { key: 'Skill & Mentorship', label: 'Skills & Mentorship', count: 3 },
    { key: 'Empowerment', label: 'Women & Welfare', count: 2 }
  ];

  const filteredItems = selectedFilter === 'all'
    ? detailedInitiatives
    : detailedInitiatives.filter(item => item.category === selectedFilter);

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image="/images/hero/hero-2.jpg"
        badgeText="OUR INITIATIVES"
        alt="The ShED Forum - Educational Initiatives & Social Impact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14 lg:space-y-16">
        
        {/* Editorial Heading & Quick CTAs */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Structured Educational Architecture • 8 Flagship Initiatives</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-[1.2]">
            Our Educational Initiatives & Social Impact
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            From grassroots mobilization across remote Seemanchal villages to entrance coaching and doctoral research placement in premier central universities, explore how ShED Forum turns educational aspirations into reality.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenHelpdesk}
              className="bg-[#0052B4] hover:bg-[#003D87] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center gap-2 active:scale-98 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Inquire / Join as Student</span>
            </button>
            <a
              href="#roadmap"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-5 py-3 rounded-xl border border-slate-300 transition-all text-xs sm:text-sm flex items-center gap-2"
            >
              <span>Explore 6-Step Journey</span>
              <ArrowRight className="w-4 h-4 text-[#0052B4]" />
            </a>
          </div>

          {/* Quick Stat Counters */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-200 mt-6">
            <div className="p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl border sm:border-0 border-slate-200/60">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-heading text-[#0052B4]">8 Programs</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Complete Lifecycle</div>
            </div>
            <div className="p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl border sm:border-0 border-slate-200/60">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-heading text-[#009A44]">100% Free</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Zero Guidance Charges</div>
            </div>
            <div className="p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl border sm:border-0 border-slate-200/60">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-heading text-amber-600">₹7.5 Lakh+</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Annual Impact Pool</div>
            </div>
            <div className="p-3 sm:p-0 bg-slate-50/70 sm:bg-transparent rounded-xl border sm:border-0 border-slate-200/60">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-heading text-indigo-600">1,000+</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Scholars Reached</div>
            </div>
          </div>
        </div>

      {/* --- SECTION: 8-STAGE SCHOLAR LIFECYCLE ROADMAP (PRATHAM-INSPIRED TEMPLATE) --- */}
      <div id="roadmap" className="-mx-4 sm:-mx-6 lg:-mx-8">
        <ScholarLifecycleSection onOpenHelpdesk={onOpenHelpdesk} showFullDetailsLink={false} />
      </div>

      {/* --- SECTION: INITIATIVES CATALOG WITH FILTERS --- */}
      <div className="space-y-10">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#ffbe00] text-black px-4 py-1.5 rounded-sm shadow-xs">
              Programs Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
              Explore All 8 Initiatives
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
              Browse comprehensive operational budgets, active program schedules, and verified impact deliverables across our complete educational lifecycle.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedFilter(tab.key)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 min-h-[42px] cursor-pointer ${
                    isSelected
                      ? 'bg-[#ffbe00] text-black shadow-md font-extrabold scale-102'
                      : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200/90 hover:border-slate-400 shadow-2xs'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isSelected ? 'bg-black/15 text-black' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Initiatives Detailed Cards Grid (Reimagined with Pratham UI) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item) => {
            return (
              <div 
                key={item.id}
                className="group bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Photo Header with Pratham Signature Yellow Badge */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                    {/* Pratham Signature Yellow Badge anchored bottom-left */}
                    <div className="absolute bottom-0 left-0 bg-[#ffbe00] text-black text-[11px] font-black uppercase tracking-wider px-4 py-1.5 shadow-md">
                      {item.category}
                    </div>

                    {/* Timeline Badge top-right */}
                    <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold px-3.5 py-1 rounded-full border border-amber-300/30 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.timeline}</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8 space-y-5">
                    
                    <div>
                      <span className="text-[11px] font-bold text-[#0052B4] uppercase tracking-wider block">
                        {item.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-slate-900 group-hover:text-[#0052B4] transition-colors leading-tight mt-1">
                        {item.title}
                      </h3>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Warm Dual Metric Boxes (Budget & Beneficiaries) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 space-y-0.5">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-amber-800 block">
                          Estimated Budget
                        </span>
                        <span className="text-sm font-bold text-slate-900 font-mono block">
                          {item.budget}
                        </span>
                      </div>

                      <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 space-y-0.5">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0052B4] block">
                          Primary Beneficiaries
                        </span>
                        <span className="text-xs font-semibold text-slate-800 line-clamp-1 block mt-0.5">
                          {item.targetAudience}
                        </span>
                      </div>
                    </div>

                    {/* Key Deliverables Checklist */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-xs font-black text-slate-900 block uppercase tracking-wider">
                        Key Impact Deliverables:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-700 font-medium">
                        {item.impactHighlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-500 font-bold flex items-center gap-1.5 uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#009A44]" />
                    <span>100% Volunteer Supported • Non-Profit</span>
                  </div>

                  <button
                    onClick={onOpenHelpdesk}
                    className="w-full sm:w-auto bg-[#ffbe00] hover:bg-[#e6ab00] text-black px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group-hover:scale-102 active:scale-95 cursor-pointer"
                  >
                    <span>Inquire / Participate</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* --- SECTION: ANNUAL BUDGET ALLOCATION & FINANCIAL TRANSPARENCY (REIMAGINED) --- */}
      <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-sm space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-100 pb-6">
          <div className="space-y-2 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-blue-50 text-[#0052B4] px-4 py-1.5 rounded-sm border border-blue-200">
              Institutional Governance &amp; Transparency
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif-heading font-semibold text-slate-900 tracking-tight">
              Annual Program Budget &amp; Financial Blueprint
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              As outlined in our official organizational charter, 100% of community patron and alumni contributions go directly into student welfare, books, and coaching—with zero administrative deductions.
            </p>
          </div>

          <button
            onClick={onOpenHelpdesk}
            className="bg-[#009A44] hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 shrink-0 active:scale-95 cursor-pointer"
          >
            <Heart className="w-4 h-4 text-white fill-white" />
            <span>Support an Initiative</span>
          </button>
        </div>

        {/* 3 Quick Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Total Estimated Annual Budget</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-[#0052B4] block">₹7,50,000 – ₹9,50,000</span>
            <span className="text-[11px] text-slate-500 block">Covering 8 flagship initiatives</span>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-5 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">Administrative Overhead</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-[#009A44] block">0% Deductions</span>
            <span className="text-[11px] text-emerald-700 block">100% directly empowers students</span>
          </div>

          <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">Primary Funding Model</span>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 block font-serif-heading">Community Patrons</span>
            <span className="text-[11px] text-amber-700 block">Voluntary alumni &amp; well-wishers</span>
          </div>
        </div>

        {/* Redesigned Budget Table with Mobile Scroll Support */}
        <div className="space-y-2">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full min-w-[640px] text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 uppercase tracking-wider font-extrabold text-[11px] border-b border-slate-200">
                  <th className="py-4 px-5">Initiative Name</th>
                  <th className="py-4 px-5">Program Pillar</th>
                  <th className="py-4 px-5">Estimated Budget</th>
                  <th className="py-4 px-5">Funding Source</th>
                  <th className="py-4 px-5">Operational Schedule</th>
                </tr>
              </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-900">SCG CUET Coaching Program</td>
                <td className="py-4 px-5"><span className="bg-blue-50 text-[#0052B4] font-bold px-2.5 py-0.5 rounded-full text-[10.5px]">Academic Coaching</span></td>
                <td className="py-4 px-5 font-mono font-bold text-slate-900 text-xs sm:text-sm">₹3,00,000 – ₹3,50,000</td>
                <td className="py-4 px-5">Community Patrons &amp; Alumni</td>
                <td className="py-4 px-5 font-semibold text-slate-600">November to June</td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-900">Grassroots Ground Outreach</td>
                <td className="py-4 px-5"><span className="bg-emerald-50 text-[#009A44] font-bold px-2.5 py-0.5 rounded-full text-[10.5px]">Mobilization</span></td>
                <td className="py-4 px-5 font-mono font-bold text-slate-900 text-xs sm:text-sm">₹2,50,000 – ₹3,00,000</td>
                <td className="py-4 px-5">Community Contributions</td>
                <td className="py-4 px-5 font-semibold text-slate-600">Summer / Winter Vacations</td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-900">English Spoken &amp; Soft Skills</td>
                <td className="py-4 px-5"><span className="bg-cyan-50 text-cyan-800 font-bold px-2.5 py-0.5 rounded-full text-[10.5px]">Skill Training</span></td>
                <td className="py-4 px-5 font-mono font-bold text-slate-900 text-xs sm:text-sm">₹1,50,000 – ₹2,00,000</td>
                <td className="py-4 px-5">Alumni Association</td>
                <td className="py-4 px-5 font-semibold text-slate-600">July to December</td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-900">University Admission Helpdesk</td>
                <td className="py-4 px-5"><span className="bg-amber-50 text-amber-800 font-bold px-2.5 py-0.5 rounded-full text-[10.5px]">Student Welfare</span></td>
                <td className="py-4 px-5 font-mono font-bold text-slate-900 text-xs sm:text-sm">₹25,000 – ₹30,000</td>
                <td className="py-4 px-5">Campus Unit Funds</td>
                <td className="py-4 px-5 font-semibold text-slate-600">January to June</td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-900">Women’s Empowerment &amp; Foundation Day</td>
                <td className="py-4 px-5"><span className="bg-rose-50 text-rose-800 font-bold px-2.5 py-0.5 rounded-full text-[10.5px]">Annual Assembly</span></td>
                <td className="py-4 px-5 font-mono font-bold text-slate-900 text-xs sm:text-sm">₹25,000 – ₹50,000</td>
                <td className="py-4 px-5">Event Patrons</td>
                <td className="py-4 px-5 font-semibold text-slate-600">March 8th Annually</td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-900">Central Placement Cell</td>
                <td className="py-4 px-5"><span className="bg-purple-50 text-purple-800 font-bold px-2.5 py-0.5 rounded-full text-[10.5px]">Career &amp; Placement</span></td>
                <td className="py-4 px-5 font-mono font-bold text-emerald-700 text-xs sm:text-sm">Self-Sustaining</td>
                <td className="py-4 px-5">Alumni Mentorship Network</td>
                <td className="py-4 px-5 font-semibold text-slate-600">Feb to March</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-slate-500 sm:hidden flex items-center gap-1 pt-0.5 px-1">
          <span className="font-bold text-[#0052B4]">Tip:</span> Swipe table horizontally to view all columns →
        </p>
      </div>
      </div>

      {/* --- BOTTOM CTA: PRATHAM-INSPIRED FULL-BLEED DOCUMENTARY CALLOUT --- */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-14 text-white shadow-2xl border border-slate-800">
        {/* Documentary Photo Background */}
        <img
          src="/images/hero/hero-2.jpg"
          alt="The ShED Forum Initiatives in Action"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter brightness-[0.7] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-[#0052B4]/40" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block bg-[#ffbe00] text-black text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-sm shadow-md">
              Make a Meaningful Difference
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif-heading font-semibold text-white leading-tight">
              Want to Volunteer, Mentor, or Support One of These Initiatives?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Whether you are an alumnus, a university scholar, or a community patron, every hand extended multiplies educational opportunities for our rural youth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenHelpdesk}
              className="bg-[#ffbe00] hover:bg-[#e6ab00] text-black font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all text-center text-xs sm:text-sm uppercase tracking-wider active:scale-95 cursor-pointer"
            >
              Connect On Helpdesk
            </button>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};
