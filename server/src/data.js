export const initialData = {
  stats: {
    totalGraduates: 1000,
    activeUnits: 7,
    districtsCovered: 12,
    coachingBeneficiaries: 450,
    womenParticipationRate: "38%",
    establishedYear: 2018
  },
  universityUnits: [
    {
      id: "manuu-unit",
      code: "MANUU",
      name: "Maulana Azad National Urdu University",
      location: "Hyderabad, Telangana",
      established: "2018",
      studentsCount: 200,
      isFirstUnit: true,
      incharge: "Central Working Committee Representative",
      description: "Established in 2018, MANUU Unit was the founding university unit of ShED Forum. It has grown into a vibrant academic hub with around 200 active Shershahbadi students pursuing undergraduate, postgraduate, and doctoral studies.",
      highlights: [
        "First foundational university unit of ShED Forum",
        "Active peer mentorship & CUET guidance center",
        "Regular monthly academic & literary meetups",
        "Comprehensive student help-desk during admissions"
      ],
      contactEmail: "manuu.unit@shedforum.org",
      images: [
        "/gallery/manuu-unit/manuu-group-night-01.jpg",
        "/gallery/manuu-unit/manuu-circle-meeting-lawn-01.jpg",
        "/gallery/manuu-unit/manuu-outdoor-audience-day-01.jpg",
        "/gallery/manuu-unit/manuu-group-night-02.jpg",
        "/gallery/manuu-unit/manuu-outdoor-audience-day-02.jpg",
        "/gallery/manuu-unit/manuu-group-night-03.jpg",
        "/gallery/manuu-unit/manuu-group-night-04.jpg",
        "/gallery/manuu-unit/manuu-group-night-05.jpg",
        "/gallery/manuu-unit/manuu-event-indoor-01.jpg"
      ],
      image: "/gallery/manuu-unit/manuu-group-night-01.jpg"
    },
    {
      id: "jmi-unit",
      code: "JMI",
      name: "Jamia Millia Islamia",
      location: "New Delhi",
      established: "2021",
      studentsCount: 170,
      isFirstUnit: false,
      incharge: "Jamia Unit Executive Committee",
      description: "Established in 2021, the Jamia Unit in New Delhi serves approximately 170 students. It provides critical mentorship for central university entrance exams, civil services guidance, and academic networking in the national capital region.",
      highlights: [
        "Strategic capital presence connecting students with premier faculties",
        "Strong mentorship network for UPSC & competitive exams",
        "Annual Freshers' Orientation & Iftar Meets",
        "Active collaboration with JNU & DU units"
      ],
      contactEmail: "jamia.unit@shedforum.org",
      images: [
        "/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg",
        "/gallery/jmi-unit/jmi-seminar-indoor-01.jpg",
        "/gallery/jmi-unit/jmi-book-launch-indoor-01.jpg",
        "/gallery/jmi-unit/jmi-group-gate-night-01.jpg",
        "/gallery/jmi-unit/jmi-group-gate-night-02.jpg",
        "/gallery/jmi-unit/jmi-circle-meeting-lawn-01.jpg",
        "/gallery/jmi-unit/jmi-group-campus-lawn-01.jpg",
        "/gallery/jmi-unit/jmi-career-guidance-indoor-01.jpg",
        "/gallery/jmi-unit/jmi-career-pathways-event-01.jpg",
        "/gallery/jmi-unit/jmi-career-pathways-event-02.jpg",
        "/gallery/jmi-unit/jmi-career-pathways-event-03.jpg",
        "/gallery/jmi-unit/jmi-scg-session-indoor-01.jpg"
      ],
      image: "/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg"
    },
    {
      id: "amu-unit",
      code: "AMU",
      name: "Aligarh Muslim University",
      location: "Aligarh, Uttar Pradesh",
      established: "2022",
      studentsCount: 220,
      isFirstUnit: false,
      incharge: "AMU Unit Secretariat",
      description: "Established in 2022, the AMU Unit is currently one of the largest units with over 220 active students across diverse faculties including Engineering, Medicine, Humanities, and Law.",
      highlights: [
        "Largest single unit representation with 220+ students",
        "Comprehensive residential student support & hostel guidance",
        "Subject-specific tutoring & exam prep circles",
        "Active involvement in grassroots student mobilization"
      ],
      contactEmail: "amu.unit@shedforum.org",
      images: [
        "/gallery/amu-unit/amu-circle-meeting-mosque-night-01.jpg",
        "/gallery/amu-unit/amu-group-night-outdoor-01.jpg",
        "/gallery/amu-unit/amu-circle-meeting-outdoor-day-01.jpg",
        "/gallery/amu-unit/amu-circle-meeting-mosque-night-02.jpg",
        "/gallery/amu-unit/amu-indoor-meeting-01.jpg",
        "/gallery/amu-unit/amu-outdoor-session-night-01.jpg"
      ],
      image: "/gallery/amu-unit/amu-circle-meeting-mosque-night-01.jpg"
    },
    {
      id: "jnu-unit",
      code: "JNU",
      name: "Jawaharlal Nehru University",
      location: "New Delhi",
      established: "2022",
      studentsCount: 15,
      isFirstUnit: false,
      incharge: "JNU Student Convener",
      description: "Established in 2022, the JNU Unit focuses on higher research, M.Phil/Ph.D. guidance, social science research methodology, and international fellowship applications.",
      highlights: [
        "Research & doctoral student mentorship forum",
        "Specialized guidance for JNUEE / NTA NET JRF",
        "Policy research discussions & seminar series"
      ],
      contactEmail: "jnu.unit@shedforum.org",
      image: "/gallery/jmi-unit/jmi-seminar-indoor-01.jpg"
    },
    {
      id: "du-unit",
      code: "DU",
      name: "University of Delhi",
      location: "New Delhi",
      established: "2023",
      studentsCount: 15,
      isFirstUnit: false,
      incharge: "DU Unit Coordinator",
      description: "Established in 2023, DU Unit supports undergraduate and postgraduate scholars across Delhi University North and South campuses.",
      highlights: [
        "CUET UG/PG support for premier DU colleges",
        "Skill development & English communication workshops",
        "Career guidance & campus placement support"
      ],
      contactEmail: "du.unit@shedforum.org",
      image: "/gallery/jmi-unit/jmi-group-gate-night-01.jpg"
    },
    {
      id: "hcu-unit",
      code: "HCU",
      name: "University of Hyderabad",
      location: "Hyderabad, Telangana",
      established: "2021",
      studentsCount: 7,
      isFirstUnit: false,
      incharge: "HCU Student Representative",
      description: "Established in 2021, HCU Unit provides dedicated academic support and research fellowship assistance in South India's premier central university.",
      highlights: [
        "Science & Humanities research guidance",
        "South India campus support network",
        "Peer study circles"
      ],
      contactEmail: "hcu.unit@shedforum.org",
      image: "/gallery/manuu-unit/manuu-circle-meeting-lawn-01.jpg"
    },
    {
      id: "patna-unit",
      code: "Patna Univ",
      name: "Patna University",
      location: "Patna, Bihar",
      established: "2026",
      studentsCount: 12,
      isFirstUnit: false,
      incharge: "Patna Unit Executive",
      description: "Established in 2026, the Patna University Unit acts as the regional state university hub in Bihar, facilitating admission support closer to the Seemanchal region.",
      highlights: [
        "State level central guidance hub in Bihar capital",
        "Grassroots student transition support from Seemanchal",
        "Direct connection with local administration & colleges"
      ],
      contactEmail: "patna.unit@shedforum.org",
      image: "/gallery/online-events/online-scg-google-meet-01.jpg"
    }
  ],
  initiatives: [
    {
      id: "scg-centre",
      title: "SCG Centre (Shershahbadi Guidance & Coaching)",
      category: "Academic Coaching",
      description: "Provides free academic support, coaching, CUET & Entrance Exam preparation, study materials, and rigorous guidance to students aspiring to enter premier central universities.",
      icon: "GraduationCap",
      featured: true,
      budget: "₹3,000,000 - ₹3,500,000 per annum",
      timeline: "November to June"
    },
    {
      id: "career-helpdesk",
      title: "Career Counseling & University Help Desk",
      category: "Student Support",
      description: "Dedicated seasonal help-desks across university campuses and online portals assisting students in selecting courses, navigating admission forms, and securing hostel accommodations.",
      icon: "HelpCircle",
      featured: true,
      budget: "₹25,000 - ₹30,000",
      timeline: "January to June"
    },
    {
      id: "grassroots-campaigns",
      title: "Grassroots Ground Outreach Campaigns",
      category: "Awareness & Outreach",
      description: "Direct village-level and school-level outreach across Seemanchal (Katihar, Purnea, Araria, Kishanganj, Malda, Murshidabad, Sahibganj) during summer and winter vacations to raise educational awareness.",
      icon: "Megaphone",
      featured: true,
      budget: "₹2,50,000 - ₹3,00,000",
      timeline: "Vacation Periods"
    },
    {
      id: "mentorship-program",
      title: "Unit-Wise One-to-One Mentorship",
      category: "Mentorship",
      description: "Pairs newly enrolled university students with senior scholars and research fellows for personalized academic guidance, subject selection, and mental well-being.",
      icon: "Users",
      featured: true,
      budget: "Included in Annual Program",
      timeline: "Year Round"
    },
    {
      id: "alumni-connect",
      title: "ShED Alumni Connect Network",
      category: "Career & Placement",
      description: "Over 1,000+ graduates across India form a robust professional network assisting final-year students with job placements, internship opportunities, competitive exams (UPSC/BPSC/NET), and higher studies.",
      icon: "Briefcase",
      featured: true,
      budget: "Self-Sustaining Community Fund",
      timeline: "Continuous"
    },
    {
      id: "financial-aid",
      title: "Financial Aid & Scholarship Guidance",
      category: "Financial Support",
      description: "Facilitates micro-grants, emergency tuition support, and scholarship applications (NSP, Post-Matric, Maulana Azad Fellowships) through contributions from patrons, alumni, and well-wishers.",
      icon: "HeartHandshake",
      featured: true,
      budget: "Community Contributions",
      timeline: "Need-based"
    },
    {
      id: "spoken-english",
      title: "English Spoken & Soft Skills Program",
      category: "Skill Development",
      description: "Intensive 6-month communication, personality development, and English language training to bridge language barriers for rural students entering urban university environments.",
      icon: "BookOpen",
      featured: false,
      budget: "₹1,50,000 - ₹2,00,000",
      timeline: "July to December"
    },
    {
      id: "womens-day",
      title: "Women's Empowerment & Foundation Day",
      category: "Annual Flagship Event",
      description: "Observed on International Women's Day (March 8th), celebrating female academic achievers from the Shershahbadi community and driving women's higher education enrollment.",
      icon: "Award",
      featured: false,
      budget: "₹25,000 - ₹30,000",
      timeline: "March 8th Annually"
    }
  ],
  patrons: [
    {
      id: "1",
      name: "Prof. Mujibur Rahman",
      title: "Chief Patron & Academic Mentor",
      email: "mujeeburrahman1972@gmail.com",
      designation: "Professor & Senior University Academician",
      quote: "Education is not merely a means of personal advancement; it is the foundation of community empowerment and lasting social transformation.",
      image: "/gallery/jmi-unit/jmi-seminar-indoor-01.jpg"
    },
    {
      id: "2",
      name: "Judge Sahiba",
      title: "Legal Advisor & Patron",
      email: "patron.legal@shedforum.org",
      designation: "Judicial Officer & Legal Luminary",
      quote: "Legal literacy and higher education together equip our youth with the dignity, rights, and voice needed to shape our democracy.",
      image: "/gallery/jmi-unit/jmi-book-launch-indoor-01.jpg"
    },
    {
      id: "3",
      name: "Sheikh Mutiurrahman",
      title: "Patron",
      email: "patron.sheikh@shedforum.org",
      designation: "Imam Bukhari University",
      quote: "Connecting our young scholars with national centers of excellence ensures a bright future anchored in knowledge and moral ethics.",
      image: "/gallery/amu-unit/amu-circle-meeting-mosque-night-01.jpg"
    },
    {
      id: "4",
      name: "Tauquir Alam",
      title: "Patron & Executive Advisor",
      email: "tauquir1983@gmail.com",
      designation: "Community Leader & Educational Catalyst",
      quote: "Every student supported today becomes a mentor for ten more tomorrow. This chain reaction is the heart of ShED Forum.",
      image: "/gallery/manuu-unit/manuu-group-night-01.jpg"
    },
    {
      id: "5",
      name: "Nisat Alam",
      title: "Patron & Social Reformer",
      email: "nisat.alam@shedforum.org",
      designation: "Social Work & Women Education Lead",
      quote: "Empowering women through higher education elevates entire families and transforms generations.",
      image: "/gallery/jmi-unit/jmi-career-pathways-event-01.jpg"
    },
    {
      id: "6",
      name: "Alamgir Alam",
      title: "Patron",
      email: "patron.alamgir@shedforum.org",
      designation: "Former State Minister & Community Figure",
      quote: "Policy and community action must join hands to create institutional access for deprived regions.",
      image: "/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg"
    },
    {
      id: "7",
      name: "Mushtaque Alam",
      title: "Patron",
      email: "patron.mushtaque@shedforum.org",
      designation: "Former MLA & Educational Crusader",
      quote: "When rural talent is nurtured with guidance, extraordinary achievements follow.",
      image: "/gallery/amu-unit/amu-group-night-outdoor-01.jpg"
    },
    {
      id: "8",
      name: "Motiur Rahman",
      title: "Patron",
      email: "patron.motiur@shedforum.org",
      designation: "Member of Legislative Assembly (MLA)",
      quote: "Dedicated to building permanent educational infrastructure and student assistance networks for Seemanchal.",
      image: "/gallery/manuu-unit/manuu-outdoor-audience-day-01.jpg"
    }
  ],
  events: [
    {
      id: "1",
      title: "SCG CUET & Entrance Preparation Drive 2026",
      date: "2026-04-15",
      category: "Coaching",
      location: "Online & SCG Regional Center",
      summary: "Comprehensive 60-day free online coaching, mock test series, and study materials for CUET UG/PG aspirants.",
      details: "ShED Forum launches its flagship SCG Entrance Coaching for 2026-2027 admissions targeting Jamia, AMU, JNU, MANUU, and DU."
    },
    {
      id: "2",
      title: "Annual Foundation Day & International Women's Day Special",
      date: "2026-03-08",
      category: "Flagship Event",
      location: "New Delhi Convention Hall & Live Stream",
      summary: "Celebrating female scholars of ShED Forum with inspiring keynotes from judicial and academic luminaries.",
      details: "ShED Forum celebrated its Foundation Day on International Women's Day with over 400 attendees online and offline."
    },
    {
      id: "3",
      title: "University Admission Help Desk Launch 2026",
      date: "2026-05-01",
      category: "Help Desk",
      location: "All 7 University Campus Units",
      summary: "Dedicated help desk teams set up in MANUU, JMI, AMU, JNU, DU, HCU, and Patna University.",
      details: "Helpdesk volunteers will guide new applicants on form filling, hostel forms, document verification, and regional verification."
    },
    {
      id: "4",
      title: "Iftar-cum-Cultural Educational Meetup 2026",
      date: "2026-03-22",
      category: "Community",
      location: "Jamia & MANUU Campus Centers",
      summary: "Annual gathering bringing together students, faculty, and alumni for community dialogue and spiritual unity.",
      details: "An inspiring evening featuring alumni interactions, awards distribution for high achievers, and community dinner."
    }
  ],
  gallery: [
    // ── MANUU Unit – Hyderabad ──────────────────────────────────────
    { id: "g-manuu-01", title: "MANUU Unit — Annual Group Photo", unit: "manuu-unit", category: "Campus Life", type: "photo", url: "/gallery/manuu-unit/manuu-group-night-01.jpg", caption: "MANUU Unit students gathered for the annual group photo at MANUU Campus, Hyderabad." },
    { id: "g-manuu-02", title: "MANUU Unit — Freshers Orientation", unit: "manuu-unit", category: "Events", type: "photo", url: "/gallery/manuu-unit/manuu-event-indoor-01.jpg", caption: "Indoor orientation programme at MANUU Campus, Hyderabad." },
    { id: "g-manuu-03", title: "MANUU Unit — Open Lawn Circle Meeting", unit: "manuu-unit", category: "Campus Life", type: "photo", url: "/gallery/manuu-unit/manuu-circle-meeting-lawn-01.jpg", caption: "Mentorship circle on the green lawns of MANUU Campus, Hyderabad." },
    { id: "g-manuu-04", title: "MANUU Unit — Career Guidance Session", unit: "manuu-unit", category: "Coaching", type: "photo", url: "/gallery/manuu-unit/manuu-outdoor-audience-day-01.jpg", caption: "Career guidance session held outdoors at MANUU Campus." },
    { id: "g-manuu-05", title: "MANUU Unit — Group Photo at Campus", unit: "manuu-unit", category: "Campus Life", type: "photo", url: "/gallery/manuu-unit/manuu-group-night-02.jpg", caption: "Students at MANUU Campus during a unit meeting, Hyderabad." },
    { id: "g-manuu-06", title: "MANUU Unit — Open Session", unit: "manuu-unit", category: "Campus Life", type: "photo", url: "/gallery/manuu-unit/manuu-outdoor-audience-day-02.jpg", caption: "Students at an outdoor mentorship session at MANUU, Hyderabad." },
    { id: "g-manuu-07", title: "MANUU Unit — Large Group (Night)", unit: "manuu-unit", category: "Campus Life", type: "photo", url: "/gallery/manuu-unit/manuu-group-night-03.jpg", caption: "Large group photo of ShED Forum MANUU unit members, evening." },
    { id: "g-manuu-08", title: "MANUU Unit — Community Gathering", unit: "manuu-unit", category: "Events", type: "photo", url: "/gallery/manuu-unit/manuu-group-night-04.jpg", caption: "Community group photo at MANUU Campus, Hyderabad." },
    { id: "g-manuu-09", title: "MANUU Unit — Students Group", unit: "manuu-unit", category: "Campus Life", type: "photo", url: "/gallery/manuu-unit/manuu-group-night-05.jpg", caption: "Students group photo at MANUU Campus during unit meeting." },

    // ── JMI Unit – New Delhi ────────────────────────────────────────
    { id: "g-jmi-01", title: "JMI Unit — Seminar & Guidance Session", unit: "jmi-unit", category: "Coaching", type: "photo", url: "/gallery/jmi-unit/jmi-seminar-indoor-01.jpg", caption: "Career guidance seminar held at JMI Campus, New Delhi." },
    { id: "g-jmi-02", title: "JMI Unit — Igniting Minds Book Launch", unit: "jmi-unit", category: "Events", type: "photo", url: "/gallery/jmi-unit/jmi-book-launch-indoor-01.jpg", caption: "'Igniting Minds – Inspiring Futures' book launch event at JMI, New Delhi." },
    { id: "g-jmi-03", title: "JMI Unit — Group at JMI Gate", unit: "jmi-unit", category: "Campus Life", type: "photo", url: "/gallery/jmi-unit/jmi-group-gate-night-01.jpg", caption: "JMI Unit students at Jamia Millia Islamia gate, New Delhi (evening)." },
    { id: "g-jmi-04", title: "JMI Unit — Centenary Gate Photo", unit: "jmi-unit", category: "Campus Life", type: "photo", url: "/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg", caption: "ShED Forum JMI Unit members at the Centenary Gate, Jamia Millia Islamia." },
    { id: "g-jmi-05", title: "JMI Unit — Group at Illuminated Gate", unit: "jmi-unit", category: "Campus Life", type: "photo", url: "/gallery/jmi-unit/jmi-group-gate-night-02.jpg", caption: "JMI Unit group photo at the illuminated JMI gate, night." },
    { id: "g-jmi-06", title: "JMI Unit — Circle Discussion on Lawn", unit: "jmi-unit", category: "Campus Life", type: "photo", url: "/gallery/jmi-unit/jmi-circle-meeting-lawn-01.jpg", caption: "Mentorship circle on JMI campus lawn (winter)." },
    { id: "g-jmi-07", title: "JMI Unit — Campus Lawn Group Photo", unit: "jmi-unit", category: "Campus Life", type: "photo", url: "/gallery/jmi-unit/jmi-group-campus-lawn-01.jpg", caption: "JMI Unit group photo on campus lawn, evening." },
    { id: "g-jmi-08", title: "JMI Unit — Career Guidance Indoor", unit: "jmi-unit", category: "Coaching", type: "photo", url: "/gallery/jmi-unit/jmi-career-guidance-indoor-01.jpg", caption: "Career guidance indoor session at SCG Centre / JMI, New Delhi." },
    { id: "g-jmi-09", title: "JMI Unit — Career Pathways Event", unit: "jmi-unit", category: "Events", type: "photo", url: "/gallery/jmi-unit/jmi-career-pathways-event-01.jpg", caption: "Career Pathways for Graduates: Employment & Higher Studies, Zahra Cafe, New Delhi." },
    { id: "g-jmi-10", title: "JMI Unit — Career Pathways (Session)", unit: "jmi-unit", category: "Events", type: "photo", url: "/gallery/jmi-unit/jmi-career-pathways-event-02.jpg", caption: "Career Pathways event session at Zahra Restaurant & Cafe, New Delhi." },
    { id: "g-jmi-11", title: "JMI Unit — Career Pathways (Speaker)", unit: "jmi-unit", category: "Events", type: "photo", url: "/gallery/jmi-unit/jmi-career-pathways-event-03.jpg", caption: "Speaker addressing the Career Pathways for Graduates event, Zahra Cafe, New Delhi." },
    { id: "g-jmi-12", title: "JMI Unit — SCG Indoor Session", unit: "jmi-unit", category: "Coaching", type: "photo", url: "/gallery/jmi-unit/jmi-scg-session-indoor-01.jpg", caption: "Large SCG guidance session with packed attendance, New Delhi." },

    // ── AMU Unit – Aligarh ──────────────────────────────────────────
    { id: "g-amu-01", title: "AMU Unit — Outdoor Group (Night)", unit: "amu-unit", category: "Campus Life", type: "photo", url: "/gallery/amu-unit/amu-group-night-outdoor-01.jpg", caption: "AMU Unit night group photo at AMU Campus, Aligarh." },
    { id: "g-amu-02", title: "AMU Unit Meeting — August 2024", unit: "amu-unit", category: "Events", type: "photo", url: "/gallery/amu-unit/amu-circle-meeting-mosque-night-01.jpg", caption: "ShED Forum AMU Unit Meeting, August 2024 — AMU Mosque Courtyard, Aligarh." },
    { id: "g-amu-03", title: "AMU Unit — Open Circle Discussion", unit: "amu-unit", category: "Campus Life", type: "photo", url: "/gallery/amu-unit/amu-circle-meeting-outdoor-day-01.jpg", caption: "Mentorship circle discussion at AMU Campus, Aligarh (daytime)." },
    { id: "g-amu-04", title: "AMU Unit Meeting — August 2024 (Night)", unit: "amu-unit", category: "Events", type: "photo", url: "/gallery/amu-unit/amu-circle-meeting-mosque-night-02.jpg", caption: "AMU Unit Meeting night session, August 2024 — Mosque Courtyard, Aligarh." },
    { id: "g-amu-05", title: "AMU Unit — Indoor Meeting", unit: "amu-unit", category: "Campus Life", type: "photo", url: "/gallery/amu-unit/amu-indoor-meeting-01.jpg", caption: "AMU Unit indoor meeting at AMU Campus, Aligarh." },
    { id: "g-amu-06", title: "AMU Unit — Large Outdoor Session", unit: "amu-unit", category: "Coaching", type: "photo", url: "/gallery/amu-unit/amu-outdoor-session-night-01.jpg", caption: "Large outdoor career guidance session at AMU Campus, Aligarh (evening)." },

    // ── Online Events ───────────────────────────────────────────────
    { id: "g-online-01", title: "ShED Forum — Facebook Live Session", unit: "online", category: "Outreach", type: "photo", url: "/gallery/online-events/online-facebook-live-01.jpg", caption: "ShED Forum Facebook Live online dialogue session." },
    { id: "g-online-02", title: "ShED Forum — Zoom Meeting", unit: "online", category: "Events", type: "photo", url: "/gallery/online-events/online-zoom-meeting-01.jpg", caption: "Shershahbadi Educational Dialogue — Zoom meeting with 57 participants." },
    { id: "g-online-03", title: "SCG Centre — Google Meet Session", unit: "online", category: "Coaching", type: "photo", url: "/gallery/online-events/online-scg-google-meet-01.jpg", caption: "SCG Centre online guidance session via Google Meet." },
    { id: "g-online-04", title: "SCG Centre — Google Meet (Host View)", unit: "online", category: "Coaching", type: "photo", url: "/gallery/online-events/online-scg-google-meet-02.jpg", caption: "SCG Centre Google Meet session hosted by Aamir Abbas with 41+ participants." }
  ],
  contactSubmissions: []
};
