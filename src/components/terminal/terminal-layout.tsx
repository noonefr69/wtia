import { Card } from "../ui/card";
import TerminalHeader from "./header";
import { MusicLists } from "./music-lists";
import MusicPlayer from "./music-player";

export default function TerminalLayout() {
  return (
    <Card className="h-full p-4 grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Card
        id="title"
        className="p-2"
        onFocus={(e) => (e.target.style.borderColor = "blue")}
      >
        <TerminalHeader />
      </Card>
      <div className="grid grid-cols-9 gap-4 min-h-0">
        <Card id="section" className="col-span-9 md:col-span-6 p-2">
          <MusicLists />
        </Card>
        <Card
          id="aside"
          className="col-span-9 md:col-span-3 p-2 min-h-0 overflow-y-scroll"
        >
          <MusicPlayer />
        </Card>
      </div>
      <Card id="footer" className="p-2">
        footer
      </Card>
    </Card>
  );
}
