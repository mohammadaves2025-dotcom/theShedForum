import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, Users } from 'lucide-react';
import { initialData } from '../data/initialData';

interface MobileUniversityUnitsSliderProps {
  units?: any[];
}

export const MobileUniversityUnitsSlider: React.FC<MobileUniversityUnitsSliderProps> = ({ 
  units = initialData.universityUnits 
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

  const total = units.length;

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

  // Card geometry: 82% of container width or max 330px
  const cardWidth = Math.min(Math.round(containerWidth * 0.82), 330);
  const cardGap = 16;
  // Center slide calculation
  const centerOffset = (containerWidth - cardWidth) / 2;
  const translateX = centerOffset - currentIndex * (cardWidth + cardGap) + dragOffset;

  return (
    <div className="space-y-6 select-none -mx-4 sm:-mx-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] overflow-hidden" ref={containerRef}>
      
      {/* ── PRATHAM-STYLE EDITORIAL HEADER FOR MOBILE ──────────────────────── */}
      <div className="text-center space-y-3 px-4">
        <span className="inline-block bg-[#0052B4] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-sm shadow-xs">
          Pan-India Campus Network
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900 tracking-tight">
          Our 7 University Units
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-sm mx-auto">
          Active university units from Delhi to Hyderabad ensuring first-generation scholars find immediate peer mentorship, admission guidance, and campus support.
        </p>

        {/* Pratham signature handwritten "Explore All Units >" button */}
        <div className="pt-1">
          <Link
            to="/units"
            className="font-pratham-handwriting text-2xl font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 transition-colors group cursor-pointer"
          >
            <span>Explore All 7 Units</span>
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
          {units.map((unit, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={unit.id}
                className="shrink-0 flex flex-col transition-all duration-300"
                style={{ width: `${cardWidth}px` }}
              >
                <div
                  className={`bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl flex flex-col justify-between transition-all duration-300 h-full ${
                    isActive ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-65'
                  }`}
                >
                  {/* Top Campus Archival Photo with Pratham Yellow Badge */}
                  <div className="relative h-56 sm:h-60 bg-slate-950 overflow-hidden">
                    <img
                      src={unit.image}
                      alt={unit.name}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.src =
                          'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Establishment Badge top-left */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-300/30">
                      Est. {unit.established}
                    </div>

                    {/* Location Badge top-right */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                      <MapPin className="w-3 h-3 text-[#ffbe00]" />
                      <span>{unit.location}</span>
                    </div>

                    {/* Pratham Signature Yellow Tag Badge anchored at bottom-left */}
                    <div className="absolute bottom-0 left-0 bg-[#ffbe00] text-black text-[11px] font-black uppercase tracking-wider px-3.5 py-1 shadow-md">
                      {unit.code} CAMPUS UNIT
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-slate-900 leading-snug">
                        {unit.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                        {unit.description}
                      </p>
                    </div>

                    {/* Metrics and Pratham Handwritten Link */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10.5px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                        <Users className="w-3 h-3 text-emerald-600" />
                        <span>{unit.studentsCount}+ Scholars</span>
                      </span>

                      <Link
                        to={`/${unit.id}`}
                        className="font-pratham-handwriting text-2xl font-bold text-slate-900 hover:text-[#0052B4] inline-flex items-center gap-1 transition-transform active:scale-95 cursor-pointer underline decoration-slate-950/30 underline-offset-4"
                      >
                        <span>Explore Unit</span>
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
            aria-label="Previous Campus Unit"
            className="w-11 h-11 rounded-full bg-white text-slate-700 hover:text-slate-950 border border-slate-300 shadow-md flex items-center justify-center transition-all active:scale-90 hover:shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700 stroke-[2.5]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-2">
            {units.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to campus unit ${i + 1}`}
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
            aria-label="Next Campus Unit"
            className="w-11 h-11 rounded-full bg-white text-[#0052B4] hover:text-[#003D87] border-2 border-[#0052B4] shadow-md flex items-center justify-center transition-all active:scale-90 hover:shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-[#0052B4] stroke-[2.5]" />
          </button>
        </div>
      </div>

    </div>
  );
};
