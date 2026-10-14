import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  GraduationCap, MapPin, Users, Mail,
  CheckCircle2, Sparkles, ArrowLeft,
  Camera, Images, ShieldCheck, Wallet,
  Briefcase, Megaphone, Building2, BadgeCheck,
  UserCheck, Calendar
} from 'lucide-react';
import { ApiService } from '../services/api';
import { ImageLightbox } from './ImageLightbox';
import type { LightboxItem } from './ImageLightbox';
import { PageHeroBanner } from './PageHeroBanner';

interface CommitteeMember {
  role: string;
  roleBadge: string;
  name: string;
  department: string;
  responsibilities: string[];
  themeColor: 'blue' | 'emerald' | 'amber' | 'purple';
  iconType: 'secretary' | 'treasurer' | 'placement' | 'media';
  cwcTag: string;
  initials: string;
}

const UNIT_COMMITTEES: Record<string, CommitteeMember[]> = {
  'manuu-unit': [
    {
      role: 'Unit Secretary',
      roleBadge: 'Executive Head',
      name: 'Syed Rehan Quadri',
      department: 'Ph.D. Scholar • School of Education & Training',
      responsibilities: [
        'Liaises directly with the Central Working Committee (CWC)',
        'Leads on-campus student welfare, hostel assistance & grievance redressal',
        'Directs central university admission helpdesks and freshers orientation'
      ],
      themeColor: 'blue',
      iconType: 'secretary',
      cwcTag: 'CWC Chapter Representative',
      initials: 'RQ'
    },
    {
      role: 'Treasurer',
      roleBadge: 'Finance & Accounts',
      name: 'Zubair Ahmad Alam',
      department: 'M.Com • Dept. of Commerce & Business Management',
      responsibilities: [
        'Administers student emergency relief funds & mess fee subsidies',
        'Maintains transparent accounts under strict CWC fiscal guidelines',
        'Prepares dual-signatory quarterly financial reports and audit books'
      ],
      themeColor: 'emerald',
      iconType: 'treasurer',
      cwcTag: 'Dual-Signatory Officer',
      initials: 'ZA'
    },
    {
      role: 'Unit Placement Coordinator',
      roleBadge: 'Career & Industry',
      name: 'Afreen Sultana',
      department: 'MCA • Dept. of Computer Science & Information Technology',
      responsibilities: [
        'Coordinates with ShED Central Placement & Career Cell (CPC)',
        'Organizes industry mock interview clinics, resume reviews & coding camps',
        'Connects final-year graduates with corporate & tech alumni networks'
      ],
      themeColor: 'amber',
      iconType: 'placement',
      cwcTag: 'CPC Campus Lead',
      initials: 'AS'
    },
    {
      role: 'Media Incharge',
      roleBadge: 'PR & Communications',
      name: 'Danish Iqbal',
      department: 'M.A. Journalism & Mass Communication (MCJ)',
      responsibilities: [
        'Directs university admission alerts, press statements & campaign bulletins',
        'Supervises campus event photography, video archives & digital media',
        'Manages official MANUU unit social handles and public relations'
      ],
      themeColor: 'purple',
      iconType: 'media',
      cwcTag: 'Official Media Bureau',
      initials: 'DI'
    }
  ],
  'jmi-unit': [
    {
      role: 'Unit Secretary',
      roleBadge: 'Executive Head',
      name: 'Tariq Anwar Shershahbadi',
      department: 'M.A. Political Science • Faculty of Social Sciences',
      responsibilities: [
        'Coordinates campus chapter operations with CWC apex leadership',
        'Mentors UPSC and central university competitive examination aspirants',
        'Organizes Jamia annual freshers reception, seminars & iftar meets'
      ],
      themeColor: 'blue',
      iconType: 'secretary',
      cwcTag: 'CWC Chapter Representative',
      initials: 'TA'
    },
    {
      role: 'Treasurer',
      roleBadge: 'Finance & Accounts',
      name: 'Salman Khurshid',
      department: 'M.Com • Faculty of Commerce & Business Studies',
      responsibilities: [
        'Manages emergency accommodation grants for rural freshers arriving in Delhi',
        'Disburses scholarship stipends and reference textbook bookbanks',
        'Ensures transparent accounting audited periodically by CWC treasury'
      ],
      themeColor: 'emerald',
      iconType: 'treasurer',
      cwcTag: 'Dual-Signatory Officer',
      initials: 'SK'
    },
    {
      role: 'Unit Placement Coordinator',
      roleBadge: 'Career & Industry',
      name: 'Shahnawaz Akhtar',
      department: 'B.Tech • Faculty of Engineering & Technology',
      responsibilities: [
        'Coordinates engineering, IT, finance and corporate internship drives',
        'Partners with Jamia University Placement Cell & ShED Central Placement Cell',
        'Runs weekly technical mock interview circles and career bootcamps'
      ],
      themeColor: 'amber',
      iconType: 'placement',
      cwcTag: 'CPC Campus Lead',
      initials: 'SA'
    },
    {
      role: 'Media Incharge',
      roleBadge: 'PR & Communications',
      name: 'Munazzah Perween',
      department: 'M.A. Convergent Journalism • AJK MIRC',
      responsibilities: [
        'Produces digital coverage of capital initiatives, roundtables & seminars',
        'Distributes verified admission bulletins across rural schools in Seemanchal',
        'Maintains JMI chapter press relations, print statements & publications'
      ],
      themeColor: 'purple',
      iconType: 'media',
      cwcTag: 'Official Media Bureau',
      initials: 'MP'
    }
  ],
  'amu-unit': [
    {
      role: 'Unit Secretary',
      roleBadge: 'Executive Head',
      name: 'Faizan Ahmad Siddiqui',
      department: 'Ph.D. Research Scholar • Dept. of History',
      responsibilities: [
        'Chairs AMU chapter executive council under CWC constitutional oversight',
        'Oversees hall accommodation verification and library study groups',
        'Facilitates academic roundtables and peer mentorship circles'
      ],
      themeColor: 'blue',
      iconType: 'secretary',
      cwcTag: 'CWC Chapter Representative',
      initials: 'FS'
    },
    {
      role: 'Treasurer',
      roleBadge: 'Finance & Accounts',
      name: 'Nadeem Akhtar',
      department: 'MBA • Dept. of Business Administration',
      responsibilities: [
        'Manages emergency medical and educational fee relief funds for students',
        'Audits student event budgets, hall functions and dining subsidies',
        'Maintains verifiable ledger accessible to CWC financial auditors'
      ],
      themeColor: 'emerald',
      iconType: 'treasurer',
      cwcTag: 'Dual-Signatory Officer',
      initials: 'NA'
    },
    {
      role: 'Unit Placement Coordinator',
      roleBadge: 'Career & Industry',
      name: 'Farhan Rasheed',
      department: 'B.Tech Mechanical • Zakir Husain College of Engg. & Technology',
      responsibilities: [
        'Bridges AMU engineering & management scholars with corporate recruiters',
        'Drives corporate referrals across Delhi-NCR, Bengaluru, and Hyderabad',
        'Organizes industry mentor fireside chats with distinguished alumni'
      ],
      themeColor: 'amber',
      iconType: 'placement',
      cwcTag: 'CPC Campus Lead',
      initials: 'FR'
    },
    {
      role: 'Media Incharge',
      roleBadge: 'PR & Communications',
      name: 'Sajjad Hussain',
      department: 'M.A. Mass Communication • Dept. of Journalism',
      responsibilities: [
        'Documents AMU historic events, lectures, and scholar milestones',
        'Broadcasts entrance counseling alerts for 11th, Diploma & BA/B.Sc programs',
        'Designs verified social graphics and official event press bulletins'
      ],
      themeColor: 'purple',
      iconType: 'media',
      cwcTag: 'Official Media Bureau',
      initials: 'SH'
    }
  ],
  'jnu-unit': [
    {
      role: 'Unit Secretary',
      roleBadge: 'Executive Head',
      name: 'Md. Imranul Haque',
      department: 'Ph.D. Scholar • School of Social Sciences (SSS)',
      responsibilities: [
        'Coordinates research scholar advocacy and ongoing CWC sync',
        'Manages JNU central library reading circles and NET/JRF study desks',
        'Chairs regular chapter consultations on academic policy and scholarships'
      ],
      themeColor: 'blue',
      iconType: 'secretary',
      cwcTag: 'CWC Chapter Representative',
      initials: 'IH'
    },
    {
      role: 'Treasurer',
      roleBadge: 'Finance & Accounts',
      name: 'Arshad Warsi',
      department: 'Ph.D. • School of International Studies (SIS)',
      responsibilities: [
        'Administers book grants, thesis printing subsidies, and research travel relief',
        'Maintains strict fiscal transparency aligned with CWC guidelines',
        'Authorizes emergency scholar travel and healthcare assistance'
      ],
      themeColor: 'emerald',
      iconType: 'treasurer',
      cwcTag: 'Dual-Signatory Officer',
      initials: 'AW'
    },
    {
      role: 'Unit Placement Coordinator',
      roleBadge: 'Career & Industry',
      name: 'Nahid Parveen',
      department: 'M.Sc. • School of Environmental Sciences',
      responsibilities: [
        'Liaises with policy think-tanks, international NGOs, and research labs',
        'Guides scholars toward UGC-NET/JRF, CSIR and doctoral fellowships',
        'Facilitates academic CV workshops and conference participation grants'
      ],
      themeColor: 'amber',
      iconType: 'placement',
      cwcTag: 'CPC Campus Lead',
      initials: 'NP'
    },
    {
      role: 'Media Incharge',
      roleBadge: 'PR & Communications',
      name: 'Rehan Fazal',
      department: 'School of Language, Literature & Culture Studies',
      responsibilities: [
        'Publishes research abstracts and academic op-eds penned by members',
        'Maintains JNU unit digital archive and event communiqués',
        'Coordinates national public dissemination of university admission notices'
      ],
      themeColor: 'purple',
      iconType: 'media',
      cwcTag: 'Official Media Bureau',
      initials: 'RF'
    }
  ],
  'du-unit': [
    {
      role: 'Unit Secretary',
      roleBadge: 'Executive Head',
      name: 'Wasim Akram',
      department: 'M.A. History • Delhi School of Economics / Arts Faculty',
      responsibilities: [
        'Oversees North & South Campus collegiate student coordination',
        'Represents DU chapter at CWC all-India council assemblies',
        'Manages CUET orientation clinics for undergraduate aspirants'
      ],
      themeColor: 'blue',
      iconType: 'secretary',
      cwcTag: 'CWC Chapter Representative',
      initials: 'WA'
    },
    {
      role: 'Treasurer',
      roleBadge: 'Finance & Accounts',
      name: 'Adnan Sami',
      department: 'B.Com (Hons) • Shri Ram College of Commerce (SRCC)',
      responsibilities: [
        'Audits North Campus accommodation assistance funding and hostel deposits',
        'Coordinates transparent student fee support with CWC treasury',
        'Publishes bi-annual ledger reconciliations for public audit'
      ],
      themeColor: 'emerald',
      iconType: 'treasurer',
      cwcTag: 'Dual-Signatory Officer',
      initials: 'AS'
    },
    {
      role: 'Unit Placement Coordinator',
      roleBadge: 'Career & Industry',
      name: 'Muskaan Parween',
      department: 'Postgraduate • Dept. of Operational Research',
      responsibilities: [
        'Connects DU scholars with top consulting, corporate and finance firms',
        'Hosts case-study prep workshops and corporate mock GDs',
        'Bridges students with Central Placement Cell industry networks'
      ],
      themeColor: 'amber',
      iconType: 'placement',
      cwcTag: 'CPC Campus Lead',
      initials: 'MP'
    },
    {
      role: 'Media Incharge',
      roleBadge: 'PR & Communications',
      name: 'Faisal Masood',
      department: 'B.A. Journalism • Delhi College of Arts & Commerce',
      responsibilities: [
        'Oversees multimedia content, student spotlights, and campaign reels',
        'Runs real-time CSAS admission helpdesk broadcasts across North India',
        'Coordinates media interviews and community press relations'
      ],
      themeColor: 'purple',
      iconType: 'media',
      cwcTag: 'Official Media Bureau',
      initials: 'FM'
    }
  ],
  'hcu-unit': [
    {
      role: 'Unit Secretary',
      roleBadge: 'Executive Head',
      name: 'Md. Shabbir Alam',
      department: 'Ph.D. • School of Humanities',
      responsibilities: [
        'Leads Hyderabad Central University chapter student advocacy',
        'Maintains regular reporting and monthly governance coordination with CWC',
        'Directs campus academic seminars, library reading circles & freshers welcome'
      ],
      themeColor: 'blue',
      iconType: 'secretary',
      cwcTag: 'CWC Chapter Representative',
      initials: 'SA'
    },
    {
      role: 'Treasurer',
      roleBadge: 'Finance & Accounts',
      name: 'Tanweer Ashraf',
      department: 'Integrated M.Sc. Economics • School of Economics',
      responsibilities: [
        'Disburses mess dues relief and study material assistance for rural freshers',
        'Enforces zero-waste budget policies mandated by CWC financial charter',
        'Provides transparent monthly financial reporting to the student body'
      ],
      themeColor: 'emerald',
      iconType: 'treasurer',
      cwcTag: 'Dual-Signatory Officer',
      initials: 'TA'
    },
    {
      role: 'Unit Placement Coordinator',
      roleBadge: 'Career & Industry',
      name: 'Rumana Bano',
      department: 'M.Tech • School of Computer & Information Sciences',
      responsibilities: [
        'Partners with Hyderabad IT corridor recruiters across HITEC City & Gachibowli',
        'Organizes software development and data analytics mock drills',
        'Connects graduating scholars with technical internship pipelines'
      ],
      themeColor: 'amber',
      iconType: 'placement',
      cwcTag: 'CPC Campus Lead',
      initials: 'RB'
    },
    {
      role: 'Media Incharge',
      roleBadge: 'PR & Communications',
      name: 'Khalid Jameel',
      department: 'M.A. Communication • S.N. School of Arts & Communication',
      responsibilities: [
        'Leads visual storytelling of southern university chapter achievements',
        'Produces verified entrance guides for students traveling from Bihar/Bengal',
        'Maintains HCU chapter newsletter and regional press archives'
      ],
      themeColor: 'purple',
      iconType: 'media',
      cwcTag: 'Official Media Bureau',
      initials: 'KJ'
    }
  ],
  'patna-unit': [
    {
      role: 'Unit Secretary',
      roleBadge: 'Executive Head',
      name: 'Kaif Raza',
      department: 'Postgraduate • Patna College / Dept. of Economics',
      responsibilities: [
        'Directs Bihar state capital chapter operations under CWC apex leadership',
        'Coordinates state-level competitive coaching desks (BPSC/UPSC study circles)',
        'Oversees inter-college student networking and campus welfare'
      ],
      themeColor: 'blue',
      iconType: 'secretary',
      cwcTag: 'CWC Chapter Representative',
      initials: 'KR'
    },
    {
      role: 'Treasurer',
      roleBadge: 'Finance & Accounts',
      name: 'Danish Anwar',
      department: 'B.Sc. Mathematics • Patna Science College',
      responsibilities: [
        'Administers local student emergency relief and library reference funds',
        'Audits expenditure with full CWC accounting oversight',
        'Ensures financial equity for first-generation rural scholars in Patna'
      ],
      themeColor: 'emerald',
      iconType: 'treasurer',
      cwcTag: 'Dual-Signatory Officer',
      initials: 'DA'
    },
    {
      role: 'Unit Placement Coordinator',
      roleBadge: 'Career & Industry',
      name: 'Shahbaz Alam',
      department: 'M.Com • Vanijya Mahavidyalaya (PU)',
      responsibilities: [
        'Leads government exam (BPSC/SSC/Banking) mentorship circles',
        'Coordinates banking & local corporate placement pipelines',
        'Facilitates mock interviews with alumni officers and senior mentors'
      ],
      themeColor: 'amber',
      iconType: 'placement',
      cwcTag: 'CPC Campus Lead',
      initials: 'SA'
    },
    {
      role: 'Media Incharge',
      roleBadge: 'PR & Communications',
      name: 'Rizwan Haider',
      department: 'PG Diploma in Journalism • Patna University',
      responsibilities: [
        'Manages regional media relations across Bihar print and digital press',
        'Publishes grassroots scholarship and admission counseling updates',
        'Directs photojournalism archives of local campus and social initiatives'
      ],
      themeColor: 'purple',
      iconType: 'media',
      cwcTag: 'Official Media Bureau',
      initials: 'RH'
    }
  ]
};

