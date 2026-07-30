import { useStoreMusics } from "@/state/musics-state";
import { useEffect, useMemo, useRef, useState } from "react";
import PrevButton from "./prev-button";
import NextButton from "./next-button";
import { Button } from "./ui/button/button";
import { toast } from "sonner";

export default function MusicPlayer() {
  const { tracks, currentIndex, clearMusic } = useStoreMusics();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = tracks[currentIndex];

  const audioSrc = useMemo(() => {
    if (!currentTrack) return null;
    return URL.createObjectURL(currentTrack.file);
  }, [currentTrack]);

  function handleErrorPlay() {
    toast.error(
      `Browser blocked auto play. Click Play again or click next/prev button.`,
    );
    setIsPlaying(false);
  }

  useEffect(() => {
    return () => {
      if (audioSrc) {
        URL.revokeObjectURL(audioSrc);
      }
    };
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.play().catch(handleErrorPlay);
    }
  }, [currentIndex, currentTrack]);

  if (!currentTrack) return <div>No music selected</div>;

  function toggle_play() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(handleErrorPlay);
      }
    }
  }

  return (
    <div>
      <PrevButton />
      <NextButton />
      <Button onClick={toggle_play}>{isPlaying ? "Pause" : "Play"}</Button>
      <div>
        <Button onClick={clearMusic}>Clear</Button>
      </div>
      <audio
        ref={audioRef}
        src={audioSrc || ""}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </div>
  );
}
