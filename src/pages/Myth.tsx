import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { myths } from "@/data/myths";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { ShareButtons } from "@/components/ShareButtons";

const Myth = () => {
  const { mythId } = useParams();
  const myth = myths.find((m) => m.id === mythId);

  useEffect(() => {
    if (myth) {
      document.title = `${myth.title} - KaspArchive`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", myth.claim);
      }
    }
  }, [myth]);

  if (!myth) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Myth not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to All Myths
        </Button>
      </Link>
      
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto prose prose-slate dark:prose-invert"
      >
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/50 text-primary rounded-full mb-4">
            {myth.category}
          </span>
          <h1 className="text-3xl font-bold mb-4">{myth.title}</h1>
          <p className="text-xl font-medium text-black dark:text-white mb-8">{myth.claim}</p>
        </div>

        <div className="space-y-6">
          {myth.facts.map((fact, index) => (
            <div key={index} className="flex gap-4">
              <span className="font-bold text-primary shrink-0">Fact {index + 1}:</span>
              <p className="text-black dark:text-white">{fact}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <ShareButtons 
            title={`${myth.title} - KaspArchive`}
            url={`${window.location.origin}/kaspa/${myth.id}`}
          />
        </div>
      </motion.article>
    </div>
  );
};

export default Myth;