const getUnitCommittee = (idOrCode: string): CommitteeMember[] => {
  const normalized = (idOrCode || '').toLowerCase().replace('-unit', '');
  const key = Object.keys(UNIT_COMMITTEES).find(k => 
    k.includes(normalized) || normalized.includes(k.replace('-unit', ''))
  );
  return (key && UNIT_COMMITTEES[key]) || UNIT_COMMITTEES['manuu-unit'];
};

interface UnitDetailPageProps {
  unitIdProp?: string;
  onOpenHelpdesk: () => void;
}

export const UnitDetailPage: React.FC<UnitDetailPageProps> = ({ unitIdProp, onOpenHelpdesk }) => {
  const params = useParams();
  const unitId = unitIdProp || params.unitId || 'manuu-unit';

  const [unit, setUnit] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    ApiService.getUnitById(unitId).then((data) => {
      setUnit(data);
      setLoading(false);
    });
  }, [unitId]);

  const images: string[] = unit?.images || (unit?.image ? [unit.image] : []);

  const lbItems: LightboxItem[] = images.map((src, i) => ({
    src,
    title: `${unit?.code} — Photo ${i + 1}`,
    caption: `${unit?.name}, ${unit?.location}`,
    category: unit?.code + ' Campus Unit',
  }));

  // lb-goto event from filmstrip
  const handleGoto = useCallback((e: Event) => {
    setLightboxIndex((e as CustomEvent).detail.index);
  }, []);
  useEffect(() => {
    window.addEventListener('lb-goto', handleGoto);
    return () => window.removeEventListener('lb-goto', handleGoto);
  }, [handleGoto]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="inline-block animate-spin text-[#0052B4]">
          <GraduationCap className="w-12 h-12" />
        </div>
        <p className="text-xs text-slate-500 mt-2 font-bold">Loading Unit Details...</p>
      </div>
    );
  }

  if (!unit) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-black text-slate-900">Unit Not Found</h2>
        <p className="text-xs text-slate-600 font-medium">The requested university unit page could not be located.</p>
        <Link to="/units" className="inline-flex items-center gap-2 bg-[#0052B4] text-white text-xs px-5 py-2.5 rounded-xl font-black">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Units</span>
        </Link>
      </div>
    );
  }

  const hasImages = images.length > 0;
  const committee = getUnitCommittee(unit.id || unit.code);

  const getRoleIcon = (iconType: CommitteeMember['iconType'], className = "w-4 h-4") => {
    switch (iconType) {
      case 'secretary':
        return <ShieldCheck className={className} />;
      case 'treasurer':
        return <Wallet className={className} />;
      case 'placement':
        return <Briefcase className={className} />;
      case 'media':
        return <Megaphone className={className} />;
    }
  };

  const getThemeClasses = (color: CommitteeMember['themeColor']) => {
    switch (color) {
      case 'blue':
        return {
          badge: 'bg-blue-50 text-[#0052B4] border-blue-200',
          avatar: 'bg-gradient-to-br from-[#0052B4] to-blue-700 text-white',
          iconBg: 'bg-blue-100 text-[#0052B4]',
          accentBorder: 'border-l-4 border-l-[#0052B4]',
          checkColor: 'text-[#0052B4]'
        };
      case 'emerald':
        return {
          badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          avatar: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white',
          iconBg: 'bg-emerald-100 text-emerald-700',
          accentBorder: 'border-l-4 border-l-emerald-600',
          checkColor: 'text-emerald-600'
        };
      case 'amber':
        return {
          badge: 'bg-amber-50 text-amber-900 border-amber-200',
          avatar: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white',
          iconBg: 'bg-amber-100 text-amber-800',
          accentBorder: 'border-l-4 border-l-amber-500',
          checkColor: 'text-amber-600'
        };
      case 'purple':
        return {
          badge: 'bg-purple-50 text-purple-900 border-purple-200',
          avatar: 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white',
          iconBg: 'bg-purple-100 text-purple-700',
          accentBorder: 'border-l-4 border-l-purple-600',
          checkColor: 'text-purple-600'
        };
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image={images[0] || "/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg"}
        badgeText={`${unit.code} UNIT`}
        alt={unit.name}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">

        {/* ── Top Navigation & Campus Quick Switcher ─────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-50/90 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-slate-200">
          <Link to="/units" className="inline-flex items-center gap-2 text-xs font-black text-slate-700 hover:text-[#0052B4] transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4 text-[#0052B4]" />
            <span>Back to All 7 Units</span>
          </Link>

          {/* Quick University Chapter Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline-block">
              Switch Campus:
            </span>
            {[
              { id: 'manuu-unit', code: 'MANUU', logo: '/logos/universities/manuu.png' },
              { id: 'jmi-unit', code: 'JMI', logo: '/logos/universities/jmi.png' },
              { id: 'amu-unit', code: 'AMU', logo: '/logos/universities/amu.png' },
              { id: 'jnu-unit', code: 'JNU', logo: '/logos/universities/jnu.png' },
              { id: 'du-unit', code: 'DU', logo: '/logos/universities/du.png' },
              { id: 'hcu-unit', code: 'HCU', logo: '/logos/universities/hcu.png' },
              { id: 'patna-unit', code: 'Patna Univ', logo: '/logos/universities/patna.png' }
            ].map((u) => {
              const isSelected = unit.id === u.id || (unit.code && unit.code.toLowerCase() === u.code.toLowerCase());
              return (
                <Link
                  key={u.id}
                  to={`/${u.id}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#0052B4] text-white shadow-sm ring-2 ring-blue-300/50'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 hover:text-[#0052B4]'
                  }`}
                >
                  <img
                    src={u.logo}
                    alt=""
                    className="w-3.5 h-3.5 object-contain rounded-full bg-white"
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                  />
                  <span>{u.code}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── Main Editorial Overview Card (Redesigned with Official University Logo) ── */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm space-y-8 relative overflow-hidden">
          
          {/* Background Watermark Crest */}
          <img
            src={unit.logo || `/logos/universities/${unit.code.toLowerCase().replace(/[^a-z]/g, '')}.png`}
            alt=""
            aria-hidden="true"
            className="absolute -right-10 -bottom-10 w-72 h-72 sm:w-96 sm:h-96 object-contain opacity-[0.035] pointer-events-none filter grayscale select-none"
          />

          {/* Top Row: Official Emblem + Heading Block */}
          <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 relative z-10 border-b border-slate-100 pb-8">
            
            {/* Floating Official Crest Seal Card */}
            <div className="shrink-0 relative group self-center md:self-start">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-slate-200/90 ring-8 ring-blue-50/70 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={unit.logo || `/logos/universities/${unit.code.toLowerCase().replace(/[^a-z]/g, '')}.png`}
                  alt={`${unit.name} Crest`}
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src = '/logos/universities/manuu.png';
                  }}
                />
              </div>
              <div className="absolute -bottom-2.5 inset-x-0 flex justify-center">
                <span className="text-[9px] font-black uppercase tracking-wider bg-slate-900 text-amber-300 px-2.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  Official Seal
                </span>
              </div>
            </div>

            {/* Title & Institutional Badges */}
            <div className="space-y-3.5 flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="text-xs font-bold text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 shadow-xs flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#0052B4]" />
                  Established {unit.established}
                </span>
                <span className="text-xs font-bold text-slate-800 bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200">
                  {unit.code} Campus Unit
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Recognized Central University
                </span>
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-amber-700" />
                  CWC Governance
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-tight">
                {unit.name}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-4xl mx-auto md:mx-0">
                {unit.description}
              </p>
            </div>
          </div>

          {/* ── Key Campus Stat Cards (4 Pillars) ────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1">
              <div className="flex items-center gap-2 text-slate-500">
                <MapPin className="w-4 h-4 text-[#0052B4]" />
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Campus City</span>
              </div>
              <p className="text-sm sm:text-base font-black text-slate-900 truncate">{unit.location}</p>
              <p className="text-[11px] text-slate-500 font-medium">Residential Campus</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1">
              <div className="flex items-center gap-2 text-emerald-700">
                <Users className="w-4 h-4 text-[#009A44]" />
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800">Student Body</span>
              </div>
              <p className="text-sm sm:text-base font-black text-emerald-950">{unit.studentsCount}+ Active Scholars</p>
              <p className="text-[11px] text-emerald-700 font-medium">UG • PG • Ph.D. Fellows</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
              <div className="flex items-center gap-2 text-blue-700">
                <GraduationCap className="w-4 h-4 text-[#0052B4]" />
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-800">Unit Foundation</span>
              </div>
              <p className="text-sm sm:text-base font-black text-slate-900">Year {unit.established}</p>
              <p className="text-[11px] text-slate-500 font-medium">{unit.isFirstUnit ? 'Founding First Chapter' : 'Premier University Chapter'}</p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-1">
              <div className="flex items-center gap-2 text-amber-800">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-800">Governance</span>
              </div>
              <p className="text-sm sm:text-base font-black text-slate-900">4-Member UWC Board</p>
              <p className="text-[11px] text-slate-500 font-medium">CWC Apex Oversight</p>
            </div>
          </div>

          {/* ── Actions Row ────────────────────────────────────────────── */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenHelpdesk}
                className="inline-flex items-center gap-2 bg-[#0052B4] hover:bg-[#003D87] text-white font-black py-3.5 px-6 rounded-xl text-xs transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Contact {unit.code} Helpdesk</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('uwc-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3.5 px-5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-[#0052B4]" />
                <span>View Campus Committee</span>
              </button>
            </div>

            {hasImages && (
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                <Camera className="w-4 h-4 text-[#0052B4]" />
                <span>{images.length} Archival Photographs</span>
              </div>
            )}
          </div>
        </div>

      {/* ── Highlights & Support Desk ────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Column: Key Functions & University Working Committee Showcase */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-8 shadow-sm">
          
          {/* Key Functions */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Unit Key Operational Functions</span>
              <span className="text-xs font-bold text-[#0052B4] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Active Chapter
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {unit.highlights?.map((item: string, idx: number) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 transition-colors flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0052B4] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Official University Working Committee (UWC) Section ────── */}
          <div id="uwc-section" className="pt-6 border-t border-slate-200 space-y-5 scroll-mt-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-slate-900">
                  University Working Committee (UWC)
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Executive campus leadership managed under the Central Working Committee (CWC)
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#0052B4] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 w-fit flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0052B4]" />
                <span>CWC Apex Oversight</span>
              </span>
            </div>

            {/* 4 Committee Members Matrix (Clean Modern UI - Names & Portfolios) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {committee.map((member, idx) => {
                const styling = getThemeClasses(member.themeColor);
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center gap-4 relative group ${styling.accentBorder}`}
                  >
                    {/* Modern Avatar with Initials & Role Mini-Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-serif-heading font-bold text-lg shadow-sm shrink-0 relative ${styling.avatar}`}>
                      {member.initials}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-xs border border-slate-100">
                        {getRoleIcon(member.iconType, 'w-3 h-3 text-slate-700')}
                      </div>
                    </div>

                    {/* Member Details: Role, Name, Dept */}
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1 text-[10.5px] font-black px-2.5 py-0.5 rounded-md border ${styling.badge}`}>
                          {getRoleIcon(member.iconType, 'w-3 h-3')}
                          <span>{member.role}</span>
                        </span>
                      </div>

                      <h4 className="text-base font-black text-slate-900 group-hover:text-[#0052B4] transition-colors truncate">
                        {member.name}
                      </h4>

                      <p className="text-xs font-semibold text-slate-500 truncate">
                        {member.department}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Right Column: Support Desk & CWC Liaison (With Watermark Crest) */}
        <div className="relative overflow-hidden lg:col-span-4 bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-6 shadow-sm self-start">
          {/* Subtle University Logo Watermark */}
          <img
            src={unit.logo || `/logos/universities/${unit.code.toLowerCase().replace(/[^a-z]/g, '')}.png`}
            alt=""
            aria-hidden="true"
            className="absolute -right-6 -bottom-6 w-44 h-44 object-contain opacity-[0.05] pointer-events-none filter grayscale select-none"
            onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
          />

          <div className="space-y-2 border-b border-slate-200 pb-4 relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0052B4] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
              Direct Campus Desk
            </span>
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#0052B4]" />
              Unit Support Desk
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Connect directly with the <strong>Unit Secretary</strong> or respective coordinators for admissions, hostel guidance, or emergency aid.
            </p>
          </div>

          <div className="space-y-3.5 text-xs text-slate-700 font-medium">
            <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
              <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                Secretariat & Representation
              </span>
              <span className="text-slate-900 font-bold block">{unit.incharge}</span>
              <span className="text-[11px] text-slate-500 font-medium">
                Managed under Central Working Committee (CWC)
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
              <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                Official Unit Email
              </span>
              <span className="text-[#0052B4] font-mono font-bold block break-all">{unit.contactEmail}</span>
              <span className="text-[11px] text-slate-500 font-medium">
                Monitored by Unit Secretary & Media Incharge
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80 space-y-1">
              <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                Central Apex Liaison
              </span>
              <span className="text-slate-900 font-bold block">Central Working Committee (CWC)</span>
              <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                Active Executive Oversight
              </span>
            </div>
          </div>

          <div className="pt-2 space-y-3 border-t border-slate-200">
            <button
              onClick={onOpenHelpdesk}
              className="w-full bg-[#0052B4] text-white font-black py-3.5 rounded-xl text-xs hover:bg-[#003D87] transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Request Campus Assistance</span>
            </button>
            <p className="text-[11px] text-center text-slate-500 font-medium">
              Average response time: Within 4–6 hours during admission cycles
            </p>
          </div>
        </div>
      </div>

      {/* ── Photo Gallery Grid ───────────────────────────────────────── */}
      {hasImages && (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Images className="w-5 h-5 text-[#0052B4]" />
              {unit.code} Photo Gallery
            </h2>
            <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
              {images.length} photos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="group relative overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#0052B4]/40 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none"
                style={{ height: idx % 3 === 1 ? '180px' : '140px' }}
              >
                <img
                  src={src}
                  alt={`${unit.code} photo ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0052B4]/0 group-hover:bg-[#0052B4]/20 transition-colors duration-200 flex items-center justify-center">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-75 group-hover:scale-100">
                    <Camera className="w-4 h-4 text-[#0052B4]" />
                  </div>
                </div>
                {/* Index badge */}
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  {idx + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Full-Screen Lightbox ─────────────────────────────────────── */}
      <ImageLightbox
        items={lbItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex(i => (i !== null ? (i - 1 + lbItems.length) % lbItems.length : null))}
        onNext={() => setLightboxIndex(i => (i !== null ? (i + 1) % lbItems.length : null))}
        onGoTo={(idx) => setLightboxIndex(idx)}
      />

      </div>
    </div>
  );
};
