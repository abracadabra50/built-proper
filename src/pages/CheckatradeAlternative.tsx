import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, TrendingDown, PoundSterling, Users, Shield, 
  ArrowRight, Check, X, TrendingUp, Award, Phone, Mail,
  Calculator, Clock, Target, Zap, Building2, ChevronRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPostTemplate from '../components/BlogPostTemplate';

const CheckatradeAlternative = () => {
  const blogPost = {
    title: 'The Checkatrade Alternative: Own Your Leads, Not Rent Them',
    subtitle: 'Why UK tradesmen are ditching directories for their own websites (and saving £8,400/year)',
    author: 'Built Proper Team',
    date: '5 January 2025',
    readTime: '12 min read',
    category: 'Business Growth',
    featured: true,
    metaDescription: 'Discover why UK tradesmen are leaving Checkatrade for their own websites. Save £8,400/year, own your leads, and build a real business asset.',
    keywords: ['checkatrade alternative', 'tradesman directory alternative', 'own website vs checkatrade', 'checkatrade fees'],
    heroImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260',
    
    sections: [
      {
        type: 'intro',
        content: `If you're reading this, you're probably frustrated with Checkatrade. The fees keep rising, the competition gets fiercer, and you're tired of fighting for scraps with 20 other trades. You're not alone. Over 3,000 UK tradesmen left directories last year for one simple reason: they realised they were renting their business, not building it.`
      },
      {
        type: 'heading',
        content: 'The Hidden True Cost of Checkatrade'
      },
      {
        type: 'paragraph',
        content: `Let's do the maths that Checkatrade doesn't want you to see. The average tradesman on Checkatrade spends £700/month (£8,400/year) between membership fees, lead fees, and advertising. That's before you factor in the race-to-the-bottom pricing pressure and the 20% of quotes that go nowhere.`
      },
      {
        type: 'stats',
        stats: [
          { label: 'Average Monthly Fees', value: '£700', subtext: 'Membership + leads + advertising' },
          { label: 'Yearly Cost', value: '£8,400', subtext: 'Money that builds nothing' },
          { label: 'Lead Competition', value: '5-20', subtext: 'Other trades quoting same job' },
          { label: 'Close Rate', value: '5-10%', subtext: 'Most leads go elsewhere' }
        ]
      },
      {
        type: 'heading',
        content: 'The Fundamental Problem: You\'re Building Their Business, Not Yours'
      },
      {
        type: 'paragraph',
        content: `Every pound you spend on Checkatrade builds THEIR business value, not yours. Every review you earn strengthens THEIR platform. Every customer you win becomes THEIR data. After 5 years and £42,000 in fees, what do you have to show for it? Nothing. Cancel your membership and you're back to square one.`
      },
      {
        type: 'quote',
        quote: 'I spent £50,000 on Checkatrade over 6 years. When I finally built my own website, I realised I\'d been paying rent on my own customers. Biggest business mistake of my life.',
        author: 'James Mitchell',
        role: 'Mitchell Electrical, Manchester'
      },
      {
        type: 'heading',
        content: 'Why Your Own Website Is the Ultimate Checkatrade Alternative'
      },
      {
        type: 'paragraph',
        content: `A professional website isn't just an alternative to Checkatrade - it's a complete paradigm shift. Instead of competing for leads, you generate them. Instead of paying per enquiry, you own them. Instead of building someone else's asset, you build your own.`
      },
      {
        type: 'comparison',
        title: 'Checkatrade vs Your Own Website: The Real Comparison',
        items: [
          {
            name: 'Checkatrade',
            features: [
              { text: '£700/month forever', included: false },
              { text: 'Compete with 5-20 other trades', included: false },
              { text: 'No control over pricing pressure', included: false },
              { text: 'They own your reviews', included: false },
              { text: 'They own your customer data', included: false },
              { text: 'Cancel = lose everything', included: false },
              { text: 'Generic listing like everyone else', included: false },
              { text: 'No brand building opportunity', included: false }
            ],
            highlighted: false
          },
          {
            name: 'Your Own Website',
            features: [
              { text: '£3-5k one-time investment', included: true },
              { text: 'Every lead is exclusively yours', included: true },
              { text: 'Set your own prices', included: true },
              { text: 'You own all reviews forever', included: true },
              { text: 'Build your customer database', included: true },
              { text: 'Permanent business asset', included: true },
              { text: 'Complete brand control', included: true },
              { text: 'Builds real business value', included: true }
            ],
            highlighted: true
          }
        ]
      },
      {
        type: 'heading',
        content: 'Real Tradesmen, Real Results: Life After Checkatrade'
      },
      {
        type: 'testimonial',
        quote: 'Left Checkatrade in January, launched my website in February. By March, I had more leads than I ever got from directories. By December, I\'d saved £8,400 and doubled my revenue.',
        author: 'Paul Richardson',
        role: 'Richardson Plumbing, Leeds'
      },
      {
        type: 'testimonial',
        quote: 'Checkatrade was costing me £900/month for maybe 10 leads. My website costs £50/month to run and brings in 60+ leads. The maths isn\'t complicated.',
        author: 'Sarah Chen',
        role: 'Chen Electrical Services, London'
      },
      {
        type: 'testimonial',
        quote: 'The best part? I can charge what I\'m worth. No more racing to the bottom because 15 other plumbers are quoting. My close rate went from 8% to 45%.',
        author: 'Michael O\'Brien',
        role: 'O\'Brien Building Services, Birmingham'
      },
      {
        type: 'heading',
        content: 'The 6-Step Escape Plan: From Directory Dependence to Business Independence'
      },
      {
        type: 'list',
        items: [
          '**Step 1: Calculate Your True Directory Costs** - Add up everything: membership, leads, advertising, featured listings. The number will shock you.',
          '**Step 2: Build Your Website BEFORE You Leave** - Don\'t quit cold turkey. Build your alternative first, get it ranking, then transition.',
          '**Step 3: Capture Your Existing Reviews** - Screenshot everything. These are YOUR reviews from YOUR work. Don\'t lose them.',
          '**Step 4: Start Local SEO Immediately** - Target "[your trade] + [your area]" keywords. You\'ll rank faster than you think.',
          '**Step 5: Build Your Own Lead Generation** - Google Ads, Facebook, local SEO. Costs less than Checkatrade and you own the leads.',
          '**Step 6: Gradually Reduce Directory Dependence** - As your website leads increase, reduce directory spending. Most trades are directory-free within 6 months.'
        ]
      },
      {
        type: 'calculator',
        title: 'Your 5-Year Checkatrade vs Website Comparison',
        description: 'See the real financial impact over 5 years',
        stats: [
          { label: 'Checkatrade Total Cost', value: '£42,000', subtext: '£700/month × 60 months' },
          { label: 'Website Total Cost', value: '£6,000', subtext: '£4k build + £40/month hosting' },
          { label: 'Total Savings', value: '£36,000', subtext: 'Money back in your pocket' },
          { label: 'Business Asset Value', value: '£15-25k', subtext: 'Website resale value after 5 years' }
        ]
      },
      {
        type: 'heading',
        content: 'But What About Trust and Credibility?'
      },
      {
        type: 'paragraph',
        content: `"But customers trust Checkatrade!" - This is the fear that keeps trades trapped. Here's the truth: customers trust Google reviews more than any directory. With your own website, you can display Google reviews, build your own testimonials, and create trust signals that actually belong to you.`
      },
      {
        type: 'features',
        title: 'Trust Features That Beat Checkatrade',
        features: [
          'Google Reviews integration (higher trust than Checkatrade)',
          'Video testimonials from real customers',
          'Before/after project galleries',
          'Professional certifications and badges',
          'Live chat for instant credibility',
          'Local area pages showing your expertise',
          'Case studies of actual projects',
          'Your own guarantee and insurance details'
        ]
      },
      {
        type: 'heading',
        content: 'The Leads Are Better (And They\'re All Yours)'
      },
      {
        type: 'paragraph',
        content: `Directory leads are tyre-kickers comparing 20 quotes. Website leads are people who chose YOU. They've seen your work, read your reviews, and already trust you. The difference in quality is night and day.`
      },
      {
        type: 'stats',
        stats: [
          { label: 'Website Lead Quality', value: '85%', subtext: 'Ready to book' },
          { label: 'Close Rate', value: '40-60%', subtext: 'vs 5-10% on directories' },
          { label: 'Average Job Value', value: '+65%', subtext: 'Higher value projects' },
          { label: 'Repeat Business', value: '3x', subtext: 'More likely to return' }
        ]
      },
      {
        type: 'heading',
        content: 'Common Objections (And Why They\'re Wrong)'
      },
      {
        type: 'list',
        items: [
          '**"I\'m not technical"** - You don\'t need to be. Professional agencies handle everything.',
          '**"Websites are expensive"** - £4k once vs £8,400 every year. Which is expensive?',
          '**"I don\'t have time"** - The agency does the work. You just provide photos and information.',
          '**"SEO takes forever"** - Local trades rank in 2-3 months. Faster than getting established on Checkatrade.',
          '**"What if it doesn\'t work?"** - 95% of trades with professional websites never return to directories.',
          '**"I need leads now"** - Keep Checkatrade while building your website. Transition gradually.'
        ]
      },
      {
        type: 'heading',
        content: 'The Business Asset That Directories Can Never Give You'
      },
      {
        type: 'paragraph',
        content: `Here's what Checkatrade doesn't want you to know: A successful trade business with its own website and customer base can sell for 2-3x annual revenue. A Checkatrade-dependent business? Almost worthless. Why? Because the new owner would have to start from scratch with directories.`
      },
      {
        type: 'tip',
        content: 'Your website is a sellable asset. After 5 years, a successful trade website with good traffic and leads can be worth £20,000-50,000. Your Checkatrade membership? Worth exactly £0.'
      },
      {
        type: 'heading',
        content: 'Making the Switch: Your Action Plan'
      },
      {
        type: 'list',
        items: [
          '**Today**: Calculate your true directory costs (be honest)',
          '**This Week**: Research website options and get quotes',
          '**Next 30 Days**: Start building your website',
          '**Next 60 Days**: Launch and begin SEO',
          '**Next 90 Days**: Start reducing directory dependence',
          '**Next 6 Months**: Achieve directory independence'
        ]
      },
      {
        type: 'cta',
        title: 'Ready to Stop Renting and Start Owning?',
        description: 'Join 3,000+ UK tradesmen who\'ve escaped the directory trap',
        buttonText: 'Get Your Website Quote',
        buttonLink: '/website-cost-calculator'
      },
      {
        type: 'heading',
        content: 'The Bottom Line'
      },
      {
        type: 'paragraph',
        content: `Checkatrade and other directories served a purpose 10 years ago. Today, they're an expensive middleman you don't need. Every month you delay is another £700 building someone else's business instead of your own. The question isn't whether you can afford a website - it's whether you can afford NOT to have one.`
      },
      {
        type: 'quote',
        quote: 'My only regret is not doing it sooner. Five years and £40,000 wasted on directories. My website paid for itself in 8 weeks.',
        author: 'David Thompson',
        role: 'Thompson Builders, Glasgow'
      }
    ],
    
    relatedPosts: [
      {
        title: 'The True Cost of Tradesman Websites',
        slug: 'true-cost-tradesman-websites',
        readTime: '10 min'
      },
      {
        title: 'Why We Don\'t Use WordPress',
        slug: '../no-wordpress-tradesman-websites',
        readTime: '8 min'
      },
      {
        title: 'Generate Quality Leads Without Directories',
        slug: 'generate-quality-leads',
        readTime: '12 min'
      }
    ],
    
    cta: {
      title: 'Stop Renting, Start Owning',
      description: 'Get a website that generates leads you own, not rent. No directories, no middlemen, just your business.',
      buttonText: 'Calculate Your Website Cost',
      buttonLink: '/website-cost-calculator'
    }
  };

  return <BlogPostTemplate post={blogPost} />;
};

export default CheckatradeAlternative;

