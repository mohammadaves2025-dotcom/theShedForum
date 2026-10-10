import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  GraduationCap, MapPin, Users, Mail,
  CheckCircle2, Sparkles, ArrowLeft,
  ChevronLeft, ChevronRight, Camera, Images
} from 'lucide-react';
import { ApiService } from '../services/api';
import { ImageLightbox } from './ImageLightbox';
import type { LightboxItem } from './ImageLightbox';

interface UnitDetailPageProps {
  unitIdProp?: string;
  onOpenHelpdesk: () => void;
}

export const UnitDetailPage: React.FC<UnitDetailPageProps> = ({ unitIdProp, onOpenHelpdesk }) => {
  const params = useParams();
  const unitId = unitIdProp || params.unitId || 'manuu-unit';

  const [unit, setUnit] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Slider state
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    ApiService.getUnitById(unitId).then((data) => {
      setUnit(data);
      setSliderIndex(0);
      setLoading(false);
    });
  }, [unitId]);

  const images: string[] = unit?.images || (unit?.image ? [unit.image] : []);

  const lbItems: LightboxItem[] = images.map((src, i) => ({
    src,
    title: `${unit?.code} — Photo ${i + 1}`,
    caption: `${unit?.name}, ${unit?.location}`,
    category: unit?.code + ' Campus Unit',
  }));

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSliderIndex((idx + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 450);
  }, [images.length, isAnimating]);

  const goPrev = () => goTo(sliderIndex - 1);
  const goNext = () => goTo(sliderIndex + 1);

  // Autoplay
  useEffect(() => {
    if (images.length <= 1) return;
    autoplayRef.current = setInterval(() => goTo(sliderIndex + 1), 4500);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [sliderIndex, images.length]);

  // lb-goto event from filmstrip
  const handleGoto = useCallback((e: Event) => {
    setLightboxIndex((e as CustomEvent).detail.index);
  }, []);
  useEffect(() => {
    window.addEventListener('lb-goto', handleGoto);
    return () => window.removeEventListener('lb-goto', handleGoto);
  }, [handleGoto]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="inline-block animate-spin text-[#0052B4]">
          <GraduationCap className="w-12 h-12" />
        </div>
        <p className="text-xs text-slate-500 mt-2 font-bold">Loading Unit Details...</p>
      </div>
    );
  }

  if (!unit) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-black text-slate-900">Unit Not Found</h2>
        <p className="text-xs text-slate-600 font-medium">The requested university unit page could not be located.</p>
        <Link to="/units" className="inline-flex items-center gap-2 bg-[#0052B4] text-white text-xs px-5 py-2.5 rounded-xl font-black">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Units</span>
        </Link>
      </div>
    );
  }

  const hasImages = images.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

      {/* ── Back button ──────────────────────────────────────────────── */}
      <div>
        <Link to="/units" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-600 hover:text-[#0052B4] transition-colors">
          <ArrowLeft className="w-4 h-4 text-[#0052B4]" />
          <span>Back to University Network</span>
        </Link>
      </div>

      {/* ── Main Hero Banner ─────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-[#0F172A] via-[#0052B4] to-[#004A1E] rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative">
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

          {/* Left — text */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-5 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                Established {unit.established}
              </span>
              <span className="text-xs font-black text-white bg-white/15 px-3.5 py-1 rounded-full backdrop-blur-md">
                {unit.code} Campus Unit
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {unit.name}
            </h1>
            <p className="text-slate-200 text-sm leading-relaxed font-normal">
              {unit.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-1 text-xs text-slate-200 font-bold">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-300" />
                <span>{unit.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-300">{unit.studentsCount}+ Active Students</span>
              </div>
            </div>
            <button
              onClick={onOpenHelpdesk}
              className="inline-flex items-center gap-2 bg-white text-[#0052B4] hover:bg-slate-100 font-black py-3 px-6 rounded-xl text-xs transition-all shadow-lg w-fit"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Contact {unit.code} Helpdesk
            </button>
          </div>

          {/* Right — image slider panel */}
          {hasImages && (
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[420px] overflow-hidden rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl">
              {/* Main slide */}
              {images.map((src, idx) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    idx === sliderIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  onClick={() => setLightboxIndex(idx)}
                  style={{ cursor: 'zoom-in' }}
                >
                  <img
                    src={src}
                    alt={`${unit.code} photo ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                </div>
              ))}

              {/* Controls */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={e => { e.stopPropagation(); goPrev(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={e => { e.stopPropagation(); goNext(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all backdrop-blur-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={e => { e.stopPropagation(); goTo(idx); }}
                        className={`rounded-full transition-all duration-300 ${
                          idx === sliderIndex
                            ? 'w-5 h-2 bg-white'
                            : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Photo count badge */}
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                <Camera className="w-3 h-3" />
                {sliderIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Highlights & Support Desk ────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-sm">
          <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3">
            Unit Key Operational Functions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {unit.highlights?.map((item: string, idx: number) => (
              <div key={idx} className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0052B4] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h3 className="text-base font-black text-slate-900">University Committee Structure</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              The {unit.name} unit operates with a dedicated <strong>Unit Secretary</strong>, <strong>Treasurer</strong>,{' '}
              <strong>Unit Placement Coordinator</strong>, and <strong>Media Incharge</strong> managed under the Central Working Committee (CWC).
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-4 shadow-sm">
          <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#0052B4]" />
            Unit Support Desk
          </h3>
          <div className="space-y-3 text-xs text-slate-700 font-medium">
            <div>
              <span className="block font-bold text-slate-900">Unit Representative:</span>
              <span>{unit.incharge}</span>
            </div>
            <div>
              <span className="block font-bold text-slate-900">Official Unit Email:</span>
              <span className="text-[#0052B4] font-mono font-bold">{unit.contactEmail}</span>
            </div>
            <div>
              <span className="block font-bold text-slate-900">Central Helpline:</span>
              <span>+91 77372-80758</span>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={onOpenHelpdesk}
              className="w-full bg-[#0052B4] text-white font-black py-3 rounded-xl text-xs hover:bg-[#003D87] transition-colors shadow-sm"
            >
              Request Campus Assistance
            </button>
          </div>
        </div>
      </div>

      {/* ── Photo Gallery Grid ───────────────────────────────────────── */}
      {hasImages && (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Images className="w-5 h-5 text-[#0052B4]" />
              {unit.code} Photo Gallery
            </h2>
            <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
              {images.length} photos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none ${
                  idx === sliderIndex
                    ? 'border-[#0052B4] shadow-lg shadow-blue-500/20 ring-2 ring-[#0052B4]/20'
                    : 'border-transparent hover:border-[#0052B4]/40'
                }`}
                style={{ height: idx % 3 === 1 ? '180px' : '140px' }}
              >
                <img
                  src={src}
                  alt={`${unit.code} photo ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0052B4]/0 group-hover:bg-[#0052B4]/20 transition-colors duration-200 flex items-center justify-center">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-75 group-hover:scale-100">
                    <Camera className="w-4 h-4 text-[#0052B4]" />
                  </div>
                </div>
                {/* Index badge */}
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  {idx + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Full-Screen Lightbox ─────────────────────────────────────── */}
      <ImageLightbox
        items={lbItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex(i => (i !== null ? (i - 1 + lbItems.length) % lbItems.length : null))}
        onNext={() => setLightboxIndex(i => (i !== null ? (i + 1) % lbItems.length : null))}
      />

    </div>
  );
};
