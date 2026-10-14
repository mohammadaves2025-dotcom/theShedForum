import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Quote, MapPin, Heart, Sparkles, 
  ChevronRight, ChevronLeft, UserCheck, 
  GraduationCap, Award, ArrowRight, 
  Share2, Check, ExternalLink, Clock
} from 'lucide-react';
import { impactStoriesData, type StudentStory } from './ImpactWall';

interface StoryDetailPageProps {
  onOpenHelpdesk?: () => void;
}

export const StoryDetailPage: React.FC<StoryDetailPageProps> = ({ onOpenHelpdesk }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState(false);

  // Find story by id
  const storyIndex = impactStoriesData.findIndex(s => s.id === id);
  const story: StudentStory | undefined = storyIndex !== -1 ? impactStoriesData[storyIndex] : undefined;

  // Next / Previous stories
  const prevStory = storyIndex > 0 
    ? impactStoriesData[storyIndex - 1] 
    : impactStoriesData[impactStoriesData.length - 1];

  const nextStory = storyIndex !== -1 && storyIndex < impactStoriesData.length - 1 
    ? impactStoriesData[storyIndex + 1] 
    : impactStoriesData[0];

  // Related stories (3 other stories excluding current)
  const relatedStories = impactStoriesData
    .filter(s => s.id !== id)
    .slice(0, 3);

  // Handle keyboard navigation (Left/Right arrows for next/prev)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && nextStory) {
        navigate(`/student-stories/${nextStory.id}`);
      } else if (e.key === 'ArrowLeft' && prevStory) {
        navigate(`/student-stories/${prevStory.id}`);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextStory, prevStory, navigate]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleShareWhatsApp = () => {
    if (!story) return;
    const text = encodeURIComponent(`Read ${story.name}'s inspiring journey from rural Seemanchal to ${story.university} on The ShED Forum:\n${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  if (!story) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <GraduationCap className="w-16 h-16 text-slate-300 mx-auto" />
        <h1 className="text-2xl sm:text-3xl font-serif-heading font-bold text-slate-800">
          Story Not Found
        </h1>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          The impact story you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/student-stories"
          className="inline-flex items-center gap-2 bg-[#0052B4] hover:bg-[#003D87] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Stories of Change</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* ── TOP BREADCRUMB & RETURN BAR ────────────────────────────────────── */}
      <div className="bg-slate-50/80 border-b border-slate-200/80 sticky top-[60px] sm:top-[68px] z-30 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-2 text-slate-500 truncate">
            <Link to="/" className="hover:text-[#0052B4] font-medium transition-colors">Home</Link>
            <span>/</span>
            <Link to="/student-stories" className="hover:text-[#0052B4] font-medium transition-colors">Stories of Change</Link>
            <span>/</span>
            <span className="text-slate-800 font-bold truncate">{story.name}</span>
          </div>

          <Link
            to="/student-stories"
            className="flex items-center gap-1.5 font-bold text-[#0052B4] hover:underline shrink-0 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs hover:border-[#0052B4] transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">All Stories</span>
          </Link>

        </div>
      </div>

      {/* ── PRATHAM-STYLE ARTICLE CONTAINER ─────────────────────────────────── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-10">
        
        {/* Category Badge & Meta Line */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="bg-[#FFBE00]/20 text-[#B45309] border border-[#FFBE00]/40 px-3 py-1 rounded-full uppercase tracking-wider">
              Stories of Change
            </span>
            <span className="bg-blue-50 text-[#0052B4] border border-blue-200 px-3 py-1 rounded-full">
              {story.tag}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {story.readTime}
            </span>
          </div>

          {/* Main Article Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-slate-900 tracking-tight leading-[1.2]">
            {story.editorialTitle}
          </h1>

          {/* Standfirst / Subtitle in Italic */}
          <p className="text-sm sm:text-lg md:text-xl font-serif italic text-slate-700 leading-relaxed border-l-4 border-amber-400 pl-3.5 sm:pl-4 py-1.5 bg-amber-50/40 rounded-r-2xl">
            {story.editorialSubtitle}
          </p>

          {/* Byline & Date Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 pt-3 border-t border-slate-200">
            <div className="flex items-center gap-2 font-medium">
              <span className="font-bold text-slate-800">By ShED Grassroots Impact &amp; Mentorship Cell</span>
              <span>•</span>
              <span>{story.batch}</span>
            </div>

            {/* Social Sharing Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors shadow-xs"
                title="Copy Story Link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-600" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold border border-emerald-200/80 transition-colors shadow-xs"
                title="Share Story on WhatsApp"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── LARGE FEATURED HERO PHOTOGRAPHY (PRATHAM FORMAT) ─────────────── */}
        <figure className="space-y-2">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/10] sm:aspect-[16/9] bg-slate-100 border border-slate-200">
            <img 
              src={story.image} 
              alt={story.name} 
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            
            {/* Top location tag */}
            <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] sm:text-xs font-bold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#D91B24]" />
              <span>{story.nativeDistrict}</span>
            </div>

            {/* Bottom verified scholar badge */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white">
              <span className="bg-slate-900/90 backdrop-blur-sm text-white text-[10.5px] sm:text-xs font-semibold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/20 shadow-md max-w-full truncate">
                ✓ Verified ShED Scholar • {story.highlightMetric}
              </span>
            </div>
          </div>

          <figcaption className="text-xs text-slate-500 italic text-center px-4 pt-1">
            {story.caption}
          </figcaption>
        </figure>

        {/* ── BIG PULL-QUOTE CALLOUT ───────────────────────────────────────── */}
        <div className="bg-gradient-to-r from-blue-50/80 via-slate-50 to-amber-50/50 p-6 sm:p-10 rounded-3xl border border-blue-100 relative shadow-xs my-8">
          <Quote className="w-12 h-12 text-[#0052B4]/15 absolute top-5 right-5 pointer-events-none" />
          <blockquote className="text-lg sm:text-2xl font-serif italic text-slate-800 leading-relaxed">
            "{story.quote}"
          </blockquote>
          <p className="text-xs sm:text-sm font-bold text-[#0052B4] mt-4 uppercase tracking-wider">
            — {story.name}, {story.degree} ({story.university})
          </p>
        </div>

        {/* ── MULTI-PARAGRAPH NARRATIVE STORY (PRATHAM JOURNALISM) ─────────── */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
          {story.storyParagraphs.map((para, index) => (
            <p key={index} className={index === 0 ? "text-lg sm:text-xl text-slate-800 font-serif leading-relaxed" : ""}>
              {para}
            </p>
          ))}
        </div>

        {/* ── IMPACT AT A GLANCE (KEY FACTSHEET) ───────────────────────────── */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5 my-10">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Impact at a Glance • Verified Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D91B24]" />
                Native District &amp; Region
              </span>
              <p className="text-sm font-bold text-slate-800">
                {story.nativeDistrict}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#0052B4]" />
                Admitted Program &amp; University
              </span>
              <p className="text-sm font-bold text-slate-800">
                {story.degree} • {story.university}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                Grassroots Milestone
              </span>
              <p className="text-sm font-bold text-emerald-700">
                {story.highlightMetric}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#0052B4]" />
                Pay-It-Forward Mentorship
              </span>
              <p className="text-sm font-bold text-slate-800">
                {story.mentorContribution}
              </p>
            </div>
          </div>
        </div>

        {/* ── PREVIOUS & NEXT STORY NAVIGATION TILES ───────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-slate-200">
          <Link
            to={`/student-stories/${prevStory.id}`}
            className="p-5 rounded-2xl border border-slate-200 hover:border-[#0052B4] text-left transition-all hover:bg-slate-50 group flex items-center gap-4 bg-white shadow-xs"
          >
            <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-[#0052B4] group-hover:-translate-x-1 transition-transform shrink-0" />
            <div className="truncate">
              <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
                ← Previous Story
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0052B4] transition-colors truncate block">
                {prevStory.name}
              </span>
              <span className="text-xs text-slate-500 truncate block">
                {prevStory.university.split('(')[0]}
              </span>
            </div>
          </Link>

          <Link
            to={`/student-stories/${nextStory.id}`}
            className="p-5 rounded-2xl border border-slate-200 hover:border-[#0052B4] text-right transition-all hover:bg-slate-50 group flex items-center justify-end gap-4 bg-white shadow-xs"
          >
            <div className="truncate">
              <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
                Next Story →
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0052B4] transition-colors truncate block">
                {nextStory.name}
              </span>
              <span className="text-xs text-slate-500 truncate block">
                {nextStory.university.split('(')[0]}
              </span>
            </div>
            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-[#0052B4] group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </div>

        {/* ── PRATHAM DONATION & SUPPORT CALLOUT ───────────────────────────── */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#0F172A] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
              Support First-Generation Scholars
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-heading font-bold">
              Help Us Write More Stories Like {story.name}’s
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed font-normal">
              100% of your tax-exempt donation funds free entrance preparatory coaching, application fees, travel assistance, and campus accommodation for rural students from Seemanchal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              to="/donate"
              className="w-full sm:w-auto bg-[#D91B24] hover:bg-[#b5161e] text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Heart className="w-4 h-4 text-white" />
              <span>Donate to ShED</span>
            </Link>

            {onOpenHelpdesk && (
              <button
                onClick={onOpenHelpdesk}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-5 py-3.5 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Connect With A Mentor</span>
              </button>
            )}
          </div>
        </div>

        {/* ── MORE STORIES OF CHANGE (GRID) ─────────────────────────────────── */}
        <div className="space-y-6 pt-10 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs font-bold text-[#009A44] uppercase tracking-wider">
                Explore More Journeys
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-slate-900">
                More Stories of Change
              </h3>
            </div>
            <Link
              to="/student-stories"
              className="text-xs font-bold text-[#0052B4] hover:underline flex items-center gap-1"
            >
              <span>View All 10 Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedStories.map((rel) => (
              <Link
                key={rel.id}
                to={`/student-stories/${rel.id}`}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img 
                      src={rel.image} 
                      alt={rel.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-white/95 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs text-slate-700">
                      {rel.nativeDistrict}
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-bold text-[#009A44] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 inline-block">
                      {rel.tag}
                    </span>
                    <h4 className="font-serif-heading font-bold text-sm text-slate-900 group-hover:text-[#0052B4] transition-colors leading-snug line-clamp-2">
                      {rel.editorialTitle}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 italic font-serif">
                      "{rel.quote}"
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 flex justify-between items-center text-xs">
                  <span className="text-[11px] text-slate-400 font-medium">{rel.batch}</span>
                  <span className="text-xs font-bold text-[#0052B4] flex items-center gap-1 group-hover:underline">
                    Read Story <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </article>

    </div>
  );
};
