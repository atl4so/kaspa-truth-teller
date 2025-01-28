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
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDQwIDE2Ij48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Im01LjM3NSAyLjY0N2wuMDA2LS4wMjhsLjAxNi0uMTE4bC0uNzQtLjAwNGMtLjY2OC0uMDA0LS44NzMgMC0uODkxLjAxN2MtLjAwOS4wMDgtLjI0Ljg4NS0uNjUxIDIuNDczYy0uMTk2Ljc1OC0uMzYxIDEuMzYzLS4zNjcgMS4zNDVzLS4yNC0uODgzLS41MjItMS45MjJhMTA3IDEwNyAwIDAgMC0uNTI0LTEuOTAxYy0uMDEtLjAxLS45MDYtLjAxNC0xLjYzMi0uMDA4Yy0uMTA1LjAwMS0uMTY0LS4yMDUuOTM4IDMuMjk5Yy4xNTIuNDg1LjM4MSAxLjE3Mi41MDcgMS41MjZjLjE0Ni40MDguMjUuNzI0LjMyMS45ODdjLjEyNi41MDEuMTMuODE1LjEwMyAxLjE4MmMtLjAzMi40MjMtLjAzNiAzLjQxMy0uMDA1IDMuNDYzYy4wMjQuMDM4IDEuNDI1LjA1NiAxLjU1OC4wMmMuMDIxLS4wMDYuMDM1LS4wMjYuMDQ1LS4xMzljLjAzMy0uMDk3LjAzNi0uNDg0LjAzNi0yLjA5VjguNjk4bC4wOS0uMjgzYy4wNTktLjE4NS4yMDYtLjY3Mi4zMjgtMS4wODJsLjMyNy0xLjA5Yy41MjktMS43MjQgMS4wMzMtMy40MTkgMS4wNDctMy41MTZsLjAxMS0uMDc5em03Ljg0NiAyLjQ4OHYuMTA3aC0uMDE3bC0uMDA5IDIuOTUzbC0uMDA5IDIuODYzbC0uMjI5LjIzM2MtLjI1Ny4yNjEtLjQ2Mi4zNjEtLjY0OC4zMTRjLS4yMDMtLjA1MS0uMTk3LjAyOC0uMjE0LTMuMzU2bC0uMDE2LTMuMTE1aC0xLjQ3NHYuMTA3aC0uMDE3djMuMzhjMCAzLjYyMSAwIDMuNjE5LjE4NCAzLjk4MmMuMTQ2LjI5LjM2LjQzMS43MjUuNDc5Yy40ODEuMDY0IDEtLjE1NCAxLjQ4MS0uNjIybC4yMDktLjIwM3YuMzUxYzAgLjMwMy4wMDkuMzUzLjA2NC4zNjhjLjA5LjAyNSAxLjIwNi4wMjcgMS4zMjYuMDAybC4xLS4wMjF2LS4xMDRsLjAxNy0uMDAzVjUuMTE0bC0xLjQ3Mi4wMnpNOS40ODMgNi42NjFjLS4xNC0uNTk5LS40MDEtMS4wMDItLjgzMi0xLjI4Yy0uNjc2LS40MzctMS40NDktLjQ4NC0yLjE2NS0uMTNjLS41MjIuMjU4LS44NTkuNjg2LTEuMDMyIDEuMzE0YTEuNCAxLjQgMCAwIDAtLjA0Ny4yMzFjLS4wNDQuMjIyLS4wNDkuNTUyLS4wNjEgMi4wOTNjLS4wMTggMi4zNzQuMDEgMi42NTYuMzA3IDMuMTk1Yy4yOTIuNTI5Ljg5Ny45MTcgMS41NTYuOTk3Yy4xOTguMDI0LjYtLjAxMy44MzItLjA3OGMuNTI1LS4xNDYgMS4wMjktLjU2MSAxLjI1Mi0xLjAzMmExLjggMS44IDAgMCAwIC4xODktLjYwNGMuMDY1LS4zNTMuMDctLjkyNS4wNy0yLjM4MWMwLTEuODU3LS4wMDYtMi4wNi0uMDY4LTIuMzI2ek03LjgwMiAxMS41YS43LjcgMCAwIDEtLjUxNS4wOThjLS4xMzUtLjAyOS0uMzE4LS4yNDEtLjM3NC0uNDM0Yy0uMDctLjI0MS0uMDc1LTMuNTk0LS4wMTUtNC4yNTFjLjEtLjMyOS4zNzgtLjUwMS42ODItLjQxOWMuMjM3LjA2NC4zNTguMjEyLjQyNy41MjNjLjA1MS4yMzEuMDU3LjUxOC4wNDYgMi4yMDdjLS4wMDcgMS4xMi0uMDExIDEuNjY4LS4wNDggMS45NjJjLS4wMzcuMTg1LS4wOTkuMjM1LS4yMDMuMzE1em0yOC4xNDItMy4xNTRoLjcxMmwtLjAxMS0uNjQ1Yy0uMDExLS41OTItLjAyLS42NTktLjA5OS0uODJjLS4xMjUtLjI1My0uMzA5LS4zNjYtLjYwMS0uMzY2Yy0uMzUxIDAtLjU3My4xNy0uNjc4LjUxOGMtLjA0NS4xNDgtLjA5MiAxLjE2Ny0uMDU4IDEuMjU1Yy4wMTkuMDQ5LjEyMS4wNTguNzM1LjA1OG0tNC43Ni0xLjQ2N2EuNDkuNDkgMCAwIDAtLjQ3Ny0uMjc4YS45LjkgMCAwIDAtLjUwOC4yMDNsLS4xMjcuMDk3djQuNjM0bC4xMjcuMDk3Yy4yODguMjIuNjA0LjI2Ni44MjIuMTJhLjQ4LjQ4IDAgMCAwIC4xODYtLjI2M2MuMDU3LS4xNjQuMDYyLS4zNzUuMDU1LTIuMzI1Yy0uMDA4LTIuMDMyLS4wMTItMi4xNTItLjA3OC0yLjI4NSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQwLjAxNCA0Ljc5MWMtLjE0Mi0xLjcwMS0uMjU1LTIuMjUzLS42MDUtMi45NjJDMzguOTQ0Ljg5IDM4LjI3My4zOTUgMzcuMzE3LjI4NmMtLjczOS0uMDg0LTMuNTIxLS4yMDMtNi4wOTQtLjI2Yy00LjQ1Ni0uMDk5LTExLjc4Mi4wOTItMTIuNzE4LjMzMWEyLjI1IDIuMjUgMCAwIDAtMS4wOTQuNjM0Yy0uNTkxLjU4OC0uOTQ0IDEuNDMyLTEuMDg1IDIuNmMtLjMyMyAyLjY2Ni0uMzMgNS44ODYtLjAxOSA4LjY0OWMuMTM0IDEuMTg4LjQxIDEuOTYuOTI4IDIuNTk2Yy4zMjMuMzk3Ljg4MS43MzQgMS4zNzkuODM1Yy4zNS4wNzEgMi4xLjE2OSA0LjY1LjI2Yy4zOC4wMTQgMS4zODUuMDM3IDIuMjM1LjA1MmMxLjc3LjAzMSA1LjAyNS4wMTMgNi44ODYtLjAzOWMxLjI1Mi0uMDM1IDMuNTM0LS4xMjggMy45NjEtLjE2MWMuMTItLjAwOS4zOTgtLjAyNy42MTgtLjAzOWMuNzM5LS4wNDIgMS4yMDktLjE5NiAxLjY1LS41NDNjLjU3MS0uNDQ5IDEuMDEzLTEuMjc4IDEuMi0yLjI1MWMuMTc3LS45Mi4yOTUtMi41NTkuMzE5LTQuNDJjLjAyLTEuNTU1LS4wMDctMi4zOTMtLjExOS0zLjc0MXpNMjIuMjcgNC4xNzVsLS44MjguMDFsLS4wMzYgOC44M2wtLjcxOC4wMDljLS41NTUuMDA4LS43MjQtLjAwMS0uNzM3LS4wMzZjLS4wMS0uMDI1LS4wMjEtMi4wMTYtLjAyNi00LjQyNGwtLjAwOS00LjM3OWwtMS42MTctLjAydi0xLjM4bDQuNzc5LjAxOWwuMDIgMS4zNnptNS4wNzcgNS4wNjF2My43OTdoLTEuMzA4di0uNGMwLS4zMDEtLjAxMS0uNC0uMDQ3LS40Yy0uMDI2IDAtLjE0NC4wOTktLjI2My4yMmMtLjI1OS4yNjMtLjU2NS40NzQtLjgyNy41NzJjLS41NDIuMjAzLTEuMDU2LjA4NC0xLjI3NS0uMjkzYy0uMjAxLS4zNDUtLjIwNC0uNDIzLS4yMDQtNC4wMDV2LTMuMjloMS4zMDdsLjAxIDMuMDk4Yy4wMSAzLjA0NC4wMTEgMy4xLjA4NCAzLjIyNGMuMDk3LjE2NC4yNDQuMjA5LjQ3OC4xNDRjLjEzOC0uMDM4LjIzMi0uMTA1LjQ1NS0uMzI3bC4yODItLjI4VjUuNDM3aDEuMzA4djMuNzk3em01LjEwMiAzLjI1NWMtLjExNS4yNTctLjM3Mi41MDgtLjU4My41N2MtLjU0OS4xNjItLjk5LjAzLTEuNDk5LS40NDljLS4xNTgtLjE0OS0uMzA1LS4yNjktLjMyNy0uMjY5cS0uMDQgMC0uMDQxLjM0NXYuMzQ1aC0xLjMwOFYyLjc4NWgxLjMwOHYxLjY3MmMwIC45MTkuMDEyIDEuNjcyLjAyNyAxLjY3MnMuMTUzLS4xMjIuMzA3LS4yN2MuMzU0LS4zNDEuNjQ5LS40OTEgMS4wMjQtLjUxOWMuNjY5LS4wNTEgMS4wNjguMjk0IDEuMjUgMS4wOGMuMDU3LjI0NS4wNjIuNTI1LjA2MiAyLjc5OGMwIDIuNzY4IDAgMi43OC0uMjIxIDMuMjczem01LjUzNS0xLjUyYTUgNSAwIDAgMS0uMDc3LjcyN2MtLjE4Mi42NzQtLjY2NiAxLjE1Mi0xLjM2NiAxLjM0OGMtLjk0Mi4yNjQtMS45OC0uMTY4LTIuMzk0LS45OTdjLS4yMzItLjQ2NS0uMjQxLS41NTgtLjI0MS0yLjgzMWMwLTEuODUzLjAwNy0yLjA4MS4wNjYtMi4zMzRjLjE2OC0uNzE1LjU4NC0xLjE3OCAxLjI4OS0xLjQzNWMuMjA0LS4wNzQuNDE3LS4xMTMuNjMtLjExN2MuNzYxLS4wMTYgMS41MTUuMzkzIDEuODMyIDEuMDU5Yy4yMTMuNDQ5LjI0LjY0Mi4yNjEgMS45MDhsLjAxOSAxLjEzNmwtMi43ODkuMDE5bC0uMDEuNzYzYy0uMDE1IDEuMDc3LjA1OCAxLjQwOC4zNDkgMS42MDNjLjI0NC4xNjUuNjIuMTUyLjgyNC0uMDI3Yy4xOTItLjE2OC4yNDYtLjM0OS4yNjUtLjg3N2wuMDE3LS40NjNoMS4zNDd6Ii8+PC9zdmc+"
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
