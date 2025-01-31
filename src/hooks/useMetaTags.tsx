import { useEffect } from 'react';
import { MythData } from '@/data/myths';

export const useMetaTags = (myth: MythData | undefined, mythId: string | undefined) => {
  useEffect(() => {
    // Remove any existing meta tags first
    const existingMetaTags = document.querySelectorAll('meta[data-dynamic="true"]');
    existingMetaTags.forEach(tag => tag.remove());

    if (myth) {
      // For individual myth pages
      const mythNumber = mythId ? mythId.replace('fud-', '') : '';
      const shareTitle = `FUD #${mythNumber}: ${myth.title} - KaspArchive`;
      const shareDescription = `Learn the truth about "${myth.claim}" - Get the facts about this Kaspa myth.`;
      const shareUrl = `${window.location.origin}/kaspa/${mythNumber}`;
      const shareImage = 'https://i.postimg.cc/j5xrhTvm/MXOm-Sp-Te-S0yia29rbq-G4g-1.jpg';

      document.title = shareTitle;

      const metaTags = {
        'description': shareDescription,
        'og:title': shareTitle,
        'og:description': shareDescription,
        'og:url': shareUrl,
        'og:image': shareImage,
        'og:image:width': '1200',
        'og:image:height': '630',
        'og:type': 'article',
        'twitter:title': shareTitle,
        'twitter:description': shareDescription,
        'twitter:url': shareUrl,
        'twitter:image': shareImage,
        'twitter:card': 'summary_large_image'
      };

      Object.entries(metaTags).forEach(([name, content]) => {
        const tag = document.createElement('meta');
        tag.setAttribute('data-dynamic', 'true');
        
        if (name.startsWith('og:')) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      });

      console.log('Meta tags updated for myth page:', metaTags);
    } else {
      // For index page or when no myth is found
      const defaultTitle = "KaspArchive - Your Guide to Kaspa Facts";
      const defaultDescription = "Learn the truth about Kaspa. Simple facts that clear up common myths about this fast and scalable cryptocurrency.";
      const defaultImage = "https://i.postimg.cc/j5xrhTvm/MXOm-Sp-Te-S0yia29rbq-G4g-1.jpg";
      
      document.title = defaultTitle;
      
      const defaultMetaTags = {
        'description': defaultDescription,
        'og:title': defaultTitle,
        'og:description': defaultDescription,
        'og:url': window.location.origin,
        'og:image': defaultImage,
        'og:image:width': '1200',
        'og:image:height': '630',
        'og:type': 'website',
        'twitter:title': defaultTitle,
        'twitter:description': defaultDescription,
        'twitter:url': window.location.origin,
        'twitter:image': defaultImage,
        'twitter:card': 'summary_large_image'
      };

      Object.entries(defaultMetaTags).forEach(([name, content]) => {
        const tag = document.createElement('meta');
        tag.setAttribute('data-dynamic', 'true');
        
        if (name.startsWith('og:')) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      });

      console.log('Meta tags updated for index page:', defaultMetaTags);
    }

    // Cleanup function to remove dynamic meta tags when component unmounts
    return () => {
      const dynamicMetaTags = document.querySelectorAll('meta[data-dynamic="true"]');
      dynamicMetaTags.forEach(tag => tag.remove());
    };
  }, [myth, mythId]);
};