import { useParams, Link } from "react-router-dom";
import { MythArticle } from "@/components/MythArticle";
import { myths } from "@/data/myths";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet";

const Myth = () => {
  const { mythId } = useParams();
  const myth = myths.find((m) => m.id === `fud-${mythId}`);

  if (!myth) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Myth not found</h1>
      </div>
    );
  }

  const pageTitle = `FUD ${mythId}: ${myth.title} - KaspArchive`;
  const pageDescription = myth.facts[0]; // Using the first fact as the description

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${window.location.origin}/kaspa/${mythId}`} />
        <meta property="og:image" content="https://i.postimg.cc/hPVwjmgx/images-1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://i.postimg.cc/hPVwjmgx/images-1.png" />
      </Helmet>
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