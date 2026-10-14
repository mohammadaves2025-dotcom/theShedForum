import React, { useState, useEffect, useCallback } from 'react';
import { Camera, Images } from 'lucide-react';
import { ApiService } from '../services/api';
import { ImageLightbox } from './ImageLightbox';
import type { LightboxItem } from './ImageLightbox';
import { PageHeroBanner } from './PageHeroBanner';

const UNIT_TABS = [
  { key: 'all',    label: 'All Photos' },
  { key: 'MANUU',  label: 'MANUU · Hyderabad' },
  { key: 'JMI',    label: 'JMI · New Delhi' },
  { key: 'AMU',    label: 'AMU · Aligarh' },
  { key: 'Online', label: 'Online Events' },
];

const CATEGORY_TABS = [
  { key: 'all',         label: 'All' },
  { key: 'Campus Life', label: 'Campus Life' },
  { key: 'Events',      label: 'Events' },
  { key: 'Coaching',    label: 'Coaching' },
  { key: 'Outreach',    label: 'Outreach' },
];

const UNIT_MAP: Record<string, string> = {
  MANUU: 'manuu-unit',
  JMI: 'jmi-unit',
  AMU: 'amu-unit',
  Online: 'online',
};

// Heights for a masonry-like "varied card" feel
const HEIGHTS = [220, 260, 200, 280, 240, 210, 270, 230, 250, 200, 260, 220];

export const PhotoGalleryPage: React.FC = () => {
  const [gallery, setGallery] = useState<any[]>([]);
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [selectedCat, setSelectedCat] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    ApiService.getGallery().then(setGallery);
  }, []);

  // Wire up the lb-goto event from the filmstrip
  const handleGoto = useCallback((e: Event) => {
    const idx = (e as CustomEvent).detail.index;
    setLightboxIndex(idx);
  }, []);
  useEffect(() => {
    window.addEventListener('lb-goto', handleGoto);
    return () => window.removeEventListener('lb-goto', handleGoto);
  }, [handleGoto]);

  // Filter
  const photos = gallery.filter(g => g.type !== 'video');
  const filtered = photos.filter(item => {
    const unitMatch =
      selectedUnit === 'all' || item.unit === UNIT_MAP[selectedUnit];
    const catMatch =
      selectedCat === 'all' || item.category === selectedCat;
    return unitMatch && catMatch;
  });

  // Build lightbox items from filtered list
  const lbItems: LightboxItem[] = filtered.map(item => ({
    src: item.url,
    title: item.title,
    caption: item.caption,
    category: item.category,
    unit: item.unit,
  }));

  const openAt = (idx: number) => setLightboxIndex(idx);

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image="/images/extracted_ShEd _p1_1.jpg"
        badgeText="PHOTO GALLERY"
        alt="The ShED Forum Photo Gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        {/* Editorial Heading */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Visual Chronicle • Campus Archive
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-tight">
            Moments of Impact & Campus Life
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            A visual chronicle of ShED Forum's journey across campuses — from grassroots meetups and orientation programmes to career guidance events and community gatherings.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 pt-1">
            <Images className="w-4 h-4 text-[#009A44]" />
            <span>{photos.length} photos · 3 campuses · MANUU, JMI &amp; AMU</span>
          </div>
        </div>

      {/* ── Campus / Unit Tab Filter ──────────────────────────────────── */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {UNIT_TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => { setSelectedUnit(tab.key); setLightboxIndex(null); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                selectedUnit === tab.key
                  ? 'bg-[#0052B4] text-white shadow-lg shadow-blue-500/20 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-[#0052B4] hover:text-[#0052B4]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category sub-filter */}
        <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-3">
          {CATEGORY_TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => { setSelectedCat(tab.key); setLightboxIndex(null); }}
              className={`px-3.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                selectedCat === tab.key
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-slate-400 font-medium self-center">
            {filtered.length} photo{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* ── Masonry-Style Gallery Grid ───────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center space-y-3">
          <Camera className="w-12 h-12 text-slate-300 mx-auto" />
          <p className="text-slate-500 font-semibold text-sm">No photos match this filter.</p>
        </div>
      ) : (
        <div className="columns-1 xs:columns-2 sm:columns-3 lg:columns-4 gap-3.5 space-y-0">
          {filtered.map((item, idx) => {
            const h = HEIGHTS[idx % HEIGHTS.length];
            return (
              <div
                key={item.id}
                className="break-inside-avoid mb-3.5 group relative overflow-hidden rounded-2xl cursor-pointer border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                style={{ height: h }}
                onClick={() => openAt(idx)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Touch-friendly overlay with permanent subtle visibility on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffbe00] mb-0.5">
                    {item.category}
                  </span>
                  <p className="text-white text-xs font-semibold leading-tight line-clamp-2">
                    {item.title}
                  </p>
                </div>
                {/* Corner zoom icon */}
                <div className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Camera className="w-3.5 h-3.5 text-slate-700" />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Lightbox ─────────────────────────────────────────────────── */}
      <ImageLightbox
        items={lbItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex(i => (i !== null ? (i - 1 + lbItems.length) % lbItems.length : null))}
        onNext={() => setLightboxIndex(i => (i !== null ? (i + 1) % lbItems.length : null))}
        onGoTo={(idx) => setLightboxIndex(idx)}
      />
      </div>
    </div>
  );
};
