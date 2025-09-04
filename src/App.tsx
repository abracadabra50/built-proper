import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProofSection from './components/ProofSection';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import QuoteTool from './components/QuoteTool';
import BlogPreview from './components/BlogPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AlexChat from './components/AlexChat';

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
      <AlexChat />
    </div>
  );
}

export default App;