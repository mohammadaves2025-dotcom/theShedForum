import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HeroSlideItem {
  id: string;
  image: string;
  alt: string;
  link?: string;
}

/**
 * CLIENT HERO IMAGES CONFIGURATION:
 * Images are located in '/images/hero/' (client/public/images/hero/).
 * The client will supply Canva / graphic template banner images where all typography
 * and branding are built into the design. No hard-coded text is overlaid.
 * To replace or add slides, simply drop image files into the folder and update the list below.
 */
export const HERO_SLIDES: HeroSlideItem[] = [
  {
    id: "hero-slide-1",
    image: "/images/hero/hero-1.jpg",
    alt: "The ShED Forum - Grassroots Community Education and Learning"
  },
  {
    id: "hero-slide-2",
    image: "/images/hero/hero-2.jpg",
    alt: "The ShED Forum - Rural Youth Coaching and Classroom Empowerment"
  },
  {
    id: "hero-slide-3",
    image: "/images/hero/hero-3.jpg",
    alt: "The ShED Forum - Higher Education Access and Academic Mentorship"
  },
  {
    id: "hero-slide-4",
    image: "/images/hero/hero-4.jpg",
    alt: "The ShED Forum - First-Generation Scholars University Community"
  }
];

interface HeroSliderProps {
  onOpenHelpdesk?: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<any>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const SLIDE_DURATION = 4000; // 4 seconds autoplay

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  // Autoplay timer: auto-slides every 4 seconds
  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isHovered, currentSlide]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-slate-950 group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Main Hero Banner Slider"
    >
      {/* Aspect Ratio Container for High-Resolution Full-Bleed Banners */}
      <div className="relative w-full h-[260px] xs:h-[320px] sm:h-[440px] md:h-[540px] lg:h-[640px] xl:h-[720px] 2xl:h-[780px]">
        
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Full-bleed banner graphic (No hard-coded text overlay, client graphics take full stage) */}
              <img
                src={slide.image}
                alt={slide.alt}
                loading={idx === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
              />

              {/* Subtle bottom vignette to blend seamlessly into slider pagination and page */}
              <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
            </div>
          );
        })}

        {/* ========================================================================= */}
        {/* SLIDER CONTROLS: FLOATING ARROWS (Subtly visible on mobile for touch, hover on desktop) */}
        {/* ========================================================================= */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-70 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-70 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* ========================================================================= */}
        {/* PAGINATION DOTS (Matching Pratham screenshot: active yellow dot, white dots)*/}
        {/* ========================================================================= */}
        <div className="absolute bottom-3.5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-2.5">
          {HERO_SLIDES.map((_, idx) => {
            const isActive = idx === currentSlide;

            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#ffbe00] shadow-[0_0_10px_rgba(255,190,0,0.8)] scale-110'
                    : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/70 hover:bg-white shadow-xs'
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
