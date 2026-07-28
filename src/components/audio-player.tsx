import { useStoreMusics } from "@/state/musics-state";

export default function AudioPlayer() {
  const { tracks } = useStoreMusics();

  if (!tracks || tracks.length === 0) return null;
  const last_track = tracks[3];
  return (
    <div>
      <audio src={URL.createObjectURL(last_track.file)} controls />
    </div>
  );
}
