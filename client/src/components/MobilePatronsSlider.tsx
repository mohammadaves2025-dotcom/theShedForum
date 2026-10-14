import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Award, Quote } from 'lucide-react';
import { initialData } from '../data/initialData';

interface MobilePatronsSliderProps {
  patrons?: any[];
}

export const MobilePatronsSlider: React.FC<MobilePatronsSliderProps> = ({ 
  patrons = initialData.patrons 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(360);
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Measure container width on mount and window resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      } else {
        setContainerWidth(window.innerWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const total = patrons.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
    setIsSwiping(true);
    setDragOffset(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchCurrentX.current - touchStartX.current;
    // Dampen drag at boundaries
    if ((currentIndex === 0 && diff > 0) || (currentIndex === total - 1 && diff < 0)) {
      setDragOffset(diff * 0.35);
    } else {
      setDragOffset(diff);
    }
  };

  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchCurrentX.current !== null) {
      const diff = touchCurrentX.current - touchStartX.current;
      const swipeThreshold = 45;

      if (diff < -swipeThreshold) {
        handleNext();
      } else if (diff > swipeThreshold) {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchCurrentX.current = null;
    setIsSwiping(false);
    setDragOffset(0);
  };

  // Card geometry: 82% of container width or max 320px for peeking effect
  const cardWidth = Math.min(Math.round(containerWidth * 0.82), 320);
  const cardGap = 16;
  // Center slide calculation
  const centerOffset = (containerWidth - cardWidth) / 2;
  const translateX = centerOffset - currentIndex * (cardWidth + cardGap) + dragOffset;

  return (
    <div className="space-y-6 select-none -mx-4 sm:-mx-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] overflow-hidden" ref={containerRef}>
      
      {/* ── PRATHAM-STYLE EDITORIAL HEADER FOR MOBILE ──────────────────────── */}
      <div className="text-center space-y-3 px-4">
        <span className="inline-block bg-[#0052B4] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-sm shadow-xs">
          Leadership & Advisory
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900 tracking-tight">
          Our Respected Patrons & Guidance Board
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-sm mx-auto">
          Guided by prominent academicians, judicial officers, legislators, and community leaders who anchor ShED Forum's mission.
        </p>

        {/* Pratham signature handwritten "View All Messages >" link */}
        <div className="pt-1">
          <Link
            to="/patrons-message"
            className="font-pratham-handwriting text-2xl font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 transition-colors group cursor-pointer"
          >
            <span>View All Patron Messages</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">›</span>
          </Link>
        </div>
      </div>

      {/* ── HORIZONTAL PEEKING SLIDER TRACK ─────────────────────────────────── */}
      <div
        className="relative overflow-hidden w-full pt-2 pb-6 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`flex items-stretch ${isSwiping ? '' : 'transition-transform duration-300 ease-out'}`}
          style={{
            transform: `translateX(${translateX}px)`,
            gap: `${cardGap}px`,
          }}
        >
          {patrons.map((patron, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={patron.id}
                className="shrink-0 flex flex-col transition-all duration-300"
                style={{ width: `${cardWidth}px` }}
              >
                <div
                  className={`bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl flex flex-col justify-between transition-all duration-300 h-full ${
                    isActive ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-65'
                  }`}
                >
                  {/* Portrait Archival Photo with Pratham Yellow Tag */}
                  <div className="relative aspect-[3/4] bg-slate-950 overflow-hidden">
                    <img
                      src={patron.image}
                      alt={patron.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Patron Badge top-left */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-300/30">
                      <Award className="w-3 h-3 text-amber-300" />
                      <span>Advisory Board</span>
                    </div>

                    {/* Pratham Signature Yellow Tag Badge anchored at bottom-left */}
                    <div className="absolute bottom-0 left-0 bg-[#ffbe00] text-black text-[11px] font-black uppercase tracking-wider px-3.5 py-1 shadow-md">
                      {patron.title ? patron.title.split('&')[0].trim().toUpperCase() : 'PATRON & MENTOR'}
                    </div>

                    {/* Name & Title on image overlay */}
                    <div className="absolute bottom-10 left-3 right-3 text-white">
                      <p className="font-bold text-base leading-tight drop-shadow-md">{patron.name}</p>
                      <p className="text-blue-200 text-[11px] font-semibold truncate mt-0.5">
                        {patron.designation || patron.title}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Content Area: Patron Quote & Link */}
                  <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-start gap-1.5 text-slate-400">
                        <Quote className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 rotate-180" />
                        <p className="text-xs text-slate-700 italic leading-relaxed line-clamp-3 font-serif font-medium">
                          "{patron.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Pratham Handwritten Read Message Link */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                        Leadership Voice
                      </span>

                      <Link
                        to={`/patrons-message?id=${patron.id}`}
                        className="font-pratham-handwriting text-2xl font-bold text-slate-900 hover:text-[#0052B4] inline-flex items-center gap-1 transition-transform active:scale-95 cursor-pointer underline decoration-slate-950/30 underline-offset-4"
                      >
                        <span>Read Message</span>
                        <span className="text-xl">›</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── PRATHAM SIGNATURE CIRCULAR ARROW BUTTONS (< and >) ─────────────── */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous Patron"
            className="w-11 h-11 rounded-full bg-white text-slate-700 hover:text-slate-950 border border-slate-300 shadow-md flex items-center justify-center transition-all active:scale-90 hover:shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700 stroke-[2.5]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-2">
            {patrons.slice(0, 8).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to patron ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? 'w-6 h-2 bg-[#0052B4] shadow-xs'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Patron"
            className="w-11 h-11 rounded-full bg-white text-[#0052B4] hover:text-[#003D87] border-2 border-[#0052B4] shadow-md flex items-center justify-center transition-all active:scale-90 hover:shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-[#0052B4] stroke-[2.5]" />
          </button>
        </div>
      </div>

    </div>
  );
};
