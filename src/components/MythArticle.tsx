import { motion } from "framer-motion";
import { MythData } from "@/data/myths";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent } from "./ui/card";

interface MythArticleProps {
  myth: MythData;
}

export const MythArticle = ({ myth }: MythArticleProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/kaspa/${myth.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <Card 
        className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={handleCardClick}
      >
        <CardHeader>
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/50 text-primary rounded-full">
              {myth.category}
            </span>
            <h3 className="text-2xl font-bold hover:text-primary transition-colors">
              {myth.title}
            </h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="font-medium text-black dark:text-white">{myth.claim}</p>
            <div className="space-y-2">
              {myth.facts.slice(0, 2).map((fact, index) => (
                <div key={index} className="flex gap-4">
                  <span className="font-bold text-primary shrink-0">Fact {index + 1}:</span>
                  <p className="text-black dark:text-white line-clamp-2">{fact}</p>
                </div>
              ))}
              {myth.facts.length > 2 && (
                <p className="text-primary text-sm font-medium">
                  Click to read {myth.facts.length - 2} more facts...
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};