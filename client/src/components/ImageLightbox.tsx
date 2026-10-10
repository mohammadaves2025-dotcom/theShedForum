import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
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
      className="fixed inset-0 z-[9999] flex flex-col"
      style={{ background: 'rgba(2,6,23,0.97)' }}
      onClick={onClose}
    >
      {/* ── Top bar ────────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-5 py-3 flex-shrink-0"
        style={{ background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(16px)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Left: title + category */}
        <div className="flex-1 min-w-0 pr-4">
          {item.category && (
            <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-0.5 rounded-full mb-1">
              {item.category}
            </span>
          )}
          {item.title && (
            <p className="text-white text-sm font-semibold truncate leading-tight">
              {item.title}
            </p>
          )}
        </div>

        {/* Right: counter + close */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-slate-400 text-xs font-mono font-bold tabular-nums">
            {currentIndex + 1} / {total}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ── Main image area ─────────────────────────────────────────── */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Prev */}
        <button
          onClick={e => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 sm:left-6 z-10 p-3 rounded-full text-white transition-all"
          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          title="Previous (←)"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Image */}
        <div
          className="relative max-w-[90vw] max-h-[calc(100vh-140px)] flex items-center justify-center"
          onClick={e => e.stopPropagation()}
        >
          <img
            key={currentIndex}
            src={item.src}
            alt={item.title || `Photo ${currentIndex + 1}`}
            className="max-w-full max-h-[calc(100vh-140px)] object-contain rounded-lg shadow-2xl"
            style={{
              boxShadow: '0 25px 80px rgba(0,0,0,0.8)',
              animation: 'lb-fade-in 0.18s ease',
            }}
          />
        </div>

        {/* Next */}
        <button
          onClick={e => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 sm:right-6 z-10 p-3 rounded-full text-white transition-all"
          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          title="Next (→)"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* ── Bottom caption bar ──────────────────────────────────────── */}
      {item.caption && (
        <div
          className="px-6 py-3 flex-shrink-0 text-center"
          style={{ background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(16px)' }}
          onClick={e => e.stopPropagation()}
        >
          <p className="text-slate-300 text-xs leading-relaxed max-w-2xl mx-auto">{item.caption}</p>
        </div>
      )}

      {/* ── Thumbnail filmstrip ─────────────────────────────────────── */}
      {total > 1 && (
        <div
          className="px-4 py-3 flex gap-2 overflow-x-auto flex-shrink-0 justify-center scrollbar-thin"
          style={{ background: 'rgba(2,6,23,0.95)' }}
          onClick={e => e.stopPropagation()}
        >
          {items.map((it, idx) => (
            <button
              key={idx}
              onClick={() => onGoTo ? onGoTo(idx) : undefined}
              className={`flex-shrink-0 w-12 h-9 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? 'border-[#0052B4] scale-110 shadow-lg shadow-blue-500/30'
                  : 'border-white/10 opacity-50 hover:opacity-80 hover:border-white/30'
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
