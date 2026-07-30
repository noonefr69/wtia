import { useStoreMusics } from "@/state/musics-state";
import MusicInput from "../music-input";
import { Button } from "../ui/button/button";

export function MusicLists() {
  const { tracks, currentIndex } = useStoreMusics();
  const currentTrack = tracks[currentIndex];

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
        <ul className="overflow-y-scroll">
          {tracks.map((track, i) => {
            return (
              <li key={i}>
                <Button
                  variant={"ghost"}
                  className={`overflow-x-hidden w-full justify-baseline ${track.title === currentTrack.title && track.artist === currentTrack.artist ? "bg-accent" : ""}`}
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
