import React, { useState } from 'react';
import { 
  Quote, ShieldCheck, Play, 
  Sparkles, ChevronRight, Video, FileText 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PatronsMessagePage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const distinguishedPatrons = [
    {
      name: "Prof. Mujibur Rahman",
      role: "Chief Academic Patron & Senior University Mentor",
      institution: "Jamia Millia Islamia / Academician",
      quote: "Education is not merely a means of personal advancement; it is the foundation of community empowerment and lasting social transformation.",
      fullMessage: "When we established ShED Forum in 2018, our goal was simple yet profound: to ensure that no talented student in Seemanchal remains deprived of higher education simply due to lack of guidance or awareness. Higher education opens doors to self-reliance, intellectual leadership, and social dignity. I invite every scholar, mentor, and family member to join hands in this educational crusade.",
      image: "/images/extracted_ShEd _p7_3.jpg",
      badge: "Chief Academic Patron"
    },
    {
      name: "Judge Sahiba",
      role: "Legal Advisor & Patron",
      institution: "Judicial Officer & Legal Luminary",
      quote: "Legal literacy and higher education together equip our youth with the dignity, rights, and voice needed to shape our democracy.",
      fullMessage: "An educated community is a resilient community. By guiding our young men and women into top central universities, ShED Forum is preparing the next generation of lawyers, administrators, judges, and policy experts who will defend rights and serve the nation.",
      image: "/images/extracted_ShEd _p7_4.jpg",
      badge: "Legal Luminary"
    },
    {
      name: "Sheikh Mutiurrahman",
      role: "Patron & Moral Guidance Lead",
      institution: "Imam Bukhari University",
      quote: "Connecting our young scholars with national centers of excellence ensures a bright future anchored in knowledge and moral ethics.",
      fullMessage: "Knowledge combined with ethical character is the cornerstone of societal progress. ShED Forum nurtures both academic brilliance and community responsibility in every student.",
      image: "/images/extracted_ShEd _p7_5.jpg",
      badge: "Educational Patron"
    },
    {
      name: "Tauquir Alam",
      role: "Patron & Executive Advisor",
      institution: "Community Leader & Educational Catalyst",
      quote: "Every student supported today becomes a mentor for ten more tomorrow. This chain reaction is the heart of ShED Forum.",
      fullMessage: "Our 'Pay-It-Forward' framework ensures that community progress becomes self-sustaining. When one student clears CUET and enters university, they light the lamp for their entire village.",
      image: "/images/extracted_ShEd _p7_6.jpg",
      badge: "Executive Pillar"
    },
    {
      name: "Nisat Alam",
      role: "Patron & Women's Education Lead",
      institution: "Social Work & Women Empowerment",
      quote: "Empowering women through higher education elevates entire families and transforms generations.",
      fullMessage: "Choosing International Women’s Day as ShED’s Foundation Day was a conscious commitment. Today, seeing 38% female enrollment in our coaching drives fills us with immense hope for the future.",
      image: "/images/extracted_ShEd _p7_7.jpg",
      badge: "Women's Empowerment Lead"
    },
    {
      name: "Mushtaque Alam",
      role: "Patron & Community Crusader",
      institution: "Former MLA & Senior Community Leader",
      quote: "When rural talent is nurtured with guidance, extraordinary achievements follow.",
      fullMessage: "Seemanchal possesses boundless human potential. What our youth needed was awareness and campus helpdesks. ShED Forum has successfully bridged that distance.",
      image: "/images/extracted_ShEd _p7_8.jpg",
      badge: "Community Patron"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-slate-700">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-semibold text-xs uppercase tracking-wider bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
            <ShieldCheck className="w-4 h-4 text-cyan-300" />
            <span>Leadership Address & Governance Vision</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-white tracking-tight leading-tight">
            Patron’s Message & Academic Vision
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            Guiding principles and inspirational messages from our esteemed patrons, eminent academicians, judicial officers, and community leaders steering ShED Forum.
          </p>
        </div>
      </div>

      {/* --- FEATURED LEADERSHIP ADDRESS: PROF. MUJIBUR RAHMAN --- */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-xs space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Patron Portrait & Video Badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-4 border-slate-100 shadow-xl group">
              {/* Dummy/Extracted Portrait Frame */}
              <img 
                src="/images/extracted_ShEd _p7_3.jpg" 
                alt="Prof. Mujibur Rahman - Chief Academic Patron" 
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/hero_students.png';
                }}
              />
              
              <div className="absolute top-4 left-4 bg-slate-900/90 text-cyan-300 text-xs font-semibold px-3.5 py-1 rounded-full border border-cyan-400/30">
                Chief Academic Patron
              </div>

              {/* Video Play Overlay */}
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0052B4] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </button>

              <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 text-white p-4 text-xs backdrop-blur-xs flex justify-between items-center border-t border-white/10">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-[#00A3E0]" /> Watch Foundation Day Address
                </span>
                <span className="text-[10px] bg-[#009A44] text-white px-2.5 py-0.5 rounded font-semibold">Video Message</span>
              </div>
            </div>

            <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-100 text-center space-y-1">
              <h4 className="text-base font-serif-heading font-semibold text-slate-900">Prof. Mujibur Rahman</h4>
              <p className="text-xs text-[#0052B4] font-semibold">Senior University Academician & Author</p>
              <p className="text-[11px] text-slate-500 font-medium">Chief Academic Patron, ShED Forum</p>
            </div>
          </div>

          {/* Right: Formal Editorial Address Letter */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#0052B4] font-semibold text-xs uppercase tracking-wider bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              <Sparkles className="w-4 h-4 text-[#0052B4]" />
              <span>Official Patron's Keynote</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-heading font-semibold text-slate-900 leading-tight">
              “Higher Education is the Foundation of Community Empowerment & Dignity”
            </h2>

            <blockquote className="text-sm sm:text-base text-slate-800 font-serif italic border-l-4 border-[#0052B4] pl-4 py-1">
              “Every household in rural Seemanchal deserves at least one university graduate. Education is not a luxury; it is the fundamental vehicle to unlock opportunity, self-respect, and democratic representation.”
            </blockquote>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              <p>
                Dear Students, Mentors, and Well-Wishers of the Shershahbadi Community,
              </p>
              <p>
                When a small group of young scholars at Maulana Azad National Urdu University (MANUU) came together in 2018 to establish the <strong>ShED Forum</strong>, they recognized a stark reality: despite rich intellectual potential, our community remained severely underrepresented across India’s central universities.
              </p>
              <p>
                Over the last eight years, through persistent ground outreach, free CUET entrance coaching, and dedicated campus helpdesks, ShED Forum has demonstrated what community solidarity can achieve. Today, with active units across 7 central universities and over 1,000 successful graduates, we are witnessing a genuine educational awakening.
              </p>
              <p>
                My message to our young students is simple: <strong>Dream without fear.</strong> Whether your goal is research at JNU, law at Jamia, medicine at AMU, or civil services, ShED Forum’s alumni network stands ready to support your journey every step of the way.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-serif italic text-lg text-slate-900 font-semibold">Prof. Mujibur Rahman</div>
                <div className="text-xs text-slate-500 font-medium">Chief Academic Patron, ShED Forum</div>
              </div>
              <Link
                to="/publications"
                className="inline-flex items-center gap-2 bg-[#0052B4] hover:bg-[#003D87] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Read Full Booklet PDF</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* --- DISTINGUISHED PATRONS GRID WITH PHOTO PLACEHOLDERS --- */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            Visionary Advisory Council
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-slate-900">
            Messages from Our Respected Patrons
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Voices of encouragement and policy guidance from judicial luminaries, state legislators, and educators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {distinguishedPatrons.map((patron, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 p-6 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                
                {/* Photo Placeholder Frame */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#0052B4] shadow-xs shrink-0 bg-slate-100">
                    <img 
                      src={patron.image} 
                      alt={patron.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/extracted_ShEd _p1_1.jpg';
                      }}
                    />
                  </div>

                  <div>
                    <span className="text-[9.5px] font-semibold uppercase text-[#009A44] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {patron.badge}
                    </span>
                    <h3 className="text-base font-serif-heading font-semibold text-slate-900 mt-1 group-hover:text-[#0052B4] transition-colors">
                      {patron.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">{patron.role}</p>
                  </div>
                </div>

                {/* Quote Box */}
                <blockquote className="text-xs text-slate-700 italic leading-relaxed font-serif bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70 relative">
                  <Quote className="w-4 h-4 text-slate-300 absolute top-2 right-2 pointer-events-none" />
                  "{patron.quote}"
                </blockquote>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {patron.fullMessage}
                </p>

              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium text-[11px]">{patron.institution}</span>
                <span className="text-[#0052B4] font-semibold text-[11px] flex items-center gap-0.5">
                  Guidance Board <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal Lightbox */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 rounded-3xl max-w-3xl w-full border border-slate-800 shadow-2xl overflow-hidden relative space-y-4">
            <div className="p-4 bg-slate-950 flex justify-between items-center text-white border-b border-slate-800">
              <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                <Video className="w-4 h-4 text-[#00A3E0]" /> Prof. Mujibur Rahman Keynote Address
              </span>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs font-semibold px-3 py-1 rounded-lg bg-white/10"
              >
                Close Video ✕
              </button>
            </div>

            <div className="aspect-video w-full bg-black flex items-center justify-center relative">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="ShED Forum Keynote Address"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 text-slate-200 text-xs space-y-2">
              <h4 className="text-base font-serif-heading font-semibold text-white">The Educational Imperative for Shershahbadi Youth</h4>
              <p className="text-slate-300 font-normal">
                Delivered on Foundation Day at MANUU Campus Hyderabad during the annual leadership summit.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
