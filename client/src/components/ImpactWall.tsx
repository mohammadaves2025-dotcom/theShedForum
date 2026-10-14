import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { 
  Quote, MapPin, Sparkles, 
  Search, ChevronRight, UserCheck, 
  GraduationCap, ArrowRight, 
  Users
} from 'lucide-react';
import { PageHeroBanner } from './PageHeroBanner';

export interface StudentStory {
  id: string;
  name: string;
  nativeDistrict: string;
  university: string;
  degree: string;
  batch: string;
  image: string;
  quote: string;
  storySnippet: string;
  challenge: string;
  breakthrough: string;
  mentorContribution: string;
  category: 'UG' | 'PG' | 'Research' | 'Alumni';
  tag: string;
  tagColor?: string;
  highlightMetric: string;
  featured?: boolean;
  // Pratham-style editorial journalism fields
  editorialTitle: string;
  editorialSubtitle: string;
  readTime: string;
  caption: string;
  storyParagraphs: string[];
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
    quote: 'Before ShED Forum, no one in my village had ever applied to a premier central university in Delhi. ShED guided me from the first CUET form filing to hostel allocation.',
    storySnippet: 'Coming from a small village in Katihar, higher education in Delhi felt completely out of reach. Through ShED Forum’s 100% free entrance coaching and peer guidance at Jamia, I cleared CUET UG & PG in the first attempt.',
    challenge: 'First in his family to complete Class 12. Lack of local awareness in Katihar regarding central university admissions and entrance test patterns.',
    breakthrough: 'Joined ShED Forum’s SCG online preparatory classes, received one-on-one CUET subject guidance, and secured top merit at Jamia Millia Islamia.',
    mentorContribution: 'Currently mentoring 8 high school graduates from Katihar & Purnea for CUET 2026 entrance tests.',
    category: 'PG',
    tag: 'SCG Coaching Scholar',
    tagColor: 'bg-blue-50 text-[#0052B4] border-blue-200',
    highlightMetric: '1st in Village to Attend Jamia',
    featured: true,
    editorialTitle: 'Md Tariq Anwer: A Journey of Possibility from Katihar to Central University Merit',
    editorialSubtitle: 'After nearly three decades of educational isolation in his village, Tariq became the first in his family to clear Class 12 and enter Jamia Millia Islamia. Today, he mentors eight village youth to follow in his footsteps.',
    readTime: '3 min read',
    caption: 'Md Tariq Anwer during a student mentorship orientation session at Jamia Millia Islamia campus, New Delhi.',
    storyParagraphs: [
      'Today, Md Tariq Anwer is a familiar face among student circles at Jamia Millia Islamia in New Delhi. He moves through the central library and department seminars with the quiet confidence of an accomplished postgraduate scholar. But looking at him now, it is hard to imagine that just a few years ago, the very idea of studying at a premier national university felt like an impossible dream for a young boy from a small agricultural village in Katihar, Bihar.',
      'In Tariq’s village, higher education opportunities rarely extended beyond local undergraduate colleges. Tariq was the first in his immediate family to complete Class 12. While his parents worked tirelessly to support his schooling, neither they nor anyone in the immediate community had access to verified information regarding the Common University Entrance Test (CUET), competitive entrance patterns, or how campus seat allocation functioned in the capital.',
      'The turning point arrived when university volunteers from ShED Forum visited Katihar during an educational awareness drive. Tariq was introduced to the Shershahbadi Guidance & Coaching (SCG) Centre—a 100% free entrance preparation and mentorship initiative. "Until I met the ShED mentors, I had never heard anyone explain how central university admissions work," Tariq recalls. "They sat with me, reviewed my subjects, and helped me fill my very first application form."',
      'Throughout the preparatory months, ShED provided Tariq with free digital study materials, past 10-year solved papers, and live doubt-solving sessions hosted by Jamia and AMU seniors. When the CUET results were announced, Tariq had secured top merit marks. ShED volunteers in New Delhi received him at the station, guided his document verification, and assisted with hostel accommodation.',
      'Today, Tariq believes that receiving support comes with a lifelong responsibility to give back. Under ShED’s Pay-It-Forward philosophy, he is currently mentoring eight high school graduates from Katihar and Purnea, holding weekly virtual sessions to guide them toward CUET 2026. "ShED didn’t just give me an admission; they gave my entire village belief," he says.'
    ]
  },
  {
    id: 'story-2',
    name: 'Saima Parween',
    nativeDistrict: 'Kishanganj, Bihar',
    university: 'MANUU Hyderabad',
    degree: 'B.Ed & M.Ed Scholar',
    batch: 'Batch of 2022',
    image: '/images/extracted_ShEd _p7_4.jpg',
    quote: 'Female higher education in Seemanchal was historically under 5%. ShED Forum gave me the confidence, safety network, and mentorship to pursue my Master’s.',
    storySnippet: 'Saima joined ShED Forum’s Foundation Day drive in 2020. With continuous support from the MANUU University Unit, she secured top ranks in teaching entrances and is now a lead speaker for women’s higher education.',
    challenge: 'Facing social hesitation regarding young women traveling out of state for university education and limited hostel information.',
    breakthrough: 'ShED’s Women Mentorship Cell counseled her family, connected them with female seniors at MANUU Hyderabad, and guided hostel registration.',
    mentorContribution: 'Co-leads the ShED Women’s Educational Mentorship Cell across 7 campuses, mentoring 14 young women.',
    category: 'PG',
    tag: 'Women Leader • 38% Pillar',
    tagColor: 'bg-emerald-50 text-[#009A44] border-emerald-200',
    highlightMetric: 'Leading 38% Women Drive',
    featured: true,
    editorialTitle: 'Saima Parween: Championing Women’s Higher Education Across Seemanchal',
    editorialSubtitle: 'Breaking historical barriers in Kishanganj to become a teacher educator at MANUU Hyderabad, Saima now co-leads ShED’s Women Mentorship Cell guiding 14 female scholars.',
    readTime: '3 min read',
    caption: 'Saima Parween addressing a higher education counseling session for young women scholars.',
    storyParagraphs: [
      'Historically, female higher education enrollment in Seemanchal hovered below single digits. For Saima Parween, growing up in Kishanganj, pursuing a Master’s degree in teacher education over 1,500 kilometers away in Hyderabad was an idea met with deep hesitation and concern for safety.',
      'When Saima secured eligibility for the prestigious Maulana Azad National Urdu University (MANUU), her family worried about out-of-state travel and campus accommodations. That was when ShED Forum’s Women’s Mentorship Cell stepped in. Senior female scholars from MANUU spoke directly with Saima’s parents, walking them through the verified hostel facilities, female safety networks, and campus academic culture.',
      'Reassured by the personal guarantee of the senior scholars, Saima traveled to Hyderabad. She excelled in her B.Ed and went on to top her entrance for the M.Ed program, emerging as one of the most articulate student leaders on campus.',
      'Today, Saima co-leads ShED Forum’s 38% Women Enrollment Drive across seven university campuses. She personally mentors 14 young women from rural Bihar and West Bengal, counseling their parents and ensuring that no talented girl is forced to discontinue her education after school.'
    ]
  },
  {
    id: 'story-3',
    name: 'Abu Sufiyan',
    nativeDistrict: 'Araria, Bihar',
    university: 'Aligarh Muslim University (AMU)',
    degree: 'B.Tech Computer Engineering',
    batch: 'Batch of 2024',
    image: '/images/extracted_ShEd _p7_5.jpg',
    quote: 'The AMU Unit of ShED Forum welcomed me on campus like family. From library access to senior guidance, I never felt alone in my academic journey.',
    storySnippet: 'Attended ShED’s winter ground campaign in Forbesganj, Araria. With free study booklets and mock tests provided by SCG Centre, Sufiyan cracked the AMU engineering entrance examination.',
    challenge: 'Affordability of commercial engineering coaching in big cities was an insurmountable barrier for his agricultural family.',
    breakthrough: 'Attended free SCG online problem-solving sessions and received past 10-year solved entrance papers from AMU alumni.',
    mentorContribution: 'Volunteers as Technical Lead for ShED Online CUET Mock Test Portal and conducts coding sessions.',
    category: 'UG',
    tag: 'STEM Excellence',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
    highlightMetric: 'Top AMU Engineering Merit',
    editorialTitle: 'Abu Sufiyan: Cracking AMU Computer Engineering Against All Odds',
    editorialSubtitle: 'From a small village in Forbesganj to Aligarh Muslim University, Sufiyan proved that rural students can excel in premier national STEM programs with free mentorship.',
    readTime: '3 min read',
    caption: 'Abu Sufiyan participating in a technical problem-solving session at the AMU campus.',
    storyParagraphs: [
      'Commercial engineering entrance coaching in metro cities often costs upwards of two lakh rupees—an insurmountable sum for Abu Sufiyan’s farming family in Araria, Bihar. Despite showing exceptional aptitude in mathematics, Sufiyan felt his aspirations slipping away.',
      'During a winter grassroots campaign conducted by ShED Forum in Forbesganj, Sufiyan received a set of free entrance preparation modules and was enrolled in the SCG online engineering cohort. Mentors from AMU’s engineering faculty gave up their weekends to conduct problem-solving bootcamps and review previous entrance papers.',
      'With relentless dedication, Sufiyan cracked the AMU engineering entrance examination with flying colors, earning a seat in the competitive Computer Engineering department.',
      'Now in his final year, Sufiyan volunteers as the Technical Lead for ShED Forum’s digital mock test platform, creating free coding resources for village students aspiring for STEM careers.'
    ]
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
    challenge: 'Transitioning from Hindi/Urdu medium rural schooling to the rigorous research environment of a premier national institution.',
    breakthrough: 'Peer support from senior university scholars through ShED academic circles at JNU, helping with research proposal drafting and seminar preparation.',
    mentorContribution: 'Serves on the Central Academic Advisory Committee guiding doctoral aspirants and fellowship applicants.',
    category: 'Research',
    tag: 'Doctoral Scholar',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    highlightMetric: 'JNU Doctoral Fellow',
    editorialTitle: 'Firdous Alam: From Rural Urdu Schooling to Doctoral Research at JNU',
    editorialSubtitle: 'Overcoming language and resource hurdles, Firdous is publishing research on rural education policy at Jawaharlal Nehru University in New Delhi.',
    readTime: '3 min read',
    caption: 'Firdous Alam presenting a policy discussion on educational access at JNU, New Delhi.',
    storyParagraphs: [
      'Transitioning from rural Urdu-medium schooling in Purnea to the intellectual rigor of Jawaharlal Nehru University (JNU) in New Delhi was one of the steepest challenges Firdous Alam ever faced. In his early days in the capital, academic English and complex seminar debates felt alienating.',
      'Through ShED Forum’s JNU academic unit, Firdous found a community of seniors who read drafts with him, helped refine his research proposals, and provided the intellectual camaraderie needed to thrive.',
      'Today, Firdous is a Ph.D. fellow at JNU’s School of International Studies. His research focuses on grassroots educational equity, and he frequently contributes policy recommendations to improve schooling across eastern India.',
      'He also serves on ShED’s Academic Advisory Committee, mentoring doctoral and master’s aspirants from underprivileged backgrounds across the country.'
    ]
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
    storySnippet: 'Hailing from a border village in West Bengal’s Shershahbadi belt, Zakir secured admission to Delhi University with full guidance from ShED’s North Campus helpdesk.',
    challenge: 'Navigating the complex Delhi University CSAS preference portal and managing high accommodation costs in Delhi.',
    breakthrough: 'The DU Unit helpdesk optimized his subject preference sheet and assisted in securing college hostel accommodation.',
    mentorContribution: 'Manages the DU North Campus Helpdesk for fresh undergraduate entrants arriving from rural districts.',
    category: 'UG',
    tag: 'DU North Campus Unit',
    tagColor: 'bg-rose-50 text-[#D91B24] border-rose-200',
    highlightMetric: 'Delhi University Scholar',
    editorialTitle: 'Zakir Hussain: Finding a Home at Delhi University’s North Campus',
    editorialSubtitle: 'Arriving in the capital with two bags and no contacts, ShED’s student reception network turned uncertainty into academic success.',
    readTime: '2 min read',
    caption: 'Zakir Hussain outside Delhi University Arts Faculty, North Campus.',
    storyParagraphs: [
      'When Zakir Hussain boarded the train from Malda in West Bengal to New Delhi Railway Station, he had never stepped outside his home state. Navigating Delhi University’s CSAS seat allocation portal and finding safe, affordable student housing in the capital seemed overwhelming.',
      'At the station platform, Zakir was greeted by ShED Forum DU unit volunteers who had tracked his arrival. They arranged temporary accommodation, walked him to the university faculty for certificate verification, and helped him secure college hostel admission.',
      'Zakir is now thriving in his undergraduate History program at Delhi University, achieving high academic marks and organizing campus study groups.',
      'Each admission cycle, Zakir leads the DU North Campus Helpdesk, greeting fresh batches of rural students arriving at Delhi railway stations.'
    ]
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
    challenge: 'Lack of advanced science laboratory exposure and guidance on national biotech entrance exams in Seemanchal colleges.',
    breakthrough: 'Attended ShED science domain mentorship circles, receiving specialized guidance on GAT-B and CUET PG syllabus.',
    mentorContribution: 'Conducts weekly online science problem-solving sessions for high school girls preparing for central university entrances.',
    category: 'PG',
    tag: 'Science & Innovation',
    tagColor: 'bg-cyan-50 text-[#00A3E0] border-cyan-200',
    highlightMetric: 'GAT-B National Ranker',
    editorialTitle: 'Shagufta Naz: Conquering National Science Entrances to Reach HCU',
    editorialSubtitle: 'Clearing national GAT-B entrance exams with top percentiles, Shagufta is pioneering biotechnology research at University of Hyderabad.',
    readTime: '3 min read',
    caption: 'Shagufta Naz conducting laboratory research at the School of Life Sciences, University of Hyderabad.',
    storyParagraphs: [
      'Rural Seemanchal colleges rarely possess modern laboratory facilities or exposure to national biotechnology entrance exams. For Shagufta Naz in Katihar, pursuing advanced biotech research seemed nearly impossible without metropolitan coaching.',
      'Connecting with ShED Forum’s Science Mentorship Circle, Shagufta was paired with doctoral research scholars from premier institutes who guided her through GAT-B entrance preparations and scientific literature.',
      'Shagufta secured an all-India top percentile ranking and gained admission to the prestigious Department of Biotechnology at University of Hyderabad (HCU).',
      'She now runs weekly online doubt-clearing sessions for high school girls preparing for central university science entrances.'
    ]
  },
  {
    id: 'story-7',
    name: 'Aamir Abbas',
    nativeDistrict: 'Purnea, Bihar',
    university: 'Jamia Millia Islamia (JMI)',
    degree: 'B.A. Mass Communication & Journalism',
    batch: 'Batch of 2023',
    image: '/images/extracted_ShEd _p8_9.jpg',
    quote: 'Our community needs voices in media, public policy, and national journalism. ShED inspired me to pursue professional communication.',
    storySnippet: 'Aamir attended ShED’s grassroots career awareness drive in Purnea. He prepared for Jamia’s highly competitive mass communication entrance and is now writing articles on rural educational equity.',
    challenge: 'Family expectation to pursue traditional paths due to lack of awareness about media and communications careers.',
    breakthrough: 'Career counseling sessions by JMI alumni gave his family confidence in creative and media career pathways.',
    mentorContribution: 'Helps manage ShED Forum media publications and conducts spoken English workshops.',
    category: 'UG',
    tag: 'Media & Public Voice',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    highlightMetric: 'JMI Mass Media Scholar',
    editorialTitle: 'Aamir Abbas: Giving Voice to the Underrepresented Through Journalism',
    editorialSubtitle: 'Inspiring a new generation of rural communicators, Aamir is studying Mass Communication at Jamia Millia Islamia in New Delhi.',
    readTime: '2 min read',
    caption: 'Aamir Abbas recording a campus documentary feature at Jamia Millia Islamia.',
    storyParagraphs: [
      'In rural communities, engineering, medicine, and government jobs are often seen as the only viable career paths. When Aamir Abbas expressed a passion for journalism and documentary filmmaking, he faced skepticism from his surroundings.',
      'ShED Forum organized a counseling session between Aamir’s family and media alumni from Jamia Millia Islamia. Seeing respected community members thriving in the profession gave Aamir’s parents the confidence to support his choice.',
      'Aamir cleared the competitive Jamia mass media entrance and is now producing stories highlighting grassroots social issues and educational achievements.',
      'He also helps train ShED student volunteers in public speaking and media writing.'
    ]
  },
  {
    id: 'story-8',
    name: 'Rukhsana Khatoon',
    nativeDistrict: 'Sahibganj, Jharkhand',
    university: 'MANUU Hyderabad',
    degree: 'Diploma in Elementary Education (D.El.Ed)',
    batch: 'Batch of 2024',
    image: '/images/extracted_ShEd _p8_11.jpg',
    quote: 'Teaching is the greatest service to a developing community. Through MANUU, I gained pedagogical training to educate the next generation of rural children.',
    storySnippet: 'From Sahibganj in Jharkhand, Rukhsana joined ShED’s entrance batches online. She successfully secured admission into MANUU’s teacher education department with full scholarship support.',
    challenge: 'Distance of over 1,500 kilometers between her village and Hyderabad, creating logistical hurdles for her family.',
    breakthrough: 'MANUU unit volunteers coordinated train reception, hostel room verification, and student welfare support.',
    mentorContribution: 'Mentors young girls from Jharkhand appearing for central teacher eligibility and university entrances.',
    category: 'UG',
    tag: 'Teacher Education',
    tagColor: 'bg-teal-50 text-teal-700 border-teal-200',
    highlightMetric: 'Elementary Education Lead',
    editorialTitle: 'Rukhsana Khatoon: Bringing Pedagogical Excellence to Rural Classrooms',
    editorialSubtitle: 'Training as a future teacher at MANUU, Rukhsana is dedicated to upgrading foundational learning in Sahibganj, Jharkhand.',
    readTime: '2 min read',
    caption: 'Rukhsana Khatoon with classmates at the Department of Teacher Education, MANUU Hyderabad.',
    storyParagraphs: [
      'Coming from Sahibganj in Jharkhand, Rukhsana Khatoon witnessed first-hand how teacher shortages and outdated teaching methods held back primary school children in her district.',
      'Determined to become a professionally trained teacher, Rukhsana joined ShED’s online coaching modules for central education entrances. Supported by the MANUU unit, she secured admission to the Diploma in Elementary Education program.',
      'Rukhsana is learning child psychology, multilingual pedagogy, and modern foundational learning techniques, preparing to return to rural Jharkhand to teach.'
    ]
  },
  {
    id: 'story-9',
    name: 'Tawseef Raza',
    nativeDistrict: 'Kishanganj, Bihar',
    university: 'Aligarh Muslim University (AMU)',
    degree: 'B.Sc. (Hons) Chemistry',
    batch: 'Batch of 2024',
    image: '/images/extracted_ShEd _p8_14.jpg',
    quote: 'The academic environment at AMU transformed my outlook. ShED Forum ensures you stay focused on your goals from day one on campus.',
    storySnippet: 'Tawseef leveraged ShED’s science preparation materials and mock question banks to secure admission to AMU’s prestigious Department of Chemistry.',
    challenge: 'Navigating university entrance syllabus without access to tuition centers in rural Kishanganj.',
    breakthrough: 'SCG Centre provided weekly question banks, formula sheets, and live doubt-clearing sessions.',
    mentorContribution: 'Organizes chemistry revision bootcamps for Class 12th board and CUET aspirants.',
    category: 'UG',
    tag: 'Pure Sciences',
    tagColor: 'bg-blue-50 text-[#0052B4] border-blue-200',
    highlightMetric: 'AMU Chemistry Department',
    editorialTitle: 'Tawseef Raza: Building Scientific Excellence at Aligarh Muslim University',
    editorialSubtitle: 'Utilizing SCG question banks and senior guidance, Tawseef earned his place in AMU’s Department of Chemistry.',
    readTime: '2 min read',
    caption: 'Tawseef Raza during a chemistry laboratory session at AMU Aligarh.',
    storyParagraphs: [
      'In Kishanganj, specialized study material for central university science entrances is difficult to find. Tawseef Raza spent months trying to prepare using outdated local guides before discovering ShED Forum.',
      'SCG Centre provided him with curated question banks, formula sheets, and live problem-solving sessions hosted by senior AMU scholars.',
      'Tawseef cleared the entrance and is now excelling in AMU’s Department of Chemistry, conducting free revision bootcamps for Class 12 students each summer.'
    ]
  },
  {
    id: 'story-10',
    name: 'Gulzar Alam',
    nativeDistrict: 'Katihar, Bihar',
    university: 'Patna University',
    degree: 'LL.B. Law Faculty',
    batch: 'Batch of 2025',
    image: '/images/extracted_ShEd _p8_10.jpg',
    quote: 'Legal literacy gives our community a constitutional voice. ShED Forum encouraged me to pursue the law to defend community rights and serve the justice system.',
    storySnippet: 'Gulzar connected with ShED’s Patna Unit in Bihar’s capital. He is pursuing legal education while organizing legal awareness camps in rural blocks of Katihar.',
    challenge: 'Lack of legal mentorship or lawyers in his immediate family and community circle.',
    breakthrough: 'Mentored by judicial officers and senior advocates affiliated with ShED Forum’s advisory council.',
    mentorContribution: 'Drafts legal literacy pamphlets and conducts constitutional awareness drives during vacation.',
    category: 'UG',
    tag: 'Legal Literacy & Law',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    highlightMetric: 'Patna Law Faculty Scholar',
    editorialTitle: 'Gulzar Alam: Defending Constitutional Rights and Legal Literacy',
    editorialSubtitle: 'Studying law at Patna University, Gulzar is introducing constitutional literacy camps to remote villages in Katihar.',
    readTime: '2 min read',
    caption: 'Gulzar Alam leading a legal literacy workshop in a rural village community hall.',
    storyParagraphs: [
      'Without lawyers or legal professionals in his family, Gulzar Alam saw how legal illiteracy left rural citizens vulnerable to administrative neglect and exploitation.',
      'Encouraged by judicial officers associated with ShED Forum’s advisory council, Gulzar prepared for and cleared the Patna University law entrance.',
      'Today, as a law student, Gulzar drafts simplified legal literacy pamphlets in Urdu and Hindi, conducting constitutional awareness drives across Katihar during university breaks.'
    ]
  }
];

