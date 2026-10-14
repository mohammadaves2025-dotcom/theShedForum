import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, BookOpen, ShieldCheck, Calendar, Coins, 
  Award, Compass, HeartHandshake, CheckCircle2, 
  ArrowRight, Sparkles, Building2, GraduationCap, 
  Briefcase, Megaphone, FileText, Target, Check
} from 'lucide-react';
import { ReachImpactSection } from './ReachImpactSection';
import { OurJourneyTimeline } from './OurJourneyTimeline';
import { PageHeroBanner } from './PageHeroBanner';

interface AboutPageProps {
  onOpenHelpdesk?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenHelpdesk }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'structure' | 'calendar' | 'budget'>('story');

  const tabs = [
    { id: 'story', label: 'Our Story & Vision', icon: BookOpen, tag: 'History' },
    { id: 'structure', label: 'Governance & Hierarchy', icon: ShieldCheck, tag: 'Structure' },
    { id: 'calendar', label: 'Academic Calendar', icon: Calendar, tag: 'Roadmap' },
    { id: 'budget', label: 'Annual Budget Allocation', icon: Coins, tag: 'Transparency' },
  ] as const;

  const getBadgeText = () => {
    switch (activeTab) {
      case 'structure': return 'GOVERNANCE & HIERARCHY';
      case 'calendar': return 'ACADEMIC CALENDAR';
      case 'budget': return 'ANNUAL BUDGET ALLOCATION';
      default: return 'OUR STORY';
    }
  };

  const governanceComposition = [
    { 
      title: "Patrons Council", 
      count: 7, 
      tier: "Tier 1",
      badge: "Visionary Council", 
      desc: "Eminent academicians, legal luminaries & lawmakers providing overarching vision, moral authority, and institutional guidance.",
      mandate: "Strategic policy direction, national university administration liaison, and patron guardianship.",
      accent: "amber",
      icon: Award
    },
    { 
      title: "Advisory Committee", 
      count: 14, 
      tier: "Tier 2",
      badge: "Policy & Ethics Board", 
      desc: "Senior university educators, researchers, and professionals ensuring institutional integrity and academic standards.",
      mandate: "Curriculum oversight for SCG coaching, academic dispute resolution, and annual performance audit.",
      accent: "blue",
      icon: Compass
    },
    { 
      title: "Life Time Members", 
      count: 51, 
      tier: "Tier 3",
      badge: "Foundational Pillars", 
      desc: "Founding members, community benefactors, and senior alumni supporting sustained financial strength and book banks.",
      mandate: "Long-term corpus sustenance, emergency scholar welfare pool, and regional community anchor.",
      accent: "emerald",
      icon: HeartHandshake
    },
    { 
      title: "Core Committee", 
      count: 11, 
      tier: "Tier 4",
      badge: "Executive Leadership", 
      desc: "Key executive strategists and senior research scholars overseeing daily operational performance and campus chapters.",
      mandate: "University unit coordination, admissions helpdesks deployment, and youth mobilization.",
      accent: "purple",
      icon: Users
    }
  ];

  const executiveWings = [
    { 
      name: "Central Working Committee (CWC)", 
      type: "Apex Decision Body",
      icon: Building2,
      composition: "1 Unit Incharge per central university + 1 SCG Incharge + 3 Members-at-Large + Finance (1+3) + Placement (1+2) + Media (1+2)",
      desc: "Serves as the apex coordinating council ensuring synchronized execution across all regional campuses, approving admission campaigns, and formulating organizational directives.",
      accent: "border-blue-200 bg-blue-50/30"
    },
    { 
      name: "University Working Committees (UWC)", 
      type: "7 Active Campus Chapters",
      icon: GraduationCap,
      composition: "Unit Secretary + 2 Executive Members + Unit Placement Coordinator + Media Incharge + Treasurer",
      desc: "Direct on-campus executive bodies stationed across AMU, JMI, MANUU, JNU, DU, HCU, and Patna University delivering peer mentorship, freshers' reception, and local hostel verification.",
      accent: "border-emerald-200 bg-emerald-50/30"
    },
    { 
      name: "Central Placement & Career Cell (CPC)", 
      type: "Professional Development Wing",
      icon: Briefcase,
      composition: "Placement Coordinator + Corporate Alumni Mentors + Civil Services Study Group Leads",
      desc: "Coordinates job-oriented technical bootcamps, resume clinics, mock interview circles, UPSC/BPSC study circles, and campus recruitment pipelines.",
      accent: "border-amber-200 bg-amber-50/30"
    },
    { 
      name: "Media & Strategic Communications Desk", 
      type: "Outreach & Documentation Desk",
      icon: Megaphone,
      composition: "Media Incharge + Content Editors + Digital Designers + Video Documentation Volunteers",
      desc: "Manages real-time entrance alerts, verified university admission bulletins, press releases, quarterly newsletters, and field campaign documentation.",
      accent: "border-purple-200 bg-purple-50/30"
    }
  ];

  const academicPhases = [
    {
      phaseNumber: "Phase 1",
      season: "January — June",
      title: "Admission, Coaching & Ground Outreach",
      badge: "Pre-Enrollment Stage",
      accentBorder: "border-blue-300",
      accentBg: "bg-blue-50/60",
      accentText: "text-[#0052B4]",
      icon: GraduationCap,
      description: "Intensive grassroots mobilization across Seemanchal villages, online CUET entrance preparation, and 24/7 helpdesks at premier central university gates.",
      cohort: "Targeting Class 12th & Undergraduate Aspirants across Seemanchal",
      milestones: [
        {
          title: "Central University Help Desks (Across 7 Campuses)",
          detail: "Physical admission booths and student helpline desks at Jamia, AMU, MANUU, DU, JNU, HCU & Patna Univ guiding form filling, quota certificates, and hostel applications."
        },
        {
          title: "Grassroots Village Outreach Campaign (Summer & Winter)",
          detail: "Scholars return to rural villages across Bihar, West Bengal & Jharkhand counseling parents, holding school assemblies, and encouraging female higher education."
        },
        {
          title: "SCG CUET Coaching Preparation Program",
          detail: "100% free daily academic coaching, NTA-aligned mock test papers, and structured entrance modules for university entrance examinations."
        },
        {
          title: "Career Counseling & Course Preference Guidance",
          detail: "One-on-one subject mapping helping first-generation learners select high-demand courses, vocational honors, and scholarship schemes."
        }
      ]
    },
    {
      phaseNumber: "Phase 2",
      season: "July — December",
      title: "Post-Enrollment Skills & Scholar Mentorship",
      badge: "Campus Integration Stage",
      accentBorder: "border-emerald-300",
      accentBg: "bg-emerald-50/60",
      accentText: "text-[#009A44]",
      icon: BookOpen,
      description: "Overcoming imposter syndrome, mastering university academic standards, and eliminating vernacular language barriers through peer adoption.",
      cohort: "Enrolled 1st & 2nd Year Central University Scholars",
      milestones: [
        {
          title: "Freshers' Grand Orientation Assembly (August)",
          detail: "Comprehensive campus welcoming event connecting newcomers with senior scholars, library facilities, and immediate hostel settlement assistance."
        },
        {
          title: "6-Month Spoken English & Communication Bootcamp",
          detail: "Intensive training modules designed to eliminate language insecurity among Hindi and Urdu medium students in seminar presentations."
        },
        {
          title: "Unit-Wise One-to-One Scholar Adoption Mentorship",
          detail: "Every incoming junior is paired with a senior master's or doctoral researcher for continuous academic navigation and emotional support."
        },
        {
          title: "Academic Syllabus Mastery & Research Guidance",
          detail: "Workshops on university examination strategies, UGC-NET/JRF foundations, and academic research paper access."
        }
      ]
    },
    {
      phaseNumber: "Phase 3",
      season: "Annual Cycles",
      title: "Community, Culture & Career Launchpad",
      badge: "Transition & Alumni Stage",
      accentBorder: "border-amber-300",
      accentBg: "bg-amber-50/60",
      accentText: "text-amber-700",
      icon: HeartHandshake,
      description: "Fostering brotherhood, honoring women leaders, connecting scholars to corporate careers, and preparing graduating seniors for alumni mentorship.",
      cohort: "Graduating Seniors, Research Fellows & Community Patrons",
      milestones: [
        {
          title: "Iftar-cum-Educational Cultural Meetup (Ramazan)",
          detail: "Flagship inter-university gathering uniting hundreds of scholars, alumni, and community elders to celebrate academic solidarity."
        },
        {
          title: "Foundation Day & Women's Day Convention (March 8)",
          detail: "Honoring female scholars, felicitating top entrance rankers, and reviewing community educational representation benchmarks."
        },
        {
          title: "Job-Oriented Skill Workshops & Placement Drives",
          detail: "Resume clinics, interview preparation circles, software tools workshops, and professional networking sessions."
        },
        {
          title: "Annual Valedictory & Farewell Ceremony",
          detail: "Celebrating graduating seniors, presenting merit certificates, and formally inducting scholars into the permanent ShED alumni network."
        }
      ]
    }
  ];

  const budgetBreakdown = [
    { 
      item: "Grassroots Higher Education Outreach Campaign", 
      category: "Ground Outreach",
      badgeColor: "bg-emerald-50 text-[#009A44] border-emerald-200",
      cost: "₹2,50,000 – ₹3,00,000", 
      timeline: "Summer & Winter Breaks",
      utilization: "Travel logistics across 12+ rural districts in Bihar/Bengal/Jharkhand, school assembly banners, informational pamphlets & village community meetings."
    },
    { 
      item: "SCG CUET Coaching Preparation Program", 
      category: "Academic Coaching",
      badgeColor: "bg-blue-50 text-[#0052B4] border-blue-200",
      cost: "₹3,00,000 – ₹3,50,000", 
      timeline: "November to June",
      utilization: "Printed syllabus modules, test paper series aligned with NTA CUET, guest faculty honorariums, and digital test infrastructure."
    },
    { 
      item: "English Spoken & Communication Skills Training", 
      category: "Skill Development",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      cost: "₹1,50,000 – ₹2,00,000", 
      timeline: "6 Months (Jul – Dec)",
      utilization: "Specialized language instructors, audio-visual study materials, seminar presentation materials, and student workbook kits."
    },
    { 
      item: "University Help Desks Across 7 Campuses", 
      category: "Admissions Support",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      cost: "₹25,000 – ₹30,000", 
      timeline: "January to June",
      utilization: "Physical gate kiosks at JMI, AMU, MANUU, DU, JNU, HCU & Patna Univ, informational flyers, and helpline telecommunications."
    },
    { 
      item: "Freshers' Orientation Programme & Welcoming", 
      category: "Campus Induction",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      cost: "₹25,000 – ₹30,000", 
      timeline: "August (Annual)",
      utilization: "Auditorium venue logistics, welcome stationery kits for newcomers, and campus survival guide booklets."
    },
    { 
      item: "Iftar-cum-Cultural Educational Meetup", 
      category: "Community & Brotherhood",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      cost: "₹25,000 – ₹30,000", 
      timeline: "Holy Month of Ramazan",
      utilization: "Inter-university scholar gathering, dinner arrangements, patron travel accommodation, and academic solidarity awards."
    },
    { 
      item: "Foundation Day & Women's Day Celebration", 
      category: "Women Empowerment",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
      cost: "₹25,000 – ₹30,000", 
      timeline: "March 8th (Annual)",
      utilization: "Merit felicitation shields for female entrance rankers, keynote guest speaker logistics, and annual impact review publication."
    },
    { 
      item: "Job-Oriented Training & Career Support Cell", 
      category: "Career & Livelihood",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      cost: "₹25,000 – ₹30,000", 
      timeline: "Year-Round",
      utilization: "Mock interview expert panels, resume review printing, corporate networking drives, and technical workshops."
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================================= */}
      {/* TOP FULL-WIDTH HERO IMAGE WITH DYNAMIC BADGE                              */}
      {/* ========================================================================= */}
      <PageHeroBanner 
        image="/images/story-header.jpg" 
        badgeText={getBadgeText()} 
        alt="The ShED Forum - Our Story"
      />

      {/* ========================================================================= */}
      {/* REDESIGNED FLOATING PILL TAB NAVIGATION BAR (SCREENSHOT 4 REDESIGNED)     */}
      {/* ========================================================================= */}
      <div className="border-b border-slate-200/90 bg-white/95 backdrop-blur-md sticky top-16 z-30 shadow-xs py-3 sm:py-3.5 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 py-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className={`px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 sm:gap-2.5 whitespace-nowrap cursor-pointer min-h-[42px] select-none ${
                    isActive
                      ? 'bg-[#ffbe00] text-black font-extrabold shadow-md scale-[1.02] border border-amber-400/80 ring-2 ring-black/5'
                      : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-semibold border border-slate-200/90 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 transition-colors ${
                    isActive ? 'text-black' : 'text-slate-500'
                  }`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold hidden md:inline-block ${
                    isActive ? 'bg-black/15 text-black' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {tab.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: OUR STORY & VISION                                                 */}
      {/* ========================================================================= */}
      {activeTab === 'story' && (
        <div className="pt-10 pb-20 animate-in fade-in duration-300">
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Lead Summary Paragraph */}
            <p className="text-base sm:text-lg text-slate-900 font-bold leading-relaxed">
              The ShED Forum’s story evolved from the conviction that higher education is the single most transformative catalyst to break generational poverty. The movement was born in 2018 at Maulana Azad National Urdu University (MANUU) in Hyderabad with the belief that when first-generation scholars unite, guide, and support the next generation, an entire marginalized community can step into India’s premier academic institutions.
            </p>

            {/* Chapter 1: THE FIRST STEPS (Arrow Badge Banner) */}
            <div className="pt-4 space-y-4">
              <div className="inline-flex items-center">
                <div className="bg-[#ffbe00] text-black font-extrabold text-sm sm:text-base px-6 py-2.5 uppercase tracking-wider shadow-xs">
                  THE FIRST STEPS
                </div>
                <div className="w-0 h-0 border-y-[18px] border-y-transparent border-l-[16px] border-l-[#ffbe00]" />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  After witnessing the severe under-representation of rural Shershahbadi youth across India’s central universities, a handful of first-generation scholars at MANUU Hyderabad convened to establish a formal student movement in early 2018. They recognized that while raw talent, resilience, and ambition were abundant throughout the Seemanchal region of Bihar (Katihar, Purnea, Araria, Kishanganj) and neighboring districts of West Bengal and Jharkhand, students faced immense systemic hurdles: lack of entrance information, zero guidance on university preference filling, fear of metropolitan campus cultures, and severe economic deprivation.
                </p>
                <p>
                  The founders intentionally chose <strong>March 8th (International Women’s Day)</strong> as ShED Forum’s Foundation Day, establishing an unbreakable core principle from inception: no community empowerment is complete or lasting without the equal higher education of women. What began as informal counseling on hostel lawns quickly crystallized into a formal pledge—every admitted scholar commits to adopting and mentoring the incoming junior cohort.
                </p>
                <p>
                  During summer and winter semester breaks, scholars returned to their home villages across Seemanchal to conduct grassroots awareness assemblies. They visited rural homes, sat with hesitant parents, dispelled long-standing misconceptions about sending young women to central university hostels, and explained the roadmap to crack national entrance examinations.
                </p>
              </div>
            </div>

            {/* Chapter 2: EXPANSION AND MODELS (Arrow Badge Banner) */}
            <div className="pt-6 space-y-4">
              <div className="inline-flex items-center">
                <div className="bg-[#ffbe00] text-black font-extrabold text-sm sm:text-base px-6 py-2.5 uppercase tracking-wider shadow-xs">
                  EXPANSION AND MODELS
                </div>
                <div className="w-0 h-0 border-y-[18px] border-y-transparent border-l-[16px] border-l-[#ffbe00]" />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  The success of the MANUU unit sparked demand across northern campuses. In 2021, ShED Forum formally established its Jamia Millia Islamia (JMI) Unit in New Delhi and launched the <strong>SCG Centre (Shershahbadi Guidance & Coaching)</strong>—a dedicated academic wing providing 100% free CUET and central university entrance exam preparation, printed study modules, and NTA-aligned mock tests. To date, over 450+ successful admissions have been secured through this free coaching initiative.
                </p>
                <p>
                  In 2022, expansion continued to Aligarh Muslim University (AMU), building a powerhouse chapter of 220+ scholars. To overcome language insecurity among students from vernacular Hindi and Urdu medium schooling, ShED introduced the intensive <strong>6-Month Spoken English & Soft Skills Bootcamp</strong>, equipping scholars to excel in university seminar halls and group discussions.
                </p>
                <p>
                  Seasonal admission help-desks were deployed directly at campus admission gates across Jawaharlal Nehru University (JNU), Delhi University (DU), University of Hyderabad (HCU), and Patna University. The forum established a peer adoption model ensuring that every first-generation newcomer receives immediate hostel verification, book bank assistance, and zero loneliness or imposter syndrome.
                </p>
                <p>
                  Today, the movement encompasses over 1,000+ graduates thriving in civil services (UPSC/BPSC), judiciary, academia, multinational corporations, and corporate banking. Operating under the visionary guidance of Chief Academic Patron <strong>Prof. Mujibur Rahman</strong> and senior advisors, ShED Forum has achieved a 38%+ female higher education representation, standing as an inspiring benchmark of self-reliant community transformation.
                </p>
              </div>
            </div>

            {/* Quote Attribution */}
            <div className="text-right italic font-serif text-slate-700 text-sm sm:text-base pt-6 pb-6">
              In the words of Prof. Mujibur Rahman, Chief Academic Patron of ShED Forum
            </div>

          </div>

          {/* Full-Screen Timeline Section */}
          <div className="mt-8">
            <OurJourneyTimeline showHeaderTitle={true} />
          </div>

          {/* Our Reach 2025-26 Metrics Banner at bottom of story */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <ReachImpactSection title="Our Reach 2025-26" />
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ORGANISATIONAL STRUCTURE & GOVERNANCE (SCREENSHOT 1 REDESIGNED)     */}
      {/* ========================================================================= */}
      {activeTab === 'structure' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16 animate-in fade-in duration-300">
          
          {/* Header with Pratham Eyebrow Badge & Standfirst */}
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#ffbe00] text-black px-3.5 py-1.5 rounded-sm shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Democratic Governance Architecture</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-[1.2]">
              Governance & Executive Hierarchy
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A transparent, community-owned, and democratically governed educational movement. Guided by senior academicians, legal luminaries, and doctoral scholars across India’s central universities, ensuring total policy integrity and grassroots execution.
            </p>
          </div>

          {/* Keynote Patron Banner Linking to /patrons-message */}
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-50 border border-amber-200/90 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ffbe00] text-black flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Award className="w-6 h-6 text-black" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-serif-heading font-bold text-slate-900 text-lg sm:text-xl">
                    Guided by Respected Patrons & Chief Mentors
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-300">
                    Institutional Integrity
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
                  Read keynote messages and guiding principles from Chief Academic Patron <strong>Prof. Mujibur Rahman</strong> (Jamia Millia Islamia) and our senior advisory mentors.
                </p>
              </div>
            </div>
            <Link
              to="/patrons-message"
              className="bg-[#0052B4] hover:bg-[#003D87] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap active:scale-98 shrink-0 cursor-pointer"
            >
              <span>Read Patron Messages</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>

          {/* 4 Governance Composition Tiers Cards */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-xl font-serif-heading font-semibold text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#0052B4]" />
                <span>Four Pillars of Institutional Governance</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                Democratic Checks & Balances
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {governanceComposition.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden"
                  >
                    {/* Top Accent Gradient Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                      item.accent === 'amber' ? 'bg-[#ffbe00]' :
                      item.accent === 'blue' ? 'bg-[#0052B4]' :
                      item.accent === 'emerald' ? 'bg-[#009A44]' : 'bg-purple-600'
                    }`} />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          item.accent === 'amber' ? 'bg-amber-50 text-amber-900 border-amber-200' :
                          item.accent === 'blue' ? 'bg-blue-50 text-blue-900 border-blue-200' :
                          item.accent === 'emerald' ? 'bg-emerald-50 text-emerald-900 border-emerald-200' :
                          'bg-purple-50 text-purple-900 border-purple-200'
                        }`}>
                          {item.badge}
                        </span>
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          item.accent === 'amber' ? 'bg-amber-100 text-amber-800' :
                          item.accent === 'blue' ? 'bg-blue-100 text-[#0052B4]' :
                          item.accent === 'emerald' ? 'bg-emerald-100 text-[#009A44]' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div>
                        <div className="text-3xl sm:text-4xl font-serif-heading font-black tracking-tight text-slate-900">
                          {item.count}
                          <span className="text-xs font-sans font-semibold text-slate-400 ml-1.5 uppercase">Members</span>
                        </div>
                        <h4 className="text-lg font-serif-heading font-bold text-slate-900 mt-1">{item.title}</h4>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Core Mandate</div>
                      <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                        {item.mandate}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Executive Operating Wings - Reimagined 4-card matrix */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-xl font-serif-heading font-semibold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#0052B4]" />
                <span>Executive Operating Wings</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                On-Ground Operational Architecture
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {executiveWings.map((exec, idx) => {
                const Icon = exec.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-lg transition-all space-y-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0052B4] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                          {exec.type}
                        </span>
                        <h4 className="font-serif-heading font-bold text-slate-900 text-base sm:text-lg">
                          {exec.name}
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-slate-700" />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {exec.desc}
                    </p>

                    <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/70 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Composition Structure
                      </span>
                      <p className="text-xs font-mono text-slate-700 leading-relaxed font-medium">
                        {exec.composition}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 100% Voluntary Model Trust Badge */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 sm:p-8 flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#009A44] text-white flex items-center justify-center shrink-0 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif-heading font-bold text-slate-900 text-sm sm:text-base">
                100% Voluntary Pro-Bono Governance
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Every patron, advisory mentor, executive committee lead, and university coordinator serves strictly on an unpaid, pro-bono basis. Zero administrative salaries or honorariums are deducted, ensuring that 100% of community contributions directly empower rural students.
              </p>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: ACADEMIC CALENDAR (SCREENSHOT 2 REDESIGNED)                        */}
      {/* ========================================================================= */}
      {activeTab === 'calendar' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16 animate-in fade-in duration-300">
          
          {/* Header with Pratham Eyebrow Badge & Standfirst */}
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#ffbe00] text-black px-3.5 py-1.5 rounded-sm shadow-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>Year-Round Student Lifecycle Roadmap</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-[1.2]">
              Annual Academic Calendar
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A comprehensive 365-day operational itinerary guiding rural students through every stage: from initial entrance coaching and admissions helpdesks to campus orientation, one-to-one scholar mentorship, and career placement.
            </p>
          </div>

          {/* 3 Chronological Roadmap Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {academicPhases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative`}
                >
                  {/* Phase Top Header Bar */}
                  <div className="p-6 sm:p-7 space-y-4 border-b border-slate-100">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${phase.accentBg} ${phase.accentText} ${phase.accentBorder}`}>
                        {phase.phaseNumber} • {phase.season}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        {phase.badge}
                      </span>
                      <h3 className="text-xl font-serif-heading font-bold text-slate-900 mt-0.5">
                        {phase.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {phase.description}
                    </p>
                  </div>

                  {/* Checklist of Deliverables */}
                  <div className="p-6 sm:p-7 space-y-4 flex-grow bg-slate-50/40">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#009A44]" />
                      <span>Key Program Deliverables</span>
                    </div>

                    <div className="space-y-3.5">
                      {phase.milestones.map((m, mIdx) => (
                        <div key={mIdx} className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
                          <div className="flex items-start gap-2">
                            <span className="text-[#ffbe00] font-black shrink-0 text-sm mt-0.5">●</span>
                            <h4 className="text-xs font-bold text-slate-900 leading-snug">
                              {m.title}
                            </h4>
                          </div>
                          <p className="text-[11px] text-slate-600 pl-4 leading-relaxed font-normal">
                            {m.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Cohort Footer */}
                  <div className="p-4 sm:p-5 bg-slate-100/70 border-t border-slate-200/80">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Target Cohort</div>
                    <div className="text-xs font-semibold text-slate-800 mt-0.5 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#0052B4] shrink-0" />
                      <span>{phase.cohort}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Quick Helpdesk Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#ffbe00] bg-black/40 px-3 py-1 rounded-full border border-amber-400/30 inline-block">
                Admissions & Guidance Active
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-heading font-semibold text-white">
                Preparing for CUET or Central University Admissions?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl leading-relaxed">
                Connect directly with our campus coordinators for free syllabus materials, form assistance, and hostel guidance.
              </p>
            </div>
            <button
              onClick={() => onOpenHelpdesk ? onOpenHelpdesk() : window.location.href = '/contact'}
              className="bg-[#ffbe00] hover:bg-[#e5ab00] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 whitespace-nowrap active:scale-98 cursor-pointer shrink-0"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Connect with Helpdesk</span>
            </button>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: ANNUAL BUDGET ALLOCATION (SCREENSHOT 3 REDESIGNED)                  */}
      {/* ========================================================================= */}
      {activeTab === 'budget' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16 animate-in fade-in duration-300">
          
          {/* Header with Pratham Eyebrow Badge & Standfirst */}
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-[#ffbe00] text-black px-3.5 py-1.5 rounded-sm shadow-xs">
              <Coins className="w-3.5 h-3.5" />
              <span>Fiscal Transparency & Resource Allocation</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-[1.2]">
              Annual Budget Allocation & Audit
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A transparent, fully audited distribution of voluntary community contributions. We operate on a zero-overhead philosophy—ensuring every rupee funded by community patrons and alumni goes directly to empowering first-generation scholars.
            </p>
          </div>

          {/* 3 Top Governance & Transparency Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-50/60 to-white rounded-3xl p-6 sm:p-7 border border-amber-200/90 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                  Annual Impact Pool
                </span>
                <Coins className="w-5 h-5 text-amber-700" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif-heading font-black text-slate-900">
                ₹7.5L – ₹9.5L
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Estimated annual budget sustaining 8 educational initiatives across 7 premier central universities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50/60 to-white rounded-3xl p-6 sm:p-7 border border-emerald-200/90 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                  Administrative Overhead
                </span>
                <ShieldCheck className="w-5 h-5 text-[#009A44]" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif-heading font-black text-[#009A44]">
                0.0% Deductions
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Zero administrative salaries or executive office rents. 100% of donor funding directly reaches the students.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50/60 to-white rounded-3xl p-6 sm:p-7 border border-blue-200/90 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300">
                  Funding Mechanism
                </span>
                <HeartHandshake className="w-5 h-5 text-[#0052B4]" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif-heading font-black text-[#0052B4]">
                100% Voluntary
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Sustained through collective goodwill contributions by community patrons, alumni scholars, and educators.
              </p>
            </div>
          </div>

          {/* Transparent Budget Table / Program Matrix */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-xl font-serif-heading font-semibold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0052B4]" />
                <span>Component-Wise Expenditure Breakdown</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                Audited Operational Schedule
              </span>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      <th className="py-4 px-6">Program / Initiative</th>
                      <th className="py-4 px-6">Category</th>
                      <th className="py-4 px-6">Operating Cycle</th>
                      <th className="py-4 px-6">Annual Allocation</th>
                      <th className="py-4 px-6 min-w-[280px]">Primary Utilization Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {budgetBreakdown.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-900">
                          {row.item}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${row.badgeColor}`}>
                            {row.category}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-slate-600 font-medium whitespace-nowrap text-xs">
                          {row.timeline}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <span className="text-xs sm:text-sm font-bold text-[#009A44] font-mono bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                            {row.cost}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-xs text-slate-600 font-normal leading-relaxed">
                          {row.utilization}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Dual-Tier Audit Governance Card & Support CTA */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#ffbe00] bg-black/40 px-3 py-1 rounded-full border border-amber-400/30 inline-block">
                Governance & Verification
              </span>
              <h3 className="text-2xl font-serif-heading font-semibold text-white">
                Dual-Tier Financial Oversight & Public Accountability
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Every disbursement requires dual authorization from the Central Treasury and the Advisory Committee. Annual financial summaries are presented during the General Body Assembly and verified by senior community patrons.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onOpenHelpdesk ? onOpenHelpdesk() : window.location.href = '/contact'}
                className="bg-[#ffbe00] hover:bg-[#e5ab00] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Support an Initiative</span>
              </button>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Contact Treasury</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </Link>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
