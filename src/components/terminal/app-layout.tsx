import { useStoreMusics } from "@/state/musics-state";
import { Card } from "../ui/card";
import MusicInput from "../music-input";
import MusicPlayer from "../music-player";
import TerminalHeader from "./header";

export default function AppLayout() {
  const { tracks } = useStoreMusics();
  return (
    <Card className="h-full p-4 grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Card id="title" className="p-2">
        <TerminalHeader />
      </Card>
      <div className="grid grid-cols-9 gap-4">
        <Card id="section" className="col-span-9 md:col-span-6 p-2">
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
            "musics"
          )}
        </Card>
        <Card id="aside" className="col-span-9 md:col-span-3 p-2">
          <MusicPlayer />
        </Card>
      </div>
      <Card id="footer" className="p-2">
        footer
      </Card>
    </Card>
  );
}