export const ImpactWall: React.FC<{ onOpenHelpdesk?: () => void }> = ({ onOpenHelpdesk }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedUniversity, setSelectedUniversity] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // If query param ?id=story-X is present, redirect to the dedicated page /student-stories/story-X
  useEffect(() => {
    const storyId = searchParams.get('id');
    if (storyId) {
      navigate(`/student-stories/${storyId}`, { replace: true });
    }
  }, [searchParams, navigate]);

  const universities = [
    'All', 
    'Jamia Millia Islamia (JMI)', 
    'MANUU Hyderabad', 
    'Aligarh Muslim University (AMU)', 
    'Jawaharlal Nehru University (JNU)', 
    'University of Delhi (DU)', 
    'University of Hyderabad (HCU)',
    'Patna University'
  ];

  const categoryTabs = [
    { key: 'All', label: 'All Stories' },
    { key: 'UG', label: 'Undergraduate Scholars' },
    { key: 'PG', label: 'Postgraduate & Masters' },
    { key: 'Research', label: 'Doctoral & Research' },
    { key: 'Women', label: 'Women Leaders (38%)' }
  ];

  const filteredStories = impactStoriesData.filter(story => {
    const matchesUniv = selectedUniversity === 'All' || story.university.includes(selectedUniversity);
    
    let matchesCat = true;
    if (selectedCategory === 'Women') {
      matchesCat = story.tag.toLowerCase().includes('women') || story.highlightMetric.toLowerCase().includes('women');
    } else if (selectedCategory !== 'All') {
      matchesCat = story.category === selectedCategory;
    }

    const matchesSearch = searchQuery === '' || 
      story.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      story.nativeDistrict.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.editorialTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.quote.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesUniv && matchesCat && matchesSearch;
  });

  const featuredStory = impactStoriesData.find(s => s.featured) || impactStoriesData[0];

  return (
    <div className="bg-white min-h-screen">
      {/* --- PRATHAM-STYLE TOP HERO BANNER --- */}
      <PageHeroBanner
        image="/images/hero/hero-4.jpg"
        badgeText="STORIES OF IMPACT"
        alt="ShED Forum Impact Stories"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
        
        {/* Editorial Heading */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Stories of Change • Voices of Empowerment
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading font-semibold text-slate-900 tracking-tight leading-[1.15]">
            From Rural Seemanchal to National Universities
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Real human journeys of first-generation scholars who overcame regional challenges, cleared competitive entrances through free coaching, and are now guiding the next generation.
          </p>
        </div>

      {/* ── IMPACT METRICS RIBBON (PRATHAM STYLE) ─────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {[
          { number: '1,000+', label: 'University Scholars', sub: 'Across 7 Central Universities', color: 'text-[#0052B4]', bg: 'bg-blue-50/60 border-blue-100' },
          { number: '38%', label: 'Women Enrollment', sub: 'Breaking Regional Barriers', color: 'text-[#009A44]', bg: 'bg-emerald-50/60 border-emerald-100' },
          { number: '12+', label: 'Districts Covered', sub: 'Bihar, Bengal & Jharkhand', color: 'text-[#D91B24]', bg: 'bg-red-50/60 border-red-100' },
          { number: '100%', label: 'Free Coaching & Help', sub: 'Zero Cost at Any Stage', color: 'text-[#00A3E0]', bg: 'bg-cyan-50/60 border-cyan-100' },
        ].map((stat, i) => (
          <div key={i} className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl border ${stat.bg} shadow-xs space-y-1 text-center bg-white transition-all hover:shadow-md`}>
            <div className={`text-2xl sm:text-4xl lg:text-5xl font-serif-heading font-bold ${stat.color} tracking-tight`}>
              {stat.number}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 pt-0.5">{stat.label}</div>
            <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* ── FEATURED SPOTLIGHT STORY (PRATHAM-INSPIRED SPLIT SHOWCASE) ───── */}
      {featuredStory && !searchQuery && selectedCategory === 'All' && selectedUniversity === 'All' && (
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#0F172A] rounded-3xl overflow-hidden shadow-2xl border border-slate-700 text-white grid grid-cols-1 lg:grid-cols-12 items-stretch group">
          
          {/* Big Visual Photo */}
          <Link 
            to={`/student-stories/${featuredStory.id}`} 
            className="lg:col-span-7 relative min-h-[260px] sm:min-h-[380px] lg:min-h-[420px] bg-slate-950 overflow-hidden cursor-pointer block"
          >
            <img 
              src={featuredStory.image} 
              alt={featuredStory.name}
              className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            {/* Visual gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            
            {/* Badges on photo */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D91B24]" />
                {featuredStory.nativeDistrict}
              </span>
              <span className="bg-[#0052B4] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                {featuredStory.highlightMetric}
              </span>
            </div>

            {/* Bottom photo credit */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-2xl font-serif-heading font-bold drop-shadow-md">{featuredStory.name}</p>
              <p className="text-blue-200 text-sm font-semibold">{featuredStory.degree} • {featuredStory.university}</p>
            </div>
          </Link>

          {/* Story Narrative Column */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-slate-900/90">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-300/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Featured Story of Change
              </div>

              <blockquote className="text-base sm:text-lg font-serif italic text-slate-200 leading-relaxed border-l-3 border-[#0052B4] pl-4 py-1">
                "{featuredStory.quote}"
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {featuredStory.editorialSubtitle}
              </p>

              {/* Mentorship Tag */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-amber-300" />
                  Pay-It-Forward Impact:
                </span>
                <p className="text-xs text-slate-300 font-normal">
                  {featuredStory.mentorContribution}
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-400 font-medium">{featuredStory.batch} Alumni</span>
              <Link
                to={`/student-stories/${featuredStory.id}`}
                className="bg-[#0052B4] hover:bg-[#003D87] text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-2 shadow-sm active:scale-95"
              >
                <span>Read Full Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      )}

      {/* ── FILTER & SEARCH BAR ───────────────────────────────────────────── */}
      <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 space-y-4 shadow-xs">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categoryTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === tab.key 
                    ? 'bg-[#0052B4] text-white shadow-sm' 
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-[#0052B4] hover:text-[#0052B4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box & University Filter */}
          <div className="flex flex-col sm:flex-row gap-2.5 items-center">
            
            <select 
              value={selectedUniversity}
              onChange={(e) => setSelectedUniversity(e.target.value)}
              className="w-full sm:w-auto px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white font-semibold outline-none text-slate-800 focus:ring-2 focus:ring-[#0052B4]"
            >
              {universities.map(u => (
                <option key={u} value={u}>{u === 'All' ? 'All Universities (7 Units)' : u}</option>
              ))}
            </select>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search scholars, districts..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#0052B4] outline-none font-medium text-slate-800"
              />
            </div>

          </div>

        </div>

        <div className="flex justify-between items-center text-xs text-slate-500 pt-1 border-t border-slate-200/70">
          <span>Showing <strong>{filteredStories.length}</strong> inspiring scholar journeys</span>
          {(selectedCategory !== 'All' || selectedUniversity !== 'All' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedUniversity('All');
                setSearchQuery('');
              }}
              className="text-[#0052B4] font-semibold hover:underline"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* ── VISUAL STORIES GRID (PRATHAM LARGE-PHOTO FORMAT) ─────────────── */}
      {filteredStories.length === 0 ? (
        <div className="py-20 text-center space-y-3 bg-white rounded-3xl border border-slate-200">
          <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-semibold text-slate-700">No stories found matching your filter</h3>
          <p className="text-xs text-slate-500">Try adjusting your category, university, or search keyword.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.map((story) => (
            <Link 
              key={story.id}
              to={`/student-stories/${story.id}`}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer border-t-4 border-t-amber-400/80 hover:border-t-[#0052B4]"
            >
              <div>
                {/* ── Large Visual Photo Header ── */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  {/* Top-left: Location Pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm text-slate-800 text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    <MapPin className="w-3 h-3 text-[#D91B24]" />
                    <span>{story.nativeDistrict}</span>
                  </div>

                  {/* Top-right: Category Pill */}
                  <div className="absolute top-3 right-3 text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                    {story.category === 'Research' ? 'Ph.D. Scholar' : story.category}
                  </div>

                  {/* Bottom Text Over Photo */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block text-[9.5px] font-bold text-[#009A44] bg-white/95 px-2.5 py-0.5 rounded-full border border-emerald-200 mb-1">
                      {story.tag}
                    </span>
                    <h3 className="text-white font-serif-heading font-bold text-lg leading-tight drop-shadow-md group-hover:text-amber-200 transition-colors">
                      {story.name}
                    </h3>
                    <p className="text-blue-100 text-[11px] font-semibold mt-0.5 truncate">
                      {story.degree} • {story.university.split('(')[0]}
                    </p>
                  </div>
                </div>

                {/* ── Card Content Body ── */}
                <div className="p-5 space-y-3.5">
                  {/* Pratham-Style Story Headline & Excerpt */}
                  <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#0052B4] transition-colors line-clamp-2">
                    {story.editorialTitle}
                  </h4>

                  {/* Large Pull Quote */}
                  <blockquote className="text-xs text-slate-700 italic leading-relaxed font-serif bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70 relative">
                    <Quote className="w-4 h-4 text-slate-300 absolute top-2 right-2 pointer-events-none" />
                    "{story.quote}"
                  </blockquote>

                  {/* Mentorship Impact Box */}
                  <div className="text-[11px] text-slate-600 space-y-1 bg-amber-50/60 p-3 rounded-xl border border-amber-200/60">
                    <span className="font-bold text-amber-800 flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-amber-700" />
                      Pay-It-Forward Impact:
                    </span>
                    <p className="text-[11px] text-slate-700 leading-snug line-clamp-2">
                      {story.mentorContribution}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Card Footer ── */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="text-[11px] font-semibold text-slate-400">{story.batch}</span>
                <span className="font-bold text-[#0052B4] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform group-hover:underline">
                  <span>Read Full Journey</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </Link>
          ))}
        </div>
      )}

      {/* ── BOTTOM CALLOUT: JOIN THE MENTOR NETWORK ──────────────────────── */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-300" />
            Alumni &amp; Scholar Network
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-white">
            Are You a ShED Alumnus or Current Scholar?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Share your university journey to inspire future students from Seemanchal or volunteer as an entrance coaching mentor for CUET 2026.
          </p>
        </div>

        <button
          onClick={onOpenHelpdesk}
          className="bg-[#0052B4] hover:bg-[#003D87] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-xs shrink-0 flex items-center gap-2 active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Join Mentor Network</span>
        </button>
      </div>

      </div>
    </div>
  );
};
