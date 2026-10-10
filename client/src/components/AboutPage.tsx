import React, { useState } from 'react';
import { 
  ShieldCheck, Target, Heart, 
  Calendar, Award, ChevronRight, CheckCircle2
} from 'lucide-react';
import { ReachImpactSection } from './ReachImpactSection';

export const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'history' | 'structure' | 'calendar' | 'budget'>('history');

  const governanceComposition = [
    { title: "Patrons", count: 7, desc: "Eminent academicians, legal luminaries & lawmakers providing overarching vision.", badge: "Visionary Council" },
    { title: "Advisory Committee", count: 14, desc: "Senior educators and professionals ensuring institutional integrity.", badge: "Policy Board" },
    { title: "Life Time Members", count: 51, desc: "Founding members and community benefactors supporting financial & moral strength.", badge: "Foundational Pillar" },
    { title: "Core Committee", count: 11, desc: "Key executive strategists overseeing operational performance.", badge: "Executive Lead" }
  ];

  const executiveStructure = [
    { name: "Central Working Committee (CWC)", desc: "1 Unit Incharge per university + 1 SCG Incharge + 3 Members + Finance (1+3) + Placement (1+2) + Media (1+2)" },
    { name: "University Working Committees (UWC)", desc: "Unit Secretary + 2 Executive Members + Unit Placement Coordinator + Media Incharge + Treasurer" },
    { name: "Central Placement Cell", desc: "Coordinates job-oriented training, internships, civil services guidance, and campus placements." },
    { name: "Media & Communication Head", desc: "Manages social media, press releases, newsletters, and outreach campaigns." }
  ];

  const academicCalendar = [
    { phase: "Phase 1: Admission & Outreach (Jan - Jun)", items: ["University Help Desk For Students", "Grassroot Campaign (Summer & Winter)", "SCG CUET Coaching Program", "Career Counseling & Guidance"] },
    { phase: "Phase 2: Post Enrollment Skills (Jul - Dec)", items: ["Freshers' Orientation Programme (August)", "English Spoken & Communication Training", "Unit-Wise One-to-One Mentorship", "Career Guidance Workshops"] },
    { phase: "Phase 3: Community & Culture (Annual)", items: ["Iftar-cum-Cultural Programme (Ramazan)", "Monthly Literary & Cultural Meetups", "Job-Oriented Skill Workshops", "Farewell & Valedictory Meet"] }
  ];

  const budgetBreakdown = [
    { item: "Grassroot Higher Education Campaign", cost: "₹2,50,000 - ₹3,00,000" },
    { item: "SCG CUET Coaching Preparation Program", cost: "₹3,00,000 - ₹3,50,000" },
    { item: "English Spoken & Communication Skills Training", cost: "₹1,50,000 - ₹2,00,000" },
    { item: "University Help Desks Across 7 Campuses", cost: "₹25,000 - ₹30,000" },
    { item: "Freshers' Orientation Programme", cost: "₹25,000 - ₹30,000" },
    { item: "Iftar-cum-Cultural Educational Meetup", cost: "₹25,000 - ₹30,000" },
    { item: "Foundation Day & Women's Day Celebration", cost: "₹25,000 - ₹30,000" },
    { item: "Job-Oriented Training & Career Support Cell", cost: "₹25,000 - ₹30,000" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-slate-700">
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
            Institutional Blueprint • Est. 2018
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-white tracking-tight leading-tight">
            Shershahbadi Educational Dialogue Forum
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            A community-led educational initiative established in 2018 to bridge the gap between rural Shershahbadi youth across Seemanchal and India’s premier central universities.
          </p>
        </div>
      </div>

      {/* Our Reach 2025-26 */}
      <ReachImpactSection title="Reach 2025-26" />

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar gap-2">
        <button
          onClick={() => setActiveTab('history')}
          className={`px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${activeTab === 'history' ? 'border-[#0052B4] text-[#0052B4] bg-blue-50' : 'border-transparent text-slate-600 hover:text-[#0052B4]'}`}
        >
          Founding Story & Vision
        </button>
        <button
          onClick={() => setActiveTab('structure')}
          className={`px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${activeTab === 'structure' ? 'border-[#0052B4] text-[#0052B4] bg-blue-50' : 'border-transparent text-slate-600 hover:text-[#0052B4]'}`}
        >
          Governance & Hierarchy
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${activeTab === 'calendar' ? 'border-[#0052B4] text-[#0052B4] bg-blue-50' : 'border-transparent text-slate-600 hover:text-[#0052B4]'}`}
        >
          Academic Calendar
        </button>
        <button
          onClick={() => setActiveTab('budget')}
          className={`px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${activeTab === 'budget' ? 'border-[#0052B4] text-[#0052B4] bg-blue-50' : 'border-transparent text-slate-600 hover:text-[#0052B4]'}`}
        >
          Annual Budget Allocation
        </button>
      </div>

      {/* Tab 1: History & Vision */}
      {activeTab === 'history' && (
        <div className="space-y-12 animate-in fade-in duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <h2 className="text-3xl font-serif-heading font-semibold text-slate-900">Background & Community Context</h2>
              <p>
                The Shershahbadi community, primarily residing in the Seemanchal region of Bihar (Katihar, Purnea, Araria, Kishanganj) as well as parts of West Bengal and Jharkhand, continues to face significant educational and socio-economic challenges. As an educationally and economically deprived community, many families struggle to meet daily needs and have limited access to quality educational resources, information, and guidance.
              </p>
              <p>
                As a result, participation in higher education and representation in premier academic institutions have historically remained low. ShED Forum was founded on the conviction that higher education is the single most effective catalyst to break generational poverty.
              </p>
              <p>
                Through free-of-cost coaching, academic guidance, mentorship, counseling, and dedicated campus help-desks, ShED Forum assists students in navigating admission processes at Jamia Millia Islamia (JMI), Aligarh Muslim University (AMU), Jawaharlal Nehru University (JNU), University of Delhi (DU), Maulana Azad National Urdu University (MANUU), University of Hyderabad (HCU), and Patna University.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-7 border border-slate-200 space-y-5 shadow-xs">
              <h3 className="text-xl font-serif-heading font-semibold text-slate-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#0052B4]" />
                Vision Statement
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed italic border-l-4 border-[#0052B4] pl-3 py-1 font-serif">
                “To build an educated, empowered, and progressive Shershahbadi community that actively participates in the academic, social, and economic mainstream through equitable access to quality education and higher learning opportunities.”
              </p>

              <h3 className="text-xl font-serif-heading font-semibold text-slate-900 pt-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#009A44]" />
                Mission Objectives
              </h3>
              <ul className="text-xs text-slate-700 space-y-2.5 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009A44] shrink-0 mt-0.5" />
                  <span>Promote higher education as a tool for social & economic upliftment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009A44] shrink-0 mt-0.5" />
                  <span>Identify, guide, and mentor students from grassroots levels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009A44] shrink-0 mt-0.5" />
                  <span>Provide 100% free coaching, counseling, and help-desk support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009A44] shrink-0 mt-0.5" />
                  <span>Build a robust alumni network of 1,000+ graduates for mentorship.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* International Women's Day Milestone */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-3xl p-8 space-y-3">
            <div className="flex items-center gap-2 text-amber-950 font-semibold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-700" />
              <span>Foundation Day Milestone</span>
            </div>
            <h3 className="text-2xl font-serif-heading font-semibold text-slate-900">
              Why March 8th (International Women's Day) is ShED's Foundation Day
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              When ShED Forum was established in 2018, while a few young men had entered universities, female representation was almost non-existent. The founders intentionally chose International Women’s Day as Foundation Day to send a loud statement: <strong>No community empowerment is complete without the equal educational advancement of women.</strong> Today, female participation in ShED coaching programs stands at 38%.
            </p>
          </div>

        </div>
      )}

      {/* Tab 2: Organisational Structure */}
      {activeTab === 'structure' && (
        <div className="space-y-10 animate-in fade-in duration-300">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif-heading font-semibold text-slate-900">Governance & Executive Hierarchy</h2>
            <p className="text-xs text-slate-600 font-medium">
              Transparent, democratic, and community-driven organizational structure ensuring policy integrity and execution.
            </p>
          </div>

          {/* Composition Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceComposition.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
                <span className="text-[10px] font-semibold uppercase text-[#0052B4] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  {item.badge}
                </span>
                <div className="text-4xl font-serif-heading font-bold text-[#0052B4]">{item.count}</div>
                <div className="text-base font-semibold text-slate-900">{item.title}</div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Executive Committees */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif-heading font-semibold text-slate-900">Executive & Operational Committees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {executiveStructure.map((exec, idx) => (
                <div key={idx} className="bg-slate-50 rounded-3xl p-7 border border-slate-200 space-y-2">
                  <h4 className="text-base font-serif-heading font-semibold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#0052B4]" />
                    {exec.name}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">{exec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Academic Calendar */}
      {activeTab === 'calendar' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif-heading font-semibold text-slate-900">Annual Academic Calendar</h2>
            <p className="text-xs text-slate-600 font-medium">
              Year-round roadmap of admission helpdesks, entrance coaching, orientation, and cultural meets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicCalendar.map((cal, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-[#0052B4] font-semibold text-sm border-b border-slate-100 pb-3">
                  <Calendar className="w-5 h-5 text-[#0052B4]" />
                  <span>{cal.phase}</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700 font-normal">
                  {cal.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-[#009A44] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Budget Allocation */}
      {activeTab === 'budget' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif-heading font-semibold text-slate-900">Annual Estimated Budget Overview</h2>
            <p className="text-xs text-slate-600 font-medium">
              Estimated Total Annual Operational Budget: <strong>₹9,50,000</strong>
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs max-w-3xl mx-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0F172A] text-white text-xs uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4">Initiative Program</th>
                  <th className="px-6 py-4 text-right">Estimated Budget</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {budgetBreakdown.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{row.item}</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#0052B4]">{row.cost}</td>
                  </tr>
                ))}
                <tr className="bg-slate-100 font-semibold text-slate-900">
                  <td className="px-6 py-4">Estimated Total Annual Budget</td>
                  <td className="px-6 py-4 text-right text-[#009A44] text-base font-bold">₹9,50,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
