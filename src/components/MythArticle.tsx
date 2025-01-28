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
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJtMTIuNTk0IDIzLjI1OGwtLjAxMi4wMDJsLS4wNzEuMDM1bC0uMDIuMDA0bC0uMDE4LS4wMDRsLS4wNzEtLjAzNnEtLjAxNi0uMDA0LS4wMjQuMDA2bC0uMDA0LjAxbC0uMDE3LjQyOGwuMDA1LjAybC4wMS4wMTNsLjEwNC4wNzRsLjAxNS4wMDRsLjAxMi0uMDA0bC4xMDQtLjA3NGwuMDEyLS4wMTZsLjAwNC0uMDE3bC0uMDE3LS40MjdxLS4wMDQtLjAxNi0uMDE2LS4wMThtLjI2NC0uMTEzbC0uMDE0LjAwMmwtLjE4NC4wOTNsLS4wMS4wMWwtLjAwMy4wMTFsLjAxOC40M2wuMDA1LjAxMmwuMDA4LjAwOGwuMjAxLjA5MnEuMDE5LjAwNS4wMjktLjAwOGwuMDA0LS4wMTRsLS4wMzQtLjYxNHEtLjAwNS0uMDE5LS4wMi0uMDIybS0uNzE1LjAwMmEuMDIuMDIgMCAwIDAtLjAyNy4wMDZsLS4wMDYuMDE0bC0uMDM0LjYxNHEuMDAxLjAxOC4wMTcuMDI0bC4wMTUtLjAwMmwuMjAxLS4wOTNsLjAxLS4wMDhsLjAwMy0uMDExbC4wMTgtLjQzbC0uMDAzLS4wMTJsLS4wMS0uMDF6Ii8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTkuNzUzIDQuNjU5YTEgMSAwIDAgMC0xLjUwNi0xLjMxN2wtNS4xMSA1Ljg0TDguOCAzLjRBMSAxIDAgMCAwIDggM0g0YTEgMSAwIDAgMC0uOCAxLjZsNi40MzcgOC41ODJsLTUuMzkgNi4xNmExIDEgMCAwIDAgMS41MDYgMS4zMTdsNS4xMS01Ljg0MUwxNS4yIDIwLjZhMSAxIDAgMCAwIC44LjRoNGExIDEgMCAwIDAgLjgtMS42bC02LjQzNy04LjU4Mmw1LjM5LTYuMTZaIi8+PC9nPjwvc3ZnPg=="
    alt="Twitter"
    className="w-5 h-5"
  />
);

const YoutubeIcon = () => (
  <img 
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Im0yMy45OSAxMy41NDNsLS4wMDctLjI4OGMtLjAxNS0xLjEyMi0uNjQ1LTYuNDk1LS45OTktNy40NTdjLS40MS0xLjExMS0uOTc0LTEuOTQ1LTEuNjc1LTIuNDhjLTEuMTQzLS44NzMtMi4xMTUtMS4wNjMtMy4zMTMtMS4wODdoLS4wM2MtLjUxIDAtMy44NDguNDE1LTYuNjQyLjgwMWMtMi43OTcuMzg3LTYuMzAzLjkxNS03LjE0IDEuMjI3Yy0xLjE1My40MzItMi4wNy45OTctMi43OTYgMS43MjhDLjA1IDcuMzMyLS4xMTMgOC43MzEuMDU0IDEwLjU1M2MuMTMgMS40MTIuODc1IDYuOTc1IDEuMzAyIDguMjQ4Yy41NzQgMS43MTcgMS42OTQgMi43NSAzLjE1NCAyLjkwOWMuMzYuMDM5LjcwNC4wNTkgMS4wNDUuMDU5YzEuMjggMCAyLjI5NS0uMjc4IDMuNDctLjU5OGMxLjg0OC0uNTA1IDQuMTQ3LTEuMTMgOC44OTMtMS4xM2guMTRjMS4xNjIgMCA0LjAwOC0uMjYzIDUuMzAzLTIuNjg3Yy42OTMtMS4yOTcuNjUyLTIuODcuNjI5LTMuODExbS03LjcxOS0xLjY3bC0uMTA1LjA2NnEtLjQxMS4yNzgtLjgxOS41NjNsLTQuMjk4IDIuOTc1Yy0uMjcuMjEtLjc0OC41MjEtMS4wMTYuNTIxYS4yNC4yNCAwIDAgMS0uMTA3LS4wMjRjLS4yMjYtLjEyLS4zMDMtLjk0LS4zNTYtMS4zNGwtLjAxMS0uMDg3Yy0uMDY1LS40NzgtLjU5NC01LjAzNS0uNjU0LTUuNTM1Yy0uMDE3LS4xNDItLjEwNS0uNjYzLjA1NS0uNzgxYy4wNS0uMDM3LjEyLS4wNS4yLS4wNWMuMTk1IDAgLjQ0Mi4wODMuNTQ5LjExOGMuODQ1LjI3MiA1LjA4MyAxLjc3NCA2LjQgMi40NDhxLjA1Ny4wMy4xMjIuMDU3Yy4xODguMDguNDQ2LjE5Mi40NTIuNTFjLjAwNC4zMDQtLjIyNS40NDYtLjQxMi41NnoiLz48L3N2Zz4="
    alt="YouTube"
    className="w-5 h-5"
  />
);

export const MythArticle = ({ myth }: MythArticleProps) => {
  const mythUrl = `${window.location.origin}/kaspa/${myth.id}`;
  const mythNumber = myth.id.split("-")[1];

  const isTwitterLink = (url: string) => {
    return url.includes("twitter.com") || url.includes("x.com");
  };

  const isGithubLink = (url: string) => {
    return url.includes("github.com");
  };

  const isYoutubeLink = (url: string) => {
    return url.includes("youtu.be") || url.includes("youtube.com");
  };

  const getLinkIcon = (url: string) => {
    if (isTwitterLink(url)) return <TwitterIcon />;
    if (isGithubLink(url)) return <Github className="w-6 h-6" />;
    if (isYoutubeLink(url)) return <YoutubeIcon />;
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
