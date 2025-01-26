import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const shareData = {
    title,
    url: url.replace(":/", ""), // Remove the erroneous :/ from the URL
    text: title,
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to clipboard copy
        await navigator.clipboard.writeText(`${title}\n${url.replace(":/", "")}`);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="flex justify-start mt-6">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleShare}
        aria-label="Share this article"
      >
        <Share2 className="h-4 w-4 mr-2" aria-hidden="true" />
        Share
      </Button>
    </div>
  );
};