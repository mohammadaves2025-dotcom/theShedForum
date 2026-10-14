import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Play, ChevronRight, Sparkles } from 'lucide-react';

interface AboutUsVideoSectionProps {
  youtubeUrl?: string;
  videoTitle?: string;
}

/**
 * CLIENT CONFIGURATION:
 * Replace this default YouTube URL with the official video link supplied by the client.
 * Clicking anywhere on the video card opens this link on YouTube in a new tab.
 */
export const DEFAULT_YOUTUBE_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export const AboutUsVideoSection: React.FC<AboutUsVideoSectionProps> = ({
  youtubeUrl = DEFAULT_YOUTUBE_URL,
  videoTitle = "The ShED Forum — Mission, Vision & Community Movement"
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Section Header: Centered Pratham Style */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>About ShED Forum</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight">
          About Us
        </h2>

        <p className="text-sm sm:text-base text-slate-600 font-normal max-w-2xl mx-auto">
          A community movement born out of purpose—empowering first-generation scholars from remote Seemanchal villages to access India’s premier central universities.
        </p>
      </div>

      {/* Main 2-Column Grid (Image 2 Pratham Template) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: EXPANDED YOUTUBE VIDEO CARD (COVERS FULL COLUMN HEIGHT)       */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 flex flex-col justify-stretch">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-200/90 w-full h-full min-h-[260px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px] flex flex-col justify-between transition-all duration-300 hover:shadow-3xl hover:-translate-y-1 cursor-pointer"
            title="Watch on YouTube"
          >
            {/* Background Video Poster Photo */}
            <img
              src="/gallery/jmi-unit/jmi-seminar-indoor-01.jpg"
              alt="ShED Forum Community Gathering & Educational Dialogue"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/gallery/manuu-unit/manuu-outdoor-audience-day-01.jpg';
              }}
            />

            {/* Subtle dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/65 group-hover:via-black/20 transition-colors" />

            {/* YouTube Top Bar Overlay */}
            <div className="relative top-0 inset-x-0 p-3 sm:p-5 flex items-center justify-between text-white z-10">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2 sm:pr-4">
                {/* Channel Avatar */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0052B4] border-2 border-white/80 flex items-center justify-center font-bold text-xs text-white shrink-0 shadow-md">
                  ShED
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-white drop-shadow-md truncate">
                    {videoTitle}
                  </h3>
                  <span className="text-[9.5px] sm:text-[10px] text-slate-300 block truncate">
                    The ShED Forum • Official Channel
                  </span>
                </div>
              </div>

              {/* External Link Pill */}
              <div className="bg-black/50 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-lg border border-white/20 text-[10px] sm:text-[11px] font-semibold text-slate-200 flex items-center gap-1 shrink-0 group-hover:text-white transition-colors">
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400" />
              </div>
            </div>

            {/* Center: Iconic YouTube Red Play Button (Enlarged & Responsive) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none gap-2 sm:gap-3">
              <div className="w-16 h-11 sm:w-20 sm:h-14 md:w-24 md:h-16 bg-red-600 group-hover:bg-red-700 text-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-115">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-white ml-0.5 sm:ml-1" />
              </div>
              <span className="text-white font-bold text-[11px] sm:text-xs md:text-sm tracking-wide drop-shadow-lg bg-black/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-xs border border-white/10 group-hover:bg-red-600/80 transition-colors">
                Watch Full Story on YouTube ↗
              </span>
            </div>

            {/* YouTube Player Bottom Bar */}
            <div className="relative bottom-0 inset-x-0 p-3 sm:p-5 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex items-center justify-between text-white text-xs z-10 mt-auto">
              {/* Play / Duration Indicator */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-200 font-mono">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="font-semibold truncate max-w-[140px] sm:max-w-none">Watch Full Documentary</span>
                  <span className="text-slate-400 hidden sm:inline">• 24:15</span>
                </div>
              </div>

              {/* YouTube Logo in bottom corner */}
              <div className="flex items-center gap-1.5 text-slate-200 font-bold tracking-tight text-[11px] sm:text-xs opacity-95 group-hover:opacity-100">
                <span className="text-white hidden xs:inline">Watch on</span>
                <span className="bg-red-600 text-white text-[10px] sm:text-xs font-black px-1.5 sm:px-2 py-0.5 rounded">
                  YouTube
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: PRATHAM-INSPIRED EDITORIAL NARRATIVE & READ MORE            */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed">
          
          <p className="text-base sm:text-lg text-slate-900 font-serif leading-relaxed font-normal">
            <strong className="font-semibold text-[#0052B4]">The ShED Forum</strong> (Shershahbadi Educational Dialogue Forum) is a community-led grassroots educational foundation established in 2018 to bridge the divide between rural Seemanchal and India’s premier central universities.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            From remote villages across Katihar, Purnea, Araria, Kishanganj, Malda, Murshidabad, and Sahibganj to the historic gates of Jamia Millia Islamia, AMU, MANUU, DU, JNU, and HCU, our journey has been one of continuous on-ground mobilization—replacing educational hesitation with institutional access and academic excellence.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            We support over 1,000+ rural scholars annually through 100% free CUET entrance coaching, station reception, document verification, verified hostel navigation, and dedicated one-to-one peer adoption by senior research fellows.
          </p>

          {/* Highlight Quote Bar */}
          <div className="border-l-4 border-amber-500 bg-amber-50/60 p-4 rounded-r-2xl space-y-1">
            <p className="text-xs sm:text-sm text-amber-950 font-serif italic">
              “Every household in the Shershahbadi community should have access to higher education and the opportunities it creates.”
            </p>
            <span className="text-[11px] text-amber-700 font-bold block">
              — Founding Principle • The ShED Forum
            </span>
          </div>

          {/* Pratham-Style "Read More >" Styled CTA */}
          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-lg sm:text-xl font-bold text-amber-600 hover:text-amber-700 transition-colors font-serif italic group"
            >
              <span>Read More</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
};
