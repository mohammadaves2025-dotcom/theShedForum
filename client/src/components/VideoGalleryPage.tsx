import React, { useState } from 'react';
import { 
  Play, Video, Clock, Calendar, User, Search, 
  Sparkles, X, ChevronRight 
} from 'lucide-react';
import { PageHeroBanner } from './PageHeroBanner';

interface VideoItem {
  id: string;
  title: string;
  speaker: string;
  category: 'Keynotes' | 'CUET Webinars' | 'Alumni Stories' | 'Women Leadership' | 'Campus Roadmaps';
  duration: string;
  date: string;
  thumbnail: string;
  youtubeId: string;
  description: string;
  featured?: boolean;
}

const videoDatabase: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'The Educational Imperative for Shershahbadi Youth — Keynote Address',
    speaker: 'Prof. Mujibur Rahman (Jamia Millia Islamia)',
    category: 'Keynotes',
    duration: '24:15',
    date: 'March 8, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Delivered at MANUU Campus Hyderabad on Foundation Day. Addresses higher education access, institutional awareness, and community empowerment for first-generation scholars.',
    featured: true
  },
  {
    id: 'vid-2',
    title: 'CUET UG/PG 2026 Orientation: Master Class on Subject Combinations & Strategy',
    speaker: 'SCG Central Academic Mentors & Research Scholars',
    category: 'CUET Webinars',
    duration: '45:30',
    date: 'January 18, 2026',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'A complete walkthrough of General Test (Section III), English verbal ability, and university-specific domain combinations for Jamia, AMU, MANUU, JNU, and DU.',
    featured: true
  },
  {
    id: 'vid-3',
    title: 'Alumni Roundtable: From Seemanchal Villages to Premier Central Universities',
    speaker: 'ShED Alumni from AMU, JMI, JNU & DU',
    category: 'Alumni Stories',
    duration: '35:10',
    date: 'November 12, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Scholars share authentic personal journeys, overcoming lack of local resources, clearing national entrances, and securing hostel accommodations.'
  },
  {
    id: 'vid-4',
    title: 'Women in Higher Education: Breaking Barriers & 38% Enrollment Milestone',
    speaker: 'Nisat Alam & Women’s Education Mentorship Leads',
    category: 'Women Leadership',
    duration: '28:45',
    date: 'August 15, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Special panel discussion focusing on parental counseling, campus safety networks, scholarships, and women representation in central universities.'
  },
  {
    id: 'vid-5',
    title: 'Legal Literacy & Constitutional Framework for Grassroots Communities',
    speaker: 'Senior Judicial Officers & Legal Practitioners',
    category: 'Keynotes',
    duration: '31:20',
    date: 'October 2, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'An inspiring lecture on fundamental rights, legal literacy, and encouraging Seemanchal youth to pursue law and administrative services.'
  },
  {
    id: 'vid-6',
    title: 'Campus Life & Opportunities: Student Roadmap for MANUU & University of Hyderabad',
    speaker: 'MANUU & HCU Unit Secretariats',
    category: 'Campus Roadmaps',
    duration: '22:15',
    date: 'September 20, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Comprehensive orientation covering academic libraries, departmental facilities, student life, and city logistics in Hyderabad.'
  }
];

const categories = ['All', 'Keynotes', 'CUET Webinars', 'Alumni Stories', 'Women Leadership', 'Campus Roadmaps'] as const;

