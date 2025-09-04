import { Palette, Eye, Award, Truck, FileText, Camera, Users, Crown } from 'lucide-react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const TradeBranding = () => {
  const brandingService = {
    title: "Trade Business Branding",
    tagline: "Stand Out From Cowboys. Charge Premium Prices.",
    description: "Professional branding that builds instant trust and lets you charge 30% more than competitors. No generic designs - everything custom-built for your trade business and market position.",
    icon: Palette,
    benefits: [
      "Premium Positioning",
      "Instant Trust Signals", 
      "Higher Pricing Power",
      "Professional Image"
    ],
    features: [
      {
        title: "Logo & Brand Identity",
        description: "Custom logo design that screams quality, not cowboy. Professional brand guidelines that work across all materials.",
        icon: Eye
      },
      {
        title: "Van Livery Design",
        description: "Turn your van into a mobile billboard. Professional designs that get you noticed and remembered.",
        icon: Truck
      },
      {
        title: "Business Stationery",
        description: "Professional business cards, letterheads, invoices. Everything branded consistently to build trust.",
        icon: FileText
      },
      {
        title: "Trade Photography",
        description: "Professional photos of your work, team, and processes. Show quality before customers even meet you.",
        icon: Camera
      },
      {
        title: "Uniform & Workwear",
        description: "Branded workwear that makes your team look professional on every job. First impressions matter.",
        icon: Users
      },
      {
        title: "Premium Positioning",
        description: "Strategic brand positioning that justifies higher prices. Be seen as the quality choice, not the cheap option.",
        icon: Crown
      }
    ],
    process: [
      {
        step: "1",
        title: "Brand Discovery",
        description: "Deep dive into your business, values, target customers, and market position. We understand what makes you different before we design anything."
      },
      {
        step: "2", 
        title: "Design & Development",
        description: "Custom logo creation, brand guidelines, and all visual assets. You see every design through our portal with full revision tracking."
      },
      {
        step: "3",
        title: "Implementation & Launch",
        description: "Roll out across all touchpoints - website, van, uniforms, stationery. Complete brand transformation that gets results immediately."
      }
    ],
    methodology: {
      title: "The Built Proper Branding Method",
      description: "How we create brands that command premium prices and build lasting customer relationships",
      points: [
        "Market research first - we study your competitors and find gaps you can exploit",
        "Customer psychology focus - designs that trigger trust and quality perceptions",
        "Trade-specific expertise - we know what works for builders, plumbers, electricians",
        "Premium positioning strategy - move you away from price competition",
        "Consistency across everything - from van to website to business cards",
        "ROI measurement - track how branding impacts your pricing and win rates",
        "Future-proof designs - brands that grow with your business",
        "Local market knowledge - what works in Manchester vs London vs Edinburgh",
        "Complete brand guidelines - so you never make off-brand mistakes"
      ]
    },
    tools: [
      {
        name: "BP Brand",
        description: "Brand asset management - store and access all your brand files",
        icon: Palette
      },
      {
        name: "BP Guidelines",
        description: "Interactive brand guidelines - see exactly how to use your brand",
        icon: FileText
      },
      {
        name: "BP Assets",
        description: "Download centre - get logos, templates, photos whenever you need",
        icon: Eye
      },
      {
        name: "BP Print",
        description: "Print management - order branded materials with one click",
        icon: Award
      },
      {
        name: "BP Photo",
        description: "Photo library - professional shots of your work organised and tagged",
        icon: Camera
      },
      {
        name: "BP Uniform",
        description: "Workwear ordering - branded uniforms delivered to your team",
        icon: Users
      },
      {
        name: "BP Van",
        description: "Vehicle graphics - manage van livery designs and installations",
        icon: Truck
      },
      {
        name: "BP Premium",
        description: "Pricing strategy - track how branding impacts your rates",
        icon: Crown
      }
    ],
    faqs: [
      {
        question: "How does branding help me charge more?",
        answer: "Professional branding creates perceived value. Customers associate good design with quality work and are willing to pay premium prices. Our clients typically see 20-30% price increases after rebranding."
      },
      {
        question: "What's included in the brand package?",
        answer: "Logo design, brand guidelines, business cards, letterheads, van livery design, uniform designs, and professional photography. Everything you need for consistent professional presentation."
      },
      {
        question: "How long does the branding process take?",
        answer: "Complete brand transformation typically takes 4-6 weeks. Logo and initial designs within 2 weeks, full rollout by week 6. You track progress daily through your BP Portal."
      },
      {
        question: "Can you work with my existing logo?",
        answer: "We can, but often it's better to start fresh. Most trade logos look amateur or dated. We'll audit your current brand and recommend whether to evolve or revolutionise."
      },
      {
        question: "Do you handle printing and production?",
        answer: "Yes, through BP Print. We manage everything - business cards, van graphics, uniforms, signage. You get trade prices and guaranteed quality that matches your brand standards."
      },
      {
        question: "How do you ensure consistency across everything?",
        answer: "BP Guidelines provides interactive brand rules. Plus, we handle all design work through our portal, so nothing goes out that's off-brand. Your brand stays consistent, always."
      }
    ],
    caseStudy: {
      client: "Elite Electrical Edinburgh",
      result: "From £45/hour to £75/hour after complete rebrand",
      metric: "67% Price Increase"
    },
    cta: {
      primary: "Transform Your Brand",
      secondary: "See Our Process"
    }
  };

  return <ServicePageTemplate service={brandingService} />;
};

export default TradeBranding;
