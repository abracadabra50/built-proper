import React from 'react';
import LocationPageTemplate from '../components/LocationPageTemplate';

const EdinburghPage = () => {
  const edinburghData = {
    city: 'Edinburgh',
    county: 'Lothian',
    stats: {
      projects: '65+',
      roi: '450%',
      ranking: 'Top 3',
      clients: '80+'
    },
    areas: [
      'Edinburgh City Centre', 'Leith', 'Morningside', 'Stockbridge',
      'Bruntsfield', 'Marchmont', 'Newington', 'Portobello',
      'Corstorphine', 'Murrayfield', 'Inverleith', 'Trinity',
      'Newhaven', 'Granton', 'Cramond', 'Barnton',
      'Blackhall', 'Craigleith', 'Comely Bank', 'Dean Village',
      'Fountainbridge', 'Tollcross', 'Meadows', 'Southside',
      'Abbeyhill', 'Restalrig', 'Craigentinny', 'Duddingston',
      'Gilmerton', 'Liberton', 'Gracemount', 'Colinton'
    ],
    caseStudies: [
      {
        name: 'Capital City Electrical',
        location: 'Morningside',
        trade: 'Electrician',
        result: 'From 3 leads/month to 40 leads/month',
        quote: 'Our new website dominates Edinburgh searches. We\'re now the go-to electricians for EH postcodes.'
      },
      {
        name: 'Edinburgh Emergency Plumbers',
        location: 'Leith',
        trade: 'Plumber',
        result: '500% increase in emergency calls',
        quote: 'The 24/7 booking system Built Proper created has transformed how we handle emergency calls.'
      },
      {
        name: 'Lothian Building Services',
        location: 'Stockbridge',
        trade: 'Builder',
        result: '£400k in high-end renovations',
        quote: 'Professional website attracts professional clients. Now working on New Town townhouses exclusively.'
      }
    ],
    seoContent: {
      intro: `Edinburgh's trade market is unique - from Georgian townhouses in the New Town to modern developments 
        in Leith, tradesmen need to appeal to diverse customers with high expectations. We build custom websites 
        that help Edinburgh trades establish credibility, dominate local searches, and win more profitable jobs. 
        Our bespoke development approach ensures your website reflects the quality of your work.`,
      
      whyCustom: `Edinburgh residents expect excellence. They research thoroughly, value professionalism, and choose 
        tradesmen who present themselves well. A custom website positions you as the premium choice for Edinburgh's 
        affluent areas like Morningside, Stockbridge, and the New Town. We don't use templates or WordPress - 
        every site is hand-coded to load fast, rank well, and convert visitors into customers. Perfect for 
        targeting both residential work and Edinburgh's thriving commercial sector.`,
      
      localSeo: `Whether you're targeting "plumber EH1" or "emergency electrician Edinburgh", we'll ensure you 
        dominate local searches. Our Edinburgh-specific SEO strategies focus on the EH postcode areas, optimising 
        for neighbourhood searches from Leith to Morningside, Portobello to Corstorphine. We understand Edinburgh's 
        unique geography and search patterns, helping you appear exactly when local customers need your services.`
    }
  };

  return <LocationPageTemplate data={edinburghData} />;
};

export default EdinburghPage;
