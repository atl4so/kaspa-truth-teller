import { motion } from "framer-motion";
import { MythData } from "@/data/myths";
import { Link } from "react-router-dom";
import { ShareButtons } from "./ShareButtons";
import { X, Github, Link2 } from "lucide-react";

interface MythArticleProps {
  myth: MythData;
}

const WebsiteIcon = () => (
  <img 
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMiAxNGE4IDggMCAxIDAgOCA4YTguMDEgOC4wMSAwIDAgMC04LThtNS45MSA3aC0xLjk1NGExMiAxMiAwIDAgMC0xLjIxOC00LjMzMkE2LjAxIDYuMDEgMCAwIDEgMjcuOTEgMjFtLTcuODU0IDBBMTAgMTAgMCAwIDEgMjIgMTYuMDE1QTEwIDEwIDAgMCAxIDIzLjk0NSAyMXptMy44OSAyQTEwIDEwIDAgMCAxIDIyIDI3Ljk4NUExMCAxMCAwIDAgMSAyMC4wNTUgMjN6bS00LjY4NC02LjMzMkExMiAxMiAwIDAgMCAxOC4wNDQgMjFIMTYuMDlhNi4wMSA2LjAxIDAgMCAxIDMuMTcyLTQuMzMyTTE2LjA5IDIzaDE5NTNhMTIgMTIgMCAwIDAgMS4yMTggNC4zMzJBNi4wMSA2LjAxIDAgMCAxIDE2LjA5IDIzbTguNjQ4IDQuMzMyQTEyIDEyIDAgMCAwIDI1Ljk1NiAyM2gxLjk1NGE2LjAxIDYuMDEgMCAwIDEtMy4xNzIgNC4zMzJNNiAxNGg2djJINnptMC04aDEydjJINnptMCA0aDEydjJINnptMCAxNGg2djJINnoiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAzMEg0YTIgMiAwIDAgMS0yLTJWNGEyIDIgMCAwIDEgMi0yaDE2YTIgMiAwIDAgMSAyIDJ2OGgtMlY0SDR2MjRoOFoiLz48L3N2Zz4="
    alt="Website"
    className="w-5 h-5"
  />
);

const TwitterIcon = () => (
  <img 
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJtMTIuNTk0IDIzLjI1OGwtLjAxMi4wMDJsLS4wNzEuMDM1bC0uMDIuMDA0bC0uMDE4LS4wMDRsLS4wNzEtLjAzNnEtLjAxNi0uMDA0LS4wMjQuMDA2bC0uMDA0LjAxbC0uMDE3LjQyOGwuMDA1LjAybC4wMS4wMTNsLjEwNC4wNzRsLjAxNS4wMDRsLjAxMi0uMDA0bC4xMDQtLjA3NGwuMDEyLS4wMTZsLjAwNC0uMDE3bC0uMDE3LS40MjdxLS4wMDQtLjAxNi0uMDE2LS4wMW0uMjY0LS4xMTNsLS4wMTQuMDAybC0uMTg0LjA5M2wtLjAxLjAxbC0uMDAzLjAxMWwuMDE4LjQzbC4wMDUuMDEybC4wMDguMDA4bC4yMDEuMDkycS4wMTkuMDA1LjAyOS0uMDA4bC4wMDQtLjAxNGwtLjAzNC0uNjE0cS0uMDA1LS4wMTktLjAyLS4wMjJtLS43MTUuMDAyYS4wMi4wMiAwIDAgMC0uMDI3LjAwNmwtLjAwNi4wMTRsLS4wMzQuNjE0cS4wMDEuMDE4LjAxNy4wMjRsLjAxNS0uMDAybC4yMDEtLjA5M2wuMDEtLjAwOGwuMDAzLS4wMTFsLjAxOC0uNDNsLS4wMDMtLjAxMmwtLjAxLS4wMXoiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOS43NTMgNC42NTlhMSAxIDAgMCAwLTEuNTA2LTEuMzE3bC01LjExIDUuODRMOC44IDMuNEExIDEgMCAwIDAgOCAzSDRhMSAxIDAgMCAwLS44IDEuNmw2LjQzNyA4LjU4MmwtNS4zOSA2LjE2YTEgMSAwIDAgMCAxLjUwNiAxLjMxN2w1LjExLTUuODQxTDE1LjIgMjAuNmExIDEgMCAwIDAgLjguNGg0YTEgMSAwIDAgMCAuOC0xLjZsLTYuNDM3LTguNTgybDUuMzktNi4xNloiLz48L2c+PC9zdmc+"
    alt="Twitter"
    className="w-5 h-5"
  />
);

