import { useEffect } from 'react';
import { MythData } from '@/data/myths';

export const useMetaTags = (myth: MythData | undefined, mythId: string | undefined) => {
  useEffect(() => {
    if (myth) {
      const mythNumber = mythId ? mythId.replace('fud-', '') : '';
      const shareTitle = `KaspArchive #${mythNumber}`;
      const shareDescription = myth.claim;
      const shareUrl = `${window.location.origin}/kaspa/${mythNumber}`;
      const shareImage = 'https://i.postimg.cc/j5xrhTvm/MXOm-Sp-Te-S0yia29rbq-G4g-1.jpg';

      document.title = shareTitle;

      const metaTags = {
        'description': shareDescription,
        'og:title': shareTitle,
        'og:description': shareDescription,
        'og:url': shareUrl,
        'og:image': shareImage,
        'og:type': 'article',
        'twitter:title': shareTitle,
        'twitter:description': shareDescription,
        'twitter:url': shareUrl,
        'twitter:image': shareImage,
        'twitter:card': 'summary_large_image'
      };

      Object.entries(metaTags).forEach(([name, content]) => {
        // Handle both name and property attributes
        let tag = document.querySelector(`meta[name="${name}"]`) || 
                  document.querySelector(`meta[property="${name}"]`);
        
        if (!tag) {
          tag = document.createElement('meta');
          if (name.startsWith('og:')) {
            tag.setAttribute('property', name);
          } else {
            tag.setAttribute('name', name);
          }
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      });

      console.log('Meta tags updated successfully:', metaTags);
    }

    return () => {
      const defaultTitle = "KaspArchive - Your Guide to Kaspa Facts";
      const defaultDescription = "Learn the truth about Kaspa. Simple facts that clear up common myths about this fast and scalable cryptocurrency.";
      const defaultImage = "https://i.postimg.cc/j5xrhTvm/MXOm-Sp-Te-S0yia29rbq-G4g-1.jpg";
      
      document.title = defaultTitle;
      
      const defaultMetaTags = {
        'description': defaultDescription,
        'og:title': defaultTitle,
        'og:description': defaultDescription,
        'og:image': defaultImage,
        'og:type': 'website',
        'twitter:title': defaultTitle,
        'twitter:description': defaultDescription,
        'twitter:image': defaultImage,
        'twitter:card': 'summary_large_image'
      };

      Object.entries(defaultMetaTags).forEach(([name, content]) => {
        const tag = document.querySelector(`meta[name="${name}"]`) || 
                   document.querySelector(`meta[property="${name}"]`);
        if (tag) tag.setAttribute('content', content);
      });
    };
  }, [myth, mythId]);
};