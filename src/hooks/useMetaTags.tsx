import { useEffect } from 'react';
import { MythData } from '@/data/myths';

export const useMetaTags = (myth: MythData | undefined, mythId: string | undefined) => {
  useEffect(() => {
    if (myth) {
      // Create title and description based on the myth data
      const mythNumber = mythId ? mythId.replace('fud-', '') : '';
      const shareTitle = `KaspArchive #${mythNumber}`;
      const shareDescription = myth.claim;
      const shareUrl = `${window.location.origin}/kaspa/${mythNumber}`;
      const shareImage = mythNumber === '1' 
        ? 'https://i.postimg.cc/HxDZDmnh/Circle-sign-1-svg.png'
        : 'https://i.postimg.cc/hPVwjmgx/images-1.png';

      // Update document title
      document.title = shareTitle;

      // Update primary meta tags
      const updateMetaTag = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      // Update Open Graph meta tags
      const updateOGMetaTag = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      // Update Twitter meta tags
      const updateTwitterMetaTag = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      try {
        // Update primary meta tags
        updateMetaTag('title', shareTitle);
        updateMetaTag('description', shareDescription);

        // Update Open Graph meta tags
        updateOGMetaTag('og:title', shareTitle);
        updateOGMetaTag('og:description', shareDescription);
        updateOGMetaTag('og:url', shareUrl);
        updateOGMetaTag('og:image', shareImage);
        updateOGMetaTag('og:type', 'article');

        // Update Twitter meta tags
        updateTwitterMetaTag('twitter:title', shareTitle);
        updateTwitterMetaTag('twitter:description', shareDescription);
        updateTwitterMetaTag('twitter:url', shareUrl);
        updateTwitterMetaTag('twitter:image', shareImage);
        updateTwitterMetaTag('twitter:card', 'summary_large_image');

        console.log('Meta tags updated successfully for article:', {
          title: shareTitle,
          description: shareDescription,
          url: shareUrl,
          image: shareImage
        });
      } catch (error) {
        console.error('Error updating meta tags:', error);
      }
    }

    // Cleanup function to reset meta tags when component unmounts
    return () => {
      const defaultTitle = "KaspArchive - Your Guide to Kaspa Facts";
      const defaultDescription = "Learn the truth about Kaspa. Simple facts that clear up common myths about this fast and scalable cryptocurrency.";
      const defaultUrl = window.location.origin;
      const defaultImage = "https://i.postimg.cc/hPVwjmgx/images-1.png";

      try {
        document.title = defaultTitle;
        
        // Reset primary meta tags
        const updateMetaTag = (name: string, content: string) => {
          const tag = document.querySelector(`meta[name="${name}"]`);
          if (tag) tag.setAttribute('content', content);
        };

        // Reset Open Graph meta tags
        const updateOGMetaTag = (property: string, content: string) => {
          const tag = document.querySelector(`meta[property="${property}"]`);
          if (tag) tag.setAttribute('content', content);
        };

        // Reset Twitter meta tags
        const updateTwitterMetaTag = (name: string, content: string) => {
          const tag = document.querySelector(`meta[name="${name}"]`);
          if (tag) tag.setAttribute('content', content);
        };

        updateMetaTag('title', defaultTitle);
        updateMetaTag('description', defaultDescription);

        updateOGMetaTag('og:title', defaultTitle);
        updateOGMetaTag('og:description', defaultDescription);
        updateOGMetaTag('og:url', defaultUrl);
        updateOGMetaTag('og:image', defaultImage);
        updateOGMetaTag('og:type', 'website');

        updateTwitterMetaTag('twitter:title', defaultTitle);
        updateTwitterMetaTag('twitter:description', defaultDescription);
        updateTwitterMetaTag('twitter:url', defaultUrl);
        updateTwitterMetaTag('twitter:image', defaultImage);
        updateTwitterMetaTag('twitter:card', 'summary_large_image');

        console.log('Meta tags reset successfully');
      } catch (error) {
        console.error('Error resetting meta tags:', error);
      }
    };
  }, [myth, mythId]);
};