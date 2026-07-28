import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { useStoreMusics } from "@/state/musics-state";

export default function MediaInput() {
  const { music, setMusic } = useStoreMusics();
  console.log(music);
  return (
    <div>
      <Label htmlFor="media_input">tab</Label>
      <Input
        onChange={(e) => {
          const files = e.target.files;
          setMusic(files);
        }}
        type="file"
        id="media_input"
        name="media_input"
        className="hidden"
        accept="audio/*"
        multiple
        {...{ webkitdirectory: "true" }}
      />
    </div>
  );
}
