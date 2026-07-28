import { useStoreMusics } from "@/state/musics-state";
import { useRef } from "react";
import PrevButton from "./prev-button";
import NextButton from "./next-button";

export default function MusicPlayer() {
  const { tracks, current_index } = useStoreMusics();
  const input_music_ref = useRef<HTMLAudioElement | null>(null);

  if (!tracks || tracks.length === 0) return null;
  const track = tracks[current_index].file;
  return (
    <div>
      <PrevButton />
      <NextButton />
      <audio src={URL.createObjectURL(track)} controls ref={input_music_ref} />
    </div>
  );
}
