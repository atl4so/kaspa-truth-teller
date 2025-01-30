import { ExternalLink, MessageSquare } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 py-6 bg-[#f3f3f3] border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            {currentYear} {" "}
            <a
              href="https://kasparchive.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 inline-flex items-center gap-1"
            >
              KaspArchive.com
              <ExternalLink className="h-3 w-3" />
            </a>
            . All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a
              href="https://t.me/kasparchive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
            >
              CONTACT
              <MessageSquare className="h-3 w-3" />
            </a>
            <a
              href="https://kasmedia.com/article/understanding-ghostdag-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
            >
              GhostDag
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://kaspa.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
            >
              Kaspa
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://wiki.kaspa.org/en/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
            >
              Wiki
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};