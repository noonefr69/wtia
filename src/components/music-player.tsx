import { useStoreMusics } from "@/state/musics-state";
import { useEffect, useMemo, useRef, useState } from "react";
import PrevButton from "./prev-button";
import NextButton from "./next-button";
import { Button } from "./ui/button/button";
import { toast } from "sonner";

export default function MusicPlayer() {
  const { tracks, current_index } = useStoreMusics();
  const audio_ref = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const current_track = tracks[current_index];

  const audio_src = useMemo(() => {
    if (!current_track) return null;
    return URL.createObjectURL(current_track.file);
  }, [current_track]);

  function handle_error_play() {
    toast.error(
      `Browser blocked auto play. Click Play again or click next/prev button.`,
    );
    setIsPlaying(false);
  }

  useEffect(() => {
    return () => {
      if (audio_src) {
        URL.revokeObjectURL(audio_src);
      }
    };
  }, [audio_src]);

  useEffect(() => {
    if (audio_ref.current && current_track) {
      audio_ref.current.play().catch(handle_error_play);
    }
  }, [current_index, current_track]);

  if (!current_track) return <div>No music selected</div>;

  function toggle_play() {
    if (audio_ref.current) {
      if (isPlaying) {
        audio_ref.current.pause();
      } else {
        audio_ref.current.play().catch(handle_error_play);
      }
    }
  }

  return (
    <div>
      <PrevButton />
      <NextButton />
      <Button onClick={toggle_play}>{isPlaying ? "Pause" : "Play"}</Button>
      <div></div>
      <audio
        ref={audio_ref}
        src={audio_src || ""}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </div>
  );
}