export const VideoGalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredVideos = videoDatabase.filter((vid) => {
    const matchesCat = selectedCategory === 'All' || vid.category === selectedCategory;
    const matchesSearch = 
      vid.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vid.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vid.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredVideo = videoDatabase.find((v) => v.featured);

  return (
    <div className="bg-white min-h-screen">
      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image="/images/hero/hero-1.jpg"
        badgeText="VIDEO GALLERY"
        alt="The ShED Forum Video Gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* Editorial Heading */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Official Video Corner • Recorded Lectures
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-tight">
            Video Archive &amp; Recorded Lectures
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Watch keynote addresses from our patrons, free CUET entrance coaching webinars, student success roundtables, and university campus orientation sessions.
          </p>
        </div>

      {/* ── Featured Keynote Spotlight ─────────────────────────── */}
      {featuredVideo && !searchQuery && selectedCategory === 'All' && (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 text-white grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-7 relative aspect-video bg-black group cursor-pointer overflow-hidden" onClick={() => setActiveVideo(featuredVideo)}>
            <img 
              src={featuredVideo.thumbnail} 
              alt={featuredVideo.title}
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#D91B24] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#b5161e] transition-all">
                <Play className="w-8 sm:w-10 h-8 sm:h-10 fill-current ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="bg-black/80 text-white text-xs font-bold px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-300" /> {featuredVideo.duration}
              </span>
              <span className="bg-[#0052B4] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                FEATURED SPOTLIGHT
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-300/20 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> {featuredVideo.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-white leading-snug">
              {featuredVideo.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <User className="w-4 h-4 text-[#00A3E0]" /> {featuredVideo.speaker}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {featuredVideo.description}
            </p>
            <button
              onClick={() => setActiveVideo(featuredVideo)}
              className="mt-2 bg-[#0052B4] hover:bg-[#003D87] text-white px-6 py-3 rounded-xl font-semibold text-xs transition-all flex items-center gap-2 shadow-md active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Watch Keynote Now</span>
            </button>
          </div>
        </div>
      )}

      {/* ── Filters & Search Bar ──────────────────────────────── */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0052B4] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-[#0052B4] hover:text-[#0052B4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search lectures, topics, speakers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0052B4] text-slate-800"
            />
          </div>
        </div>

        <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
          <span>Showing {filteredVideos.length} recorded session{filteredVideos.length !== 1 ? 's' : ''}</span>
          {selectedCategory !== 'All' && (
            <button 
              onClick={() => setSelectedCategory('All')}
              className="text-[#0052B4] font-semibold hover:underline"
            >
              Reset Category
            </button>
          )}
        </div>
      </div>

      {/* ── Video Cards Grid ──────────────────────────────────── */}
      {filteredVideos.length === 0 ? (
        <div className="py-20 text-center space-y-3 bg-white rounded-3xl border border-slate-200">
          <Video className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-semibold text-slate-700">No videos match your search</h3>
          <p className="text-xs text-slate-500">Try clearing the search query or selecting a different category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="group bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              {/* Thumbnail Header */}
              <div>
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#0052B4] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#D91B24] group-hover:text-white transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between items-center text-[10px] font-bold">
                    <span className="bg-black/75 text-white px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-300" /> {vid.duration}
                    </span>
                    <span className="bg-[#0052B4] text-white px-2 py-0.5 rounded">
                      {vid.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-serif-heading font-semibold text-slate-900 group-hover:text-[#0052B4] transition-colors leading-snug line-clamp-2">
                    {vid.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <User className="w-3.5 h-3.5 text-[#0052B4] shrink-0" />
                    <span className="truncate">{vid.speaker}</span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 font-normal">
                    {vid.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3 h-3 text-slate-400" /> {vid.date}
                </span>
                <span className="text-[#0052B4] group-hover:underline flex items-center gap-0.5">
                  Play Video <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Video Player Modal ─────────────────────────────────── */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 rounded-3xl max-w-4xl w-full border border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-4 bg-slate-950 flex justify-between items-center text-white border-b border-slate-800">
              <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5 truncate pr-4">
                <Video className="w-4 h-4 text-[#00A3E0] shrink-0" /> 
                <span className="truncate">{activeVideo.title}</span>
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-slate-400 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1 shrink-0"
              >
                <X className="w-4 h-4" /> Close
              </button>
            </div>

            {/* Video Iframe Player */}
            <div className="aspect-video w-full bg-black relative">
              <iframe
                className="w-full h-full border-0"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Details */}
            <div className="p-5 sm:p-6 bg-slate-900 text-slate-200 space-y-2 border-t border-slate-800">
              <div className="flex flex-wrap items-center gap-3 text-xs text-cyan-400 font-semibold">
                <span>{activeVideo.category}</span>
                <span>•</span>
                <span>{activeVideo.speaker}</span>
                <span>•</span>
                <span>{activeVideo.date}</span>
              </div>
              <h4 className="text-lg font-serif-heading font-semibold text-white">
                {activeVideo.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

      </div>
    </div>
  );
};
