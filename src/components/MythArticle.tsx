import { motion } from "framer-motion";
import { MythData } from "@/data/myths";

interface MythArticleProps {
  myth: MythData;
}

export const MythArticle = ({ myth }: MythArticleProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto mb-12 prose prose-invert dark:prose-invert"
    >
      <h3 className="text-2xl font-bold mb-4 text-foreground">{`Myth ${myth.id.split('-')[1]}: ${myth.title}`}</h3>
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full mb-2">
          {myth.category}
        </span>
        <p className="font-medium text-foreground/90 mb-4">{myth.claim}</p>
      </div>
      <div className="space-y-4">
        {myth.facts.map((fact, index) => (
          <div key={index} className="flex gap-4">
            <span className="font-bold text-primary shrink-0">Fact {index + 1}:</span>
            <p className="text-foreground/90">{fact}</p>
          </div>
        ))}
      </div>
    </motion.article>
  );
};