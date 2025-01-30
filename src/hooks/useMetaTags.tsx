import { useEffect } from 'react';
import { MythData } from '@/data/myths';

export const useMetaTags = (myth: MythData | undefined, mythId: string | undefined) => {
  useEffect(() => {
    if (myth) {
      const shareTitle = `FUD ${mythId}: ${myth.title} - KaspArchive`;
      const shareDescription = `${myth.claim}`;
      const shareUrl = `${window.location.origin}/kaspa/${mythId}`;
      const shareImage = `${window.location.origin}/og-image.png`;

      document.title = shareTitle;

      const updateStandardMeta = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      const updateOpenGraphMeta = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      const updateTwitterMeta = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      try {
        updateStandardMeta('description', shareDescription);

        updateOpenGraphMeta('og:site_name', 'KaspArchive');
        updateOpenGraphMeta('og:title', shareTitle);
        updateOpenGraphMeta('og:description', shareDescription);
        updateOpenGraphMeta('og:url', shareUrl);
        updateOpenGraphMeta('og:type', 'article');
        updateOpenGraphMeta('og:image', shareImage);
        updateOpenGraphMeta('og:updated_time', new Date().toISOString());

        updateTwitterMeta('twitter:card', 'summary_large_image');
        updateTwitterMeta('twitter:title', shareTitle);
        updateTwitterMeta('twitter:description', shareDescription);
        updateTwitterMeta('twitter:url', shareUrl);
        updateTwitterMeta('twitter:image', shareImage);

        console.log('Meta tags updated successfully:', {
          title: shareTitle,
          description: shareDescription,
          url: shareUrl,
          image: shareImage
        });
      } catch (error) {
        console.error('Error updating meta tags:', error);
      }
    }

    return () => {
      const defaultTitle = "KaspArchive - Debunking Myths & Facts About Kaspa Cryptocurrency";
      const defaultDescription = "Explore comprehensive guides debunking common myths about Kaspa cryptocurrency. Get accurate information about Kaspa's technology, features, and innovations.";
      const defaultUrl = window.location.origin;
      const defaultImage = `${window.location.origin}/og-image.png`;

      try {
        const updateStandardMeta = (name: string, content: string) => {
          const tag = document.querySelector(`meta[name="${name}"]`);
          if (tag) tag.setAttribute('content', content);
        };

        const updateOpenGraphMeta = (property: string, content: string) => {
          const tag = document.querySelector(`meta[property="${property}"]`);
          if (tag) tag.setAttribute('content', content);
        };

        const updateTwitterMeta = (name: string, content: string) => {
          const tag = document.querySelector(`meta[name="${name}"]`);
          if (tag) tag.setAttribute('content', content);
        };

        updateStandardMeta('description', defaultDescription);
        updateOpenGraphMeta('og:site_name', 'KaspArchive');
        updateOpenGraphMeta('og:title', defaultTitle);
        updateOpenGraphMeta('og:description', defaultDescription);
        updateOpenGraphMeta('og:url', defaultUrl);
        updateOpenGraphMeta('og:type', 'website');
        updateOpenGraphMeta('og:image', defaultImage);
        updateTwitterMeta('twitter:card', 'summary_large_image');
        updateTwitterMeta('twitter:title', defaultTitle);
        updateTwitterMeta('twitter:description', defaultDescription);
        updateTwitterMeta('twitter:url', defaultUrl);
        updateTwitterMeta('twitter:image', defaultImage);

        console.log('Meta tags reset successfully');
      } catch (error) {
        console.error('Error resetting meta tags:', error);
      }
    };
  }, [myth, mythId]);
};