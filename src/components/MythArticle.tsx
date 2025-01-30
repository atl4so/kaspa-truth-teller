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

export const MythArticle = ({ myth }: MythArticleProps) => {
  const mythNumber = myth.id.replace('fud-', '');
  const mythUrl = `${window.location.origin}/kaspa/${mythNumber}`;

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
    return url.toLowerCase().endsWith('.pdf') || url.includes("t.co/") || url.includes("eprint.iacr.org") || url.includes("arxiv.org");
  };

  const isDiscordLink = (url: string) => {
    return url.includes("discord.com");
  };

  const isFUD6BitMEXLink = (url: string, mythId: string) => {
    return mythId === "fud-6" && url.includes("blog.bitmex.com");
  };

  const getLinkIcon = (url: string) => {
    if (isFUD6BitMEXLink(url, myth.id)) {
      return <WebsiteIcon />;
    }
    if (isTwitterLink(url)) return <TwitterIcon />;
    if (isGithubLink(url)) return <Github className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (isYoutubeLink(url)) return <YoutubeIcon />;
    if (isChatGPTLink(url)) return <ChatGPTIcon />;
    if (isPDFLink(url)) return <PDFIcon />;
    if (isDiscordLink(url)) return <DiscordIcon />;
    return <WebsiteIcon />;
  };

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
          {myth.references && myth.references.length > 0 && (
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/50 text-primary rounded-full">
                Fact Sources:
              </span>
              <div className="flex flex-wrap gap-2">
                {myth.references.map((ref, index) => (
                  <a 
                    key={index}
                    href={ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-primary transition-colors p-1 sm:p-2"
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