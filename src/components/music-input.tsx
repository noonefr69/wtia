import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { useStoreMusics } from "@/state/musics-state";
import { Button } from "./ui/button/button";
import { Spinner } from "./ui/spinner";

export default function MediaInput() {
  const { setMusic, isLoading } = useStoreMusics();
  return (
    <div>
      <Button asChild variant={"outline"}>
        <Label htmlFor="media_input">
          {isLoading ? (
            <>
              Extracting music metadata <Spinner />
            </>
          ) : (
            "select music directory"
          )}
        </Label>
      </Button>
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
