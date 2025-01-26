import { useParams, Link } from "react-router-dom";
import { MythArticle } from "@/components/MythArticle";
import { myths } from "@/data/myths";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Myth = () => {
  const { id } = useParams();
  const myth = myths.find((m) => m.id === id);

  if (!myth) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Myth not found</h1>
        <Link to="/">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to all myths
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <main className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to all myths
          </Button>
        </Link>
        <MythArticle myth={myth} />
      </main>
    </div>
  );
};

export default Myth;