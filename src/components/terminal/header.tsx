import { useStoreMusics } from "@/state/musics-state";

export default function TerminalHeader() {
  const { tracks, currentIndex } = useStoreMusics();
  if (!tracks || tracks.length === 0) return <h1>Wtia</h1>;

  return (
    <>
      {tracks[currentIndex].artist} - {tracks[currentIndex].title}
    </>
  );
}
