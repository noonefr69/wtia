import { useStoreMusics } from "@/state/musics-state";
import { Button } from "./ui/button/button";

export default function NextButton() {
  const { next } = useStoreMusics();
  return <Button onClick={() => next()}>Prev</Button>;
}
