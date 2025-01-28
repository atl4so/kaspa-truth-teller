import { motion } from "framer-motion";
import { MythData } from "@/data/myths";
import { Link } from "react-router-dom";
import { ShareButtons } from "./ShareButtons";
import { ExternalLink, X } from "lucide-react";

interface MythArticleProps {
  myth: MythData;
}

export const MythArticle = ({ myth }: MythArticleProps) => {
  const mythUrl = `${window.location.origin}/kaspa/${myth.id}`;
  const mythNumber = myth.id.split("-")[1];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto mb-12 prose prose-slate dark:prose-invert"
    >
      <Link to={`/kaspa/${myth.id}`} className="no-underline">
        <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
          Myth {mythNumber}: "{myth.title}"
        </h3>
      </Link>
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/50 text-primary rounded-full">
            {myth.category}
          </span>
          {myth.references && myth.references.length > 0 && (
            <a 
              href={myth.references[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-sm font-medium bg-accent/50 text-primary rounded-full hover:bg-accent/70 transition-colors"
            >
              <ExternalLink size={14} className="mr-1" />
              Read more
            </a>
          )}
        </div>
        <div className="flex items-start gap-4 mt-6 bg-red-50 p-4 rounded-lg border border-red-100">
          <div className="bg-red-100 p-2 rounded-full">
            <X className="text-red-500" size={32} strokeWidth={3} />
          </div>
          <div className="flex-1">
            <span className="font-bold text-red-500 text-lg">The False Claim: </span>
            <span className="text-black">{myth.claim}</span>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {myth.facts.map((fact, index) => (
          <div key={index} className="flex gap-4">
            <span className="font-bold text-primary shrink-0">Fact {index + 1}:</span>
            <p className="text-black">{fact}</p>
          </div>
        ))}
      </div>
      <ShareButtons 
        title={`Myth ${mythNumber}: ${myth.title} - KaspArchive`}
        url={mythUrl}
      />
    </motion.article>
  );
};