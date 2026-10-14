import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, BookOpen, Users, Compass, Award, 
  HeartHandshake, Megaphone, Briefcase, GraduationCap, 
  Sparkles, ArrowRight, ShieldCheck, MapPin, 
  FileText, Check
} from 'lucide-react';
import { PageHeroBanner } from './PageHeroBanner';

interface ShedCentrePageProps {
  onOpenHelpdesk?: () => void;
}

export const ShedCentrePage: React.FC<ShedCentrePageProps> = ({ onOpenHelpdesk }) => {
  const [activeTab, setActiveTab] = useState<'hub' | 'campaigns' | 'placement' | 'skills' | 'welfare'>('hub');

  const tabs = [
    { id: 'hub', label: 'Central Resource Hub', icon: Building2, tag: 'Dialogue' },
    { id: 'campaigns', label: 'Grassroots Outreach', icon: Megaphone, tag: 'Field' },
    { id: 'placement', label: 'Career & Placement Cell', icon: Briefcase, tag: 'Careers' },
    { id: 'skills', label: 'Spoken English Bootcamp', icon: BookOpen, tag: 'Skills' },
    { id: 'welfare', label: 'Mentorship & Student Aid', icon: HeartHandshake, tag: 'Support' },
  ] as const;

  const corePillars = [
    {
      title: "Central Dialogue & Policy Hub",
      desc: "Nerve center for academic research, higher education policy dialogues, and student advocacy across central universities.",
      icon: Compass,
      color: "border-blue-200 bg-blue-50/50 text-[#0052B4]"
    },
    {
      title: "Grassroots Field Mobilization",
      desc: "Direct village-to-village outreach across Seemanchal, Bengal & Jharkhand eliminating educational hesitation and counseling parents.",
      icon: Megaphone,
      color: "border-emerald-200 bg-emerald-50/50 text-[#009A44]"
    },
    {
      title: "Central Placement & Career Cell",
      desc: "Structured guidance for civil services (UPSC/BPSC), academic NET-JRF fellowships, corporate placements, and internship drives.",
      icon: Briefcase,
      color: "border-amber-200 bg-amber-50/50 text-amber-700"
    },
    {
      title: "Scholar Peer Adoption Model",
      desc: "Foundational ethos: every scholar who enters a premier university adopts and mentors incoming juniors, leaving zero loneliness.",
      icon: Users,
      color: "border-purple-200 bg-purple-50/50 text-purple-700"
    }
  ];

  const grassrootsDistricts = [
    { name: "Katihar", state: "Bihar", highlight: "Primary mobilization zone with 15+ high school drives annually" },
    { name: "Purnea", state: "Bihar", highlight: "District career counseling hubs and rural community dialogues" },
    { name: "Araria", state: "Bihar", highlight: "Focus on women scholar entrance outreach and rural workshops" },
    { name: "Kishanganj", state: "Bihar", highlight: "Close coordination with university preparation circles" },
    { name: "Malda & Murshidabad", state: "West Bengal", highlight: "Border district outreach and higher studies awareness" },
    { name: "Sahibganj & Pakur", state: "Jharkhand", highlight: "Grassroots student identification and scholarship aid" }
  ];

  const careerTracks = [
    {
      track: "Civil & Judicial Services",
      desc: "Dedicated study circles and mentorship by serving officers and BPSC/UPSC qualified alumni from Jamia & AMU.",
      deliverables: ["Answer-writing critique groups", "GS foundation syllabus mapping", "State PCS interview panels"]
    },
    {
      track: "UGC-NET / JRF & Doctoral Fellowships",
      desc: "Guidance for central university master's scholars aspiring for assistant professorships and doctoral admissions.",
      deliverables: ["Paper I teaching & research aptitude", "Subject domain revision notes", "Research proposal vetting"]
    },
    {
      track: "Corporate & Technical Hiring",
      desc: "Preparing university undergraduates for campus placement drives, MNC hiring, banking, and IT roles.",
      deliverables: ["Resume engineering clinics", "Mock HR interview panels", "Soft skill & aptitude workshops"]
    },
    {
      track: "Internships & Youth Governance",
      desc: "Connecting university students with think-tanks, parliamentary offices, legal internships, and grassroots NGOs.",
      deliverables: ["Application letter reviews", "Summer internship matching", "Policy research mentorship"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image="/gallery/manuu-unit/manuu-outdoor-audience-day-01.jpg"
        badgeText="SHED CENTRE"
        alt="ShED Centre - Shershahbadi Educational Dialogue Hub"
      />

      {/* ========================================================================= */}
      {/* REDESIGNED FLOATING PILL TAB NAVIGATION BAR                               */}
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
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 sm:gap-2.5 whitespace-nowrap cursor-pointer min-h-[42px] select-none ${
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14 lg:space-y-16">
        
        {/* --- EDITORIAL HEADING & QUICK CTAS --- */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Central Community Command • Educational Empowerment</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-[1.2]">
            Central Educational Dialogue & Community Resource Hub
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            The institutional nerve center of The ShED Forum. While our coaching wing (SGC Centre) prepares students for entrance exams, the <strong>ShED Centre</strong> drives grassroots village campaigns, career placements, spoken English bootcamps, student welfare grants, and gender empowerment across India’s central universities.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenHelpdesk}
              className="bg-[#0052B4] hover:bg-[#003D87] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center gap-2 active:scale-98 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Connect with ShED Centre Team</span>
            </button>
            <Link
              to="/sgc-centre"
              className="bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold px-5 py-3.5 rounded-xl border border-amber-300 transition-all text-xs sm:text-sm flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-amber-700" />
              <span>Go to SGC Coaching Centre →</span>
            </Link>
          </div>

          {/* Quick Stat Counters */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 mt-6">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#0052B4]">1,000+</div>
              <div className="text-xs text-slate-500 font-medium">Graduates Connected</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#009A44]">7 Campuses</div>
              <div className="text-xs text-slate-500 font-medium">Central University Chapters</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-amber-600">12+ Districts</div>
              <div className="text-xs text-slate-500 font-medium">Rural Field Reach</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-purple-600">38%+</div>
              <div className="text-xs text-slate-500 font-medium">Female Representation</div>
            </div>
          </div>
        </div>

        {/* --- 4 CORE PILLARS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-lg transition-all space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${p.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading font-bold text-slate-900 text-lg leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CENTRAL RESOURCE HUB & DIALOGUE PLATFORM                           */}
        {/* ========================================================================= */}
        {activeTab === 'hub' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0052B4] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Apex Knowledge Command
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-slate-900">
                  A Central Resource Hub for First-Generation Scholars
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  ShED Centre serves as the central documentation, policy dialogue, and community archive repository. It operates to bridge the historic information deficit that has kept rural Seemanchal youth disconnected from national academic opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052B4] flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Higher Education Repository</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Maintains comprehensive entrance syllabus modules, past year question archives, centralized course selection guides, and university seat matrix data.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009A44] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Policy & Dialogue Roundtables</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Convenes university professors, civil society leaders, and lawmakers to discuss affirmative educational strategies, literacy barriers, and Seemanchal development.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Community Documentation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Publishes annual impact booklets, research surveys on socio-educational conditions, and records oral histories of first-generation educational pioneers.
                  </p>
                </div>
              </div>
            </div>

            {/* Guiding Principles Banner */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ffbe00] text-black flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-heading font-bold text-slate-900 text-lg">
                    The Founding Doctrine of ShED Centre
                  </h3>
                  <span className="text-xs text-slate-500">Established at MANUU Hyderabad in 2018</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-amber-200/70 space-y-1">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#009A44]" />
                    <span>The Chain of Scholar Mentorship</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-5">
                    Every admitted student commits to mentoring at least one incoming junior scholar the following year, ensuring sustainable, compounding community empowerment.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-amber-200/70 space-y-1">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#009A44]" />
                    <span>Unbreakable Commitment to Women’s Education</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-5">
                    Founded deliberately on March 8th (International Women's Day), ensuring that female scholarship remains the non-negotiable benchmark of our movement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: GRASSROOTS OUTREACH CAMPAIGNS                                      */}
        {/* ========================================================================= */}
        {activeTab === 'campaigns' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="space-y-3 max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#009A44] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Ground Campaigns Command
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-slate-900">
                Village-to-Village Educational Mobilization
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                During summer and winter semester breaks, university scholars return home to the villages of Seemanchal, Bengal, and Jharkhand to hold town-hall counseling sessions, visit rural homes, and dispel misconceptions about central university education.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grassrootsDistricts.map((d, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-lg transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#0052B4]" />
                      <h4 className="font-bold text-slate-900 text-base">{d.name}</h4>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md">
                      {d.state}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {d.highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1 max-w-xl">
                <h4 className="font-serif-heading font-bold text-slate-900 text-lg">
                  Parent Counseling & Dispelling Hostels Misconceptions
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Many rural parents hesitate to send daughters to metropolitan campuses like Delhi, Aligarh, or Hyderabad. Our university volunteers visit homes in person to provide verified hostel assurances, safety facts, and financial clarity.
                </p>
              </div>
              <button
                onClick={onOpenHelpdesk}
                className="bg-[#009A44] hover:bg-[#007A34] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Request Village Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CENTRAL PLACEMENT & CAREER SUPPORT CELL (CPC)                      */}
        {/* ========================================================================= */}
        {activeTab === 'placement' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="space-y-3 max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Livelihood & Professional Launchpad
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-slate-900">
                Central Placement & Career Development Cell
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Securing a university degree is only half the journey. ShED Centre’s Central Placement Cell guides scholars into civil services, judicial appointments, higher academic research (NET/JRF), and corporate corporate careers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerTracks.map((tr, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-lg transition-all space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif-heading font-bold text-slate-900 text-lg">
                      {tr.track}
                    </h3>
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {tr.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Interventions
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {tr.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#009A44] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Alumni Mentors Callout */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffbe00] bg-black/40 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                  Alumni Mentorship Network
                </span>
                <h4 className="text-xl font-serif-heading font-bold text-white">
                  Over 1,000+ Alumni Guiding Current Scholars
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Our alumni serving in state civil services, public prosecutors, multinational banks, and universities actively conduct mock interviews and resume reviews.
                </p>
              </div>
              <button
                onClick={onOpenHelpdesk}
                className="bg-[#ffbe00] hover:bg-[#e5ab00] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all whitespace-nowrap cursor-pointer shrink-0"
              >
                Connect with Career Cell
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: SPOKEN ENGLISH & SOFT SKILLS BOOTCAMP                              */}
        {/* ========================================================================= */}
        {activeTab === 'skills' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="space-y-3 max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0052B4] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                Language Empowerment Bootcamp
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-slate-900">
                6-Month Intensive Spoken English & Communication Program
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Students from vernacular Hindi and Urdu medium schools often face severe language insecurity and imposter syndrome upon entering premier central universities. This bootcamp builds presentation mastery, vocabulary, and confident seminar communication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
                <span className="text-xs font-bold text-[#0052B4] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 block w-fit">
                  Phase 1: Foundation
                </span>
                <h4 className="font-bold text-slate-900 text-base">Overcoming Insecurity & Phobia</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Basic conversational drills, common sentence patterns, pronunciation refinement, and eliminating hesitation in asking questions in university lecture halls.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
                <span className="text-xs font-bold text-[#009A44] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 block w-fit">
                  Phase 2: Academic Fluency
                </span>
                <h4 className="font-bold text-slate-900 text-base">Presentations & Group Discussions</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structuring seminar PowerPoint presentations, defending research points in tutorials, extempore speaking, and formal academic paper reading.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200 block w-fit">
                  Phase 3: Professional Polish
                </span>
                <h4 className="font-bold text-slate-900 text-base">Email Writing & Interview Skills</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Formal correspondence with professors, drafting CVs and cover letters, professional telephone etiquette, and confidence in HR interview rounds.
                </p>
              </div>
            </div>

            <div className="bg-blue-50/70 border border-blue-200 rounded-3xl p-6 sm:p-8 flex items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="font-serif-heading font-bold text-slate-900 text-base">
                  100% Free for All Enrolled ShED Scholars
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Classes are conducted online in evening cohorts so students from AMU, Jamia, MANUU, DU, and JNU can participate seamlessly.
                </p>
              </div>
              <button
                onClick={onOpenHelpdesk}
                className="bg-[#0052B4] hover:bg-[#003D87] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                Inquire for Next Cohort
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: MENTORSHIP & EMERGENCY STUDENT AID                                 */}
        {/* ========================================================================= */}
        {activeTab === 'welfare' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="space-y-3 max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                Welfare & Financial Aid
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-slate-900">
                Peer Adoption, Emergency Grants & Book Banks
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                No deserving student should drop out of a premier university due to lack of semester fees, examination expenses, or essential textbooks. ShED Centre coordinates emergency scholar assistance pools supported by community patrons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Unit-Wise Scholar Adoption</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every first-year student is paired with a senior mentor in the same faculty to guide hostel life, library usage, and emotional well-being.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009A44] flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Emergency Student Micro-Grants</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Disburses rapid financial relief for emergency examination fees, hostel mess deposits, and critical medical assistance for scholars in need.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Campus Book Banks</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maintains circulating textbook banks across university hostel units so students don't need to purchase costly academic reference volumes.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1 max-w-xl">
                <h4 className="font-serif-heading font-bold text-slate-900 text-base">
                  National Scholarship Assistance Desk (NSP / Post-Matric)
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our dedicated volunteers guide students through the complex documentation, income certificate verification, and portal application filing for government scholarship stipends.
                </p>
              </div>
              <button
                onClick={onOpenHelpdesk}
                className="bg-[#0052B4] hover:bg-[#003D87] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                Apply for Student Aid
              </button>
            </div>
          </div>
        )}

      </div>

      {/* --- BOTTOM CALLOUT BANNER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-br from-slate-900 to-[#0052B4] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-[#ffbe00] text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Connect with Central Hub</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-white">
              Looking for Campus Guidance, Career Mentorship or Student Support?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Reach out directly to ShED Centre coordinators across our 7 Central University units or submit an inquiry to our central helpdesk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenHelpdesk}
              className="bg-[#ffbe00] hover:bg-[#e5ab00] text-black font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 text-center cursor-pointer"
            >
              Contact ShED Centre Desk
            </button>
            <Link
              to="/sgc-centre"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-xl border border-white/20 text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Explore SGC Coaching</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
