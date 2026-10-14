import React, { useState } from 'react';
import { 
  Quote, Play, 
  Sparkles, ChevronRight, Video, FileText, ArrowLeft, X
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { PageHeroBanner } from './PageHeroBanner';

const distinguishedPatrons = [
  {
    id: "1",
    name: "Prof. Mujibur Rahman",
    role: "Chief Academic Patron & Senior University Mentor",
    institution: "Jamia Millia Islamia / Academician",
    designation: "Professor & Senior University Academician",
    quote: "Education is not merely a means of personal advancement; it is the foundation of community empowerment and lasting social transformation.",
    fullMessage: "When we established ShED Forum in 2018, our goal was simple yet profound: to ensure that no talented student in Seemanchal remains deprived of higher education simply due to lack of guidance or awareness. Higher education opens doors to self-reliance, intellectual leadership, and social dignity. I invite every scholar, mentor, and family member to join hands in this educational crusade.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    badge: "Chief Academic Patron",
    hasVideo: true,
  },
  {
    id: "2",
    name: "Judge Sahiba",
    role: "Legal Advisor & Patron",
    institution: "Judicial Officer & Legal Luminary",
    designation: "Judicial Officer & Legal Luminary",
    quote: "Legal literacy and higher education together equip our youth with the dignity, rights, and voice needed to shape our democracy.",
    fullMessage: "An educated community is a resilient community. By guiding our young men and women into top central universities, ShED Forum is preparing the next generation of lawyers, administrators, judges, and policy experts who will defend rights and serve the nation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    badge: "Legal Luminary",
    hasVideo: false,
  },
  {
    id: "3",
    name: "Sheikh Mutiurrahman",
    role: "Patron & Moral Guidance Lead",
    institution: "Imam Bukhari University",
    designation: "Imam Bukhari University",
    quote: "Connecting our young scholars with national centers of excellence ensures a bright future anchored in knowledge and moral ethics.",
    fullMessage: "Knowledge combined with ethical character is the cornerstone of societal progress. ShED Forum nurtures both academic brilliance and community responsibility in every student.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    badge: "Educational Patron",
    hasVideo: false,
  },
  {
    id: "4",
    name: "Tauquir Alam",
    role: "Patron & Executive Advisor",
    institution: "Community Leader & Educational Catalyst",
    designation: "Community Leader & Educational Catalyst",
    quote: "Every student supported today becomes a mentor for ten more tomorrow. This chain reaction is the heart of ShED Forum.",
    fullMessage: "Our 'Pay-It-Forward' framework ensures that community progress becomes self-sustaining. When one student clears CUET and enters university, they light the lamp for their entire village.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    badge: "Executive Pillar",
    hasVideo: false,
  },
  {
    id: "5",
    name: "Nisat Alam",
    role: "Patron & Women's Education Lead",
    institution: "Social Work & Women Empowerment",
    designation: "Social Work & Women Education Lead",
    quote: "Empowering women through higher education elevates entire families and transforms generations.",
    fullMessage: "Choosing International Women's Day as ShED's Foundation Day was a conscious commitment. Today, seeing 38% female enrollment in our coaching drives fills us with immense hope for the future.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    badge: "Women's Empowerment Lead",
    hasVideo: false,
  },
  {
    id: "6",
    name: "Alamgir Alam",
    role: "Patron & Legislative Leader",
    institution: "Former State Minister & Community Figure",
    designation: "Former State Minister & Community Figure",
    quote: "Policy and community action must join hands to create institutional access for deprived regions.",
    fullMessage: "Seemanchal has been left behind for too long when it comes to quality educational infrastructure. ShED Forum is filling that void through dedicated volunteer work, and I am proud to stand by its mission.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    badge: "Legislative Patron",
    hasVideo: false,
  },
  {
    id: "7",
    name: "Mushtaque Alam",
    role: "Patron & Community Crusader",
    institution: "Former MLA & Senior Community Leader",
    designation: "Former MLA & Educational Crusader",
    quote: "When rural talent is nurtured with guidance, extraordinary achievements follow.",
    fullMessage: "Seemanchal possesses boundless human potential. What our youth needed was awareness and campus helpdesks. ShED Forum has successfully bridged that distance.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    badge: "Community Patron",
    hasVideo: false,
  },
  {
    id: "8",
    name: "Motiur Rahman",
    role: "Patron & Legislative Representative",
    institution: "Member of Legislative Assembly (MLA)",
    designation: "Member of Legislative Assembly (MLA)",
    quote: "Dedicated to building permanent educational infrastructure and student assistance networks for Seemanchal.",
    fullMessage: "The state legislature must work hand in hand with civil society organisations like ShED Forum. Educational equity is not a privilege; it is a constitutional right for every child in Seemanchal.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    badge: "MLA Patron",
    hasVideo: false,
  },
];

/* ── Individual Patron Detail View ───────────────────────────────── */
const PatronDetail: React.FC<{ patron: typeof distinguishedPatrons[0]; onClose: () => void }> = ({ patron, onClose }) => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* Back Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center gap-3">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#0052B4] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Patrons
        </button>
        <span className="text-slate-300">|</span>
        <span className="text-xs text-slate-500 font-medium">{patron.badge}</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left: Large Portrait */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-4 border-slate-100 shadow-2xl group aspect-[3/4]">
              <img
                src={patron.image}
                alt={patron.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute top-4 left-4 bg-slate-900/85 text-cyan-300 text-[10.5px] font-semibold px-3 py-1 rounded-full border border-cyan-400/30">
                {patron.badge}
              </div>
              {patron.hasVideo && (
                <button
                  onClick={() => setVideoOpen(true)}
                  className="absolute inset-0 bg-slate-950/30 hover:bg-slate-950/10 transition-all flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0052B4] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </button>
              )}
            </div>

            {/* Identity Card */}
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-4 text-center space-y-1">
              <h3 className="text-lg font-serif-heading font-bold text-slate-900">{patron.name}</h3>
              <p className="text-xs font-semibold text-[#0052B4]">{patron.role}</p>
              <p className="text-[11px] text-slate-500">{patron.institution}</p>
            </div>
          </div>

          {/* Right: Message */}
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#0052B4] font-semibold text-xs uppercase tracking-wider bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              <Sparkles className="w-3.5 h-3.5" />
              Official Patron's Message
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900 leading-tight">
              Message from {patron.name}
            </h2>

            <blockquote className="text-base sm:text-lg text-slate-800 font-serif italic border-l-4 border-[#0052B4] pl-5 py-2 bg-blue-50/50 rounded-r-xl">
              <Quote className="w-5 h-5 text-[#0052B4] mb-2 opacity-40" />
              "{patron.quote}"
            </blockquote>

            <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
              <p>{patron.fullMessage}</p>
              <p>
                As a patron of <strong>The ShED Forum</strong>, I remain committed to ensuring that every student from Seemanchal's Shershahbadi community has access to the same opportunities as students from privileged backgrounds. The work of our volunteers, mentors, and scholars is a testament to what collective determination can achieve.
              </p>
            </div>

            {/* Signature block */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="font-serif italic text-lg text-slate-900 font-semibold">{patron.name}</div>
                <div className="text-xs text-slate-500">{patron.role}, ShED Forum</div>
              </div>
              <Link
                to="/publications"
                className="inline-flex items-center gap-2 bg-[#0052B4] hover:bg-[#003D87] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                Read Full Booklet PDF
              </Link>
            </div>

            {/* Navigate to other patrons */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wider">Other Patrons</p>
              <div className="flex flex-wrap gap-2">
                {distinguishedPatrons.filter(p => p.id !== patron.id).map(p => (
                  <Link
                    key={p.id}
                    to={`/patrons-message?id=${p.id}`}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-all text-xs font-semibold text-slate-700 hover:text-[#0052B4]"
                  >
                    <img src={p.image} alt={p.name} className="w-6 h-6 rounded-full object-cover" />
                    {p.name}
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 rounded-3xl max-w-3xl w-full border border-slate-800 shadow-2xl overflow-hidden">
            <div className="p-4 bg-slate-950 flex justify-between items-center border-b border-slate-800">
              <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                <Video className="w-4 h-4 text-[#00A3E0]" /> {patron.name} — Keynote Address
              </span>
              <button onClick={() => setVideoOpen(false)} className="text-slate-400 hover:text-white text-xs font-semibold px-3 py-1 rounded-lg bg-white/10 flex items-center gap-1">
                <X className="w-3.5 h-3.5" /> Close
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="ShED Forum Keynote Address"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Main Patrons Message Page ───────────────────────────────────── */
export const PatronsMessagePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const patronId = searchParams.get('id');

  const selectedPatron = patronId ? distinguishedPatrons.find(p => p.id === patronId) : null;

  // If a specific patron is selected, show their detail page
  if (selectedPatron) {
    return (
      <PatronDetail
        patron={selectedPatron}
        onClose={() => window.history.back()}
      />
    );
  }

  // Otherwise show the full patrons listing
  return (
    <div className="bg-white min-h-screen">
      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image="/gallery/jmi-unit/jmi-seminar-indoor-01.jpg"
        badgeText="PATRON'S VISION"
        alt="The ShED Forum Patron's Vision"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">

        {/* Editorial Heading */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Leadership Address • Governance Vision
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-tight">
            Patron's Messages &amp; Academic Vision
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Guiding principles and inspirational messages from our esteemed patrons, eminent academicians, judicial officers, and community leaders steering ShED Forum.
          </p>
        </div>

      {/* Patron Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Visionary Advisory Council
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900">
            Messages from Our Respected Patrons
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Click on any patron to read their full message.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {distinguishedPatrons.map((patron) => (
            <Link
              key={patron.id}
              to={`/patrons-message?id=${patron.id}`}
              className="group bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Large Portrait Photo */}
              <div className="relative overflow-hidden aspect-[3/4] bg-slate-100">
                <img
                  src={patron.image}
                  alt={patron.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-900/90 to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-bold text-sm leading-tight drop-shadow-md">{patron.name}</p>
                  <p className="text-blue-200 text-[10px] font-semibold truncate mt-0.5">{patron.badge}</p>
                </div>
                {/* Video badge */}
                {patron.hasVideo && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#0052B4]/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    <Play className="w-2.5 h-2.5 fill-current" /> VIDEO
                  </div>
                )}
              </div>

              {/* Quote Preview */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-[11px] text-slate-500 italic leading-relaxed line-clamp-3 font-serif">
                  "{patron.quote}"
                </p>
                <span className="mt-3 text-[10.5px] font-semibold text-[#0052B4] flex items-center gap-1 group-hover:underline">
                  Read Full Message <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      </div>
    </div>
  );
};
