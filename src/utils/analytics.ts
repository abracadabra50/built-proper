// Google Analytics 4 Event Tracking Utilities

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      parameters?: Record<string, any>
    ) => void;
  }
}

/**
 * Track custom events in Google Analytics 4
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    form_destination: window.location.pathname,
    ...formData
  });
};

/**
 * Track calculator usage
 */
export const trackCalculatorStep = (step: number, data?: Record<string, any>) => {
  trackEvent('calculator_step', {
    step_number: step,
    step_name: `Step ${step}`,
    ...data
  });
};

export const trackCalculatorComplete = (quote: { min: number; max: number }) => {
  trackEvent('calculator_complete', {
    quote_min: quote.min,
    quote_max: quote.max,
    quote_average: (quote.min + quote.max) / 2
  });
};

/**
 * Track CTA clicks
 */
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
    page_location: window.location.pathname
  });
};

/**
 * Track page scroll depth
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', {
    percent_scrolled: percentage,
    page_location: window.location.pathname
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string) => {
  trackEvent('click', {
    link_url: url,
    link_domain: new URL(url).hostname,
    link_classes: 'external',
    outbound: true
  });
};

/**
 * Track phone number clicks
 */
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('contact', {
    contact_type: 'phone',
    phone_number: phoneNumber,
    page_location: window.location.pathname
  });
};

/**
 * Track email clicks
 */
export const trackEmailClick = (emailAddress: string) => {
  trackEvent('contact', {
    contact_type: 'email',
    email_address: emailAddress,
    page_location: window.location.pathname
  });
};

/**
 * Track video engagement
 */
export const trackVideoPlay = (videoTitle: string, videoUrl?: string) => {
  trackEvent('video_start', {
    video_title: videoTitle,
    video_url: videoUrl,
    page_location: window.location.pathname
  });
};

/**
 * Track chat interactions
 */
export const trackChatOpen = () => {
  trackEvent('chat_open', {
    page_location: window.location.pathname
  });
};

export const trackChatMessage = (messageType: 'user' | 'bot') => {
  trackEvent('chat_message', {
    message_type: messageType,
    page_location: window.location.pathname
  });
};

/**
 * Track 404 errors
 */
export const track404Error = () => {
  trackEvent('page_view', {
    page_title: '404 Not Found',
    page_location: window.location.href,
    page_path: window.location.pathname,
    error_type: '404'
  });
};

/**
 * Track conversion events
 */
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    conversion_value: value,
    currency: 'GBP',
    page_location: window.location.pathname
  });
};

/**
 * Enhanced Ecommerce: Track when user views pricing
 */
export const trackViewPricing = (service: string, price: number) => {
  trackEvent('view_item', {
    currency: 'GBP',
    value: price,
    items: [
      {
        item_id: service,
        item_name: service,
        item_category: 'Services',
        price: price,
        quantity: 1
      }
    ]
  });
};

/**
 * Track search queries
 */
export const trackSiteSearch = (searchTerm: string, resultsCount?: number) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
    page_location: window.location.pathname
  });
};

/**
 * Track social shares
 */
export const trackSocialShare = (platform: string, url: string) => {
  trackEvent('share', {
    method: platform,
    content_type: 'website',
    item_id: url
  });
};

/**
 * Initialize scroll depth tracking
 */
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;
  
  let maxScroll = 0;
  const thresholds = [25, 50, 75, 90, 100];
  
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);
    
    thresholds.forEach(threshold => {
      if (scrollPercent >= threshold && maxScroll < threshold) {
        trackScrollDepth(threshold);
        maxScroll = threshold;
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Track page timing
 */
export const trackPageTiming = () => {
  if (typeof window === 'undefined' || !window.performance) return;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const dnsTime = perfData.domainLookupEnd - perfData.domainLookupStart;
      const tcpTime = perfData.connectEnd - perfData.connectStart;
      const serverTime = perfData.responseEnd - perfData.requestStart;
      
      trackEvent('timing_complete', {
        name: 'page_load',
        value: pageLoadTime,
        metric_value: pageLoadTime,
        dns_time: dnsTime,
        tcp_time: tcpTime,
        server_time: serverTime
      });
    }, 0);
  });
};

