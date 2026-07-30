import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { useStoreMusics } from "@/state/musics-state";
import { Button } from "./ui/button/button";
import { Spinner } from "./ui/spinner";

export default function MusicInput() {
  const { setMusic, isLoading } = useStoreMusics();
  return (
    <div>
      <Button asChild variant={"link"} className="px-0">
        <Label htmlFor="media_input">
          {isLoading ? (
            <>
              <Spinner />
            </>
          ) : (
            <>
              Select Directory Here{" "}
              <span className="h-5 w-2 bg-primary animate-caret-blink"></span>
            </>
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
