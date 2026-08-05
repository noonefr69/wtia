import { useStoreMusics } from "@/state/musics-state";
import { Button } from "./ui/button/button";
import { SkipForward } from "lucide-react";

export default function PrevButton() {
  const { prev } = useStoreMusics();
  return (
    <Button className="rotate-180" onClick={() => prev()}>
      <SkipForward />
    </Button>
  );
}
