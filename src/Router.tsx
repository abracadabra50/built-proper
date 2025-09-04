import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CustomWebsites from './pages/CustomWebsites';
import LocalSEO from './pages/LocalSEO';
import TradeBranding from './pages/TradeBranding';
import AIAutomation from './pages/AIAutomation';
import DigitalMarketing from './pages/DigitalMarketing';
import BlogListingTemplate from './components/BlogListingTemplate';
import LocalSEOGuide from './pages/LocalSEOGuide';
import WordPressGuide from './pages/WordPressGuide';
import LeadGenerationGuide from './pages/LeadGenerationGuide';
import AIToolsGuide from './pages/AIToolsGuide';
import MillionPoundBusiness from './pages/MillionPoundBusiness';
import PremiumPositioning from './pages/PremiumPositioning';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import HallmarkDrivewaysCaseStudy from './pages/HallmarkDrivewaysCaseStudy';
import ClientPortal from './pages/ClientPortal';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        
        {/* Service Pages */}
        <Route path="/services/websites" element={<CustomWebsites />} />
        <Route path="/services/seo" element={<LocalSEO />} />
        <Route path="/services/branding" element={<TradeBranding />} />
        <Route path="/services/ai-automation" element={<AIAutomation />} />
        <Route path="/services/marketing" element={<DigitalMarketing />} />
        
        {/* Blog Pages */}
        <Route path="/blog" element={<BlogListingTemplate />} />
        <Route path="/blog/local-seo-guide-tradesmen" element={<LocalSEOGuide />} />
        <Route path="/blog/wordpress-holding-you-back" element={<WordPressGuide />} />
        <Route path="/blog/generate-quality-leads" element={<LeadGenerationGuide />} />
        <Route path="/blog/ai-tools-for-trades" element={<AIToolsGuide />} />
        <Route path="/blog/million-pound-trade-business" element={<MillionPoundBusiness />} />
        <Route path="/blog/premium-positioning-trades" element={<PremiumPositioning />} />
        
        {/* Case Studies */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/hallmark-driveways-edinburgh" element={<HallmarkDrivewaysCaseStudy />} />
        
        {/* Company Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Client & Legal */}
        <Route path="/portal" element={<ClientPortal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
