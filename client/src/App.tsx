import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HelpdeskModal } from './components/HelpdeskModal';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ShedCentrePage } from './components/ShedCentrePage';
import { CentrePage } from './components/CentrePage';
import { UnitsPage } from './components/UnitsPage';
import { UnitDetailPage } from './components/UnitDetailPage';
import { ProjectsPage } from './components/ProjectsPage';
import { MediaCornerPage, PressReleasePage } from './components/MediaCornerPage';
import { NewsEventsPage } from './components/NewsEventsPage';
import { PublicationsPage } from './components/PublicationsPage';
import { PhotoGalleryPage } from './components/PhotoGalleryPage';
import { VideoGalleryPage } from './components/VideoGalleryPage';
import { ImpactWall } from './components/ImpactWall';
import { StoryDetailPage } from './components/StoryDetailPage';
import { PatronsMessagePage } from './components/PatronsMessagePage';
import { ContactPage } from './components/ContactPage';
import { AdminPage } from './components/AdminPage';
import { DonatePage } from './components/DonatePage';

// Scroll restoration: Ensures every link and button click opens the top of the destination page
const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search, hash]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (target && target.href && !target.target && !target.href.startsWith('mailto:') && !target.href.startsWith('tel:')) {
        const url = new URL(target.href, window.location.href);
        if (url.origin === window.location.origin && !url.hash) {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return null;
};

export const App: React.FC = () => {
  const [helpdeskOpen, setHelpdeskOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans">
      <ScrollToTop />
      <Navbar onOpenHelpdesk={() => setHelpdeskOpen(true)} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/about" element={<AboutPage onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/patrons-message" element={<PatronsMessagePage />} />
          <Route path="/patron-message" element={<PatronsMessagePage />} />
          
          {/* ShED Centre (Central Educational Dialogue & Resource Hub) */}
          <Route path="/centre" element={<ShedCentrePage onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/shed-centre" element={<ShedCentrePage onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />

          {/* SGC Centre (Shershahbadi Guidance & Coaching - Free CUET Preparation) */}
          <Route path="/sgc-centre" element={<CentrePage onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/scg-centre" element={<CentrePage onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />

          {/* Student Stories & Impact Wall */}
          <Route path="/student-stories" element={<ImpactWall onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/student-stories/:id" element={<StoryDetailPage onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/impact-stories" element={<ImpactWall onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/impact-stories/:id" element={<StoryDetailPage onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/story/:id" element={<StoryDetailPage onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />

          {/* Units Pages */}
          <Route path="/units" element={<UnitsPage />} />
          <Route path="/manuu-unit" element={<UnitDetailPage unitIdProp="manuu-unit" onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/jmi-unit" element={<UnitDetailPage unitIdProp="jmi-unit" onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/amu-unit" element={<UnitDetailPage unitIdProp="amu-unit" onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/jnu-unit" element={<UnitDetailPage unitIdProp="jnu-unit" onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/du-unit" element={<UnitDetailPage unitIdProp="du-unit" onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/hcu-unit" element={<UnitDetailPage unitIdProp="hcu-unit" onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/patna-unit" element={<UnitDetailPage unitIdProp="patna-unit" onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />

          {/* Other Sections */}
          <Route path="/projects" element={<ProjectsPage onOpenHelpdesk={() => setHelpdeskOpen(true)} />} />
          <Route path="/media-corner" element={<MediaCornerPage />} />
          <Route path="/news-and-events" element={<NewsEventsPage />} />
          <Route path="/press-release" element={<PressReleasePage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
          <Route path="/video-gallery" element={<VideoGalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>

      <Footer />

      <HelpdeskModal isOpen={helpdeskOpen} onClose={() => setHelpdeskOpen(false)} />
    </div>
  );
};

export default App;
