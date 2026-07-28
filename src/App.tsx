import MusicInput from "./components/music-input";
import MusicPlayer from "./components/music-player";

export default function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <MusicInput />
      <MusicPlayer />
    </div>
  );
}
