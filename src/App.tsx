import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProofSection from './components/ProofSection';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import QuoteTool from './components/QuoteTool';
import BlogPreview from './components/BlogPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load AlexChat since it's not critical for initial render
const AlexChat = lazy(() => import('./components/AlexChat'));

function App() {
  return (
    <div className="font-inter antialiased bg-slate-950">
      <Header />
      <main className="relative">
        <Hero />
        <div className="relative">
          <ProofSection />
          <Services />
          <CaseStudies />
          <QuoteTool />
          <BlogPreview />
          <Contact />
        </div>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <AlexChat />
      </Suspense>
    </div>
  );
}

export default App;