import { motion } from "framer-motion";
import { MythData } from "@/data/myths";
import { Link } from "react-router-dom";
import { ShareButtons } from "./ShareButtons";
import { ExternalLink } from "lucide-react";

interface MythArticleProps {
  myth: MythData;
}

export const MythArticle = ({ myth }: MythArticleProps) => {
  // Generate the specific myth URL
  const mythUrl = `${window.location.origin}/kaspa/${myth.id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto mb-12 prose prose-slate dark:prose-invert"
    >
      <Link to={`/kaspa/${myth.id}`} className="no-underline">
        <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">{myth.title}</h3>
      </Link>
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/50 text-primary rounded-full mb-2">
          {myth.category}
        </span>
        <p className="font-medium text-black mb-4">{myth.claim}</p>
      </div>
      <div className="space-y-4">
        {myth.facts.map((fact, index) => (
          <div key={index} className="flex gap-4">
            <span className="font-bold text-primary shrink-0">Fact {index + 1}:</span>
            <p className="text-black">{fact}</p>
          </div>
        ))}
      </div>
      {myth.references && myth.references.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          <p className="font-semibold mb-2">References:</p>
          <ul className="list-none p-0">
            {myth.references.map((ref, index) => (
              <li key={index} className="flex items-center gap-2">
                <ExternalLink size={14} />
                <a 
                  href={ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Read more
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ShareButtons 
        title={`${myth.title} - KaspArchive`}
        url={mythUrl}
      />
    </motion.article>
  );
};