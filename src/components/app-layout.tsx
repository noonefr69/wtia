import { useStoreMusics } from "@/state/musics-state";
import { Card } from "./ui/card";
import MusicInput from "./music-input";
import MusicPlayer from "./music-player";

export default function AppLayout() {
  const { tracks } = useStoreMusics();
  return (
    <>
      <Card id="title" className="p-2">
        header
      </Card>
      <div className="grid grid-cols-9 md:grid-rows-9 gap-4 row-span-10">
        <Card
          id="section"
          className="md:row-span-9 row-span-3 col-span-9 md:col-span-6 p-2"
        >
          {!tracks || tracks.length === 0 ? <MusicInput /> : "u have music"}
        </Card>
        <Card
          id="aside"
          className="md:row-span-9 row-span-6 col-span-9 md:col-span-3 p-2"
        >
          <MusicPlayer />
        </Card>
      </div>
      <Card id="footer" className="p-2">
        footer
      </Card>
    </>
  );
}
