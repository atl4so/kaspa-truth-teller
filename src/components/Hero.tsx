import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[30vh] flex flex-col items-center justify-center px-4 py-4 md:py-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full mb-3"
        >
          Discover the Truth About Kaspa
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold mb-3 tracking-tight text-foreground"
        >
          Debunking Myths, Revealing Facts
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg text-muted-foreground mb-3 max-w-2xl mx-auto"
        >
          Your trusted source for accurate information about Kaspa. We separate fact from fiction with detailed research and clear explanations.
        </motion.p>
      </div>
    </motion.section>
  );
};