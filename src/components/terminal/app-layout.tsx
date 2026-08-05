import { useEffect, useRef } from "react";
import { Card } from "../ui/card";
import TerminalFooter from "./footer";
import TerminalHeader from "./header";
import { MusicLists } from "./music-lists";
import MusicPlayer from "./music-player";

export default function AppLayout() {
  const headerRef = useRef<HTMLDivElement>(null);
  const listsRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "1") headerRef.current?.focus();
      else if (e.key === "2") listsRef.current?.focus();
      else if (e.key === "3") playerRef.current?.focus();
      else if (e.key === "4") footerRef.current?.focus();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Card className="h-full p-4 grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Card
        ref={headerRef}
        id="title"
        tabIndex={-1}
        className="p-2 focus:ring-primary outline-none duration-150"
      >
        <TerminalHeader />
      </Card>
      <div className="grid grid-cols-9 gap-4 min-h-0">
        <Card
          id="section"
          ref={listsRef}
          tabIndex={-1}
          className="col-span-9 md:col-span-6 p-2 outline-none focus:ring-primary duration-150"
        >
          <MusicLists />
        </Card>
        <Card
          id="aside"
          tabIndex={-1}
          ref={playerRef}
          className="col-span-9 md:col-span-3 p-2 min-h-0 overflow-y-scroll outline-none focus:ring-primary duration-150"
        >
          <MusicPlayer />
        </Card>
      </div>
      <div
        id="footer"
        className="duration-150 p-2 focus:ring-primary focus:ring outline-none"
        ref={footerRef}
        tabIndex={-1}
      >
        <TerminalFooter />
      </div>
    </Card>
  );
}
