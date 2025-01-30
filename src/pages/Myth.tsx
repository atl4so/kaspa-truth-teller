import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MythArticle } from "@/components/MythArticle";
import { myths } from "@/data/myths";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Myth = () => {
  const { mythId } = useParams();
  // Add back the "fud-" prefix when looking up the myth
  const myth = myths.find((m) => m.id === `fud-${mythId}`);

  useEffect(() => {
    if (myth) {
      document.title = `${myth.title} - KaspArchive`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", myth.claim);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      
      if (ogTitle) {
        ogTitle.setAttribute("content", `${myth.title} - KaspArchive`);
      }
      if (ogDescription) {
        ogDescription.setAttribute("content", myth.claim);
      }
      if (ogUrl) {
        ogUrl.setAttribute("content", `${window.location.origin}/kaspa/${mythId}`);
      }

      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      const twitterUrl = document.querySelector('meta[property="twitter:url"]');
      
      if (twitterTitle) {
        twitterTitle.setAttribute("content", `${myth.title} - KaspArchive`);
      }
      if (twitterDescription) {
        twitterDescription.setAttribute("content", myth.claim);
      }
      if (twitterUrl) {
        twitterUrl.setAttribute("content", `${window.location.origin}/kaspa/${mythId}`);
      }
    }

    return () => {
      document.title = "KaspArchive - Debunking Myths & Facts About Kaspa Cryptocurrency";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", "Comprehensive guide debunking common myths about Kaspa cryptocurrency. Learn facts about Kaspa's fair launch, PoW consensus, smart contracts, Layer 2 scaling, and technological innovations.");
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      
      if (ogTitle) {
        ogTitle.setAttribute("content", "KaspArchive - Facts & Myths About Kaspa");
      }
      if (ogDescription) {
        ogDescription.setAttribute("content", "Discover the truth about Kaspa cryptocurrency. Get facts about fair launch, PoW mining, smart contracts, and technological innovations.");
      }
      if (ogUrl) {
        ogUrl.setAttribute("content", window.location.origin);
      }

      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      const twitterUrl = document.querySelector('meta[property="twitter:url"]');
      
      if (twitterTitle) {
        twitterTitle.setAttribute("content", "KaspArchive - Facts & Myths About Kaspa");
      }
      if (twitterDescription) {
        twitterDescription.setAttribute("content", "Discover the truth about Kaspa cryptocurrency. Get facts about fair launch, PoW mining, smart contracts, and technological innovations.");
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