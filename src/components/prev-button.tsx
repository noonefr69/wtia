import { useStoreMusics } from "@/state/musics-state";
import { Button } from "./ui/button/button";

export default function PrevButton() {
  const { prev } = useStoreMusics();
  return <Button onClick={() => prev()}>Prev</Button>;
}
