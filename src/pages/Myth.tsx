import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MythArticle } from "@/components/MythArticle";
import { myths } from "@/data/myths";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Myth = () => {
  const { mythId } = useParams();
  const myth = myths.find((m) => m.id === `fud-${mythId}`);

  useEffect(() => {
    if (myth) {
      // Create unique title and description for social sharing
      const shareTitle = `FUD ${mythId}: ${myth.title} - KaspArchive`;
      // Create a more concise description that works better with Telegram
      const shareDescription = `${myth.claim}`;
      const shareUrl = `${window.location.origin}/kaspa/${mythId}`;
      const shareImage = `${window.location.origin}/og-image.png`;

      // Update document title
      document.title = shareTitle;

      // Helper functions for different meta tag types
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
        // Update standard meta tags
        updateStandardMeta('description', shareDescription);

        // Update OpenGraph meta tags - Telegram primarily uses these
        updateOpenGraphMeta('og:site_name', 'KaspArchive');
        updateOpenGraphMeta('og:title', shareTitle);
        updateOpenGraphMeta('og:description', shareDescription);
        updateOpenGraphMeta('og:url', shareUrl);
        updateOpenGraphMeta('og:type', 'article');
        updateOpenGraphMeta('og:image', shareImage);
        // Force Telegram to refresh the preview by adding a timestamp
        updateOpenGraphMeta('og:updated_time', new Date().toISOString());

        // Update Twitter meta tags
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

    // Cleanup function
    return () => {
      const defaultTitle = "KaspArchive - Debunking Myths & Facts About Kaspa Cryptocurrency";
      const defaultDescription = "Explore comprehensive guides debunking common myths about Kaspa cryptocurrency. Get accurate information about Kaspa's technology, features, and innovations.";
      const defaultUrl = window.location.origin;
      const defaultImage = `${window.location.origin}/og-image.png`;

      try {
        // Reset standard meta tags
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

        // Reset all meta tags
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

  if (!myth) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Myth not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Main
          </Button>
        </Link>
        <MythArticle myth={myth} />
      </div>
    </div>
  );
};

export default Myth;