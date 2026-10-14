import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { impactStoriesData, type StudentStory } from './ImpactWall';

export const MobileImpactStoriesSlider: React.FC = () => {
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

  const stories: StudentStory[] = impactStoriesData;
  const total = stories.length;

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
        <span className="inline-block bg-[#ffbe00] text-black text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-sm shadow-xs">
          Voices of Empowerment
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900 tracking-tight">
          Stories Of Change
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-sm mx-auto">
          Step into the heart of ShED Forum’s mission through our Stories of Change—a collection of real-life journeys that showcase the resilience, determination, and hope of rural scholars rewriting their futures.
        </p>

        {/* Pratham signature handwritten "View All >" button */}
        <div className="pt-1">
          <Link
            to="/student-stories"
            className="font-pratham-handwriting text-2xl font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 transition-colors group cursor-pointer"
          >
            <span>View All</span>
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
          {stories.map((story, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={story.id}
                className="shrink-0 flex flex-col transition-all duration-300"
                style={{ width: `${cardWidth}px` }}
              >
                <div
                  className={`bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl flex flex-col justify-between transition-all duration-300 h-full ${
                    isActive ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-65'
                  }`}
                >
                  {/* Top Photo */}
                  <div className="relative h-60 sm:h-64 bg-slate-950 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.src =
                          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* District Pill */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/65 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                      <MapPin className="w-3 h-3 text-[#ffbe00]" />
                      <span>{story.nativeDistrict}</span>
                    </div>

                    {/* Tag badge anchored at bottom-left */}
                    <div className="absolute bottom-0 left-0 bg-[#0052B4] text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 shadow-md">
                      {story.tag || 'Scholar Story'}
                    </div>
                  </div>

                  {/* Bottom Solid Pratham Golden-Yellow Box */}
                  <div className="bg-[#ffbe00] p-5 sm:p-6 text-slate-950 flex flex-col justify-between flex-1 relative">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif-heading font-bold text-slate-950 leading-tight">
                        {story.name}
                      </h3>
                      <p className="text-[11.5px] font-bold text-slate-900/85">
                        {story.degree} • {story.university}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pt-1 line-clamp-3">
                        {story.storySnippet || story.quote}
                      </p>
                    </div>

                    {/* Pratham Signature Handwritten "Read More" */}
                    <div className="pt-4 flex items-center justify-between">
                      <Link
                        to={`/student-stories/${story.id}`}
                        className="font-pratham-handwriting text-2xl font-bold text-slate-950 hover:text-black inline-flex items-center gap-1 transition-transform active:scale-95 cursor-pointer underline decoration-slate-950/40 underline-offset-4"
                      >
                        <span>Read More</span>
                        <span className="text-xl">›</span>
                      </Link>

                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900/70 bg-black/10 px-2 py-0.5 rounded">
                        {story.batch}
                      </span>
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
            aria-label="Previous Story"
            className="w-11 h-11 rounded-full bg-white text-slate-700 hover:text-slate-950 border border-slate-300 shadow-md flex items-center justify-center transition-all active:scale-90 hover:shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700 stroke-[2.5]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-2">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to story ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? 'w-6 h-2 bg-[#ffbe00] shadow-xs'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Story"
            className="w-11 h-11 rounded-full bg-white text-[#ffbe00] hover:text-amber-600 border-2 border-[#ffbe00] shadow-md flex items-center justify-center transition-all active:scale-90 hover:shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-amber-600 stroke-[2.5]" />
          </button>
        </div>
      </div>

    </div>
  );
};
