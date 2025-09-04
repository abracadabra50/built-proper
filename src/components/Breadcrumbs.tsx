import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) return null;

  // Generate breadcrumb items based on URL path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    pathnames.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathnames.length - 1;
      
      // Format the label
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Special cases for better labels
      const labelMap: { [key: string]: string } = {
        'seo': 'SEO',
        'ai': 'AI',
        'crm': 'CRM',
        'wordpress': 'WordPress',
        'tradesman': 'Tradesman',
        'checkatrade': 'Checkatrade',
        'london': 'London',
        'manchester': 'Manchester',
        'edinburgh': 'Edinburgh',
        'glasgow': 'Glasgow',
        'leeds': 'Leeds',
        'bristol': 'Bristol',
        'birmingham': 'Birmingham'
      };
      
      // Apply label mapping
      Object.keys(labelMap).forEach(key => {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        label = label.replace(regex, labelMap[key]);
      });
      
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="w-full px-6 lg:px-8 py-4 bg-slate-900/50 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <ol 
          className="flex items-center space-x-2 text-sm"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li 
                key={index}
                className="flex items-center"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
                )}
                
                {isLast ? (
                  <span 
                    className="text-gray-300 font-medium"
                    itemProp="name"
                  >
                    {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.href!}
                    className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center"
                    itemProp="item"
                  >
                    <span itemProp="name">
                      {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                      {crumb.label}
                    </span>
                  </Link>
                )}
                
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
