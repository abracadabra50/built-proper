import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

// Lazy load all non-critical routes
const CustomWebsites = lazy(() => import('./pages/CustomWebsites'));
const LocalSEO = lazy(() => import('./pages/LocalSEO'));
const TradeBranding = lazy(() => import('./pages/TradeBranding'));
const AIAutomation = lazy(() => import('./pages/AIAutomation'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const BlogListingTemplate = lazy(() => import('./components/BlogListingTemplate'));
const LocalSEOGuide = lazy(() => import('./pages/LocalSEOGuide'));
const WordPressGuide = lazy(() => import('./pages/WordPressGuide'));
const LeadGenerationGuide = lazy(() => import('./pages/LeadGenerationGuide'));
const AIToolsGuide = lazy(() => import('./pages/AIToolsGuide'));
const MillionPoundBusiness = lazy(() => import('./pages/MillionPoundBusiness'));
const PremiumPositioning = lazy(() => import('./pages/PremiumPositioning'));
const TrueCostGuide = lazy(() => import('./pages/TrueCostGuide'));
const LondonPage = lazy(() => import('./pages/LondonPage'));
const ManchesterPage = lazy(() => import('./pages/ManchesterPage'));
const EdinburghPage = lazy(() => import('./pages/EdinburghPage'));
const GlasgowPage = lazy(() => import('./pages/GlasgowPage'));
const LeedsPage = lazy(() => import('./pages/LeedsPage'));
const BristolPage = lazy(() => import('./pages/BristolPage'));
const BirminghamPage = lazy(() => import('./pages/BirminghamPage'));
const NoWordPressPage = lazy(() => import('./pages/NoWordPressPage'));
const PlumberWebsitePage = lazy(() => import('./pages/PlumberWebsitePage'));
const ElectricianWebsitePage = lazy(() => import('./pages/ElectricianWebsitePage'));
const TradesmanWebsiteExamples = lazy(() => import('./pages/TradesmanWebsiteExamples'));
const WebsiteCostCalculator = lazy(() => import('./pages/WebsiteCostCalculator'));
const CheckatradeAlternative = lazy(() => import('./pages/CheckatradeAlternative'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const About = lazy(() => import('./pages/About'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HallmarkDrivewaysCaseStudy = lazy(() => import('./pages/HallmarkDrivewaysCaseStudy'));
const ClientPortal = lazy(() => import('./pages/ClientPortal'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<App />} />
          
          {/* Service Pages */}
          <Route path="/services/websites" element={<CustomWebsites />} />
          <Route path="/services/seo" element={<LocalSEO />} />
          <Route path="/services/branding" element={<TradeBranding />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/marketing" element={<DigitalMarketing />} />
          
          {/* Trade-Specific Pages */}
          <Route path="/services/plumber-websites" element={<PlumberWebsitePage />} />
          <Route path="/services/electrician-websites" element={<ElectricianWebsitePage />} />
          
          {/* Blog Pages */}
          <Route path="/blog" element={<BlogListingTemplate />} />
          <Route path="/no-wordpress-tradesman-websites" element={<NoWordPressPage />} />
          <Route path="/blog/true-cost-tradesman-websites" element={<TrueCostGuide />} />
          <Route path="/blog/checkatrade-alternative" element={<CheckatradeAlternative />} />
          <Route path="/blog/local-seo-guide-tradesmen" element={<LocalSEOGuide />} />
          <Route path="/blog/wordpress-holding-you-back" element={<WordPressGuide />} />
          <Route path="/blog/generate-quality-leads" element={<LeadGenerationGuide />} />
          <Route path="/blog/ai-tools-for-trades" element={<AIToolsGuide />} />
          <Route path="/blog/million-pound-trade-business" element={<MillionPoundBusiness />} />
          <Route path="/blog/premium-positioning-trades" element={<PremiumPositioning />} />
          
          {/* Tools & Calculators */}
          <Route path="/website-cost-calculator" element={<WebsiteCostCalculator />} />
          
          {/* Portfolio & Case Studies */}
          <Route path="/tradesman-website-examples" element={<TradesmanWebsiteExamples />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/hallmark-driveways-edinburgh" element={<HallmarkDrivewaysCaseStudy />} />
          
          {/* Location Pages */}
          <Route path="/locations/london" element={<LondonPage />} />
          <Route path="/locations/manchester" element={<ManchesterPage />} />
          <Route path="/locations/edinburgh" element={<EdinburghPage />} />
          <Route path="/locations/glasgow" element={<GlasgowPage />} />
          <Route path="/locations/leeds" element={<LeedsPage />} />
          <Route path="/locations/bristol" element={<BristolPage />} />
          <Route path="/locations/birmingham" element={<BirminghamPage />} />
          
          {/* Company Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Client & Legal */}
          <Route path="/portal" element={<ClientPortal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
