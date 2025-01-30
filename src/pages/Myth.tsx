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
      const shareDescription = `Debunking the myth: "${myth.claim}" Learn the facts about this Kaspa cryptocurrency claim.`;
      const shareUrl = `${window.location.origin}/kaspa/${mythId}`;

      // Update document title
      document.title = shareTitle;

      // Function to update or create meta tag
      const updateMetaTag = (selector: string, attribute: string, content: string) => {
        let tag = document.querySelector(selector);
        if (!tag) {
          tag = document.createElement('meta');
          const [key, value] = selector.slice(1, -1).split('=');
          tag.setAttribute(key, value.replace(/['"]/g, ''));
          document.head.appendChild(tag);
        }
        tag.setAttribute(attribute, content);
      };

      // Update all meta tags
      updateMetaTag('meta[name="description"]', 'content', shareDescription);
      updateMetaTag('meta[property="og:title"]', 'content', shareTitle);
      updateMetaTag('meta[property="og:description"]', 'content', shareDescription);
      updateMetaTag('meta[property="og:url"]', 'content', shareUrl);
      updateMetaTag('meta[property="twitter:title"]', 'content', shareTitle);
      updateMetaTag('meta[property="twitter:description"]', 'content', shareDescription);
      updateMetaTag('meta[property="twitter:url"]', 'content', shareUrl);

      // Log updates for verification
      console.log('Meta tags updated:', {
        title: shareTitle,
        description: shareDescription,
        url: shareUrl
      });
    }

    // Cleanup function to reset meta tags when component unmounts
    return () => {
      const defaultTitle = "KaspArchive - Debunking Myths & Facts About Kaspa Cryptocurrency";
      const defaultDescription = "Comprehensive guide debunking common myths about Kaspa cryptocurrency. Learn facts about Kaspa's fair launch, PoW consensus, smart contracts, Layer 2 scaling, and technological innovations.";
      const defaultUrl = window.location.origin;

      document.title = defaultTitle;

      const updateMetaTag = (selector: string, attribute: string, content: string) => {
        const tag = document.querySelector(selector);
        if (tag) tag.setAttribute(attribute, content);
      };

      updateMetaTag('meta[name="description"]', 'content', defaultDescription);
      updateMetaTag('meta[property="og:title"]', 'content', defaultTitle);
      updateMetaTag('meta[property="og:description"]', 'content', defaultDescription);
      updateMetaTag('meta[property="og:url"]', 'content', defaultUrl);
      updateMetaTag('meta[property="twitter:title"]', 'content', defaultTitle);
      updateMetaTag('meta[property="twitter:description"]', 'content', defaultDescription);
      updateMetaTag('meta[property="twitter:url"]', 'content', defaultUrl);
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