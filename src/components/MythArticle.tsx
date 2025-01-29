import { motion } from "framer-motion";
import { MythData } from "@/data/myths";
import { Link } from "react-router-dom";
import { ShareButtons } from "./ShareButtons";
import { Globe, Github, Link2, Twitter, MessageSquare, Youtube, FileText } from "lucide-react";

interface MythArticleProps {
  myth: MythData;
}

export const MythArticle = ({ myth }: MythArticleProps) => {
  const mythUrl = `${window.location.origin}/kaspa/${myth.id}`;
  const mythNumber = myth.id.split("-")[1];

  const isWebsiteLink = (url: string) => {
    return !isTwitterLink(url) && !isGithubLink(url) && !isYoutubeLink(url) && !isChatGPTLink(url) && !isPDFLink(url);
  };

  const isTwitterLink = (url: string) => {
    return url.includes("twitter.com") || url.includes("x.com");
  };

  const isGithubLink = (url: string) => {
    return url.includes("github.com");
  };

  const isYoutubeLink = (url: string) => {
    return url.includes("youtu.be") || url.includes("youtube.com");
  };

  const isChatGPTLink = (url: string) => {
    return url.includes("chatgpt.com");
  };

  const isPDFLink = (url: string) => {
    return url.toLowerCase().endsWith('.pdf');
  };

  const sortLinks = (links: string[]) => {
    return links.sort((a, b) => {
      const getOrder = (url: string) => {
        if (isWebsiteLink(url)) return 1;
        if (isTwitterLink(url)) return 2;
        if (isChatGPTLink(url)) return 3;
        if (isYoutubeLink(url)) return 4;
        if (isGithubLink(url)) return 5;
        if (isPDFLink(url)) return 6;
        return 7;
      };
      return getOrder(a) - getOrder(b);
    });
  };

  const getLinkIcon = (url: string) => {
    const iconProps = { className: "w-5 h-5" };
    
    if (isWebsiteLink(url)) return <Globe {...iconProps} />;
    if (isTwitterLink(url)) return <Twitter {...iconProps} />;
    if (isChatGPTLink(url)) return <MessageSquare {...iconProps} />;
    if (isYoutubeLink(url)) return <Youtube {...iconProps} />;
    if (isGithubLink(url)) return <Github {...iconProps} />;
    if (isPDFLink(url)) return <FileText {...iconProps} />;
    return <Link2 {...iconProps} />;
  };

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
          FUD {mythNumber}: "{myth.title}"
        </h3>
      </Link>
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/50 text-primary rounded-full">
            {myth.category}
          </span>
          {myth.references && myth.references.length > 0 && (
            <div className="inline-flex items-center gap-2">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/50 text-primary rounded-full">
                Fact Sources:
              </span>
              <div className="flex gap-2">
                {sortLinks(myth.references).map((ref, index) => (
                  <a 
                    key={index}
                    href={ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center hover:text-primary transition-colors p-2"
                  >
                    {getLinkIcon(ref)}
                  </a>
                ))}
              </div>
            </div>
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
        title={`FUD ${mythNumber}: ${myth.title} - KaspArchive`}
        url={mythUrl}
      />
    </motion.article>
  );
};