import React, { useState } from 'react';
import { 
  Quote, MapPin, Heart, Sparkles, 
  Search, Filter, ChevronRight, UserCheck 
} from 'lucide-react';

interface StudentStory {
  id: string;
  name: string;
  nativeDistrict: string;
  university: string;
  degree: string;
  batch: string;
  image: string;
  quote: string;
  storySnippet: string;
  mentorContribution: string;
  category: 'UG' | 'PG' | 'Research' | 'Alumni';
  tag: string;
}

export const impactStoriesData: StudentStory[] = [
  {
    id: 'story-1',
    name: 'Md Tariq Anwer',
    nativeDistrict: 'Katihar, Bihar',
    university: 'Jamia Millia Islamia (JMI)',
    degree: 'M.A. Political Science',
    batch: 'Batch of 2023',
    image: '/images/extracted_ShEd _p7_3.jpg',
    quote: 'Before ShED Forum, no one in my village had ever applied to a central university in Delhi. ShED guided me from CUET form filling to hostel room allocation.',
    storySnippet: 'Coming from a small village in Katihar, higher education in Delhi felt impossible. Through ShED Forum’s 100% free entrance coaching and peer guidance at Jamia, I cleared CUET UG & PG in the first attempt.',
    mentorContribution: 'Currently mentoring 8 high school graduates from Katihar & Purnea for CUET 2026.',
    category: 'PG',
    tag: 'SCG Coaching Scholar'
  },
  {
    id: 'story-2',
    name: 'Saima Parween',
    nativeDistrict: 'Kishanganj, Bihar',
    university: 'MANUU Hyderabad',
    degree: 'B.Ed & M.Ed Scholar',
    batch: 'Batch of 2022',
    image: '/images/extracted_ShEd _p7_4.jpg',
    quote: 'Female representation in higher education in Seemanchal was under 5%. ShED Forum gave me the confidence, safety network, and mentorship to pursue my Master’s.',
    storySnippet: 'Saima joined ShED Forum’s Foundation Day drive in 2020. With continuous support from the MANUU University Unit, she secured top ranks in teaching entrances and is now a lead speaker for women’s higher education.',
    mentorContribution: 'Co-leads the ShED Women’s Educational Mentorship Cell across 7 campuses.',
    category: 'PG',
    tag: 'Women Leader • 38% Pillar'
  },
  {
    id: 'story-3',
    name: 'Abu Sufiyan',
    nativeDistrict: 'Araria, Bihar',
    university: 'Aligarh Muslim University (AMU)',
    degree: 'B.Tech Computer Engineering',
    batch: 'Batch of 2024',
    image: '/images/extracted_ShEd _p7_5.jpg',
    quote: 'The AMU Unit of ShED Forum welcomed me on campus like family. From library access to senior guidance, I never felt lost.',
    storySnippet: 'Attended ShED’s winter ground campaign in Forbesganj, Araria. With free study booklets and mock tests provided by SCG Centre, Sufiyan cracked the AMU engineering entrance examination.',
    mentorContribution: 'Volunteers as Technical Lead for ShED Online CUET Mock Test Portal.',
    category: 'UG',
    tag: 'STEM Excellence'
  },
  {
    id: 'story-4',
    name: 'Firdous Alam',
    nativeDistrict: 'Purnea, Bihar',
    university: 'Jawaharlal Nehru University (JNU)',
    degree: 'Ph.D. International Studies',
    batch: 'Batch of 2021',
    image: '/images/extracted_ShEd _p7_6.jpg',
    quote: 'Higher education is the ultimate catalyst to break generational poverty. ShED proves that collective responsibility can transform an entire region.',
    storySnippet: 'One of the early scholars connected with ShED Forum at JNU New Delhi. Firdous has published academic research papers on rural education and continues to advocate for policy reforms in Seemanchal.',
    mentorContribution: 'Serves on the Central Academic Advisory Committee guiding doctoral aspirants.',
    category: 'Research',
    tag: 'Doctoral Scholar'
  },
  {
    id: 'story-5',
    name: 'Zakir Hussain',
    nativeDistrict: 'Malda, West Bengal',
    university: 'University of Delhi (DU)',
    degree: 'B.A. (Hons) History',
    batch: 'Batch of 2024',
    image: '/images/extracted_ShEd _p7_7.jpg',
    quote: 'When I landed at New Delhi Railway Station, ShED DU volunteers met me and arranged my initial stay. That warmth changes everything for a rural student.',
    storySnippet: 'Hailing from a border village in West Bengal’s Shershahbadi region, Zakir secured admission to Delhi University with full guidance from ShED’s North Campus helpdesk.',
    mentorContribution: 'Manages DU Campus Helpdesk for fresh undergraduate entrants.',
    category: 'UG',
    tag: 'DU North Campus Unit'
  },
  {
    id: 'story-6',
    name: 'Shagufta Naz',
    nativeDistrict: 'Katihar, Bihar',
    university: 'University of Hyderabad (HCU)',
    degree: 'M.Sc. Biotechnology',
    batch: 'Batch of 2023',
    image: '/images/extracted_ShEd _p7_8.jpg',
    quote: 'ShED Forum’s Pay-It-Forward philosophy means every student who succeeds paves the path for five more behind them.',
    storySnippet: 'Cleared GAT-B and CUET PG with top percentile scores after attending ShED SCG online domain mentorship classes hosted by doctoral research fellows.',
    mentorContribution: 'Conducts weekly online science problem-solving sessions for high school girls.',
    category: 'PG',
    tag: 'Science & Innovation'
  }
];

