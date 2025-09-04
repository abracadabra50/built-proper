import React from 'react';
import LocationPageTemplate from '../components/LocationPageTemplate';

const LondonPage = () => {
  const londonData = {
    city: 'London',
    county: 'Greater London',
    stats: {
      projects: '150+',
      roi: '380%',
      ranking: 'Top 3',
      clients: '200+'
    },
    areas: [
      'Westminster', 'Camden', 'Islington', 'Hackney',
      'Tower Hamlets', 'Greenwich', 'Lewisham', 'Southwark',
      'Lambeth', 'Wandsworth', 'Hammersmith', 'Kensington',
      'Fulham', 'Richmond', 'Kingston', 'Merton',
      'Sutton', 'Croydon', 'Bromley', 'Bexley',
      'Barking', 'Havering', 'Redbridge', 'Newham',
      'Waltham Forest', 'Haringey', 'Enfield', 'Barnet',
      'Harrow', 'Brent', 'Ealing', 'Hounslow'
    ],
    caseStudies: [
      {
        name: 'East End Electrical',
        location: 'Hackney',
        trade: 'Electrician',
        result: 'From 2 leads/month to 45 leads/month',
        quote: 'Built Proper transformed our business. We now dominate Hackney searches and turn away work.'
      },
      {
        name: 'SW London Plumbing',
        location: 'Wandsworth',
        trade: 'Plumber',
        result: '400% ROI in 3 months',
        quote: 'Stopped relying on Checkatrade completely. Our website brings in better quality leads.'
      },
      {
        name: 'North London Builders',
        location: 'Barnet',
        trade: 'Builder',
        result: '£500k in new projects',
        quote: 'The website paid for itself in the first week. Absolute game changer for our business.'
      }
    ],
    seoContent: {
      intro: `As London's leading custom website development agency for tradesmen, we understand the unique challenges 
        of operating in the capital. With over 50,000 trade businesses competing for attention, having a 
        professional website isn't optional - it's essential for survival. We specialise in building bespoke websites 
        for London plumbers, electricians, builders, decorators, joiners, and all other trades.`,
      
      whyCustom: `London customers expect professionalism. They research online before calling, compare multiple quotes, 
        and choose tradesmen who appear trustworthy and established. A professional website instantly elevates 
        your credibility and helps you win higher-value projects in affluent areas like Chelsea, Hampstead, 
        and Richmond. Our custom development approach means your website loads fast (crucial for mobile users), 
        ranks well in local searches, and converts visitors into customers. We don't use WordPress or page 
        builders - everything is hand-coded for maximum performance and reliability.`,
      
      localSeo: `Whether you're a plumber in Peckham, an electrician in Ealing, or a builder in Brixton, we'll ensure 
        you dominate local search results. Our London-specific SEO strategies help you rank for searches like 
        "emergency plumber Hackney" or "electrician near me Westminster", bringing you customers actively 
        looking for your services. We optimise for every London borough, ensuring you appear when local customers 
        search for trades in their area.`
    }
  };

  return <LocationPageTemplate data={londonData} />;
};

export default LondonPage;