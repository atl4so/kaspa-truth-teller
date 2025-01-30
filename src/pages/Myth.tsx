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
      
      // Update all meta tags immediately when component mounts
      document.title = shareTitle;
      
      // Update standard meta tags
      document.querySelector('meta[name="description"]')?.setAttribute("content", shareDescription);
      
      // Update Open Graph meta tags
      document.querySelector('meta[property="og:type"]')?.setAttribute("content", "article");
      document.querySelector('meta[property="og:title"]')?.setAttribute("content", shareTitle);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", shareDescription);
      document.querySelector('meta[property="og:url"]')?.setAttribute("content", `${window.location.origin}/kaspa/${mythId}`);
      
      // Update Twitter meta tags
      document.querySelector('meta[property="twitter:card"]')?.setAttribute("content", "summary_large_image");
      document.querySelector('meta[property="twitter:title"]')?.setAttribute("content", shareTitle);
      document.querySelector('meta[property="twitter:description"]')?.setAttribute("content", shareDescription);
      document.querySelector('meta[property="twitter:url"]')?.setAttribute("content", `${window.location.origin}/kaspa/${mythId}`);
    }

    return () => {
      // Reset meta tags when component unmounts
      const defaultTitle = "KaspArchive - Debunking Myths & Facts About Kaspa Cryptocurrency";
      const defaultDescription = "Comprehensive guide debunking common myths about Kaspa cryptocurrency. Learn facts about Kaspa's fair launch, PoW consensus, smart contracts, Layer 2 scaling, and technological innovations.";
      
      // Reset all meta tags to default values
      document.title = defaultTitle;
      
      // Reset standard meta tags
      document.querySelector('meta[name="description"]')?.setAttribute("content", defaultDescription);
      
      // Reset Open Graph meta tags
      document.querySelector('meta[property="og:type"]')?.setAttribute("content", "website");
      document.querySelector('meta[property="og:title"]')?.setAttribute("content", defaultTitle);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", defaultDescription);
      document.querySelector('meta[property="og:url"]')?.setAttribute("content", window.location.origin);
      
      // Reset Twitter meta tags
      document.querySelector('meta[property="twitter:card"]')?.setAttribute("content", "summary_large_image");
      document.querySelector('meta[property="twitter:title"]')?.setAttribute("content", defaultTitle);
      document.querySelector('meta[property="twitter:description"]')?.setAttribute("content", defaultDescription);
      document.querySelector('meta[property="twitter:url"]')?.setAttribute("content", window.location.origin);
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