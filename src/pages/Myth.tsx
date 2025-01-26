import { useParams, Link } from "react-router-dom";
import { myths } from "@/data/myths";
import { ShareButtons } from "@/components/ShareButtons";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Myth = () => {
  const { id } = useParams();
  const myth = myths.find((m) => m.id === id);

  if (!myth) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Myth not found</h2>
          <Link
            to="/"
            className="text-primary hover:text-primary/80"
          >
            Back to Main
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${myth.title} - KaspArchive`}</title>
        <meta name="description" content={myth.claim} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={`${myth.title} - KaspArchive`} />
        <meta property="og:description" content={myth.claim} />
        <meta property="og:image" content="https://i.postimg.cc/hPVwjmgx/images-1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={`${myth.title} - KaspArchive`} />
        <meta property="twitter:description" content={myth.claim} />
        <meta property="twitter:image" content="https://i.postimg.cc/hPVwjmgx/images-1.png" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Main
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12 prose prose-slate dark:prose-invert"
        >
          <h3 className="text-2xl font-bold mb-4">{myth.title}</h3>
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
        </motion.article>
        <div className="fixed bottom-4 right-4">
          <ShareButtons 
            title={`${myth.title} - KaspArchive`}
            url={window.location.href}
          />
        </div>
      </div>
    </>
  );
};

export default Myth;