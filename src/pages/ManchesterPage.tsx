import React from 'react';
import LocationPageTemplate from '../components/LocationPageTemplate';

const ManchesterPage = () => {
  const manchesterData = {
    city: 'Manchester',
    county: 'Greater Manchester',
    stats: {
      projects: '85+',
      roi: '420%',
      ranking: 'Top 3',
      clients: '100+'
    },
    areas: [
      'Manchester City Centre', 'Salford', 'Bolton', 'Bury',
      'Oldham', 'Rochdale', 'Stockport', 'Tameside',
      'Trafford', 'Wigan', 'Altrincham', 'Sale',
      'Stretford', 'Urmston', 'Eccles', 'Swinton',
      'Prestwich', 'Whitefield', 'Radcliffe', 'Heywood',
      'Middleton', 'Failsworth', 'Droylsden', 'Denton',
      'Hyde', 'Stalybridge', 'Ashton-under-Lyne', 'Leigh'
    ],
    caseStudies: [
      {
        name: 'Manchester Electrical Solutions',
        location: 'Didsbury',
        trade: 'Electrician',
        result: 'From 5 leads/month to 60 leads/month',
        quote: 'We went from struggling to find work to being fully booked 3 weeks in advance. Game changer!'
      },
      {
        name: 'Northern Plumbing Services',
        location: 'Salford',
        trade: 'Plumber',
        result: '£250k revenue increase',
        quote: 'The website Built Proper created gets us better jobs than Checkatrade ever did.'
      },
      {
        name: 'Greater Manchester Builders',
        location: 'Stockport',
        trade: 'Builder',
        result: '35 new contracts in 6 months',
        quote: 'Professional website = professional clients. Simple as that. Brilliant work.'
      }
    ],
    seoContent: {
      intro: `Manchester's trade industry is booming, but competition is fierce. With thousands of tradesmen across 
        Greater Manchester fighting for the same customers, you need more than just word-of-mouth to succeed. 
        We build custom websites that help Manchester trades stand out, rank higher in local searches, and 
        convert more visitors into paying customers. No templates, no WordPress - just bespoke development.`,
      
      whyCustom: `Manchester customers are savvy. They compare quotes, read reviews, and choose tradesmen who look 
        professional online. A custom website shows you're serious about your business and helps you compete 
        with national chains and franchises. Whether you're targeting affluent areas like Didsbury and Chorlton, 
        or covering the whole of Greater Manchester, we'll build you a website that converts. Fast loading, 
        mobile-optimised, and designed to turn searches into bookings.`,
      
      localSeo: `From "emergency plumber Salford" to "electrician near me Manchester", we'll make sure you dominate 
        local search results. Our Manchester-specific SEO strategies consider the unique geography of Greater 
        Manchester, optimising for both city centre searches and surrounding boroughs. We'll help you rank for 
        your specific trade and service areas, bringing you customers who are ready to book your services.`
    }
  };

  return <LocationPageTemplate data={manchesterData} />;
};

export default ManchesterPage;