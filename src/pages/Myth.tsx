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

  return (
    <>
      <Helmet>
        <title>KaspArchive #{mythId}</title>
        <meta name="title" content={`KaspArchive #${mythId}`} />
        <meta name="description" content={myth.claim} />
      </Helmet>
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
    </>
  );
};

export default Myth;