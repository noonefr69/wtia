import { useStoreMusics } from "@/state/musics-state";
import { Button } from "./ui/button/button";

export default function PrevButton() {
  const { prev } = useStoreMusics();
  return (
    <Button className="rotate-180" onClick={() => prev()}>
      ▶︎‖
    </Button>
  );
}
