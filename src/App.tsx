import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AlexChat from './components/AlexChat';

// Lazy load below-the-fold components
const ProofSection = lazy(() => import('./components/ProofSection'));
const Services = lazy(() => import('./components/Services'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const QuoteTool = lazy(() => import('./components/QuoteTool'));
const BlogPreview = lazy(() => import('./components/BlogPreview'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="font-inter antialiased bg-slate-950">
      <Header />
      <main className="relative">
        <Hero />
        <div className="relative">
          <Suspense fallback={<div className="h-32 bg-slate-900/50 animate-pulse" />}>
            <ProofSection />
          </Suspense>
          <Suspense fallback={<div className="h-32 bg-slate-900/50 animate-pulse" />}>
            <Services />
          </Suspense>
          <Suspense fallback={<div className="h-32 bg-slate-900/50 animate-pulse" />}>
            <CaseStudies />
          </Suspense>
          <Suspense fallback={<div className="h-32 bg-slate-900/50 animate-pulse" />}>
            <QuoteTool />
          </Suspense>
          <Suspense fallback={<div className="h-32 bg-slate-900/50 animate-pulse" />}>
            <BlogPreview />
          </Suspense>
          <Suspense fallback={<div className="h-32 bg-slate-900/50 animate-pulse" />}>
            <Contact />
          </Suspense>
        </div>
      </main>
      <Footer />
      <AlexChat />
    </div>
  );
}

export default App;