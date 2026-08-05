import { useStoreMusics } from "@/state/musics-state";
import { Button } from "./ui/button/button";
import { SkipForward } from "lucide-react";

export default function NextButton() {
  const { next } = useStoreMusics();
  return (
    <Button onClick={() => next()}>
      <SkipForward />
    </Button>
  );
}
