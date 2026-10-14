import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

export interface LightboxItem {
  src: string;
  title?: string;
  caption?: string;
  category?: string;
  unit?: string;
}

interface ImageLightboxProps {
  items: LightboxItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onGoTo?: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onGoTo,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Reset zoom when switching images
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === ' ' || e.key === 'z') {
        e.preventDefault();
        setIsZoomed((prev) => !prev);
      }
    },
    [currentIndex, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when open
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [currentIndex]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const item = items[currentIndex];
  const total = items.length;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col select-none transition-all duration-300"
      style={{ 
        background: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
      onClick={onClose}
    >
      {/* ── Top bar: Google Drive style frosted neutral dark header ── */}
      <div
        className="flex items-center justify-between px-4 sm:px-8 py-3.5 flex-shrink-0 border-b border-white/10 z-30"
        style={{ 
          background: 'rgba(0, 0, 0, 0.60)', 
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Left: Category badge & Title */}
        <div className="flex-1 min-w-0 pr-4 flex items-center gap-2.5">
          {item.category && (
            <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-amber-300 bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded-full shrink-0">
              {item.category}
            </span>
          )}
          {item.title && (
            <p className="text-white text-xs sm:text-sm md:text-base font-semibold truncate leading-tight">
              {item.title}
            </p>
          )}
        </div>

        {/* Right: Counter + Zoom + Close */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <span className="text-white/80 text-xs sm:text-sm font-mono font-medium tabular-nums bg-white/10 px-2.5 py-1 rounded-lg border border-white/15">
            {currentIndex + 1} / {total}
          </span>

          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
            title={isZoomed ? "Zoom Out (Z)" : "Zoom In (Z)"}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5 text-amber-300" /> : <ZoomIn className="w-5 h-5" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ── Main image area: Google Drive style BIG Expansive Viewport ── */}
      <div className="flex-1 relative w-full h-full flex items-center justify-center overflow-hidden p-2 sm:p-4 md:p-6">
        
        {/* Previous Button (Google Drive translucent circular button) */}
        {total > 1 && (
          <button
            onClick={e => { e.stopPropagation(); onPrev(); }}
            className="absolute left-2 sm:left-6 md:left-8 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full text-white/90 hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer border border-white/20 flex items-center justify-center"
            style={{ 
              background: 'rgba(0, 0, 0, 0.50)', 
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)'
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.75)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.50)')}
            title="Previous (←)"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>
        )}

        {/* Expansive Image Container */}
        <div
          className="relative flex items-center justify-center w-full h-full overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <img
            key={currentIndex}
            src={item.src}
            alt={item.title || `Photo ${currentIndex + 1}`}
            onClick={() => setIsZoomed(!isZoomed)}
            className={`rounded-lg sm:rounded-xl shadow-2xl object-contain transition-all duration-200 select-none ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in hover:opacity-98'
            }`}
            style={{
              width: '100%',
              height: '100%',
              maxWidth: isZoomed ? '98vw' : '94vw',
              maxHeight: isZoomed 
                ? 'calc(100vh - 90px)' 
                : (total > 1 ? 'calc(100vh - 170px)' : 'calc(100vh - 120px)'),
              objectFit: 'contain',
              boxShadow: '0 25px 80px -15px rgba(0, 0, 0, 0.95), 0 0 40px rgba(0, 0, 0, 0.8)',
              animation: 'lb-fade-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>

        {/* Next Button (Google Drive translucent circular button) */}
        {total > 1 && (
          <button
            onClick={e => { e.stopPropagation(); onNext(); }}
            className="absolute right-2 sm:right-6 md:right-8 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full text-white/90 hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer border border-white/20 flex items-center justify-center"
            style={{ 
              background: 'rgba(0, 0, 0, 0.50)', 
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)'
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.75)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.50)')}
            title="Next (→)"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>
        )}
      </div>

      {/* ── Bottom caption bar (Google Drive style neutral dark) ─────────── */}
      {item.caption && (
        <div
          className="px-6 py-2.5 flex-shrink-0 text-center border-t border-white/10 z-30"
          style={{ 
            background: 'rgba(0, 0, 0, 0.65)', 
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
          onClick={e => e.stopPropagation()}
        >
          <p className="text-white/85 text-xs sm:text-sm font-normal leading-relaxed max-w-3xl mx-auto">
            {item.caption}
          </p>
        </div>
      )}

      {/* ── Thumbnail filmstrip (Neutral Dark with Blur) ─────────────────── */}
      {total > 1 && (
        <div
          className="px-4 py-2.5 flex gap-2 overflow-x-auto flex-shrink-0 justify-center scrollbar-thin border-t border-white/10 z-30"
          style={{ 
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
          onClick={e => e.stopPropagation()}
        >
          {items.map((it, idx) => (
            <button
              key={idx}
              onClick={() => onGoTo ? onGoTo(idx) : undefined}
              className={`flex-shrink-0 w-12 h-9 sm:w-16 sm:h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'border-white scale-110 shadow-lg ring-2 ring-white/40'
                  : 'border-white/15 opacity-40 hover:opacity-80 hover:border-white/40'
              }`}
            >
              <img src={it.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Keyframe animation */}
      <style>{`
        @keyframes lb-fade-in {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};
