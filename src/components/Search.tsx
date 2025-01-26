import { useState } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto px-4"
    >
      <div className={cn(
        "relative flex items-center transition-all duration-300",
        isFocused ? "transform scale-105" : ""
      )}>
        <SearchIcon className="absolute left-4 w-5 h-5 text-secondary/50" />
        <input
          type="text"
          placeholder="Search facts about Kaspa..."
          className="w-full py-3 pl-12 pr-4 rounded-full border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary/5 transition-all"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </motion.div>
  );
};