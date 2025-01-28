import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MythCardProps {
  myth: string;
  fact: string;
  className?: string;
}

export const MythCard = ({ myth, fact, className }: MythCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "p-6 rounded-lg bg-white shadow-lg border border-accent/20 backdrop-blur-sm",
        className
      )}
    >
      <div className="space-y-4">
        <div>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-accent text-primary rounded-full mb-2">
            FUD
          </span>
          <p className="font-medium text-black">{myth}</p>
        </div>
        <div>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary text-white rounded-full mb-2">
            Fact
          </span>
          <p className="text-black">{fact}</p>
        </div>
      </div>
    </motion.div>
  );
};