import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export const ScrollSpy = () => {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const updateProgress = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;
      setProgress(Math.min(scrollPercentage, 100));

      // Find current section
      const sections = document.querySelectorAll("article");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 3 && rect.bottom >= windowHeight / 3) {
          const title = section.querySelector("h3")?.textContent || "";
          setCurrentSection(title);
        }
      });
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-accent/20 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="py-2">
          <Progress value={progress} className="h-1 mb-2" />
          {currentSection && (
            <p className="text-sm font-medium text-primary truncate">
              {currentSection}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};