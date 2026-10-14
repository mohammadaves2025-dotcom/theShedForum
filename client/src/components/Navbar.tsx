import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, Menu, X, 
  GraduationCap, Heart, ArrowRight,
  Newspaper, FileText, Image as ImageIcon, Video, BookOpen, ShieldCheck,
  Building2, Compass, ChevronRight, LogIn, Sparkles
} from 'lucide-react';

interface NavbarProps {
  onOpenHelpdesk: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHelpdesk }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Mobile accordion states
  const [mobileUnitsOpen, setMobileUnitsOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

  // Desktop dropdown states
  const [unitsDropdownOpen, setUnitsDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  const location = useLocation();

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
    setUnitsDropdownOpen(false);
    setMediaDropdownOpen(false);
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

      {/* --- MAIN NAVIGATION BAR --- */}
      <nav className={`transition-all duration-300 border-b border-slate-200/80 ${isScrolled ? 'shadow-md py-2 bg-white/95 backdrop-blur-md' : 'py-2.5 sm:py-3 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-2 sm:gap-4">
            
            {/* NGO Logo & Title Header */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group py-0.5">
              <img 
                src="/logo.png" 
                alt="The ShED Forum Logo" 
                className="h-9 xs:h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
              <div className="flex flex-col border-l border-slate-200 pl-2 sm:pl-3">
                <span className="text-sm xs:text-base sm:text-lg font-serif-heading font-bold text-slate-900 tracking-tight leading-none group-hover:text-[#0052B4] transition-colors">
                  The ShED Forum
                </span>
                <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-semibold text-slate-500 uppercase tracking-widest mt-1">
                  EDUCATE • EMPOWER • EXCEL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1">
              
              {/* About */}
              <Link 
                to="/about" 
                className={`px-3 py-2 text-[13px] font-semibold whitespace-nowrap transition-all rounded-lg ${isActive('/about') ? 'text-[#0052B4] bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-[#0052B4] hover:bg-slate-50'}`}
              >
                ABOUT
              </Link>

              {/* Shed Centre */}
              <Link 
                to="/centre" 
                className={`px-3 py-2 text-[13px] font-semibold whitespace-nowrap transition-all rounded-lg ${isActive('/centre') ? 'text-[#0052B4] bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-[#0052B4] hover:bg-slate-50'}`}
              >
                SHED CENTRE
              </Link>

              {/* SGC Centre */}
              <Link 
                to="/sgc-centre" 
                className={`px-3 py-2 text-[13px] font-semibold whitespace-nowrap transition-all rounded-lg ${isActive('/sgc-centre') ? 'text-[#0052B4] bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-[#0052B4] hover:bg-slate-50'}`}
              >
                SGC CENTRE
              </Link>

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
                  <span>UNITS</span>
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
                PROJECTS
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
                  <span>MEDIA CORNER</span>
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
                CONTACT
              </Link>
            </div>

            {/* Right Action CTA Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                to="/donate"
                className="bg-[#D91B24] hover:bg-[#b5161e] text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md transform active:scale-98 whitespace-nowrap min-h-[40px]"
              >
                <Heart className="w-3.5 h-3.5 text-white" />
                <span>DONATE US</span>
              </Link>
            </div>

            {/* Mobile Navigation Toggle Button */}
            <div className="flex xl:hidden items-center gap-1.5 sm:gap-2">
              <Link
                to="/donate"
                className="bg-[#D91B24] text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold lg:hidden shadow-xs flex items-center gap-1 active:scale-95 min-h-[38px]"
              >
                <Heart className="w-3.5 h-3.5 text-white" />
                <span>DONATE</span>
              </Link>
              
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 sm:p-2.5 text-slate-700 hover:text-[#0052B4] rounded-xl hover:bg-slate-100 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center border border-slate-200/80"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION SIDEBAR DRAWER & BACKDROP --- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Sidebar Panel */}
          <aside 
            className="fixed inset-y-0 right-0 w-[86vw] max-w-[340px] h-full bg-white shadow-2xl flex flex-col z-10 border-l border-slate-200 animate-in slide-in-from-right duration-300"
            aria-label="Mobile Navigation Sidebar"
          >
            {/* Header: Logo + Close */}
            <div className="px-4 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 shrink-0">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <img 
                  src="/logo.png" 
                  alt="The ShED Forum Logo" 
                  className="h-8 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-serif-heading font-bold text-slate-900 leading-none">
                    The ShED Forum
                  </span>
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                    EDUCATE • EMPOWER • EXCEL
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-[#D91B24] hover:bg-red-50 transition-colors border border-slate-200/60"
                aria-label="Close Navigation Sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Items */}
            <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-1 overscroll-contain">
              {/* About */}
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${isActive('/about') ? 'bg-blue-50 text-[#0052B4]' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                <span>ABOUT</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Shed Centre */}
              <Link 
                to="/centre" 
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${isActive('/centre') ? 'bg-blue-50 text-[#0052B4]' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-2">
                  <span>SHED CENTRE</span>
                  <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200/60">Core Hub</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* SGC Centre */}
              <Link 
                to="/sgc-centre" 
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${isActive('/sgc-centre') ? 'bg-blue-50 text-[#0052B4]' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-2">
                  <span>SGC CENTRE</span>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">100% Free</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Mobile Accordion: Units */}
              <div className="border-t border-slate-100 my-1 pt-1">
                <button
                  onClick={() => setMobileUnitsOpen(!mobileUnitsOpen)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0052B4]" />
                    <span>University Units (7)</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileUnitsOpen ? 'rotate-180 text-[#0052B4]' : ''}`} />
                </button>

                {mobileUnitsOpen && (
                  <div className="pl-3 pr-2 py-1 space-y-0.5 bg-slate-50/80 rounded-xl my-1 border border-slate-200/60 max-h-56 overflow-y-auto">
                    <Link
                      to="/units"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-[11.5px] font-bold text-[#0052B4] hover:underline"
                    >
                      <span>All Campus Units Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {unitsList.map((unit, idx) => (
                      <Link
                        key={idx}
                        to={unit.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white"
                      >
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-3.5 h-3.5 text-[#0052B4]" />
                          <span>{unit.name}</span>
                        </div>
                        <span className="text-[9px] font-bold text-slate-500 bg-white px-1.5 py-0.2 rounded border border-slate-200">{unit.badge}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Projects */}
              <Link 
                to="/projects" 
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${isActive('/projects') ? 'bg-blue-50 text-[#0052B4]' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                <span>PROJECTS & INITIATIVES</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Mobile Accordion: Media Corner */}
              <div className="border-t border-slate-100 my-1 pt-1">
                <button
                  onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#0052B4]" />
                    <span>Media Corner</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileMediaOpen ? 'rotate-180 text-[#0052B4]' : ''}`} />
                </button>

                {mobileMediaOpen && (
                  <div className="pl-3 pr-2 py-1 space-y-0.5 bg-slate-50/80 rounded-xl my-1 border border-slate-200/60 max-h-56 overflow-y-auto">
                    <Link
                      to="/media-corner"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-[11.5px] font-bold text-[#0052B4] hover:underline"
                    >
                      <span>Media Corner Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/news-and-events"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white"
                    >
                      <Newspaper className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>News and Events</span>
                    </Link>
                    <Link
                      to="/press-release"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Press Release</span>
                    </Link>
                    <Link
                      to="/publications"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Publications</span>
                    </Link>
                    <Link
                      to="/photo-gallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Photo Gallery</span>
                    </Link>
                    <Link
                      to="/video-gallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white"
                    >
                      <Video className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Video Gallery</span>
                    </Link>
                    <Link
                      to="/patrons-message"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0052B4]" />
                      <span>Patron's Keynote Message</span>
                    </Link>
                    <Link
                      to="/student-stories"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-700 hover:text-[#0052B4] hover:bg-white"
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
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${isActive('/contact') ? 'bg-blue-50 text-[#0052B4]' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                <span>CONTACT</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Donate Us */}
              <Link 
                to="/donate" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors bg-red-50 text-[#D91B24] hover:bg-red-100"
              >
                <span className="flex items-center gap-2"><Heart className="w-4 h-4" /> DONATE US</span>
                <ChevronRight className="w-4 h-4 text-red-300" />
              </Link>
            </div>

            {/* Pinned Bottom Drawer Footer */}
            <div className="p-3.5 border-t border-slate-100 bg-slate-50/90 space-y-2 shrink-0">

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHelpdesk();
                }}
                className="w-full bg-[#0052B4] hover:bg-[#003D87] text-white py-2.5 rounded-xl font-bold text-center flex justify-center items-center gap-2 text-xs shadow-xs active:scale-98 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Open Admission Helpdesk</span>
              </button>

              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#D91B24] hover:bg-[#b5161e] text-white py-2.5 rounded-xl font-bold text-center flex justify-center items-center gap-2 text-xs shadow-md active:scale-98 transition-all"
              >
                <Heart className="w-4 h-4 text-white" />
                <span>DONATE US</span>
              </Link>

              <div className="flex justify-between items-center pt-1 px-1 text-[11px] text-slate-500 font-medium">
                <Link 
                  to="/admin" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#0052B4] flex items-center gap-1"
                >
                <LogIn className="w-3 h-3 text-[#00A3E0]" />
                  <span>Admin Portal</span>
                </Link>
                <span>Est. 2018</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};