const YoutubeIcon = () => (
  <img 
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMyA5LjcxYTguNSA4LjUgMCAwIDAtLjkxLTQuMTNhMi45MiAyLjkyIDAgMCAwLTEuNzItMUE3OCA3OCAwIDAgMCAxMiA0LjI3YTc5IDc5IDAgMCAwLTguMzQuM2EyLjg3IDIuODcgMCAwIDAtMS40Ni43NGMtLjkuODMtMSAyLjI1LTEuMSAzLjQ1YTQ4IDQ4IDAgMCAwIDAgNi40OGE5LjYgOS42IDAgMCAwIC4zIDJhMy4xNCAzLjE0IDAgMCAwIC43MSAxLjM2YTIuODYgMi44NiAwIDAgMCAxLjQ5Ljc4YTQ1IDQ1IDAgMCAwIDYuNS4zM2MzLjUuMDUgNi41NyAwIDEwLjItLjI4YTIuOSAyLjkgMCAwIDAgMS41My0uNzhhMi41IDIuNSAwIDAgMCAuNjEtMWExMC42IDEwLjYgMCAwIDAgLjUyLTMuNGMuMDQtLjU2LjA0LTMuOTQuMDQtNC41NE05Ljc0IDE0Ljg1VjguNjZsNS45MiAzLjExYy0xLjY2LjkyLTMuODUgMS45Ni01LjkyIDMuMDgiLz48L3N2Zz4="
    alt="YouTube"
    className="w-5 h-5"
  />
);

const ChatGPTIcon = () => (
  <img 
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xOC4zOCAyNy45NHYtMTQuNGwxMS4xOS02LjQ2YzYuMi0zLjU4IDE3LjMgNS4yNSAxMi42NCAxMy4zMyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTE4LjM4IDIwLjk0bDEyLjQ3LTcuMmwxMS4xOSA2LjQ2YzYuMiAzLjU4IDQuMSAxNy42MS01LjIzIDE3LjYxIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMjQuNDQgMTcuNDRsMTIuNDcgNy4ydjEyLjkzYzAgNy4xNi0xMy4yIDEyLjM2LTE3Ljg2IDQuMjgiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0zMC41IDIxLjJ2MTQuMTRMMTkuMzEgNDEuOGMtNi4yIDMuNTgtMTcuMy01LjI1LTEyLjY0LTEzLjMzIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMzAuNSAyNy45NGwtMTIuNDcgNy4ybC0xMS4xOS02LjQ2Yy02LjIxLTMuNTktNC4xMS0xNy42MSA1LjIyLTE3LjYxIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMjQuNDQgMzEuNDRsLTEyLjQ3LTcuMlYxMS4zMWMwLTcuMTYgMTMuMi0xMi4zNiAxNy44Ni00LjI4Ii8+PC9zdmc+"
    alt="ChatGPT"
    className="w-5 h-5"
  />
);

export const MythArticle = ({ myth }: MythArticleProps) => {
  const mythUrl = `${window.location.origin}/kaspa/${myth.id}`;
  const mythNumber = myth.id.split("-")[1];

  const isTwitterLink = (url: string) => {
    return url.includes("twitter.com") || url.includes("x.com") || url.includes("t.co");
  };

  const isGithubLink = (url: string) => {
    return url.includes("github.com");
  };

  const isYoutubeLink = (url: string) => {
    return url.includes("youtu.be") || url.includes("youtube.com");
  };

  const isChatGPTLink = (url: string) => {
    return url.includes("chatgpt.com") || url.includes("chat.openai.com");
  };

  const getLinkIcon = (url: string) => {
    if (isTwitterLink(url)) return <TwitterIcon />;
    if (isGithubLink(url)) return <Github className="w-5 h-5" />;
    if (isYoutubeLink(url)) return <YoutubeIcon />;
    if (isChatGPTLink(url)) return <ChatGPTIcon />;
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
                {myth.references.map((ref, index) => (
                  <a 
                    key={index}
                    href={ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-primary transition-colors p-2"
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