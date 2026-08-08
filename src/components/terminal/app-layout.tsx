import { useEffect, useRef } from "react";
import { Card } from "../ui/card";
import TerminalFooter from "./footer/footer";
import TerminalHeader from "./header";
import { MusicLists } from "./music-lists";
import MusicPlayer from "./music-player";
import { useFocusedDiv } from "@/state/app-ref";
import { useStoreMusics } from "@/state/musics-state";
import { useSettingStatus } from "@/state/setting-open";

export default function AppLayout() {
  const setFocuesedPanel = useFocusedDiv((s) => s.setFocusedPanel);
  const tracks = useStoreMusics((s) => s.tracks);
  const setIsOpenSetting = useSettingStatus((s) => s.setIsOpen);

  const isMusicLoaded = tracks && tracks.length > 0;

  const headerRef = useRef<HTMLDivElement>(null);
  const listsRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMusicLoaded) return;
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "1") {
        headerRef.current?.focus();
        setFocuesedPanel("header");
      } else if (e.key === "2") {
        listsRef.current?.focus();
        setFocuesedPanel("list");
      } else if (e.key === "3") {
        playerRef.current?.focus();
        setFocuesedPanel("player");
      } else if (e.key === "4") {
        footerRef.current?.focus();
        setFocuesedPanel("footer");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMusicLoaded, setFocuesedPanel]);

  useEffect(() => {
    function handleSkeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "s") {
        setIsOpenSetting(true);
      }
    }

    window.addEventListener("keydown", handleSkeyDown);
    return () => window.removeEventListener("keydown", handleSkeyDown);
  }, [setIsOpenSetting]);

  return (
    <Card className="h-full p-4 grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Card
        ref={headerRef}
        id="title"
        tabIndex={isMusicLoaded ? -1 : undefined}
        className="p-2 focus:ring-primary outline-none duration-150 overflow-visible relative"
      >
        <TerminalHeader />
      </Card>
      <div className="grid grid-cols-9 gap-4 min-h-0">
        <Card
          id="section"
          ref={listsRef}
          tabIndex={isMusicLoaded ? -1 : undefined}
          className="col-span-9 md:col-span-6 p-2 outline-none focus:ring-primary duration-150"
        >
          <MusicLists />
        </Card>
        <Card
          id="aside"
          tabIndex={isMusicLoaded ? -1 : undefined}
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
        tabIndex={isMusicLoaded ? -1 : undefined}
      >
        <TerminalFooter />
      </div>
    </Card>
  );
}
