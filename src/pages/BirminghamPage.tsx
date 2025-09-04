import React from 'react';
import LocationPageTemplate from '../components/LocationPageTemplate';

const BirminghamPage = () => {
  const birminghamData = {
    city: 'Birmingham',
    county: 'West Midlands',
    stats: {
      projects: '95+',
      roi: '400%',
      ranking: 'Top 3',
      clients: '110+'
    },
    areas: [
      'Birmingham City Centre', 'Jewellery Quarter', 'Digbeth', 'Edgbaston',
      'Harborne', 'Moseley', 'Kings Heath', 'Bournville',
      'Selly Oak', 'Selly Park', 'Stirchley', 'Cotteridge',
      'Northfield', 'Longbridge', 'Rubery', 'Rednal',
      'Hall Green', 'Acocks Green', 'Yardley', 'Sheldon',
      'Small Heath', 'Sparkbrook', 'Sparkhill', 'Balsall Heath',
      'Aston', 'Handsworth', 'Perry Barr', 'Great Barr',
      'Erdington', 'Sutton Coldfield', 'Four Oaks', 'Mere Green',
      'Solihull', 'Shirley', 'Olton', 'Dorridge',
      'Knowle', 'Balsall Common', 'Meriden', 'Hampton-in-Arden'
    ],
    caseStudies: [
      {
        name: 'Midlands Electrical Pro',
        location: 'Edgbaston',
        trade: 'Electrician',
        result: 'From 6 leads/month to 70 leads/month',
        quote: 'Built Proper understood Birmingham\'s market perfectly. We now dominate local searches.'
      },
      {
        name: 'Birmingham Emergency Plumbers',
        location: 'Harborne',
        trade: 'Plumber',
        result: '£350k revenue increase',
        quote: 'The 24/7 booking system has revolutionised our emergency call-outs. Brilliant work.'
      },
      {
        name: 'Second City Construction',
        location: 'Jewellery Quarter',
        trade: 'Builder',
        result: '£1.2m in commercial contracts',
        quote: 'Our new website helped us break into Birmingham\'s commercial renovation market.'
      }
    ],
    seoContent: {
      intro: `As the UK's second city, Birmingham's trade industry is massive and competitive. With major regeneration 
        projects, a booming property market, and thousands of tradesmen competing for work, you need a strong 
        online presence to succeed. We build custom websites that help Birmingham trades stand out, rank higher 
        in local searches, and win more profitable jobs across the West Midlands.`,
      
      whyCustom: `Birmingham customers expect quality and professionalism. They research thoroughly, compare quotes, 
        and choose tradesmen who present themselves well online. A custom website positions you as the premium 
        choice for Birmingham's diverse market - from luxury homes in Sutton Coldfield to trendy apartments in 
        the Jewellery Quarter. No WordPress, no templates - just bespoke development that loads fast, ranks well, 
        and converts visitors into customers.`,
      
      localSeo: `Whether you're targeting "plumber B1" or "electrician Sutton Coldfield", we'll ensure you dominate 
        Birmingham search results. Our Birmingham-specific SEO strategies cover the entire West Midlands region, 
        optimising for neighbourhood searches from Edgbaston to Erdington, Moseley to Mere Green. We understand 
        Birmingham's unique geography and search patterns, helping you appear exactly when locals need your services.`
    }
  };

  return <LocationPageTemplate data={birminghamData} />;
};

export default BirminghamPage;