export const ImpactWall: React.FC<{ onOpenHelpdesk?: () => void }> = ({ onOpenHelpdesk }) => {
  const [selectedUniversity, setSelectedUniversity] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStoryModal, setSelectedStoryModal] = useState<StudentStory | null>(null);

  const universities = ['All', 'Jamia Millia Islamia (JMI)', 'MANUU Hyderabad', 'Aligarh Muslim University (AMU)', 'Jawaharlal Nehru University (JNU)', 'University of Delhi (DU)', 'University of Hyderabad (HCU)'];
  const categories = ['All', 'UG', 'PG', 'Research'];

  const filteredStories = impactStoriesData.filter(story => {
    const matchesUniv = selectedUniversity === 'All' || story.university.includes(selectedUniversity);
    const matchesCat = selectedCategory === 'All' || story.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      story.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      story.nativeDistrict.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.degree.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesUniv && matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-slate-700">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-semibold text-xs uppercase tracking-wider bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
            <Heart className="w-4 h-4 text-rose-300" />
            <span>Voices of Empowerment • 1,000+ Alumni Strong</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-white tracking-tight leading-tight">
            Student Stories & Impact Wall
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            Real journeys of Shershahbadi youth from rural Seemanchal who broke academic barriers and entered India's premier central universities through free coaching, peer guidance, and community solidarity.
          </p>
        </div>
      </div>

      {/* Impact Numbers Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1 text-center">
          <div className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#0052B4]">1,000+</div>
          <div className="text-xs font-semibold text-slate-700">University Graduates</div>
          <p className="text-[11px] text-slate-500 font-normal">Guided across 7 universities</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1 text-center">
          <div className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#009A44]">38%</div>
          <div className="text-xs font-semibold text-slate-700">Female Participation</div>
          <p className="text-[11px] text-slate-500 font-normal">Championing women education</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1 text-center">
          <div className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#D91B24]">100% Free</div>
          <div className="text-xs font-semibold text-slate-700">Coaching & Helpdesk</div>
          <p className="text-[11px] text-slate-500 font-normal">Zero tuition or registration fee</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-1 text-center">
          <div className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#00A3E0]">1:1</div>
          <div className="text-xs font-semibold text-slate-700">Pay-It-Forward Mentor</div>
          <p className="text-[11px] text-slate-500 font-normal">Every graduate guides next batch</p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-4 shadow-xs">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input 
              type="text" 
              placeholder="Search by student name, district, or course..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#0052B4] outline-none font-medium"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>

            <select 
              value={selectedUniversity}
              onChange={(e) => setSelectedUniversity(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white font-medium outline-none text-slate-800"
            >
              {universities.map(u => (
                <option key={u} value={u}>{u === 'All' ? 'All Universities' : u}</option>
              ))}
            </select>

            <div className="flex bg-white rounded-xl border border-slate-300 p-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${selectedCategory === cat ? 'bg-[#0052B4] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Grid of Student Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStories.map((story) => (
          <div 
            key={story.id} 
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="p-6 space-y-4">
              
              {/* Header Profile Info */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#0052B4] shadow-sm shrink-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/extracted_ShEd _p1_1.jpg';
                  }}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-serif-heading font-semibold text-slate-900 group-hover:text-[#0052B4] transition-colors">
                      {story.name}
                    </h3>
                  </div>
                  <div className="text-xs font-semibold text-[#0052B4] mt-0.5">{story.degree}</div>
                  <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D91B24]" />
                    <span>{story.nativeDistrict}</span>
                  </div>
                </div>
              </div>

              {/* Tag Badge */}
              <span className="inline-block text-[10px] font-semibold text-[#009A44] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {story.tag} • {story.university.split('(')[0]}
              </span>

              {/* Quote */}
              <blockquote className="text-xs text-slate-700 italic leading-relaxed font-serif bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70 relative">
                <Quote className="w-4 h-4 text-slate-300 absolute top-2 right-2 pointer-events-none" />
                "{story.quote}"
              </blockquote>

              {/* Mentorship Contribution */}
              <div className="pt-2 text-xs text-slate-600 font-normal space-y-1">
                <span className="font-semibold text-slate-900 block text-[11px] flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-[#0052B4]" /> Mentorship Contribution:
                </span>
                <p className="text-[11px] text-slate-600">{story.mentorContribution}</p>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex justify-between items-center">
              <span className="text-[11px] font-semibold text-slate-500">{story.batch}</span>
              <button
                onClick={() => setSelectedStoryModal(story)}
                className="text-xs font-semibold text-[#0052B4] hover:text-[#003D87] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Read Full Story</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Story Detail Modal */}
      {selectedStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 border border-slate-200 shadow-2xl relative space-y-6 animate-in zoom-in-95">
            <button
              onClick={() => setSelectedStoryModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-4">
              <img 
                src={selectedStoryModal.image} 
                alt={selectedStoryModal.name} 
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#0052B4] shadow-md"
              />
              <div>
                <span className="text-xs font-semibold text-[#009A44] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {selectedStoryModal.tag}
                </span>
                <h3 className="text-2xl font-serif-heading font-semibold text-slate-900 mt-1">{selectedStoryModal.name}</h3>
                <div className="text-xs font-semibold text-[#0052B4]">{selectedStoryModal.degree} • {selectedStoryModal.university}</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Native: {selectedStoryModal.nativeDistrict}</div>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-sm font-serif-heading font-semibold text-slate-900">Academic Journey & ShED Connection</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {selectedStoryModal.storySnippet}
              </p>
            </div>

            <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 space-y-1">
              <span className="text-xs font-semibold text-[#0052B4] block">Mentorship & Giving Back</span>
              <p className="text-xs text-slate-700 font-normal">{selectedStoryModal.mentorContribution}</p>
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-slate-100">
              <span className="text-xs font-medium text-slate-500">{selectedStoryModal.batch} Alumni Network</span>
              {onOpenHelpdesk && (
                <button
                  onClick={() => {
                    setSelectedStoryModal(null);
                    onOpenHelpdesk();
                  }}
                  className="bg-[#0052B4] hover:bg-[#003D87] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
                >
                  Connect With A Mentor
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Banner Callout: Share Your Story / Become a Mentor */}
      <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#009A44] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Alumni & Student Network
          </span>
          <h3 className="text-xl font-serif-heading font-semibold text-slate-900">Are you a ShED Forum Alumnus or Current Student?</h3>
          <p className="text-xs text-slate-600 font-normal">
            Share your university journey to inspire future scholars from Seemanchal or join as a volunteer mentor for CUET 2026.
          </p>
        </div>
        <button
          onClick={onOpenHelpdesk}
          className="bg-[#0052B4] hover:bg-[#003D87] text-white font-semibold px-7 py-3.5 rounded-xl shadow-md transition-all text-xs shrink-0 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Join Mentor Network</span>
        </button>
      </div>

    </div>
  );
};
