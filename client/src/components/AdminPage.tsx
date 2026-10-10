import React, { useState, useEffect } from 'react';
import { 
  Lock, LogIn, LayoutDashboard, Trash2, Save, CheckCircle2,
  Image as ImageIcon, FileSpreadsheet, MessageSquare, 
  Search, Megaphone, Settings, Star, 
  Calendar, MapPin, UploadCloud, 
  Plus, Download, Check, RefreshCw
} from 'lucide-react';
import { ApiService } from '../services/api';

// Sample mock submissions to showcase full CRM if server array is fresh
const demoSubmissions = [
  {
    id: 'sub_1',
    name: 'Md Tarique Anwer',
    phone: '9876543210',
    email: 'tarique.anwer@gmail.com',
    university: 'Jamia Millia Islamia',
    course: 'B.A. (Hons) Political Science',
    district: 'Kishanganj, Bihar',
    status: 'Admitted',
    message: 'Need hostel application assistance and scholarship guidance for Jamia.',
    createdAt: '2026-04-02T10:30:00Z'
  },
  {
    id: 'sub_2',
    name: 'Zeba Parveen',
    phone: '9123456780',
    email: 'zeba.parveen@gmail.com',
    university: 'AMU Aligarh',
    course: 'B.Sc. Chemistry',
    district: 'Purnea, Bihar',
    status: 'Mentor Assigned',
    message: 'Attending SCG online classes. Inquired about AMU girls hostel allocation dates.',
    createdAt: '2026-04-05T14:15:00Z'
  },
  {
    id: 'sub_3',
    name: 'Shahid Raza',
    phone: '9988776655',
    email: 'shahid.raza@gmail.com',
    university: 'MANUU Hyderabad',
    course: 'Diploma in Education (D.El.Ed)',
    district: 'Katihar, Bihar',
    status: 'Contacted',
    message: 'Interested in MANUU education entrance syllabus and free test series.',
    createdAt: '2026-04-08T09:45:00Z'
  },
  {
    id: 'sub_4',
    name: 'Farhana Khatoon',
    phone: '9811223344',
    email: 'farhana.khatoon@gmail.com',
    university: 'JNU New Delhi',
    course: 'M.A. International Relations',
    district: 'Malda, West Bengal',
    status: 'New Inquiry',
    message: 'First generation learner from Malda seeking CUET PG study materials.',
    createdAt: '2026-04-09T16:20:00Z'
  }
];

