import React from 'react';

interface PageHeroBannerProps {
  image: string;
  badgeText: string;
  alt?: string;
  className?: string;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  image,
  badgeText,
  alt,
  className = ''
}) => {
  return (
    <div className={`relative w-full h-[260px] sm:h-[380px] lg:h-[460px] overflow-hidden bg-slate-900 ${className}`}>
      {/* Full-bleed edge-to-edge photographic banner */}
      <img
        src={image}
        alt={alt || badgeText}
        className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
      />

      {/* Atmospheric darkening gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />

      {/* Signature Pratham Yellow Block Badge anchored at bottom-left */}
      <div className="absolute bottom-4 sm:bottom-8 lg:bottom-10 left-3 sm:left-8 lg:left-16 z-10 max-w-[calc(100vw-1.5rem)]">
        <div className="bg-[#ffbe00] text-black font-extrabold text-base sm:text-2xl md:text-3xl lg:text-4xl px-4 sm:px-7 py-2 sm:py-3 uppercase tracking-wider shadow-xl inline-block border-2 border-white/20 select-none leading-tight break-words">
          {badgeText}
        </div>
      </div>
    </div>
  );
};
