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
      
      document.title = shareTitle;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", shareDescription);
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      
      if (ogTitle) {
        ogTitle.setAttribute("content", shareTitle);
      }
      if (ogDescription) {
        ogDescription.setAttribute("content", shareDescription);
      }
      if (ogUrl) {
        ogUrl.setAttribute("content", `${window.location.origin}/kaspa/${mythId}`);
      }

      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      const twitterUrl = document.querySelector('meta[property="twitter:url"]');
      
      if (twitterTitle) {
        twitterTitle.setAttribute("content", shareTitle);
      }
      if (twitterDescription) {
        twitterDescription.setAttribute("content", shareDescription);
      }
      if (twitterUrl) {
        twitterUrl.setAttribute("content", `${window.location.origin}/kaspa/${mythId}`);
      }
    }

    return () => {
      // Reset meta tags when component unmounts
      const defaultTitle = "KaspArchive - Debunking Myths & Facts About Kaspa Cryptocurrency";
      const defaultDescription = "Comprehensive guide debunking common myths about Kaspa cryptocurrency. Learn facts about Kaspa's fair launch, PoW consensus, smart contracts, Layer 2 scaling, and technological innovations.";
      
      document.title = defaultTitle;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", defaultDescription);
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      
      if (ogTitle) {
        ogTitle.setAttribute("content", defaultTitle);
      }
      if (ogDescription) {
        ogDescription.setAttribute("content", defaultDescription);
      }
      if (ogUrl) {
        ogUrl.setAttribute("content", window.location.origin);
      }

      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      const twitterUrl = document.querySelector('meta[property="twitter:url"]');
      
      if (twitterTitle) {
        twitterTitle.setAttribute("content", defaultTitle);
      }
      if (twitterDescription) {
        twitterDescription.setAttribute("content", defaultDescription);
      }
      if (twitterUrl) {
        twitterUrl.setAttribute("content", window.location.origin);
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