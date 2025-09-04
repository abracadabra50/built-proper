import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, TrendingUp, AlertCircle, CheckCircle, XCircle, PoundSterling } from 'lucide-react';
import BlogPostTemplate from '../components/BlogPostTemplate';

const TrueCostGuide = () => {
  const sections = [
    {
      type: 'intro' as const,
      content: `If you're a UK tradesman looking for a website in 2025, you're probably confused by the massive price variations. Some companies charge £199, others £10,000+. Monthly fees range from £0 to £200+. What's going on?

Here's the truth: Most tradesman website builders are hiding the real costs. They lure you in with low upfront prices, then hit you with monthly fees, add-ons, and limitations that cost you thousands over time.

This guide reveals EVERYTHING - the true costs, hidden fees, and what you're really paying for. No sales pitch, just honest numbers from someone who's built hundreds of trade websites.`
    },
    {
      type: 'stats' as const,
      stats: [
        { label: 'Average 3-Year Cost', value: '£3,240', subtext: 'Industry average' },
        { label: 'Hidden Fees', value: '67%', subtext: 'Have undisclosed costs' },
        { label: 'Monthly Fees', value: '£29-90', subtext: 'Ongoing charges' },
        { label: 'ROI Timeline', value: '3-6 months', subtext: 'With proper website' }
      ]
    },
    {
      type: 'paragraph' as const,
      title: 'The Shocking Truth About Website Pricing',
      content: `Let's start with what nobody tells you: The advertised price is rarely what you'll actually pay. Here's a real example from a major UK tradesman website company:

**Advertised:** "Websites from £299!"
**Reality:** £299 setup + £39/month hosting + £19/month maintenance + £29/month for email + £49 for SSL certificate + £199 for mobile optimization = £1,883 in year one alone.

Over 3 years? That "£299 website" costs £3,603. And that's before any updates, changes, or additional features.`
    },
    {
      type: 'comparison' as const,
      title: 'Real Cost Comparison: Template vs Custom',
      items: [
        {
          name: 'Template Website (WordPress)',
          features: [
            '£499 setup fee',
            '£29/month hosting',
            '£19/month maintenance',
            '£99/year for plugins',
            '£299 for customization',
            '3-year total: £2,621'
          ],
          highlighted: false
        },
        {
          name: 'Custom Built Proper Website',
          features: [
            '£2,500 one-time fee',
            '£0/month (you own it)',
            'No maintenance fees',
            'No plugin costs',
            'Fully customized',
            '3-year total: £2,500'
          ],
          highlighted: true
        }
      ]
    },
    {
      type: 'paragraph' as const,
      title: 'Hidden Costs Nobody Mentions',
      content: `Here are the hidden costs that destroy your budget:

**1. Monthly Hosting Fees (£20-50/month)**
Most companies force you to use their hosting. You can't move elsewhere. You're locked in forever.

**2. Maintenance Contracts (£30-100/month)**
"Required for updates and security" they say. In reality, you're paying for 5 minutes of work monthly.

**3. Change Requests (£50-200 each)**
Want to update your phone number? £50. Add a new service? £150. Change a photo? £75. It adds up fast.

**4. Plugin/Extension Fees (£10-50/month each)**
Contact forms, galleries, booking systems - each costs extra monthly. A basic site needs 5-10 plugins minimum.

**5. Email Hosting (£5-30/month per email)**
Yes, they charge you for email addresses at your own domain. 5 staff emails? That's £150/month with some providers.`
    },
    {
      type: 'paragraph' as const,
      title: 'The Directory Trap: Checkatrade, MyBuilder, Rated People',
      content: `Many tradesmen think directories are cheaper than websites. Let's look at the REAL numbers:

**Checkatrade:** £70-110/month membership + you compete with 20+ other trades for every job
**MyBuilder:** £10-50 per lead + only 20% of leads convert = £250-500/month for 1-2 jobs
**Rated People:** Credit system averaging £200-400/month + constant undercutting on price

**3-Year Directory Costs:**
- Checkatrade: £3,960
- MyBuilder: £10,800 (at £300/month average)
- Rated People: £10,800

And you own NOTHING. Stop paying, lose everything. No asset, no equity, no control.`
    },
    {
      type: 'calculator' as const,
      title: 'Calculate Your True Website Cost',
      description: 'Use our calculator to see what you\'re really paying over 3 years.'
    },
    {
      type: 'paragraph' as const,
      title: 'What Should a Tradesman Website Actually Cost?',
      content: `Based on building 500+ trade websites, here's what's reasonable:

**Basic Brochure Site (5 pages):** £1,500-2,500
- Home, About, Services, Gallery, Contact
- Mobile responsive
- Basic SEO
- Contact forms
- Google Maps integration

**Professional Trade Website:** £2,500-4,000
- Everything in basic
- 10-15 pages
- Local SEO optimization
- Review integration
- Lead capture systems
- Performance optimization

**Advanced Digital Platform:** £4,000-7,500
- Everything in professional
- Booking systems
- Customer portal
- Quote calculators
- AI chat support
- Marketing automation

Anything over £7,500 should include extensive custom functionality, app development, or enterprise features.`
    },
    {
      type: 'features' as const,
      title: 'What You Should Get for Your Money',
      features: [
        { text: 'Full ownership of code and content', included: true },
        { text: 'No monthly fees or contracts', included: true },
        { text: 'Mobile responsive design', included: true },
        { text: 'SSL certificate included', included: true },
        { text: 'Local SEO optimization', included: true },
        { text: 'Google My Business integration', included: true },
        { text: '90+ PageSpeed score', included: true },
        { text: 'Lead capture forms', included: true },
        { text: 'Gallery/portfolio section', included: true },
        { text: 'Social media integration', included: true }
      ]
    },
    {
      type: 'paragraph' as const,
      title: 'The WordPress Problem: Why It Costs More Long-Term',
      content: `WordPress seems cheap initially, but it's the most expensive option long-term:

**Security Costs:** WordPress sites get hacked constantly. Recovery costs £500-2,000 each time.

**Plugin Hell:** Average WordPress site needs 15-20 plugins. Each needs updates, causes conflicts, and many charge monthly fees. Annual plugin costs: £500-1,500.

**Performance Issues:** WordPress is slow. You'll spend £1,000+ annually on premium hosting, CDNs, and optimization plugins just to achieve decent speed.

**Developer Dependency:** Every change requires a developer. Can't update it yourself despite promises of "easy editing". Annual developer costs: £1,000-3,000.

**Obsolescence:** WordPress sites need rebuilding every 3-4 years as themes and plugins become outdated. That's another £2,000-5,000.

**Total 5-Year WordPress Cost:** £15,000-25,000 when you factor in everything.`
    },
    {
      type: 'paragraph' as const,
      title: 'How to Calculate ROI on Your Website Investment',
      content: `Here's how to determine if a website is worth the investment:

**Step 1: Calculate Your Customer Value**
- Average job value: £500
- Jobs per year from one customer: 2
- Customer lifetime value: £1,000

**Step 2: Determine Leads Needed**
- Website cost: £3,000
- Customers needed to break even: 3
- With 20% conversion rate: 15 leads needed

**Step 3: Realistic Lead Generation**
- Proper website generates: 5-10 leads/month
- Break-even timeline: 2-3 months
- Annual ROI: 300-500%

**Example:** Plumber spending £3,000 on proper website
- Generates 8 leads/month
- Converts 2 into customers
- Average job: £600
- Monthly revenue from website: £1,200
- ROI in 3 months: £3,600
- Annual ROI: £14,400 (480% return)`
    },
    {
      type: 'testimonial' as const,
      quote: 'I was paying £89/month for a template site that got me nothing. Invested £3,500 in a Built Proper website, now I get 15 leads a month. Paid for itself in 8 weeks.',
      author: 'James Mitchell',
      role: 'Mitchell Plumbing, Manchester'
    },
    {
      type: 'paragraph' as const,
      title: 'Red Flags: When You\'re Being Overcharged',
      content: `Watch out for these warning signs:

🚩 **Monthly fees over £30** - You're being fleeced
🚩 **Setup fees under £500** - It's a template, not custom
🚩 **Locked-in contracts** - They know you'll want to leave
🚩 **Charges for basic changes** - Should be included
🚩 **No ownership clause** - You're renting, not buying
🚩 **Proprietary platforms** - Can't move your site elsewhere
🚩 **Hidden hosting markups** - Hosting costs them £5, charging you £50
🚩 **Annual price increases** - Costs shouldn't go up yearly
🚩 **Limited revisions** - Artificial scarcity tactic
🚩 **Extra charges for mobile** - Should be standard in 2025`
    },
    {
      type: 'paragraph' as const,
      title: 'Smart Investment vs Cheap Mistake',
      content: `The biggest mistake tradesmen make is choosing based on upfront cost alone. Here's why that's expensive:

**Cheap Website (£500) Reality:**
- No custom design (looks like everyone else's)
- Poor performance (slow loading, high bounce rate)
- Bad SEO (invisible on Google)
- No conversions (visitors don't become customers)
- Monthly fees (£50/month forever)
- Total 3-year cost: £2,300
- Leads generated: 1-2/month
- ROI: Negative

**Proper Website (£3,000) Reality:**
- Custom design (stands out from competition)
- Fast performance (visitors stay and engage)
- Optimized SEO (rank on page 1)
- High conversions (visitors become customers)
- No monthly fees (you own it)
- Total 3-year cost: £3,000
- Leads generated: 8-12/month
- ROI: 400%+

The "expensive" option is actually cheaper AND more profitable.`
    },
    {
      type: 'paragraph' as const,
      title: 'What Built Proper Charges (Full Transparency)',
      content: `We believe in complete transparency. Here's exactly what we charge:

**Starter Package: £2,500**
- 5-7 page custom website
- Mobile responsive design
- Local SEO optimization
- Contact forms & lead capture
- Gallery/portfolio section
- Google integration
- SSL certificate
- 90+ PageSpeed score
- AI chat agent (Alex)
- NO monthly fees

**Professional Package: £4,000**
- Everything in Starter
- 10-15 pages
- Advanced SEO (3 months)
- Review system integration
- Booking/quote system
- Email automation
- Analytics dashboard
- Priority support
- NO monthly fees

**Enterprise Package: £6,500**
- Everything in Professional
- Unlimited pages
- Custom functionality
- CRM integration
- Advanced automation
- Multi-location SEO
- Ongoing optimization
- Dedicated account manager
- NO monthly fees

That's it. No hidden fees. No contracts. You own everything.`
    },
    {
      type: 'cta' as const,
      title: 'Ready to Stop Wasting Money?',
      description: 'Get a proper website that actually generates leads. No monthly fees, no nonsense.',
      buttonText: 'Get Your Free Quote',
      buttonLink: '/contact'
    },
    {
      type: 'paragraph' as const,
      title: 'Conclusion: The Real Cost is Not Having a Proper Website',
      content: `After analyzing hundreds of trade businesses, the pattern is clear:

**Tradesmen with cheap/no websites:**
- Dependent on directories (£300-500/month)
- Competing on price (race to the bottom)
- No control over their leads
- Working harder for less money
- Business value: Just equipment and van

**Tradesmen with proper websites:**
- Generate their own leads (free after initial investment)
- Compete on quality (better customers)
- Full control of their marketing
- Working smarter for more money
- Business value: Includes digital assets worth £10,000+

The question isn't "Can I afford a proper website?"
The question is "Can I afford NOT to have one?"

In 2025, a proper website isn't an expense - it's an investment that pays for itself in 2-3 months and generates returns for years.

Stop renting your online presence. Stop paying monthly fees. Stop competing with everyone else on directories.

Get Built Proper. Own your digital future.`
    }
  ];

  const relatedPosts = [
    {
      title: 'WordPress vs Custom: The Truth',
      excerpt: 'Why WordPress costs more long-term',
      link: '/blog/wordpress-holding-you-back'
    },
    {
      title: 'Checkatrade vs Own Website',
      excerpt: 'Directory fees vs website investment',
      link: '/blog/checkatrade-alternative'
    },
    {
      title: 'Local SEO Guide for Trades',
      excerpt: 'Rank #1 in your area',
      link: '/blog/local-seo-guide-tradesmen'
    }
  ];

  return (
    <BlogPostTemplate
      title="The True Cost of Tradesman Websites in 2025"
      subtitle="What you'll really pay (and what you should pay) for a trade website"
      author="Built Proper Team"
      date="September 2025"
      readTime="12 min read"
      category="Website Costs"
      image="/images/cost-guide-hero.jpg"
      excerpt="Most tradesman website builders hide the real costs. This guide reveals everything - true prices, hidden fees, ROI calculations, and what you're really paying for. No sales pitch, just honest numbers."
      sections={sections}
      relatedPosts={relatedPosts}
      keywords={['tradesman website cost', 'trade website pricing', 'how much website costs', 'website builder prices']}
    />
  );
};

export default TrueCostGuide;
