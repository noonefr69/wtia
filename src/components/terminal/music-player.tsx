import { useStoreMusics } from "@/state/musics-state";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button/button";
import NextButton from "../next-button";
import PrevButton from "../prev-button";
import { notFoundImageAschii } from "@/ascii/not-found-image";
import { noMusicAscii } from "@/ascii/no-music-ascii";

export default function MusicPlayer() {
  const { tracks, currentIndex } = useStoreMusics();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

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

  useEffect(() => {
    if (!containerRef.current || !preRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (!containerRef.current || !preRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;

      preRef.current.style.transform = "none";
      const preWidth = preRef.current.scrollWidth;
      const preHeight = preRef.current.scrollHeight;

      if (preWidth > 0 && preHeight > 0) {
        const scaleX = containerWidth / preWidth;
        const scaleY = containerHeight / preHeight;
        const scale = Math.min(scaleX, scaleY);

        preRef.current.style.transform = `scale(${scale})`;
        preRef.current.style.transformOrigin = "center center";
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  if (!currentTrack || tracks.length === 0)
    return (
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center overflow-hidden"
      >
        <pre
          ref={preRef}
          className="font-mono text-[8px] leading-none whitespace-pre text-center select-none"
        >
          {noMusicAscii}
        </pre>
      </div>
    );

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
    <div className="h-full flex flex-col">
      {!currentTrack.coverUrl ? (
        <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
          <pre className="font-mono text-[4px] lg:text-[8px] leading-none whitespace-pre text-center select-none">
            {notFoundImageAschii}
          </pre>
        </div>
      ) : (
        <img
          src={currentTrack.coverUrl ?? ""}
          alt={currentTrack.artist + currentTrack.title}
          className="w-full aspect-square object-cover"
        />
      )}
      <div className="mt-2">duration</div>
      <div className="flex flex-col mt-2">
        <div className="grid grid-cols-3">
          <Button>⏪︎</Button>
          <Button onClick={toggle_play}>{isPlaying ? "⏸︎" : "⏵︎"}</Button>
          <Button>⏩︎</Button>
        </div>
        <div className="grid grid-cols-2">
          <PrevButton />
          <NextButton />
        </div>
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
