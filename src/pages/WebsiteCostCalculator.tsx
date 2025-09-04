import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, Check, ArrowRight, ArrowLeft, Zap, Shield, 
  TrendingUp, Phone, Mail, Building2, MapPin, Users, 
  Clock, Award, AlertCircle, ChevronDown, X
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface CalculatorData {
  // Step 1: Trade Type
  tradeType: string;
  
  // Step 2: Website Goals
  goals: string[];
  
  // Step 3: Features
  features: string[];
  
  // Step 4: Timeline
  timeline: string;
  
  // Step 5: Current Situation
  hasWebsite: string;
  monthlyLeads: string;
  
  // Step 6: Contact
  name: string;
  email: string;
  phone: string;
  location: string;
  businessName: string;
}

const WebsiteCostCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState({ min: 0, max: 0 });
  const [formData, setFormData] = useState<CalculatorData>({
    tradeType: '',
    goals: [],
    features: [],
    timeline: '',
    hasWebsite: '',
    monthlyLeads: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    businessName: ''
  });

  const tradeOptions = [
    { value: 'plumber', label: 'Plumber', icon: '🔧' },
    { value: 'electrician', label: 'Electrician', icon: '⚡' },
    { value: 'builder', label: 'Builder', icon: '🏗️' },
    { value: 'decorator', label: 'Painter & Decorator', icon: '🎨' },
    { value: 'joiner', label: 'Joiner', icon: '🔨' },
    { value: 'roofer', label: 'Roofer', icon: '🏠' },
    { value: 'landscaper', label: 'Landscaper', icon: '🌳' },
    { value: 'bathroom', label: 'Bathroom Fitter', icon: '🚿' },
    { value: 'kitchen', label: 'Kitchen Fitter', icon: '👨‍🍳' },
    { value: 'other', label: 'Other Trade', icon: '👷' }
  ];

  const goalOptions = [
    { value: 'more-leads', label: 'Generate More Leads', description: 'Get more enquiries from local customers' },
    { value: 'beat-competition', label: 'Beat Competition', description: 'Stand out from other local trades' },
    { value: 'stop-directories', label: 'Stop Paying Directories', description: 'Own your leads, not rent them' },
    { value: 'premium-jobs', label: 'Win Premium Jobs', description: 'Attract higher-value projects' },
    { value: 'save-time', label: 'Save Time', description: 'Automate bookings and enquiries' },
    { value: 'build-reputation', label: 'Build Reputation', description: 'Establish trust and credibility' }
  ];

  const featureOptions = [
    { value: 'booking-system', label: '24/7 Booking System', price: 500 },
    { value: 'quote-calculator', label: 'Instant Quote Calculator', price: 800 },
    { value: 'live-chat', label: 'Live Chat & AI Assistant', price: 600 },
    { value: 'client-portal', label: 'Client Portal', price: 1000 },
    { value: 'review-integration', label: 'Review Integration', price: 300 },
    { value: 'payment-system', label: 'Online Payments', price: 700 },
    { value: 'gallery-3d', label: '3D Gallery/Visualiser', price: 1200 },
    { value: 'multi-location', label: 'Multi-Location Pages', price: 400 },
    { value: 'emergency-system', label: 'Emergency Call System', price: 500 },
    { value: 'crm-integration', label: 'CRM Integration', price: 900 }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP', description: 'Need it yesterday!' },
    { value: '2-weeks', label: 'Within 2 Weeks', description: 'Quick turnaround needed' },
    { value: '1-month', label: 'Within a Month', description: 'Standard timeline' },
    { value: '2-months', label: '1-2 Months', description: 'No immediate rush' },
    { value: 'planning', label: 'Just Planning', description: 'Researching options' }
  ];

  const calculatePrice = () => {
    let basePrice = 2500; // Base price for a custom website
    let maxPrice = 3500;
    
    // Trade type affects complexity
    if (['plumber', 'electrician', 'bathroom', 'kitchen'].includes(formData.tradeType)) {
      basePrice += 500; // Emergency services need
      maxPrice += 700;
    }
    
    // Goals affect scope
    basePrice += formData.goals.length * 200;
    maxPrice += formData.goals.length * 350;
    
    // Features add to cost
    formData.features.forEach(feature => {
      const featureData = featureOptions.find(f => f.value === feature);
      if (featureData) {
        basePrice += featureData.price;
        maxPrice += featureData.price * 1.3;
      }
    });
    
    // Timeline affects price
    if (formData.timeline === 'asap') {
      basePrice *= 1.3; // Rush job premium
      maxPrice *= 1.3;
    } else if (formData.timeline === '2-weeks') {
      basePrice *= 1.15;
      maxPrice *= 1.15;
    }
    
    // Round to nearest 100
    basePrice = Math.round(basePrice / 100) * 100;
    maxPrice = Math.round(maxPrice / 100) * 100;
    
    setCalculatedPrice({ min: basePrice, max: maxPrice });
  };

  useEffect(() => {
    if (currentStep === 7) {
      calculatePrice();
    }
  }, [currentStep, formData]);

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
      setCurrentStep(7);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setShowResults(false);
    }
  };

  const handleSubmit = async () => {
    // Here you would send the data to your backend
    console.log('Submitting calculator data:', { ...formData, calculatedPrice });
    
    // Show success message
    alert('Thank you! We\'ll send your personalised quote within 2 hours.');
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.tradeType !== '';
      case 2: return formData.goals.length > 0;
      case 3: return true; // Features are optional
      case 4: return formData.timeline !== '';
      case 5: return formData.hasWebsite !== '' && formData.monthlyLeads !== '';
      case 6: return formData.name && formData.email && formData.location;
      default: return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <Calculator className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400">Free Instant Quote Calculator</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-white">Website Cost Calculator</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                for UK Tradesmen
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get an instant, personalised quote for your custom website in under 60 seconds. 
              <span className="text-white font-semibold"> No spam, no sales calls.</span>
            </p>

            {/* Progress Bar */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 max-w-[60px] rounded-full transition-all ${
                    step <= currentStep 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600' 
                      : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-sm text-gray-400">
              Step {currentStep} of 6 • {currentStep === 1 ? '10' : (7 - currentStep) * 10} seconds remaining
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Trade Type */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2">What trade are you in?</h2>
                <p className="text-gray-400 mb-6">This helps us understand your specific needs</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tradeOptions.map((trade) => (
                    <button
                      key={trade.value}
                      onClick={() => setFormData({ ...formData, tradeType: trade.value })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.tradeType === trade.value
                          ? 'border-orange-500 bg-orange-500/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="text-3xl mb-2">{trade.icon}</div>
                      <div className="text-white font-medium">{trade.label}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Goals */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2">What are your main goals?</h2>
                <p className="text-gray-400 mb-6">Select all that apply</p>
                
                <div className="grid gap-3">
                  {goalOptions.map((goal) => (
                    <button
                      key={goal.value}
                      onClick={() => {
                        const newGoals = formData.goals.includes(goal.value)
                          ? formData.goals.filter(g => g !== goal.value)
                          : [...formData.goals, goal.value];
                        setFormData({ ...formData, goals: newGoals });
                      }}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.goals.includes(goal.value)
                          ? 'border-orange-500 bg-orange-500/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium mb-1">{goal.label}</div>
                          <div className="text-sm text-gray-400">{goal.description}</div>
                        </div>
                        {formData.goals.includes(goal.value) && (
                          <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Features */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2">Which features do you need?</h2>
                <p className="text-gray-400 mb-6">Optional - select any that interest you</p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {featureOptions.map((feature) => (
                    <button
                      key={feature.value}
                      onClick={() => {
                        const newFeatures = formData.features.includes(feature.value)
                          ? formData.features.filter(f => f !== feature.value)
                          : [...formData.features, feature.value];
                        setFormData({ ...formData, features: newFeatures });
                      }}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.features.includes(feature.value)
                          ? 'border-orange-500 bg-orange-500/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-white font-medium">{feature.label}</div>
                        {formData.features.includes(feature.value) && (
                          <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Don't worry if you're not sure - we can discuss options later
                </p>
              </motion.div>
            )}

            {/* Step 4: Timeline */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2">When do you need it?</h2>
                <p className="text-gray-400 mb-6">This affects availability and pricing</p>
                
                <div className="grid gap-3">
                  {timelineOptions.map((timeline) => (
                    <button
                      key={timeline.value}
                      onClick={() => setFormData({ ...formData, timeline: timeline.value })}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.timeline === timeline.value
                          ? 'border-orange-500 bg-orange-500/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium mb-1">{timeline.label}</div>
                          <div className="text-sm text-gray-400">{timeline.description}</div>
                        </div>
                        {formData.timeline === timeline.value && (
                          <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Current Situation */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2">Tell us about your current situation</h2>
                <p className="text-gray-400 mb-6">This helps us provide accurate advice</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-white font-medium mb-3 block">Do you currently have a website?</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Yes', 'No', 'Sort of'].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, hasWebsite: option })}
                          className={`p-3 rounded-xl border-2 transition-all ${
                            formData.hasWebsite === option
                              ? 'border-orange-500 bg-orange-500/10 text-white'
                              : 'border-white/10 hover:border-white/30 text-gray-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-white font-medium mb-3 block">How many leads do you get per month?</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['0-5', '5-20', '20-50', '50+'].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, monthlyLeads: option })}
                          className={`p-3 rounded-xl border-2 transition-all ${
                            formData.monthlyLeads === option
                              ? 'border-orange-500 bg-orange-500/10 text-white'
                              : 'border-white/10 hover:border-white/30 text-gray-300'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 6: Contact Details */}
            {currentStep === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2">Nearly there! Where should we send your quote?</h2>
                <p className="text-gray-400 mb-6">We'll email your personalised quote immediately</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Location (City/Town) *"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Business Name (optional)"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="md:col-span-2 p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all"
                  />
                </div>
                
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-300">
                      <p className="font-medium text-white mb-1">Your information is safe</p>
                      <p>We'll only use this to send your quote. No spam, no sharing with third parties.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Results */}
            {currentStep === 7 && showResults && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">Your Personalised Quote</h2>
                  <p className="text-gray-300">Based on your requirements, here's your estimated investment</p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-400 mb-2">Estimated Investment Range</p>
                    <div className="text-4xl font-bold text-white">
                      £{calculatedPrice.min.toLocaleString()} - £{calculatedPrice.max.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">One-time payment, no hidden fees</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Average ROI</p>
                      <p className="text-xl font-bold text-white">580%</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Time to Launch</p>
                      <p className="text-xl font-bold text-white">14 Days</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Expected Leads</p>
                      <p className="text-xl font-bold text-white">40+/month</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-6">
                    <h3 className="text-lg font-semibold text-white mb-3">What's Included:</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {[
                        'Custom design (no templates)',
                        'Mobile-responsive development',
                        'SEO optimization',
                        '12 months hosting',
                        'SSL security certificate',
                        'Google My Business setup',
                        'Contact forms & CTAs',
                        '30-day support',
                        ...formData.features.map(f => featureOptions.find(opt => opt.value === f)?.label || '')
                      ].filter(Boolean).map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Email Me This Quote
                  </button>
                  <a
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
                  >
                    <Phone className="w-5 h-5" />
                    Discuss With Expert
                  </a>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  This is an estimate. Final price confirmed after consultation.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {!showResults && (
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  currentStep === 1
                    ? 'bg-slate-800/30 text-gray-600 cursor-not-allowed'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all ${
                  isStepValid()
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/25'
                    : 'bg-slate-800/30 text-gray-600 cursor-not-allowed'
                }`}
              >
                {currentStep === 6 ? 'Get My Quote' : 'Next'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No Obligation</h3>
              <p className="text-gray-400 text-sm">This quote is completely free with no strings attached</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Privacy First</h3>
              <p className="text-gray-400 text-sm">We never share your details or spam your inbox</p>
            </div>
            <div>
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Instant Results</h3>
              <p className="text-gray-400 text-sm">Get your personalised quote in under 60 seconds</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteCostCalculator;