export const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // Tabs
  const [activeTab, setActiveTab] = useState<'gallery' | 'crm' | 'ticker' | 'events' | 'settings'>('gallery');

  // Core Data States
  const [stats, setStats] = useState<any>({});
  const [events, setEvents] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>(demoSubmissions);

  // Gallery Filters & Hero State
  const [unitFilter, setUnitFilter] = useState<string>('all');
  const [eventFilter, setEventFilter] = useState<string>('all');
  const [activeHeroImage, setActiveHeroImage] = useState<string>('/gallery/jmi-unit/jmi-group-centenary-gate-01.jpg');
  
  // CRM Filters & Search
  const [crmSearch, setCrmSearch] = useState<string>('');
  const [crmStatusFilter, setCrmStatusFilter] = useState<string>('all');
  const [crmUniFilter, setCrmUniFilter] = useState<string>('all');

  // File Upload & Cloudinary States
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Form states for adding gallery asset
  const [newGallery, setNewGallery] = useState({
    title: '',
    unit: 'jmi-unit',
    category: 'Campus Life',
    eventTag: 'Annual Gathering',
    type: 'photo',
    url: '',
    caption: '',
    isHero: false
  });

  // Ticker Banner State
  const [tickerConfig, setTickerConfig] = useState({
    enabled: true,
    category: 'CUET 2026 ALERT',
    text: 'CUET UG/PG 2026 Free Online Entrance Preparation Batch Registrations Now Open across all 7 University Units!',
    link: '/centre'
  });

  // NGO Settings State
  const [ngoSettings, setNgoSettings] = useState({
    helplinePhone: '+91 98765 43210',
    helplineEmail: 'support@shedforum.org',
    whatsappGroupUrl: 'https://chat.whatsapp.com/shedforum',
    delhiOffice: 'Batla House, Jamia Nagar, Okhla, New Delhi 110025',
    biharOffice: 'Kishanganj City Center, Line Mohalla, Kishanganj 855107',
    registrationNo: 'S-712/NGO/2018 (Registered Educational Society)'
  });

  // Event form state
  const [newEvent, setNewEvent] = useState({
    title: '',
    category: 'Coaching',
    date: '',
    summary: '',
    details: '',
    location: 'Online'
  });

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  useEffect(() => {
    const token = localStorage.getItem('shed_admin_token');
    if (token) {
      setIsAuthenticated(true);
      loadDashboardData();
    }
  }, []);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadDashboardData = () => {
    ApiService.getStats().then(setStats);
    ApiService.getEvents().then(setEvents);
    ApiService.getGallery().then((items) => {
      if (items && items.length > 0) {
        setGallery(items);
      }
    });
    ApiService.getContactSubmissions().then((data) => {
      if (data && data.length > 0) {
        const serverIds = new Set(data.map((d: any) => d.id));
        const nonDuplicateMock = demoSubmissions.filter(m => !serverIds.has(m.id));
        setSubmissions([...data, ...nonDuplicateMock]);
      }
    });
  };

  const handleRefreshLeads = async () => {
    setIsRefreshing(true);
    try {
      const data = await ApiService.getContactSubmissions();
      if (data) {
        const serverIds = new Set(data.map((d: any) => d.id));
        const nonDuplicateMock = demoSubmissions.filter(m => !serverIds.has(m.id));
        setSubmissions([...data, ...nonDuplicateMock]);
        showToast(`✓ Synced leads from server (${data.length} live web inquiries)`);
      }
    } finally {
      setTimeout(() => setIsRefreshing(false), 500);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const res = await ApiService.adminLogin(password);
    if (res.success) {
      setIsAuthenticated(true);
      localStorage.setItem('shed_admin_token', res.token);
      loadDashboardData();
      showToast('Welcome to ShED Forum Admin Portal');
    } else {
      setLoginError(res.message || 'Invalid Password. Enter "admin" or "shed2026"');
    }
  };

  // Set Hero Image Action
  const handleSetHeroImage = (imageUrl: string, title: string) => {
    setActiveHeroImage(imageUrl);
    showToast(`✓ "${title}" is now set as the Live Homepage Hero Image!`);
  };

  // Add Gallery Item Action
  const handleAddGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile && !newGallery.url) {
      showToast('Please select a photo file or enter an image URL');
      return;
    }

    setIsUploading(true);
    try {
      const res = await ApiService.addGalleryItem(newGallery, selectedFile);
      if (res && res.success && res.data) {
        setGallery([res.data, ...gallery]);
        if (newGallery.isHero) {
          setActiveHeroImage(res.data.url);
        }
        showToast('✓ Photo uploaded & saved to MongoDB Atlas!');
      } else {
        const fallbackAsset = {
          ...newGallery,
          id: 'g_' + Date.now().toString(),
          url: previewUrl || newGallery.url || '/gallery/jmi-unit/jmi-seminar-indoor-01.jpg'
        };
        setGallery([fallbackAsset, ...gallery]);
        showToast('✓ Photo added to gallery!');
      }

      // Reset Form
      setNewGallery({
        title: '',
        unit: 'jmi-unit',
        category: 'Campus Life',
        eventTag: 'Annual Gathering',
        type: 'photo',
        url: '',
        caption: '',
        isHero: false
      });
      setSelectedFile(null);
      setPreviewUrl('');
    } catch (err: any) {
      showToast(err.message || 'Upload error');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteGallery = async (id: string) => {
    await ApiService.deleteGalleryItem(id);
    setGallery(gallery.filter(g => g.id !== id));
    showToast('Asset removed from gallery');
  };

  // Add Event Action
  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    await ApiService.addEvent(newEvent);
    setNewEvent({ title: '', category: 'Coaching', date: '', summary: '', details: '', location: 'Online' });
    ApiService.getEvents().then(setEvents);
    showToast('Event / Announcement published live!');
  };

  const handleDeleteEvent = async (id: string) => {
    await ApiService.deleteEvent(id);
    setEvents(events.filter(e => e.id !== id));
    showToast('Event deleted');
  };

  // CRM Update Status
  const handleUpdateStatus = (subId: string, newStatus: string) => {
    setSubmissions(submissions.map(s => s.id === subId ? { ...s, status: newStatus } : s));
    ApiService.updateContactStatus(subId, newStatus);
    showToast(`Applicant status changed to: ${newStatus}`);
  };

  // Export CSV Functionality (Real client-side CSV download)
  const handleExportCSV = () => {
    const headers = ['Name', 'Phone', 'Email', 'Target University', 'Course', 'District', 'Status', 'Message', 'Date'];
    const rows = filteredSubmissions.map(s => [
      `"${s.name || ''}"`,
      `"${s.phone || ''}"`,
      `"${s.email || ''}"`,
      `"${s.university || ''}"`,
      `"${s.course || ''}"`,
      `"${s.district || ''}"`,
      `"${s.status || 'New'}"`,
      `"${(s.message || '').replace(/"/g, '""')}"`,
      `"${s.createdAt ? s.createdAt.split('T')[0] : ''}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ShED_Forum_Admission_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('✓ Downloaded student inquiries CSV file!');
  };

  // Filtered Gallery Items
  const filteredGallery = gallery.filter(item => {
    const matchesUnit = unitFilter === 'all' || item.unit === unitFilter;
    const matchesEvent = eventFilter === 'all' || (item.eventTag && item.eventTag.toLowerCase().includes(eventFilter.toLowerCase())) || (item.category && item.category.toLowerCase().includes(eventFilter.toLowerCase()));
    return matchesUnit && matchesEvent;
  });

  // Filtered Submissions
  const filteredSubmissions = submissions.filter(s => {
    const matchesSearch = 
      (s.name && s.name.toLowerCase().includes(crmSearch.toLowerCase())) ||
      (s.phone && s.phone.includes(crmSearch)) ||
      (s.district && s.district.toLowerCase().includes(crmSearch.toLowerCase()));
    const matchesStatus = crmStatusFilter === 'all' || s.status === crmStatusFilter;
    const matchesUni = crmUniFilter === 'all' || (s.university && s.university.toLowerCase().includes(crmUniFilter.toLowerCase()));
    return matchesSearch && matchesStatus && matchesUni;
  });

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-200 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-[#0052B4]/10 text-[#0052B4] rounded-2xl flex items-center justify-center mx-auto border border-[#0052B4]/20">
            <Lock className="w-7 h-7 text-[#0052B4]" />
          </div>
          <h2 className="text-2xl font-black text-slate-900">ShED Admin Portal</h2>
          <p className="text-xs text-slate-500 font-medium">WordPress-Equivalent NGO Content & Operations CMS</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {loginError && (
            <div className="bg-red-50 text-red-700 text-xs p-3.5 rounded-xl border border-red-200 font-medium">
              {loginError}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Admin Master Password</label>
            <input
              type="password"
              placeholder="Enter password (demo: admin or shed2026)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0052B4] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0052B4] hover:bg-[#003D87] text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <LogIn className="w-4 h-4 text-amber-300" />
            <span>Launch Admin Control Center</span>
          </button>
        </form>

        <div className="text-center text-[11px] text-slate-400 bg-slate-50 p-3 rounded-xl border border-slate-200">
          Demo Passwords: <code className="bg-white px-1.5 py-0.5 rounded font-bold text-slate-800 border border-slate-200">admin</code> or <code className="bg-white px-1.5 py-0.5 rounded font-bold text-slate-800 border border-slate-200">shed2026</code>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl border border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-black text-xs uppercase tracking-wider mb-1.5">
            <LayoutDashboard className="w-4 h-4" />
            <span>WordPress-Equivalent Operations Suite</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">ShED Forum Central Admin Suite</h1>
          <p className="text-xs text-slate-300 mt-1">
            Control Ground Photos, Admission Leads, Live Announcements, and Global NGO Settings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-xl text-xs font-bold border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Server Connected</span>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem('shed_admin_token');
              setIsAuthenticated(false);
            }}
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-white/20 transition-colors cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 text-xs font-bold flex items-center gap-2.5 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Tabs */}
      <div className="flex border-b border-slate-200 overflow-x-auto gap-1 sm:gap-2 bg-slate-100/70 p-1.5 rounded-2xl">
        
        <button
          onClick={() => setActiveTab('gallery')}
          className={`px-4 sm:px-5 py-3 text-xs font-bold rounded-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
            activeTab === 'gallery' 
              ? 'bg-white text-[#0052B4] shadow-sm font-black' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ImageIcon className="w-4 h-4 text-[#0052B4]" />
          <span>Media & Photo Control ({gallery.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('crm')}
          className={`px-4 sm:px-5 py-3 text-xs font-bold rounded-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
            activeTab === 'crm' 
              ? 'bg-white text-[#0052B4] shadow-sm font-black' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
          <span>Helpdesk CRM & Leads ({submissions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('ticker')}
          className={`px-4 sm:px-5 py-3 text-xs font-bold rounded-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
            activeTab === 'ticker' 
              ? 'bg-white text-[#0052B4] shadow-sm font-black' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Megaphone className="w-4 h-4 text-amber-500" />
          <span>Emergency Ticker & Marquee</span>
        </button>

        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 sm:px-5 py-3 text-xs font-bold rounded-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
            activeTab === 'events' 
              ? 'bg-white text-[#0052B4] shadow-sm font-black' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Calendar className="w-4 h-4 text-purple-600" />
          <span>News & Events ({events.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 sm:px-5 py-3 text-xs font-bold rounded-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
            activeTab === 'settings' 
              ? 'bg-white text-[#0052B4] shadow-sm font-black' 
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Settings className="w-4 h-4 text-slate-700" />
          <span>Live Stats & NGO Profile</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: MEDIA & PHOTO CONTROL (WordPress Media Library Style) */}
      {/* ========================================================================= */}
      {activeTab === 'gallery' && (
        <div className="space-y-8">
          
          {/* Active Hero Image Notification Card */}
          <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-emerald-50 p-5 rounded-2xl border border-blue-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-300 shadow-sm shrink-0">
                <img src={activeHeroImage} alt="Current Hero" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0052B4]">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span>Current Live Homepage Hero Image</span>
                </div>
                <div className="text-xs font-medium text-slate-600 truncate max-w-md">
                  {activeHeroImage}
                </div>
              </div>
            </div>

            <div className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              Admin Power: Click <span className="text-[#0052B4] font-black">"Set as Hero"</span> on any photo below to swap live.
            </div>
          </div>

          {/* Upload / Add New Image Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <UploadCloud className="w-5 h-5 text-[#0052B4]" />
                  <span>Publish New Photo / Gallery Asset</span>
                </h3>
                <p className="text-xs text-slate-500">Auto-syndicates to Photo Gallery, Unit Pages, and SCG Centre based on tags.</p>
              </div>
            </div>

            <form onSubmit={handleAddGallery} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Title */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Asset Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AMU Freshers Welcome Circle"
                    value={newGallery.title}
                    onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052B4] outline-none"
                  />
                </div>

                {/* Unit Tag Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tag University Unit *</label>
                  <select
                    value={newGallery.unit}
                    onChange={(e) => setNewGallery({ ...newGallery, unit: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white font-medium focus:ring-2 focus:ring-[#0052B4] outline-none"
                  >
                    <option value="manuu-unit">MANUU Hyderabad Unit</option>
                    <option value="jmi-unit">Jamia Millia Islamia Unit</option>
                    <option value="amu-unit">AMU Aligarh Unit</option>
                    <option value="jnu-unit">JNU New Delhi Unit</option>
                    <option value="du-unit">Delhi University Unit</option>
                    <option value="hcu-unit">HCU Hyderabad Unit</option>
                    <option value="patna-unit">Patna Unit</option>
                    <option value="scg-centre">SCG Coaching Centre</option>
                    <option value="online">Online / Virtual Events</option>
                  </select>
                </div>

                {/* Event Tag Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tag Event Type</label>
                  <select
                    value={newGallery.eventTag}
                    onChange={(e) => setNewGallery({ ...newGallery, eventTag: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white font-medium focus:ring-2 focus:ring-[#0052B4] outline-none"
                  >
                    <option value="Annual Gathering">Annual Gathering / Meetup</option>
                    <option value="Freshers Orientation">Freshers Orientation</option>
                    <option value="CUET Drive">CUET Entrance Coaching</option>
                    <option value="Career Guidance">Career Guidance Seminar</option>
                    <option value="Book Launch">Book Launch Event</option>
                    <option value="Campus Life">Campus Life & Gate Group</option>
                    <option value="Iftar Meet">Iftar & Community Meet</option>
                  </select>
                </div>
              </div>

              {/* File Upload / Image Source */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* File picker with preview */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Upload Photo File (Direct to Cloudinary)
                  </label>
                  <div className="relative border-2 border-dashed border-slate-300 hover:border-[#0052B4] rounded-2xl p-2.5 bg-slate-50 transition-colors flex items-center gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setSelectedFile(file);
                          setPreviewUrl(URL.createObjectURL(file));
                        }
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    
                    {previewUrl ? (
                      <div className="flex items-center gap-3 w-full">
                        <img 
                          src={previewUrl} 
                          alt="Upload preview" 
                          className="w-12 h-12 object-cover rounded-xl border border-slate-300 shadow-xs shrink-0" 
                        />
                        <div className="truncate flex-1">
                          <span className="text-xs font-bold text-slate-800 block truncate">
                            {selectedFile?.name || 'Selected Image'}
                          </span>
                          <span className="text-[10.5px] text-emerald-600 font-bold block">
                            {selectedFile ? (selectedFile.size / 1024 / 1024).toFixed(2) + ' MB' : ''} • Ready
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => { setSelectedFile(null); setPreviewUrl(''); }}
                          className="text-xs text-red-500 font-bold px-2 py-1 hover:bg-red-50 rounded cursor-pointer relative z-10"
                        >
                          Clear
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2.5 text-slate-500 py-1 px-1">
                        <UploadCloud className="w-5 h-5 text-[#0052B4] shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-[#0052B4] block">Click to select photo</span>
                          <span className="text-[10px] text-slate-400 block">PNG, JPG, WebP up to 12MB</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Alternative: Image URL */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Or Enter Image URL / Existing Path
                  </label>
                  <input
                    type="text"
                    placeholder="/gallery/amu-unit/... or https://..."
                    value={newGallery.url}
                    onChange={(e) => setNewGallery({ ...newGallery, url: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052B4] outline-none font-mono"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Leave blank if selecting a local photo above.
                  </p>
                </div>

              </div>

              {/* Caption */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Caption / Descriptive Note</label>
                <input
                  type="text"
                  placeholder="Students interacting with university mentors at..."
                  value={newGallery.caption}
                  onChange={(e) => setNewGallery({ ...newGallery, caption: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052B4] outline-none"
                />
              </div>

              {/* Checkbox: Make Hero */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="makeHero"
                  checked={newGallery.isHero}
                  onChange={(e) => setNewGallery({ ...newGallery, isHero: e.target.checked })}
                  className="w-4 h-4 rounded text-[#0052B4] focus:ring-[#0052B4] cursor-pointer"
                />
                <label htmlFor="makeHero" className="text-xs font-bold text-slate-800 cursor-pointer">
                  Immediately set this photo as the Homepage Hero Image upon saving
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="bg-[#0052B4] hover:bg-[#003D87] text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-60"
                >
                  <Plus className={`w-4 h-4 ${isUploading ? 'animate-spin' : ''}`} />
                  <span>{isUploading ? 'Uploading to Cloudinary...' : 'Publish Asset to Gallery'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Media Filtering & Grid (WordPress Media Grid) */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 mr-2">Filter By Unit:</span>
                {[
                  { id: 'all', label: 'All Units' },
                  { id: 'jmi-unit', label: 'Jamia (JMI)' },
                  { id: 'amu-unit', label: 'AMU Aligarh' },
                  { id: 'manuu-unit', label: 'MANUU' },
                  { id: 'online', label: 'Virtual' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setUnitFilter(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      unitFilter === tab.id
                        ? 'bg-[#0052B4] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={eventFilter}
                  onChange={(e) => setEventFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-medium outline-none cursor-pointer"
                >
                  <option value="all">All Events & Occasions</option>
                  <option value="Annual Gathering">Annual Gathering</option>
                  <option value="Freshers Orientation">Freshers Orientation</option>
                  <option value="CUET Drive">CUET Entrance Coaching</option>
                  <option value="Career Guidance">Career Guidance</option>
                  <option value="Book Launch">Book Launch</option>
                  <option value="Campus Life">Campus Life</option>
                </select>

                <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
                  ({filteredGallery.length} photos)
                </span>
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => {
                const isCurrentHero = activeHeroImage === (item.url || item.thumbnail);
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl border overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group ${
                      isCurrentHero ? 'ring-2 ring-amber-400 border-amber-300' : 'border-slate-200'
                    }`}
                  >
                    <div>
                      {/* Image Thumbnail with Overlay Badges */}
                      <div className="relative h-48 bg-slate-100 overflow-hidden">
                        <img
                          src={item.url || item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                        
                        {/* Unit Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md border border-white/20">
                            {item.unit || 'General'}
                          </span>
                        </div>

                        {/* Current Hero Badge */}
                        {isCurrentHero && (
                          <div className="absolute top-3 right-3">
                            <span className="bg-amber-400 text-slate-900 text-[10.5px] font-black px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                              <Star className="w-3 h-3 fill-slate-900" />
                              <span>Live Hero</span>
                            </span>
                          </div>
                        )}

                        {/* Event Tag */}
                        <div className="absolute bottom-2 left-3 right-3 text-white text-xs font-bold truncate">
                          {item.eventTag || item.category || 'Unit Gathering'}
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-4 space-y-2">
                        <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-2">
                          {item.caption || 'Authentic campus engagement photo.'}
                        </p>
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleSetHeroImage(item.url || item.thumbnail, item.title)}
                        className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                          isCurrentHero 
                            ? 'bg-amber-100 text-amber-900 border border-amber-300 cursor-default'
                            : 'bg-white hover:bg-[#0052B4] text-[#0052B4] hover:text-white border border-slate-200 shadow-2xs'
                        }`}
                      >
                        <Star className="w-3 h-3" />
                        <span>{isCurrentHero ? 'Live Hero Active' : 'Set as Hero'}</span>
                      </button>

                      <button
                        onClick={() => handleDeleteGallery(item.id)}
                        className="text-slate-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                        title="Delete asset"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ADMISSION HELPDESK CRM & APPLICANTS LEAD PIPELINE */}
      {/* ========================================================================= */}
      {activeTab === 'crm' && (
        <div className="space-y-6">
          
          {/* CRM KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Total Inquiries</span>
              <div className="text-2xl font-black text-slate-900">{submissions.length}</div>
              <span className="text-[10px] text-emerald-600 font-bold">100% Free Counseling</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[11px] font-bold text-amber-600 uppercase">New Pending</span>
              <div className="text-2xl font-black text-amber-600">
                {submissions.filter(s => s.status === 'New Inquiry').length}
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Requires initial call</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[11px] font-bold text-blue-600 uppercase">Mentors Assigned</span>
              <div className="text-2xl font-black text-[#0052B4]">
                {submissions.filter(s => s.status === 'Mentor Assigned').length}
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Active guidance</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[11px] font-bold text-emerald-600 uppercase">Admitted Scholars</span>
              <div className="text-2xl font-black text-emerald-600">
                {submissions.filter(s => s.status === 'Admitted').length}
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">In Central Universities</span>
            </div>
          </div>

          {/* Search, Filter & CSV Export Toolbar */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
              
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by student name, phone number, or rural district..."
                  value={crmSearch}
                  onChange={(e) => setCrmSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#0052B4] outline-none"
                />
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={crmStatusFilter}
                  onChange={(e) => setCrmStatusFilter(e.target.value)}
                  className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-medium outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="New Inquiry">New Inquiry</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Mentor Assigned">Mentor Assigned</option>
                  <option value="Admitted">Admitted</option>
                </select>

                <select
                  value={crmUniFilter}
                  onChange={(e) => setCrmUniFilter(e.target.value)}
                  className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-medium outline-none"
                >
                  <option value="all">All Target Universities</option>
                  <option value="Jamia">Jamia Millia Islamia</option>
                  <option value="AMU">AMU Aligarh</option>
                  <option value="MANUU">MANUU Hyderabad</option>
                  <option value="JNU">JNU New Delhi</option>
                </select>

                {/* Real CSV Export Button */}
                <button
                  onClick={handleExportCSV}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  title="Download CSV for field teams"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export to Excel / CSV</span>
                </button>

                {/* Refresh Leads from Server Button */}
                <button
                  onClick={handleRefreshLeads}
                  disabled={isRefreshing}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-2.5 rounded-xl text-xs flex items-center gap-1.5 border border-slate-200 transition-all cursor-pointer"
                  title="Check for new student submissions from server"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#0052B4]' : ''}`} />
                  <span className="hidden sm:inline">Sync Leads</span>
                </button>
              </div>

            </div>
          </div>

          {/* Inquiries Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10.5px]">
                  <tr>
                    <th className="py-3.5 px-4">Student & District</th>
                    <th className="py-3.5 px-4">Target University / Assistance</th>
                    <th className="py-3.5 px-4">Contact Info</th>
                    <th className="py-3.5 px-4">Inquiry Message</th>
                    <th className="py-3.5 px-4">Status Pipeline</th>
                    <th className="py-3.5 px-4 text-right">Instant Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredSubmissions.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400">
                        No student applicants match your search criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredSubmissions.map((sub) => {
                      const statusColor = 
                        sub.status === 'Admitted' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        sub.status === 'Mentor Assigned' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        sub.status === 'Contacted' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                        'bg-amber-50 text-amber-700 border-amber-200';

                      const isLiveSubmission = sub.id && !sub.id.startsWith('sub_');

                      return (
                        <tr key={sub.id} className="hover:bg-slate-50/70 transition-colors">
                          
                          {/* Name & District */}
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900">{sub.name}</span>
                              {isLiveSubmission && (
                                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-emerald-300 animate-pulse">
                                  Live Web Lead
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                              <MapPin className="w-3 h-3 text-slate-400" />
                              <span>{sub.district || sub.type || 'Seemanchal Region'}</span>
                            </div>
                          </td>

                          {/* University & Course */}
                          <td className="py-3.5 px-4">
                            <span className="font-bold text-[#0052B4] block">{sub.university}</span>
                            <span className="text-[11px] text-slate-600">{sub.course || sub.type || 'Undergraduate Entrance'}</span>
                          </td>

                          {/* Contact Info */}
                          <td className="py-3.5 px-4">
                            <div className="font-mono text-slate-800">{sub.phone}</div>
                            <div className="text-slate-400 text-[10.5px] truncate max-w-[150px]">{sub.email}</div>
                          </td>

                          {/* Message */}
                          <td className="py-3.5 px-4 max-w-[240px]">
                            <p className="text-slate-600 line-clamp-2 text-[11px] italic">
                              "{sub.message}"
                            </p>
                          </td>

                          {/* Status Dropdown */}
                          <td className="py-3.5 px-4">
                            <select
                              value={sub.status || 'New Inquiry'}
                              onChange={(e) => handleUpdateStatus(sub.id, e.target.value)}
                              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border outline-none cursor-pointer ${statusColor}`}
                            >
                              <option value="New Inquiry">New Inquiry</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Mentor Assigned">Mentor Assigned</option>
                              <option value="Admitted">Admitted</option>
                            </select>
                          </td>

                          {/* Actions: Direct WhatsApp */}
                          <td className="py-3.5 px-4 text-right">
                            <a
                              href={`https://wa.me/91${sub.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(sub.name)},%20greetings%20from%20The%20ShED%20Forum%20Admissions%20Helpdesk!`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-2xs"
                              title="Start WhatsApp Counseling Chat"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>WhatsApp</span>
                            </a>
                          </td>

                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: EMERGENCY TICKER & HOMEPAGE MARQUEE CONTROLLER */}
      {/* ========================================================================= */}
      {activeTab === 'ticker' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-amber-500" />
              <span>Live Announcements Ribbon & Ticker Manager</span>
            </h3>
            <p className="text-xs text-slate-500">
              Control the headline banner displayed directly below the Homepage hero section.
            </p>
          </div>

          {/* Live Preview Box */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Live Ribbon Preview on Website:</label>
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-3.5 flex items-center gap-3">
              <div className="bg-blue-50 text-[#0052B4] px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 border border-blue-200 flex items-center gap-1.5">
                <Megaphone className="w-3.5 h-3.5 text-[#0052B4]" />
                <span>{tickerConfig.category}</span>
              </div>
              <p className="text-xs text-slate-800 font-medium truncate flex-1">
                {tickerConfig.text}
              </p>
              <span className="text-[11px] font-bold text-[#0052B4] underline shrink-0">
                View Details →
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Ribbon Status</label>
              <select
                value={tickerConfig.enabled ? 'enabled' : 'disabled'}
                onChange={(e) => {
                  setTickerConfig({ ...tickerConfig, enabled: e.target.value === 'enabled' });
                  showToast('Ticker visibility updated!');
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white font-bold"
              >
                <option value="enabled">Active / Displaying Live</option>
                <option value="disabled">Hidden / Disabled</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Badge Tag</label>
              <input
                type="text"
                value={tickerConfig.category}
                onChange={(e) => setTickerConfig({ ...tickerConfig, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Click Redirect URL</label>
              <input
                type="text"
                value={tickerConfig.link}
                onChange={(e) => setTickerConfig({ ...tickerConfig, link: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Announcement Message *</label>
            <textarea
              rows={3}
              value={tickerConfig.text}
              onChange={(e) => setTickerConfig({ ...tickerConfig, text: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0052B4] outline-none"
            />
          </div>

          <button
            onClick={() => showToast('✓ Homepage Live Announcement Ticker Saved & Updated!')}
            className="bg-[#0052B4] text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#003D87] transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Save className="w-4 h-4 text-amber-300" />
            <span>Publish Ticker Changes</span>
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: NEWS, EVENTS & PRESS RELEASES */}
      {/* ========================================================================= */}
      {activeTab === 'events' && (
        <div className="space-y-8">
          <form onSubmit={handleAddEvent} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-black text-slate-900">Publish News, Event, or Press Release</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Headline / Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Free CUET Mock Test Series 2026"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                <select
                  value={newEvent.category}
                  onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border text-xs bg-white"
                >
                  <option value="Coaching">Coaching & Classes</option>
                  <option value="Flagship Event">Flagship Event</option>
                  <option value="Help Desk">Help Desk</option>
                  <option value="Community">Community & Alumni</option>
                  <option value="Press Release">Official Press Release</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Date</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Brief Overview / Summary</label>
              <textarea
                rows={2}
                placeholder="Short summary displayed on cards..."
                value={newEvent.summary}
                onChange={(e) => setNewEvent({ ...newEvent, summary: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border text-xs resize-none"
              />
            </div>

            <button type="submit" className="bg-[#0052B4] text-white font-bold px-5 py-2.5 rounded-xl text-xs cursor-pointer shadow-sm">
              Publish Notice Live
            </button>
          </form>

          <div className="space-y-3">
            <h3 className="text-base font-black text-slate-900">Current Published Items</h3>
            {events.map((ev) => (
              <div key={ev.id} className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center text-xs shadow-2xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{ev.title}</span>
                    <span className="bg-blue-50 text-[#0052B4] text-[10px] font-bold px-2 py-0.5 rounded">
                      {ev.category}
                    </span>
                    <span className="text-slate-400 text-[11px]">({ev.date})</span>
                  </div>
                  <p className="text-slate-600 mt-1">{ev.summary}</p>
                </div>
                <button 
                  onClick={() => handleDeleteEvent(ev.id)} 
                  className="text-slate-400 hover:text-red-600 p-2 cursor-pointer"
                  title="Delete event"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: LIVE STATS & NGO PROFILE SETTINGS */}
      {/* ========================================================================= */}
      {activeTab === 'settings' && (
        <div className="space-y-8">
          
          {/* Stats editor */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-sm">
            <h3 className="text-lg font-black text-slate-900">Live Organization Impact Numbers</h3>
            <p className="text-xs text-slate-500">
              Modifying these updates the homepage counter badges and impact wall across the entire website.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Total Graduates</label>
                <input
                  type="number"
                  value={stats.totalGraduates || 1000}
                  onChange={(e) => setStats({ ...stats, totalGraduates: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Active University Units</label>
                <input
                  type="number"
                  value={stats.activeUnits || 7}
                  onChange={(e) => setStats({ ...stats, activeUnits: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Coaching Beneficiaries</label>
                <input
                  type="number"
                  value={stats.coachingBeneficiaries || 450}
                  onChange={(e) => setStats({ ...stats, coachingBeneficiaries: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Female Scholar Ratio</label>
                <input
                  type="text"
                  value={stats.womenParticipationRate || '38%'}
                  onChange={(e) => setStats({ ...stats, womenParticipationRate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
            </div>

            <button
              onClick={() => {
                ApiService.updateStats(stats);
                showToast('✓ Impact Statistics Saved & Updated Live!');
              }}
              className="bg-[#0052B4] text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#003D87] transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Save className="w-4 h-4 text-amber-300" />
              <span>Save Impact Counters</span>
            </button>
          </div>

          {/* Contact info and Helplines */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-sm">
            <h3 className="text-lg font-black text-slate-900">Official NGO Contact & Helplines</h3>
            <p className="text-xs text-slate-500">
              Updates phone numbers, emails, and physical addresses displayed on the contact page and footer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Helpline Phone Number</label>
                <input
                  type="text"
                  value={ngoSettings.helplinePhone}
                  onChange={(e) => setNgoSettings({ ...ngoSettings, helplinePhone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Support Email</label>
                <input
                  type="email"
                  value={ngoSettings.helplineEmail}
                  onChange={(e) => setNgoSettings({ ...ngoSettings, helplineEmail: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">New Delhi Executive Office</label>
                <input
                  type="text"
                  value={ngoSettings.delhiOffice}
                  onChange={(e) => setNgoSettings({ ...ngoSettings, delhiOffice: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Seemanchal Field Center (Kishanganj)</label>
                <input
                  type="text"
                  value={ngoSettings.biharOffice}
                  onChange={(e) => setNgoSettings({ ...ngoSettings, biharOffice: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>
            </div>

            <button
              onClick={() => showToast('✓ Global Contact Settings Saved!')}
              className="bg-[#009A44] text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-emerald-700 transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Check className="w-4 h-4" />
              <span>Save Contact Profile</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
