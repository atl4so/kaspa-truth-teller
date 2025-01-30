import { motion } from "framer-motion";
import { MythData } from "@/data/myths";
import { Link } from "react-router-dom";
import { ShareButtons } from "./ShareButtons";
import { X, Github, Link2, Twitter, Youtube, MessageSquare, FileText, Globe, Bot } from "lucide-react";

interface MythArticleProps {
  myth: MythData;
}

const WebsiteIcon = () => (
  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
);

const TwitterIcon = () => (
  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
);

const DiscordIcon = () => (
  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
);

const YoutubeIcon = () => (
  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
);

const ChatGPTIcon = () => (
  <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
);

const PDFIcon = () => (
  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
);

const getLinkType = (url: string, mythId: string) => {
  if (url === "https://t.co/J3RaAGxcG6") return "pdf";
  if (url.includes("twitter.com") || url.includes("x.com")) return "twitter";
  if (url.includes("github.com")) return "github";
  if (url.includes("youtu.be") || url.includes("youtube.com")) return "youtube";
  if (url.includes("chatgpt.com")) return "chatgpt";
  if (url.includes("discord.com")) return "discord";
  return "website";
};

const getLinkOrder = (type: string) => {
  const orderMap: { [key: string]: number } = {
    website: 1,
    youtube: 2,
    twitter: 3,
    chatgpt: 4,
    discord: 5,
    pdf: 6,
    github: 7
  };
  return orderMap[type] || 999;
};

const sortReferences = (references: string[], mythId: string) => {
  return [...references].sort((a, b) => {
    const typeA = getLinkType(a, mythId);
    const typeB = getLinkType(b, mythId);
    return getLinkOrder(typeA) - getLinkOrder(typeB);
  });
};

export const MythArticle = ({ myth }: MythArticleProps) => {
  const mythNumber = myth.id.replace('fud-', '');
  const mythUrl = `${window.location.origin}/kaspa/${mythNumber}`;

  const getLinkIcon = (url: string) => {
    if (url === "https://t.co/J3RaAGxcG6") return <PDFIcon />;
    if (url.includes("twitter.com") || url.includes("x.com")) return <TwitterIcon />;
    if (url.includes("github.com")) return <Github className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (url.includes("youtu.be") || url.includes("youtube.com")) return <YoutubeIcon />;
    if (url.includes("chatgpt.com")) return <ChatGPTIcon />;
    if (url.includes("discord.com")) return <DiscordIcon />;
    return <WebsiteIcon />;
  };

  const sortedReferences = myth.references ? sortReferences(myth.references, myth.id) : [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto mb-12 prose prose-slate dark:prose-invert"
    >
      <Link to={`/kaspa/${mythNumber}`} className="no-underline">
        <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
          FUD {mythNumber}: "{myth.title}"
        </h3>
      </Link>
      <div className="mb-4">
        <div className="flex flex-wrap items-center gap-2">
          {sortedReferences.length > 0 && (
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/50 text-primary rounded-full">
                Fact Sources:
              </span>
              <div className="flex flex-wrap gap-2">
                {sortedReferences.map((ref, index) => (
                  <a 
                    key={index}
                    href={ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-primary transition-colors p-1 sm:p-2 rounded-full bg-accent/50"
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
            <X className="text-red-500 w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
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