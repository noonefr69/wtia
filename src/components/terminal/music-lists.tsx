import { useStoreMusics } from "@/state/musics-state";
import MusicInput from "../music-input";
import { Button } from "../ui/button/button";
import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "../ui/input";

export function MusicLists() {
  const { tracks, currentIndex, setCurrentIndex } = useStoreMusics();
  const currentTrack = tracks[currentIndex];
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "?") {
        e.preventDefault();
        setIsSearchInputOpen(true);
      }

      if (e.key === "Escape" && isSearchInputOpen) setIsSearchInputOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchInputOpen]);

  useEffect(() => {
    if (isSearchInputOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchInputOpen]);

  const filteredListsBySearch = useMemo(() => {
    return tracks.filter((track) => {
      return (
        track.title.toLowerCase().includes(inputValue.toLowerCase()) ||
        track.artist.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
  }, [inputValue, tracks]);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {!tracks || tracks.length === 0 ? (
        <div className="flex flex-row items-center gap-2">
          <span className="">
            <span className="text-indigo-800">wtia </span>in{" "}
            <span className="text-green-800">~</span>{" "}
            <span className="text-orange-800">ꥃ</span>
          </span>
          <MusicInput />
        </div>
      ) : (
        <ul className="overflow-y-scroll relative flex flex-col">
          {isSearchInputOpen ? (
            <Input
              ref={searchInputRef}
              className="mb-4 mt-1 w-4/5 mx-auto"
              placeholder="Search...^-^"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          ) : null}

          {filteredListsBySearch.map((track, i) => {
            return (
              <li key={track.id}>
                <Button
                  onClick={() => {
                    setCurrentIndex(i);
                  }}
                  variant={"ghost"}
                  className={`overflow-x-hidden w-full justify-baseline ${track.id === currentTrack.id ? "bg-accent" : ""}`}
                  size={"lg"}
                >
                  {track.artist} - {track.title}
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
