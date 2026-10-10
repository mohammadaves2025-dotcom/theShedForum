import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Sparkles, Users, Calendar, 
  CheckCircle2, Clock, Video, FileText, Award, 
  HelpCircle, ChevronDown 
} from 'lucide-react';

interface CentrePageProps {
  onOpenHelpdesk: () => void;
}

export const CentrePage: React.FC<CentrePageProps> = ({ onOpenHelpdesk }) => {
  const [activeTab, setActiveTab] = useState<'curriculum' | 'schedule' | 'universities' | 'faq'>('curriculum');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      title: "100% Free Tuition",
      desc: "Zero fees charged at any stage. Supported entirely by voluntary alumni contributions and community patrons.",
      icon: Award,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      title: "Alumni & Research Faculty",
      desc: "Sessions led by doctoral research fellows, master’s scholars, and top CUET rankers from Jamia, AMU, JNU & DU.",
      icon: Users,
      color: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      title: "Live Interactive Classes",
      desc: "Daily interactive classes on Google Meet with real-time doubt clearing, session notes, and recorded recaps.",
      icon: Video,
      color: "text-purple-600 bg-purple-50 border-purple-200"
    },
    {
      title: "Weekly Full Mock Tests",
      desc: "Simulated NTA computer-based test drills, previous year question analyses, and detailed performance rankings.",
      icon: FileText,
      color: "text-amber-600 bg-amber-50 border-amber-200"
    }
  ];

  const modules = [
    {
      code: "Section III",
      title: "General Test (NTA CUET Pattern)",
      hours: "40+ Hours Live",
      topics: [
        "Quantitative Aptitude & Arithmetic Reasoning",
        "Logical, Analytical & Non-Verbal Reasoning",
        "General Knowledge & Static Awareness",
        "Current Affairs & Indian Polity Basics",
        "Data Interpretation & Graph Analysis"
      ],
      faculty: "JMI & DU Research Scholars",
      badge: "Core Exam Requirement"
    },
    {
      code: "Section I",
      title: "Language & Verbal Aptitude",
      hours: "30+ Hours Live",
      topics: [
        "Reading Comprehension (Literary & Factual Passages)",
        "Vocabulary, Synonyms, Antonyms & Idioms",
        "Grammar, Sentence Correction & Para Jumbles",
        "Urdu Language Optionals & Literature Basics",
        "Speed Reading & Elimination Strategies"
      ],
      faculty: "Department of English & Urdu Mentors",
      badge: "Scoring Module"
    },
    {
      code: "Section II",
      title: "Domain Subjects (Social Sciences & Humanities)",
      hours: "50+ Hours Live",
      topics: [
        "Political Science (Indian Constitution & Contemporary World)",
        "History (Themes in Indian History I, II, III)",
        "Sociology (Structure of Indian Society & Social Change)",
        "Geography & Fundamentals of Human Geography",
        "Legal Studies & Fundamental Rights Overview"
      ],
      faculty: "JNU & MANUU Doctoral Fellows",
      badge: "Degree Specific"
    },
    {
      code: "Bonus Module",
      title: "Admission Form & Preference Sheet Guidance",
      hours: "Personal 1-on-1",
      topics: [
        "NTA CUET Application Form Step-by-Step Filing",
        "University-wise Subject Combination Strategies",
        "Category & Reservation Certificate Verification",
        "Preference Sheet Ordering for Top Colleges",
        "Hostel Application Navigation & Local Verification"
      ],
      faculty: "Central Admission Helpdesk Team",
      badge: "Crucial for Admission"
    }
  ];

  const scheduleItems = [
    {
      day: "Monday & Wednesday",
      time: "6:00 PM – 7:30 PM IST",
      subject: "Quantitative Aptitude & Numerical Reasoning",
      mode: "Live Google Meet + Digital Notes",
      faculty: "Md. Tariq (JMI Central Placement Cell)"
    },
    {
      day: "Tuesday & Thursday",
      time: "6:00 PM – 7:30 PM IST",
      subject: "English Verbal Ability & Reading Comprehension",
      mode: "Live Google Meet + Vocabulary Quizzes",
      faculty: "Aamir Abbas & Guest English Faculty"
    },
    {
      day: "Friday & Saturday",
      time: "6:00 PM – 8:00 PM IST",
      subject: "Domain Social Sciences (Pol. Science / History / Sociology)",
      mode: "Lecture Series + PYQ Analysis",
      faculty: "Research Fellows (JNU & MANUU)"
    },
    {
      day: "Sunday Morning",
      time: "10:00 AM – 1:00 PM IST",
      subject: "All-India Full CUET Mock Test & Doubt Resolution",
      mode: "Timed Online CBT Drill",
      faculty: "Central Academic Mentorship Board"
    }
  ];

  const targetUniversities = [
    {
      name: "Maulana Azad National Urdu University",
      code: "MANUU • Hyderabad",
      foundedUnit: "Founding Unit (2018)",
      desc: "Over 200+ active ShED scholars across B.Ed, M.A, CS & Ph.D faculties.",
      highlight: "Strong residential hostel support & active helpdesk"
    },
    {
      name: "Jamia Millia Islamia",
      code: "JMI • New Delhi",
      foundedUnit: "Unit Est. 2021",
      desc: "170+ scholars in Engineering, Social Sciences, Law, and Mass Comm.",
      highlight: "Prime capital mentorship & UPSC preparation hub"
    },
    {
      name: "Aligarh Muslim University",
      code: "AMU • Aligarh",
      foundedUnit: "Unit Est. 2022",
      desc: "220+ students across Engineering, Medicine, Science, and Humanities.",
      highlight: "Largest unit network with dedicated residential mentors"
    },
    {
      name: "Jawaharlal Nehru University",
      code: "JNU • New Delhi",
      foundedUnit: "Unit Est. 2022",
      desc: "Doctoral research scholars guiding international fellowships and NET-JRF.",
      highlight: "Higher research and policy dialogue circles"
    },
    {
      name: "University of Delhi",
      code: "DU • New Delhi",
      foundedUnit: "Unit Est. 2023",
      desc: "Undergraduates and postgraduates across North and South Campus colleges.",
      highlight: "Top DU college preference mapping & guidance"
    },
    {
      name: "University of Hyderabad & Patna Univ",
      code: "HCU & Patna Univ",
      foundedUnit: "Regional Hubs",
      desc: "Science fellowships in South India and local state transition support in Bihar.",
      highlight: "Science research and regional state university transition"
    }
  ];

  const faqs = [
    {
      q: "Is SCG Coaching really 100% free of charge?",
      a: "Yes, absolutely. The ShED Forum does not charge any student a single rupee for coaching, mock tests, or study materials. It is entirely sustained by the voluntary contributions of our alumni network, university mentors, and community patrons."
    },
    {
      q: "How are the classes conducted?",
      a: "Classes are held live on Google Meet in the evening (typically 6:00 PM to 8:00 PM IST) so that students can attend after their regular school or college classes. Class recordings and PDF notes are shared immediately in our dedicated WhatsApp study circles."
    },
    {
      q: "Who is eligible to join the SCG coaching program?",
      a: "Any student appearing for or who has passed Class 12th and wishes to appear for CUET UG, or graduate students targeting Central University Master's programs (JMI, AMU, MANUU, JNU, DU, HCU, Patna Univ), especially those from the Seemanchal region and marginalized backgrounds."
    },
    {
      q: "What study materials and test series are provided?",
      a: "Students receive chapter-wise compiled revision notes, curated previous years' solved question banks (PYQs), weekly topic quizzes, and full-length simulated mock tests modeled after the official NTA examination interface."
    },
    {
      q: "How does the SCG helpdesk support admission form filling?",
      a: "Form mistakes are one of the biggest reasons rural students miss out on top universities. Our university unit volunteers provide one-on-one video calls and helpline guidance to ensure students choose the right subject combinations and upload correct documents."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 lg:space-y-20">
      
      {/* --- HERO BANNER --- */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border border-slate-700">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SCG Centre • Shershahbadi Guidance & Coaching</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading font-semibold text-white tracking-tight leading-[1.15]">
            Free CUET & Central University Entrance Coaching
          </h1>

          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            The flagship educational engine of The ShED Forum. Providing 100% free comprehensive coaching, live mentor sessions, mock tests, and admission guidance to connect rural scholars to India’s premier central universities.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenHelpdesk}
              className="bg-white hover:bg-slate-100 text-[#0052B4] font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-xs sm:text-sm flex items-center gap-2 active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Enroll for CUET Batch 2026 (Free)</span>
            </button>
            <a
              href="#curriculum"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-xl border border-white/20 transition-all text-xs sm:text-sm flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-emerald-300" />
              <span>View Syllabus & Schedule</span>
            </a>
          </div>
        </div>

        {/* Quick Stat Highlights Bar */}
        <div className="relative z-10 pt-8 mt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-white">450+</div>
            <div className="text-xs text-slate-300 font-medium">Students Coached Annually</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-emerald-300">100% Free</div>
            <div className="text-xs text-slate-300 font-medium">Zero Admission or Material Fees</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-amber-300">7 Campuses</div>
            <div className="text-xs text-slate-300 font-medium">Active University Guidance Hubs</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-cyan-300">38% Women</div>
            <div className="text-xs text-slate-300 font-medium">Female Higher Education Enrollment</div>
          </div>
        </div>
      </div>

      {/* --- REAL SESSION PHOTO GALLERY STRIP --- */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0052B4]">Ground Reality</span>
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-slate-900">
              Inside Our Live Coaching & Guidance Sessions
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Real photographs from SCG classes & workshops</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-64 group shadow-xs">
            <img 
              src="/gallery/jmi-unit/jmi-scg-session-indoor-01.jpg" 
              alt="SCG Indoor Classroom Session" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-xs font-bold text-cyan-300">New Delhi Hall</span>
              <h4 className="text-sm font-semibold">Packed SCG Entrance Guidance Session</h4>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-64 group shadow-xs">
            <img 
              src="/gallery/online-events/online-scg-google-meet-02.jpg" 
              alt="SCG Google Meet Online Live Class" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-xs font-bold text-emerald-300">Live Virtual Class</span>
              <h4 className="text-sm font-semibold">Google Meet Interactive Lecture (41+ Aspirants)</h4>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-64 group shadow-xs">
            <img 
              src="/gallery/jmi-unit/jmi-career-pathways-event-01.jpg" 
              alt="Career Pathways Seminar" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-xs font-bold text-amber-300">Annual Academic Drive</span>
              <h4 className="text-sm font-semibold">Career Pathways & University Subject Guidance</h4>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOUR CORE PILLARS --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className={`w-12 h-12 rounded-2xl ${p.color} border flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif-heading font-semibold text-slate-900 group-hover:text-[#0052B4] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- INTERACTIVE TABS SECTION (Curriculum, Schedule, Universities, FAQs) --- */}
      <div id="curriculum" className="space-y-8">
        
        {/* Tab Switcher Pills */}
        <div className="flex items-center justify-center">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'curriculum'
                  ? 'bg-white text-[#0052B4] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>CUET Curriculum (4 Modules)</span>
            </button>

            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'schedule'
                  ? 'bg-white text-[#0052B4] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Weekly Timetable</span>
            </button>

            <button
              onClick={() => setActiveTab('universities')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'universities'
                  ? 'bg-white text-[#0052B4] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Target Universities</span>
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'faq'
                  ? 'bg-white text-[#0052B4] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Coaching FAQs</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CURRICULUM */}
        {activeTab === 'curriculum' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {modules.map((mod, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0052B4] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                      {mod.code}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {mod.hours}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-heading font-semibold text-slate-900">
                    {mod.title}
                  </h3>

                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Key Syllabus Topics:</span>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                      {mod.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#009A44] shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#0052B4]" />
                    <span>Faculty: {mod.faculty}</span>
                  </span>
                  <span className="font-bold text-slate-700">{mod.badge}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: SCHEDULE */}
        {activeTab === 'schedule' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100">
              {scheduleItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-1 max-w-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0052B4] uppercase tracking-wider">{item.day}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {item.time}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{item.subject}</h4>
                    <p className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#009A44]" />
                      <span>Led by: {item.faculty}</span>
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
                    <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-lg border border-purple-200 flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5" />
                      <span>{item.mode}</span>
                    </span>
                    <button
                      onClick={onOpenHelpdesk}
                      className="text-xs font-bold text-[#0052B4] hover:underline"
                    >
                      Get Class Link
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-between text-xs text-[#0052B4] font-medium">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>All classes are conducted online via Google Meet. WhatsApp group invites are shared upon registration.</span>
              </span>
              <button onClick={onOpenHelpdesk} className="font-bold underline shrink-0 ml-4">
                Join Batch
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: TARGET UNIVERSITIES */}
        {activeTab === 'universities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {targetUniversities.map((uni, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#0052B4] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {uni.code}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {uni.foundedUnit}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">{uni.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{uni.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-[#009A44] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{uni.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: FAQS */}
        {activeTab === 'faq' && (
          <div className="space-y-3 max-w-3xl mx-auto animate-in fade-in duration-200">
            {faqs.map((f, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-xs sm:text-sm hover:text-[#0052B4] transition-colors"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180 text-[#0052B4]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>

      {/* --- BOTTOM CALLOUT BANNER --- */}
      <div className="bg-gradient-to-br from-slate-900 to-[#0052B4] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions Helpdesk Active</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-white">
            Need Free CUET Books, Notes or Form Filing Assistance?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
            Our SCG Centre volunteers will walk you through your subject options, eligibility criteria, and examination center allocations at no cost.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={onOpenHelpdesk}
            className="bg-white hover:bg-slate-100 text-[#0052B4] font-bold px-6 py-3.5 rounded-xl text-xs transition-all shadow-md active:scale-95 text-center"
          >
            Connect With SCG Helpdesk
          </button>
          <a
            href="tel:+917737280758"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-xl border border-white/20 text-xs transition-all text-center"
          >
            Call: +91 77372-80758
          </a>
        </div>
      </div>

    </div>
  );
};
