import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid: On mobile, Primary Navigation & Campus Units sit side-to-side */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
          
          {/* Column 1: Organization Overview */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-white shadow-xs shrink-0">
                <img src="/logo.png" alt="ShED Forum Official Logo" className="h-10 w-auto object-contain" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-serif-heading font-semibold tracking-tight leading-none block">
                  <span className="text-[#D91B24]">The</span> <span className="text-[#0052B4]">ShED</span> <span className="text-[#009A44]">Forum</span>
                </span>
                <span className="text-[9px] font-semibold text-slate-400 tracking-widest block mt-1 uppercase">
                  EDUCATE • EMPOWER • EXCEL
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              ShED Forum (Shershahbadi Educational Dialogue Forum) is a community-led educational initiative established in 2018 with the objective of connecting Shershahbadi students to higher education.
            </p>

            <div className="pt-1">
              <a 
                href="/publications" 
                className="inline-flex items-center justify-center gap-2 bg-[#0052B4] hover:bg-[#003D87] text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border border-[#00A3E0]/40 shadow-xs active:scale-98 min-h-[40px] w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download ShED Booklet</span>
              </a>
            </div>
          </div>

          {/* Columns 2 & 3: Primary Navigation and Campus Units Side-to-Side on Mobile & Desktop */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:col-span-2">
            
            {/* Column 2: Quick Links & Navigation */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold text-[#00A3E0] uppercase tracking-wider sm:tracking-widest mb-2.5 sm:mb-4 border-l-2 border-[#0052B4] pl-2">
                Primary Nav
              </h4>
              <ul className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs font-medium">
                <li>
                  <Link to="/" className="inline-block py-1 hover:text-[#00A3E0] transition-colors">
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="inline-block py-1 hover:text-[#00A3E0] transition-colors">
                    About & Vision
                  </Link>
                </li>
                <li>
                  <Link to="/centre" className="inline-block py-1 hover:text-[#00A3E0] transition-colors">
                    ShED Centre
                  </Link>
                </li>
                <li>
                  <Link to="/sgc-centre" className="inline-block py-1 hover:text-[#00A3E0] transition-colors">
                    SGC Coaching Centre
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="inline-block py-1 hover:text-[#00A3E0] transition-colors">
                    8 Initiatives
                  </Link>
                </li>
                <li>
                  <Link to="/news-and-events" className="inline-block py-1 hover:text-[#00A3E0] transition-colors">
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link to="/photo-gallery" className="inline-block py-1 hover:text-[#00A3E0] transition-colors">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/publications" className="inline-block py-1 hover:text-[#00A3E0] transition-colors">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="inline-block py-1 hover:text-[#00A3E0] transition-colors">
                    Contact & Help
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: University Campus Units */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-bold text-[#009A44] uppercase tracking-wider sm:tracking-widest mb-2.5 sm:mb-4 border-l-2 border-[#009A44] pl-2">
                Campus Units
              </h4>
              <ul className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs font-medium">
                <li>
                  <Link to="/manuu-unit" className="inline-block py-1 hover:text-emerald-400 transition-colors">
                    MANUU (Hyd)
                  </Link>
                </li>
                <li>
                  <Link to="/jmi-unit" className="inline-block py-1 hover:text-emerald-400 transition-colors">
                    Jamia (JMI)
                  </Link>
                </li>
                <li>
                  <Link to="/amu-unit" className="inline-block py-1 hover:text-emerald-400 transition-colors">
                    AMU (Aligarh)
                  </Link>
                </li>
                <li>
                  <Link to="/jnu-unit" className="inline-block py-1 hover:text-emerald-400 transition-colors">
                    JNU (New Delhi)
                  </Link>
                </li>
                <li>
                  <Link to="/du-unit" className="inline-block py-1 hover:text-emerald-400 transition-colors">
                    DU (Delhi Univ)
                  </Link>
                </li>
                <li>
                  <Link to="/hcu-unit" className="inline-block py-1 hover:text-emerald-400 transition-colors">
                    HCU (Hyderabad)
                  </Link>
                </li>
                <li>
                  <Link to="/patna-unit" className="inline-block py-1 hover:text-emerald-400 transition-colors">
                    Patna University
                  </Link>
                </li>
                <li>
                  <Link to="/units" className="inline-block py-1 text-emerald-400 font-semibold hover:underline">
                    All 7 Units →
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Column 4: Official Contact & Social Handles */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#D91B24] uppercase tracking-widest mb-3 sm:mb-4 border-l-2 border-[#D91B24] pl-2">
              Connect With Us
            </h4>

            <div className="space-y-3 text-xs font-medium">

              <a href="mailto:theshedforum@gmail.com" className="flex items-start gap-2.5 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#009A44] flex items-center justify-center shrink-0 group-hover:bg-[#009A44] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Official Email</div>
                  <div className="text-slate-200 font-semibold break-all">theshedforum@gmail.com</div>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 text-[#D91B24] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Coverage Area</div>
                  <div className="text-slate-200 font-semibold">Seemanchal Region & 7 Central Universities</div>
                </div>
              </div>
            </div>

            {/* Touch-Friendly Social Media Handles */}
            <div className="pt-2">
              <span className="text-[10px] font-bold text-slate-400 block mb-2.5 uppercase tracking-widest">
                OFFICIAL SOCIAL HANDLES
              </span>

              <div className="flex items-center gap-2 flex-wrap">

                {/* X (Twitter) */}
                <a
                  href="https://x.com/TheShEDForum"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="X (Twitter)"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-black rounded-xl transition-all duration-200 hover:scale-108 border border-slate-700/80 active:scale-95 shrink-0"
                >
                  <svg className="w-4.5 h-4.5 fill-slate-300 hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/theshedforum"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-xl transition-all duration-200 hover:scale-108 border border-slate-700/80 active:scale-95 shrink-0"
                  onMouseEnter={e => (e.currentTarget.style.background = 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)')}
                  onMouseLeave={e => (e.currentTarget.style.background = '')}
                >
                  <svg className="w-4.5 h-4.5 fill-slate-300 hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.067 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@theshedforum"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-[#FF0000] rounded-xl transition-all duration-200 hover:scale-108 border border-slate-700/80 active:scale-95 shrink-0"
                >
                  <svg className="w-4.5 h-4.5 fill-slate-300 hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1FJk9PVnpi"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-[#1877F2] rounded-xl transition-all duration-200 hover:scale-108 border border-slate-700/80 active:scale-95 shrink-0"
                >
                  <svg className="w-4.5 h-4.5 fill-slate-300 hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/theshedforum"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-[#0A66C2] rounded-xl transition-all duration-200 hover:scale-108 border border-slate-700/80 active:scale-95 shrink-0"
                >
                  <svg className="w-4.5 h-4.5 fill-slate-300 hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/theshedforum"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-[#26A5E4] rounded-xl transition-all duration-200 hover:scale-108 border border-slate-700/80 active:scale-95 shrink-0"
                >
                  <svg className="w-4.5 h-4.5 fill-slate-300 hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://chat.whatsapp.com/TheShEDForum"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp Group"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-[#25D366] rounded-xl transition-all duration-200 hover:scale-108 border border-slate-700/80 active:scale-95 shrink-0"
                >
                  <svg className="w-4.5 h-4.5 fill-slate-300 hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.84 0-3.645-.496-5.228-1.437l-.375-.223-3.882 1.018 1.035-3.785-.245-.39A9.873 9.873 0 0 1 2.25 11.97C2.25 6.46 6.71 2 12.22 2s9.97 4.46 9.97 9.97c0 5.51-4.46 9.873-10.139 9.873m0-21.833C5.592 0 .21 5.382.21 12.01c0 2.119.553 4.185 1.606 6.004L0 24l6.169-1.619a11.968 11.968 0 0 0 5.881 1.536h.005c6.626 0 12.008-5.382 12.008-12.01 0-3.207-1.249-6.22-3.52-8.49A11.916 11.916 0 0 0 12.05 0z"/>
                  </svg>
                </a>

              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium text-center sm:text-left">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} The ShED Forum (Shershahbadi Educational Dialogue Forum).</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/admin" className="hover:text-white transition-colors">Admin Portal</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
