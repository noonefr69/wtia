import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { useStoreMusics } from "@/state/musics-state";

export default function MediaInput() {
  const { musics, setMusics } = useStoreMusics();
  console.log(musics);
  return (
    <div>
      <Label htmlFor="media_input">tab</Label>
      <Input
        onChange={(e) => {
          const files = e.target.files;
          setMusics(files);
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
