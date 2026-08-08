import { Kbd } from "@/components/ui/kbd";
import { ExternalLinkIcon } from "lucide-react";

export function FooterStatus() {
  return (
    <div>
      <a
        className="flex items-center gap-1"
        href="https://github.com/noonefr69/wtia"
        target="_blank"
      >
        <Kbd>
          GitHub
          <ExternalLinkIcon />
        </Kbd>
      </a>
    </div>
  );
}
