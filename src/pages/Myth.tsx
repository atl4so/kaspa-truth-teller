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
      
      // Update all meta tags immediately when component mounts
      document.title = shareTitle;
      
      // Update standard meta tags
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute("content", shareDescription);
      }
      
      // Update Open Graph meta tags
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      const ogUrlTag = document.querySelector('meta[property="og:url"]');
      
      if (ogTitleTag) ogTitleTag.setAttribute("content", shareTitle);
      if (ogDescTag) ogDescTag.setAttribute("content", shareDescription);
      if (ogUrlTag) ogUrlTag.setAttribute("content", shareUrl);
      
      // Update Twitter meta tags
      const twitterTitleTag = document.querySelector('meta[property="twitter:title"]');
      const twitterDescTag = document.querySelector('meta[property="twitter:description"]');
      const twitterUrlTag = document.querySelector('meta[property="twitter:url"]');
      
      if (twitterTitleTag) twitterTitleTag.setAttribute("content", shareTitle);
      if (twitterDescTag) twitterDescTag.setAttribute("content", shareDescription);
      if (twitterUrlTag) twitterUrlTag.setAttribute("content", shareUrl);
    }

    // Cleanup function to reset meta tags when component unmounts
    return () => {
      const defaultTitle = "KaspArchive - Debunking Myths & Facts About Kaspa Cryptocurrency";
      const defaultDescription = "Comprehensive guide debunking common myths about Kaspa cryptocurrency. Learn facts about Kaspa's fair launch, PoW consensus, smart contracts, Layer 2 scaling, and technological innovations.";
      const defaultUrl = window.location.origin;
      
      document.title = defaultTitle;
      
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute("content", defaultDescription);
      }
      
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      const ogUrlTag = document.querySelector('meta[property="og:url"]');
      
      if (ogTitleTag) ogTitleTag.setAttribute("content", defaultTitle);
      if (ogDescTag) ogDescTag.setAttribute("content", defaultDescription);
      if (ogUrlTag) ogUrlTag.setAttribute("content", defaultUrl);
      
      const twitterTitleTag = document.querySelector('meta[property="twitter:title"]');
      const twitterDescTag = document.querySelector('meta[property="twitter:description"]');
      const twitterUrlTag = document.querySelector('meta[property="twitter:url"]');
      
      if (twitterTitleTag) twitterTitleTag.setAttribute("content", defaultTitle);
      if (twitterDescTag) twitterDescTag.setAttribute("content", defaultDescription);
      if (twitterUrlTag) twitterUrlTag.setAttribute("content", defaultUrl);
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