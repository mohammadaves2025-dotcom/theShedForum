import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, ChevronDown, Menu, X, 
  GraduationCap, Sparkles, LogIn, ArrowRight,
  Newspaper, FileText, Image as ImageIcon, Video, BookOpen, ShieldCheck, Heart,
  Building2, Compass, ChevronRight, Bookmark
} from 'lucide-react';

interface NavbarProps {
  onOpenHelpdesk: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHelpdesk }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Mobile accordion states
  const [mobileCentresOpen, setMobileCentresOpen] = useState(false);
  const [mobileUnitsOpen, setMobileUnitsOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

  // Desktop dropdown states
  const [centresDropdownOpen, setCentresDropdownOpen] = useState(false);
  const [unitsDropdownOpen, setUnitsDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  const location = useLocation();

  const centresTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const unitsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mediaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setCentresDropdownOpen(false);
    setUnitsDropdownOpen(false);
    setMediaDropdownOpen(false);
    setMobileCentresOpen(false);
    setMobileUnitsOpen(false);
    setMobileMediaOpen(false);
  }, [location]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Desktop hover handlers
  const handleCentresMouseEnter = () => {
    if (centresTimerRef.current) clearTimeout(centresTimerRef.current);
    setCentresDropdownOpen(true);
  };
  const handleCentresMouseLeave = () => {
    centresTimerRef.current = setTimeout(() => setCentresDropdownOpen(false), 150);
  };

  const handleUnitsMouseEnter = () => {
    if (unitsTimerRef.current) clearTimeout(unitsTimerRef.current);
    setUnitsDropdownOpen(true);
  };
  const handleUnitsMouseLeave = () => {
    unitsTimerRef.current = setTimeout(() => setUnitsDropdownOpen(false), 150);
  };

  const handleMediaMouseEnter = () => {
    if (mediaTimerRef.current) clearTimeout(mediaTimerRef.current);
    setMediaDropdownOpen(true);
  };
  const handleMediaMouseLeave = () => {
    mediaTimerRef.current = setTimeout(() => setMediaDropdownOpen(false), 150);
  };

  // Centres
  const centresList = [
    { name: 'Shed Centre', path: '/centre', tag: 'Core Guidance & Operations Hub', badge: 'Flagship' },
    { name: 'SGC Centre', path: '/sgc-centre', tag: 'Shershahbadi Guidance & Coaching', badge: '100% Free' },
  ];

  // Units
  const unitsList = [
    { name: 'AMU Unit', path: '/amu-unit', tag: 'Aligarh Muslim University', badge: 'Est. 2022' },
    { name: 'JMI Unit', path: '/jmi-unit', tag: 'Jamia Millia Islamia', badge: 'Est. 2021' },
    { name: 'MANUU Unit', path: '/manuu-unit', tag: 'Maulana Azad National Urdu University', badge: 'Est. 2018' },
    { name: 'JNU Unit', path: '/jnu-unit', tag: 'Jawaharlal Nehru University', badge: 'Est. 2022' },
    { name: 'DU Unit', path: '/du-unit', tag: 'University of Delhi', badge: 'Est. 2023' },
    { name: 'HCU Unit', path: '/hcu-unit', tag: 'University of Hyderabad', badge: 'Est. 2021' },
    { name: 'Patna Unit', path: '/patna-unit', tag: 'Patna University', badge: 'Est. 2026' },
  ];

  // Media Corner Items
  const mediaList = [
    { name: 'Media Corner', path: '/media-corner', icon: Compass, desc: 'Central media & announcements hub' },
    { name: 'News and Events', path: '/news-and-events', icon: Newspaper, desc: 'Academic calendar, drives & workshops' },
    { name: 'Press Release', path: '/press-release', icon: FileText, desc: 'Official statements & media coverage' },
    { name: 'Publications', path: '/publications', icon: BookOpen, desc: 'Annual booklets, policies & PDFs' },
    { name: 'Photo Gallery', path: '/photo-gallery', icon: ImageIcon, desc: '31+ classified campus & event photos' },
    { name: 'Video Gallery', path: '/video-gallery', icon: Video, desc: 'Webinars, sessions & event recordings' },
    { name: "Patron's Keynote Message", path: '/patrons-message', icon: ShieldCheck, desc: 'Address by Prof. Mujibur Rahman' },
    { name: 'Student Stories & Impact', path: '/student-stories', icon: Heart, desc: '1,000+ scholar journeys' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white transition-all duration-300">
      
      {/* --- TOP UTILITY & HELPLINE BAR --- */}
      <div className="bg-[#0B132B] text-slate-300 text-xs py-2 px-3 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2 sm:gap-4">
          
          {/* Contact Details */}
          <div className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-[11.5px] font-medium tracking-tight overflow-x-auto no-scrollbar">
            <a href="tel:+917737280758" className="flex items-center gap-1.5 hover:text-white transition-colors text-slate-200 shrink-0">
              <Phone className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>Helpline: +91 77372-80758</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a href="mailto:theshedforum@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors text-slate-300 shrink-0">
              <Mail className="w-3.5 h-3.5 text-[#009A44]" />
              <span>theshedforum@gmail.com</span>
            </a>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#D91B24]" />
              <span>Seemanchal & 7 University Campuses</span>
            </span>
          </div>

          {/* Right Highlights & Admin Portal */}
          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-[11.5px] font-medium shrink-0">
            <span className="hidden md:inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-950/80 text-blue-200 border border-blue-800/60 text-[10.5px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              CUET 2026-27 Free Guidance Active
            </span>
            <Link to="/admin" className="flex items-center gap-1 hover:text-white transition-colors text-slate-400 hover:underline px-1 py-0.5">
              <LogIn className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span className="hidden xs:inline">Admin Portal</span>
            </Link>
          </div>

        </div>
      </div>

      {/* --- MAIN NAVIGATION BAR --- */}
      <nav className={`transition-all duration-300 border-b border-slate-200/80 ${isScrolled ? 'shadow-md py-2 bg-white/95 backdrop-blur-md' : 'py-2.5 sm:py-3 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-2 sm:gap-4">
            
            {/* NGO Logo & Title Header */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group py-0.5">
              <img 
                src="/logo.png" 
                alt="The ShED Forum Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
              <div className="flex flex-col border-l border-slate-200 pl-2.5 sm:pl-3">
                <span className="text-base sm:text-lg font-serif-heading font-bold text-slate-900 tracking-tight leading-none group-hover:text-[#0052B4] transition-colors">
                  The ShED Forum
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-slate-500 uppercase tracking-widest mt-1">
                  EDUCATE • EMPOWER • EXCEL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1">
              
              {/* Home */}
              <Link 
                to="/" 
                className={`px-3 py-2 text-[13px] font-semibold whitespace-nowrap transition-all rounded-lg ${isActive('/') ? 'text-[#0052B4] bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-[#0052B4] hover:bg-slate-50'}`}
              >
                Home
              </Link>

              {/* About */}
              <Link 
                to="/about" 
                className={`px-3 py-2 text-[13px] font-semibold whitespace-nowrap transition-all rounded-lg ${isActive('/about') ? 'text-[#0052B4] bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-[#0052B4] hover:bg-slate-50'}`}
              >
                About
              </Link>

              {/* Shed Centre / SGC Centre Dropdown */}
              <div 
                className="relative py-1"
                onMouseEnter={handleCentresMouseEnter}
                onMouseLeave={handleCentresMouseLeave}
              >
                <button
                  onClick={() => setCentresDropdownOpen(!centresDropdownOpen)}
                  className={`px-3 py-2 text-[13px] font-semibold whitespace-nowrap transition-all rounded-lg flex items-center gap-1 ${isActive('/centre') || isActive('/sgc-centre') ? 'text-[#0052B4] bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-[#0052B4] hover:bg-slate-50'}`}
                >
                  <span>Shed / SGC Centre</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${centresDropdownOpen ? 'rotate-180 text-[#0052B4]' : 'text-slate-400'}`} />
                </button>

                {centresDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 w-72 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="px-3 py-2 border-b border-slate-100 flex justify-between items-center mb-1">
                        <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                          <Bookmark className="w-3.5 h-3.5 text-[#0052B4]" />
                          Centres of Guidance
                        </span>
                      </div>
                      <div className="space-y-1">
                        {centresList.map((centre, idx) => (
                          <Link
                            key={idx}
                            to={centre.path}
                            onClick={() => setCentresDropdownOpen(false)}
                            className="p-2.5 rounded-xl hover:bg-blue-50/70 flex justify-between items-center transition-all group"
                          >
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[#0052B4] transition-colors">
                                {centre.name}
                              </div>
                              <div className="text-[10px] text-slate-500 font-normal">{centre.tag}</div>
                            </div>
                            <span className="text-[9.5px] font-bold text-[#009A44] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              {centre.badge}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Units Dropdown */}
              <div 
                className="relative py-1"
                onMouseEnter={handleUnitsMouseEnter}
                onMouseLeave={handleUnitsMouseLeave}
              >
                <button
                  onClick={() => setUnitsDropdownOpen(!unitsDropdownOpen)}
                  className={`px-3 py-2 text-[13px] font-semibold whitespace-nowrap transition-all rounded-lg flex items-center gap-1 ${location.pathname.includes('unit') || location.pathname === '/units' ? 'text-[#0052B4] bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-[#0052B4] hover:bg-slate-50'}`}
                >
                  <span>Units</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${unitsDropdownOpen ? 'rotate-180 text-[#0052B4]' : 'text-slate-400'}`} />
                </button>

                {unitsDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 w-80 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="px-3 py-2 border-b border-slate-100 flex justify-between items-center mb-1">
                        <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#0052B4]" />
                          University Campus Units
                        </span>
                        <Link 
                          to="/units" 
                          onClick={() => setUnitsDropdownOpen(false)}
                          className="text-xs text-[#0052B4] font-bold hover:underline flex items-center gap-1"
                        >
                          <span>All Units</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="space-y-0.5">
                        {unitsList.map((unit, idx) => (
                          <Link
                            key={idx}
                            to={unit.path}
                            onClick={() => setUnitsDropdownOpen(false)}
                            className="p-2 rounded-xl hover:bg-blue-50/70 flex justify-between items-center transition-all group"
                          >
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold text-slate-900 group-hover:text-[#0052B4] transition-colors flex items-center gap-1.5">
                                <GraduationCap className="w-3.5 h-3.5 text-[#0052B4]" />
                                {unit.name}
                              </span>
                              <span className="text-[10px] text-slate-500 pl-5 font-normal">{unit.tag}</span>
                            </div>
                            <span className="text-[9.5px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                              {unit.badge}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Projects */}
              <Link 
                to="/projects" 
                className={`px-3 py-2 text-[13px] font-semibold whitespace-nowrap transition-all rounded-lg ${isActive('/projects') ? 'text-[#0052B4] bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-[#0052B4] hover:bg-slate-50'}`}
              >
                Projects
              </Link>

              {/* Media Corner Dropdown */}
              <div 
                className="relative py-1"
                onMouseEnter={handleMediaMouseEnter}
                onMouseLeave={handleMediaMouseLeave}
              >
                <button
                  onClick={() => setMediaDropdownOpen(!mediaDropdownOpen)}
                  className={`px-3 py-2 text-[13px] font-semibold whitespace-nowrap transition-all rounded-lg flex items-center gap-1 ${location.pathname.includes('media') || location.pathname.includes('news') || location.pathname.includes('gallery') || location.pathname.includes('press') || location.pathname.includes('publications') || location.pathname.includes('patrons') ? 'text-[#0052B4] bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-[#0052B4] hover:bg-slate-50'}`}
                >
                  <span>Media Corner</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mediaDropdownOpen ? 'rotate-180 text-[#0052B4]' : 'text-slate-400'}`} />
                </button>

                {mediaDropdownOpen && (
                  <div className="absolute right-0 top-full pt-2 w-84 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="px-3 py-2 border-b border-slate-100 flex justify-between items-center mb-1">
                        <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-[#0052B4]" />
                          Media & Publications
                        </span>
                        <Link 
                          to="/media-corner" 
                          onClick={() => setMediaDropdownOpen(false)}
                          className="text-xs text-[#0052B4] font-bold hover:underline"
                        >
                          Media Corner Hub
                        </Link>
                      </div>

                      <div className="space-y-0.5">
                        {mediaList.map((m, idx) => {
                          const IconComponent = m.icon;
                          return (
                            <Link
                              key={idx}
                              to={m.path}
                              onClick={() => setMediaDropdownOpen(false)}
                              className="p-2 rounded-xl hover:bg-blue-50/70 flex items-start gap-3 transition-all group"
                            >
                              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052B4] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0052B4] group-hover:text-white transition-colors border border-blue-100">
                                <IconComponent className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-slate-900 group-hover:text-[#0052B4] transition-colors">{m.name}</div>
                                <div className="text-[10px] text-slate-500 font-normal">{m.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link 
                to="/contact" 
                className={`px-3 py-2 text-[13px] font-semibold whitespace-nowrap transition-all rounded-lg ${isActive('/contact') ? 'text-[#0052B4] bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-[#0052B4] hover:bg-slate-50'}`}
              >
                Contact
              </Link>
            </div>

            {/* Right Action CTA Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={onOpenHelpdesk}
                className="bg-[#0052B4] hover:bg-[#003D87] text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md transform active:scale-98 whitespace-nowrap min-h-[40px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Admission Helpdesk</span>
              </button>
            </div>

            {/* Mobile Navigation Toggle Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={onOpenHelpdesk}
                className="bg-[#0052B4] text-white px-3 py-2 rounded-xl text-xs font-semibold lg:hidden shadow-xs flex items-center gap-1.5 active:scale-95 min-h-[40px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Helpdesk</span>
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-slate-700 hover:text-[#0052B4] rounded-xl hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center border border-slate-200/60"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#D91B24]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* --- MOBILE NAVIGATION DRAWER & BACKDROP --- */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[102px] z-50 xl:hidden flex flex-col bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white w-full max-h-[85vh] overflow-y-auto px-4 pt-3 pb-8 space-y-1 shadow-2xl border-b border-slate-200 rounded-b-3xl">
              
              {/* Home */}
              <Link 
                to="/" 
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold min-h-[44px] transition-colors ${isActive('/') ? 'bg-blue-50 text-[#0052B4]' : 'text-slate-900 hover:bg-slate-50'}`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* About */}
              <Link 
                to="/about" 
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold min-h-[44px] transition-colors ${isActive('/about') ? 'bg-blue-50 text-[#0052B4]' : 'text-slate-900 hover:bg-slate-50'}`}
              >
                <span>About</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Mobile Accordion: Shed Centre & SGC Centre */}
              <div className="border-t border-slate-100 my-1 pt-1">
                <button
                  onClick={() => setMobileCentresOpen(!mobileCentresOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50 min-h-[44px]"
                >
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#0052B4]" />
                    <span>Shed & SGC Centre</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileCentresOpen ? 'rotate-180 text-[#0052B4]' : ''}`} />
                </button>

                {mobileCentresOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-2xl my-1 border border-slate-200/60">
                    <Link
                      to="/centre"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white min-h-[38px]"
                    >
                      <span>Shed Centre</span>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Core Hub</span>
                    </Link>
                    <Link
                      to="/sgc-centre"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white min-h-[38px]"
                    >
                      <span>SGC Centre</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">100% Free</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Accordion: Units */}
              <div className="border-t border-slate-100 my-1 pt-1">
                <button
                  onClick={() => setMobileUnitsOpen(!mobileUnitsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50 min-h-[44px]"
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0052B4]" />
                    <span>Units</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileUnitsOpen ? 'rotate-180 text-[#0052B4]' : ''}`} />
                </button>

                {mobileUnitsOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-2xl my-1 border border-slate-200/60">
                    <Link
                      to="/units"
                      className="flex items-center justify-between px-3 py-2.5 text-xs font-bold text-[#0052B4] hover:underline"
                    >
                      <span>Units (All Campus Overview)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {unitsList.map((unit, idx) => (
                      <Link
                        key={idx}
                        to={unit.path}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white min-h-[38px]"
                      >
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-3.5 h-3.5 text-[#0052B4]" />
                          <span>{unit.name}</span>
                        </div>
                        <span className="text-[9.5px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">{unit.badge}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Projects */}
              <Link 
                to="/projects" 
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold min-h-[44px] transition-colors ${isActive('/projects') ? 'bg-blue-50 text-[#0052B4]' : 'text-slate-900 hover:bg-slate-50'}`}
              >
                <span>Projects</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Mobile Accordion: Media Corner */}
              <div className="border-t border-slate-100 my-1 pt-1">
                <button
                  onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50 min-h-[44px]"
                >
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#0052B4]" />
                    <span>Media Corner</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileMediaOpen ? 'rotate-180 text-[#0052B4]' : ''}`} />
                </button>

                {mobileMediaOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-2xl my-1 border border-slate-200/60">
                    <Link
                      to="/media-corner"
                      className="flex items-center justify-between px-3 py-2.5 text-xs font-bold text-[#0052B4] hover:underline"
                    >
                      <span>Media Corner (Overview)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/news-and-events"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white min-h-[38px]"
                    >
                      <Newspaper className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>News and Events</span>
                    </Link>
                    <Link
                      to="/press-release"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white min-h-[38px]"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Press Release</span>
                    </Link>
                    <Link
                      to="/publications"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white min-h-[38px]"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Publications</span>
                    </Link>
                    <Link
                      to="/photo-gallery"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white min-h-[38px]"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Photo Gallery</span>
                    </Link>
                    <Link
                      to="/video-gallery"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white min-h-[38px]"
                    >
                      <Video className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Video Gallery</span>
                    </Link>
                    <Link
                      to="/patrons-message"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white min-h-[38px]"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Patron's Keynote Message</span>
                    </Link>
                    <Link
                      to="/student-stories"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white min-h-[38px]"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Student Stories & Impact</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link 
                to="/contact" 
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold min-h-[44px] transition-colors ${isActive('/contact') ? 'bg-blue-50 text-[#0052B4]' : 'text-slate-900 hover:bg-slate-50'}`}
              >
                <span>Contact</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Mobile Helpdesk CTA */}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHelpdesk();
                  }}
                  className="w-full bg-[#0052B4] text-white py-3.5 rounded-2xl font-bold text-center flex justify-center items-center gap-2 text-xs shadow-md min-h-[44px] active:scale-98"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Open Admission Helpdesk</span>
                </button>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
