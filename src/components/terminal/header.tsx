import { useStoreMusics } from "@/state/musics-state";

export default function TerminalHeader() {
  const { tracks, currentIndex } = useStoreMusics();
  if (!tracks || tracks.length === 0) return <h1>Wtia</h1>;

  return (
    <div className="">
      <h1 className="truncate">
        {tracks[currentIndex].artist} - {tracks[currentIndex].title}
      </h1>
      <span className="bg-card w-4 flex items-center justify-center absolute -top-3 left-2 z-10">
        1
      </span>
    </div>
  );
}
