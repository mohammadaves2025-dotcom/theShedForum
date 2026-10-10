import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Users, HelpCircle, 
  Megaphone, HeartHandshake, Award, Sparkles, ArrowRight, 
  Calendar, CheckCircle2, ShieldCheck, Heart, 
  IndianRupee, Briefcase, Filter
} from 'lucide-react';

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

  const roadmapSteps = [
    {
      num: "01",
      title: "Grassroots Identification",
      desc: "Outreach volunteers visit villages in Seemanchal, counseling students and parents about central universities.",
      icon: Megaphone,
      color: "bg-emerald-500"
    },
    {
      num: "02",
      title: "Free SCG Coaching",
      desc: "Aspirants receive 60-day intensive CUET training, study materials, and subject mock tests completely free.",
      icon: GraduationCap,
      color: "bg-blue-600"
    },
    {
      num: "03",
      title: "Admission Helpdesk",
      desc: "Dedicated unit volunteers guide students through entrance forms, cutoffs, document verification, and hostels.",
      icon: HelpCircle,
      color: "bg-amber-500"
    },
    {
      num: "04",
      title: "Campus Mentorship",
      desc: "Senior campus scholars adopt freshers in Jamia, AMU, MANUU, DU, JNU, HCU to ease transition.",
      icon: Users,
      color: "bg-indigo-600"
    },
    {
      num: "05",
      title: "Soft Skills & English",
      desc: "6-month spoken English and personality training empowers vernacular-medium students for academic success.",
      icon: BookOpen,
      color: "bg-cyan-500"
    },
    {
      num: "06",
      title: "Career & Placement",
      desc: "Alumni network guides final-year scholars into civil services, corporate careers, NET-JRF, and research.",
      icon: Briefcase,
      color: "bg-purple-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 lg:space-y-20">
      
      {/* --- HERO BANNER --- */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border border-slate-700">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Structured Educational Architecture • 8 Flagship Initiatives</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading font-semibold text-white tracking-tight leading-[1.15]">
            Our Educational Initiatives & Social Impact
          </h1>

          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            From grassroots mobilization across remote Seemanchal villages to entrance coaching and doctoral research placement in premier central universities, explore how ShED Forum turns educational aspirations into reality.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenHelpdesk}
              className="bg-white hover:bg-slate-100 text-[#0052B4] font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex items-center gap-2 active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Inquire / Join as Student</span>
            </button>
            <a
              href="#roadmap"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl border border-white/20 transition-all text-xs sm:text-sm flex items-center gap-2"
            >
              <span>Explore 6-Step Journey</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Banner Quick Stat Counters */}
        <div className="relative z-10 pt-8 mt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-white">8 Programs</div>
            <div className="text-xs text-slate-300 font-medium">Covering Complete Student Lifecycle</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-emerald-300">100% Free</div>
            <div className="text-xs text-slate-300 font-medium">No Tuition or Guidance Charges</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-amber-300">₹7.5 Lakh+</div>
            <div className="text-xs text-slate-300 font-medium">Annual Community Impact Pool</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-cyan-300">1,000+</div>
            <div className="text-xs text-slate-300 font-medium">Scholars Transformed Since 2018</div>
          </div>
        </div>
      </div>

      {/* --- SECTION: 6-STEP IMPACT LIFECYCLE ROADMAP --- */}
      <div id="roadmap" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0052B4] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Educational Transformation Pathway
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-heading font-semibold text-slate-900 tracking-tight">
            How ShED Forum Guides a Student From Village to University
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            A cohesive 6-phase support system ensuring no student falls through the cracks at any step of their academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 pt-4">
          {roadmapSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black font-mono text-slate-300 group-hover:text-[#0052B4] transition-colors">
                      {step.num}
                    </span>
                    <div className={`w-8 h-8 rounded-lg ${step.color} text-white flex items-center justify-center shadow-xs`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0052B4] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- SECTION: INITIATIVES CATALOG WITH FILTERS --- */}
      <div className="space-y-8">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#009A44]">Programs Catalog</span>
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-slate-900">
              Explore All Initiatives
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Browse detailed budgets, operational timelines, and key highlights for each program.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <Filter className="w-4 h-4 text-slate-400 mr-1 hidden sm:inline" />
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedFilter(tab.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 min-h-[38px] ${
                  selectedFilter === tab.key
                    ? 'bg-[#0052B4] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${selectedFilter === tab.key ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Initiatives Detailed Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className={`bg-white rounded-3xl border ${item.colorScheme.border} overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  
                  {/* Photo & Category Ribbon Header */}
                  <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-[10.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-xs flex items-center gap-1.5 ${item.colorScheme.badgeBg}`}>
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.category}</span>
                      </span>
                    </div>

                    {/* Timeline Badge */}
                    <div className="absolute top-4 right-4 bg-slate-900/90 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-300/30 flex items-center gap-1.5 backdrop-blur-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.timeline}</span>
                    </div>

                    {/* Title in Image Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>{item.subtitle}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif-heading font-semibold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 space-y-5">
                    
                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
                      <div>
                        <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider block">Estimated Budget:</span>
                        <span className="font-bold text-slate-900 font-mono flex items-center gap-1 mt-0.5">
                          <IndianRupee className="w-3 h-3 text-[#009A44]" />
                          {item.budget}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider block">Primary Beneficiaries:</span>
                        <span className="font-semibold text-slate-800 line-clamp-1 mt-0.5">
                          {item.targetAudience}
                        </span>
                      </div>
                    </div>

                    {/* Verified Deliverables Checklist */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">
                        Key Impact Deliverables:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                        {item.impactHighlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0052B4]" />
                    <span>100% Volunteer Supported • Non-Profit</span>
                  </div>

                  <button
                    onClick={onOpenHelpdesk}
                    className="w-full sm:w-auto bg-[#0052B4] hover:bg-[#003D87] text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>Inquire / Participate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* --- SECTION: ANNUAL BUDGET ALLOCATION & TRANSPARENCY --- */}
      <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0052B4] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Institutional Governance
            </span>
            <h3 className="text-xl sm:text-3xl font-serif-heading font-semibold text-slate-900 mt-2">
              Annual Program Budget & Transparency
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mt-1">
              As outlined in our official organizational blueprint, estimated program expenses are met through voluntary contributions from patrons, alumni, and community well-wishers.
            </p>
          </div>

          <button
            onClick={onOpenHelpdesk}
            className="bg-[#009A44] hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors shrink-0 flex items-center gap-2 shadow-xs"
          >
            <Heart className="w-3.5 h-3.5 text-white" />
            <span>Support an Initiative</span>
          </button>
        </div>

        {/* Budget Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 uppercase tracking-wider font-bold text-[10.5px] border-b border-slate-200">
                <th className="py-3 px-4">Initiative Name</th>
                <th className="py-3 px-4">Program Pillar</th>
                <th className="py-3 px-4">Estimated Budget</th>
                <th className="py-3 px-4">Funding Source</th>
                <th className="py-3 px-4">Schedule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">SCG CUET Coaching Program</td>
                <td className="py-3 px-4">Academic Coaching</td>
                <td className="py-3 px-4 font-mono font-bold text-[#0052B4]">₹3,00,000 – ₹3,50,000</td>
                <td className="py-3 px-4">Community Patrons & Alumni</td>
                <td className="py-3 px-4">November to June</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">Grassroots Ground Outreach</td>
                <td className="py-3 px-4">Grassroots Mobilization</td>
                <td className="py-3 px-4 font-mono font-bold text-[#0052B4]">₹2,50,000 – ₹3,00,000</td>
                <td className="py-3 px-4">Community Contributions</td>
                <td className="py-3 px-4">Summer / Winter Vacations</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">English Spoken & Soft Skills</td>
                <td className="py-3 px-4">Skill Training</td>
                <td className="py-3 px-4 font-mono font-bold text-[#0052B4]">₹1,50,000 – ₹2,00,000</td>
                <td className="py-3 px-4">Alumni Association</td>
                <td className="py-3 px-4">July to December</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">University Admission Helpdesk</td>
                <td className="py-3 px-4">Student Welfare</td>
                <td className="py-3 px-4 font-mono font-bold text-[#0052B4]">₹25,000 – ₹30,000</td>
                <td className="py-3 px-4">Campus Unit Funds</td>
                <td className="py-3 px-4">January to June</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">Women’s Empowerment & Foundation Day</td>
                <td className="py-3 px-4">Annual Assembly</td>
                <td className="py-3 px-4 font-mono font-bold text-[#0052B4]">₹25,000 – ₹50,000</td>
                <td className="py-3 px-4">Event Patrons</td>
                <td className="py-3 px-4">March 8th Annually</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">Central Placement Cell</td>
                <td className="py-3 px-4">Career & Employment</td>
                <td className="py-3 px-4 font-mono font-bold text-[#0052B4]">Self-Sustaining</td>
                <td className="py-3 px-4">Alumni Mentorship Network</td>
                <td className="py-3 px-4">Feb to March</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* --- BOTTOM CTA: GET INVOLVED --- */}
      <div className="bg-gradient-to-br from-slate-900 to-[#0052B4] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
          Make a Meaningful Difference
        </span>
        <h3 className="text-2xl sm:text-4xl font-serif-heading font-semibold text-white max-w-2xl mx-auto">
          Want to Volunteer, Mentor, or Support One of These Initiatives?
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto font-normal">
          Whether you are an alumnus, a university scholar, or a community patron, every hand extended multiplies educational opportunities for our rural youth.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenHelpdesk}
            className="bg-white hover:bg-slate-100 text-[#0052B4] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-98"
          >
            <span>Connect With Us on Helpdesk</span>
          </button>
          <a
            href="tel:+917737280758"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl border border-white/20 text-xs sm:text-sm transition-all"
          >
            <span>Call Helpline: +91 77372-80758</span>
          </a>
        </div>
      </div>

    </div>
  );
};
