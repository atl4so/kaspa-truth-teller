import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url
        });
      } else {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link copied to clipboard",
          description: "You can now share it with others"
        });
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