import { useParams, Link } from "react-router-dom";
import { myths } from "@/data/myths";
import { ShareButtons } from "@/components/ShareButtons";
import { ChevronLeft } from "lucide-react";

const Myth = () => {
  const { id } = useParams();
  const myth = myths.find((m) => m.id === id);

  if (!myth) {
    return <div>Myth not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Main
      </Link>

      <article className="prose prose-lg mx-auto">
        <h1>{myth.title}</h1>
        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
          {myth.category}
        </div>
        <p className="text-xl mt-6 font-semibold text-red-500 uppercase">
          {myth.warning}
        </p>
        <div className="mt-8 space-y-6">
          {myth.facts.map((fact, index) => (
            <div key={index} className="flex gap-4">
              <div className="text-primary font-medium whitespace-nowrap">
                Fact {index + 1}:
              </div>
              <div>{fact}</div>
            </div>
          ))}
        </div>
      </article>
      <div className="fixed bottom-4 right-4">
        <ShareButtons />
      </div>
    </div>
  );
};

export default Myth;