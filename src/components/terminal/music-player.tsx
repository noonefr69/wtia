import { useStoreMusics } from "@/state/musics-state";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button/button";
import notFoundImageAsciiLight from "@/ascii/asscii-light.png";
import notFoundImageAschiiDark from "@/ascii/asscii-dark.png";
import { noMusicAscii } from "@/ascii/no-music-ascii";
import { Slider } from "@/components/ui/slider";
import { flowerAscii } from "@/ascii/flower-ascii";
import PrevButton from "../prev-button";
import NextButton from "../next-button";
import { RedoIcon, UndoIcon } from "lucide-react";
// import { RedoIcon } from "lucide-react";

export default function MusicPlayer() {
  const { tracks, currentIndex, next, prev } = useStoreMusics();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicVolume, setMusicVolume] = useState(1);
  const [isVolumeMute, setIsVolumeMute] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  const currentTrack = tracks[currentIndex];

  function formatTime(sec: number) {
    if (!isFinite(sec) || sec < 0) return `00:00`;
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  const audioSrc = useMemo(() => {
    if (!currentTrack) return null;
    return URL.createObjectURL(currentTrack.file);
  }, [currentTrack]);

  const handleErrorPlay = useCallback(() => {
    toast.error(
      `Browser blocked auto play. Click Play again or click next/prev button.`,
    );
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    return () => {
      if (audioSrc) {
        URL.revokeObjectURL(audioSrc);
      }
    };
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current && currentTrack) {
      setMusicVolume(audioRef.current?.volume ?? 1);
      audioRef.current.play().catch(handleErrorPlay);
    }
  }, [currentIndex, currentTrack, handleErrorPlay]);

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

  const toggle_play = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(handleErrorPlay);
      }
    }
  }, [isPlaying, handleErrorPlay]);

  const handleVolumeChange = useCallback((newVolume: number) => {
    const safeVolume = Math.min(1, Math.max(0, newVolume));

    setMusicVolume(safeVolume);

    if (audioRef.current) {
      audioRef.current.volume = safeVolume;
      if (safeVolume === 0 || safeVolume < 0.2) {
        setIsVolumeMute(true);
      } else {
        setIsVolumeMute(false);
      }
    }
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const activeEl = document.activeElement;
      if (!activeEl) return;

      const isPlayerFocused =
        activeEl.id === "aside" || activeEl.closest("#aside") !== null;
      if (!isPlayerFocused) return;

      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      if (e.key === "h") {
        e.preventDefault();
        prev();
      } else if (e.key === "l") {
        e.preventDefault();
        next();
      } else if (e.key === "u") {
        e.preventDefault();
        if (audioRef.current) {
          audioRef.current.currentTime = Math.max(
            0,
            audioRef.current.currentTime - 5,
          );
          setCurrentTime(audioRef.current.currentTime);
        }
      } else if (e.key === "i") {
        e.preventDefault();
        if (audioRef.current) {
          const newTime = Math.min(duration, audioRef.current.currentTime + 5);
          audioRef.current.currentTime = newTime;
          setCurrentTime(newTime);
        }
      } else if (e.key === " ") {
        e.preventDefault();
        toggle_play();
      } else if (e.key === "y") {
        e.preventDefault();
        if (audioRef.current) {
          handleVolumeChange(audioRef.current?.volume - 0.05);
        }
      } else if (e.key === "o") {
        e.preventDefault();
        if (audioRef.current) {
          handleVolumeChange(audioRef.current.volume + 0.05);
        }
      } else if (e.key === "m") {
        e.preventDefault();
        if (audioRef.current) {
          if (audioRef.current.volume === 0) {
            handleVolumeChange(1);
          } else {
            handleVolumeChange(0);
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next, duration, toggle_play, handleVolumeChange]);

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

  return (
    <div className="h-full flex flex-col">
      {!currentTrack.coverUrl ? (
        <>
          <img
            src={notFoundImageAsciiLight}
            alt="ascii-light"
            className="w-full dark:hidden block aspect-square object-cover"
          />
          <img
            src={notFoundImageAschiiDark}
            alt="ascii-dark"
            className="w-full dark:block hidden aspect-square object-cover"
          />
        </>
      ) : (
        <img
          src={currentTrack.coverUrl ?? ""}
          alt={currentTrack.artist + currentTrack.title}
          className="w-full aspect-square object-cover brightness-75 opacity-80"
          style={{ filter: "saturate(0.0)" }}
        />
      )}
      <div className="mt-2 flex items-center justify-between gap-2">
        {formatTime(currentTime)}
        <Slider
          value={[currentTime]}
          max={duration}
          min={0}
          disabled={!duration}
          step={0.05}
          onValueChange={([newVal]) => {
            if (audioRef.current) {
              audioRef.current.currentTime = newVal;
              setCurrentTime(newVal);
            }
          }}
        />
        {formatTime(duration)}
      </div>
      <div className="flex flex-col mt-2">
        <div className="grid grid-cols-3">
          <Button
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = Math.max(
                  0,
                  audioRef.current.currentTime - 5,
                );
                setCurrentTime(audioRef.current.currentTime);
              }
            }}
          >
            <UndoIcon />
          </Button>
          <Button onClick={toggle_play}>{isPlaying ? "⏸︎" : "⏵︎"}</Button>
          <Button
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = Math.max(
                  0,
                  audioRef.current.currentTime + 5,
                );
                setCurrentTime(audioRef.current.currentTime);
              }
            }}
          >
            <RedoIcon />
          </Button>
        </div>
        <div className="grid grid-cols-2">
          <PrevButton />
          <NextButton />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        {/*{` 🕪`}*/}
        <span className="rotate-180 select-none text-2xl">
          {isVolumeMute ? "🕩" : `🕪`}
        </span>
        <Slider
          value={[musicVolume]}
          onValueChange={(value) => handleVolumeChange(value[0])}
          defaultValue={[1]}
          max={1}
          min={0}
          step={0.05}
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <pre className="text-[4px] lg:text-[6px] select-none md:block hidden">
          {flowerAscii}
        </pre>
      </div>
      <audio
        ref={audioRef}
        src={audioSrc || ""}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onEnded={next}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
      />
    </div>
  );
}
