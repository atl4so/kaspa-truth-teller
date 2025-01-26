import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Link } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const { toast } = useToast();

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy the URL manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex gap-2 items-center mt-4">
      <span className="text-sm text-gray-500 flex items-center gap-1">
        <Share2 className="w-4 h-4" /> Share:
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={shareToTwitter}
        className="gap-1"
      >
        <Twitter className="w-4 h-4" />
        Twitter
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={shareToFacebook}
        className="gap-1"
      >
        <Facebook className="w-4 h-4" />
        Facebook
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="gap-1"
      >
        <Link className="w-4 h-4" />
        Copy Link
      </Button>
    </div>
  );
};