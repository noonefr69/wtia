import { useFocusedDiv } from "@/state/app-ref";
import { useStoreMusics } from "@/state/musics-state";
import { useEffect } from "react";

export default function TerminalFooter() {
  const tracks = useStoreMusics((s) => s.tracks);
  const focusedPanel = useFocusedDiv((s) => s.focusedPanel);
  useEffect(() => {
    console.log(focusedPanel);
  }, [focusedPanel]);

  return (
    <>
      {!tracks || tracks.length === 0 ? (
        <div className="flex items-center justify-center">
          make with <span className="text-red-700 mx-1">{"<3"}</span> by{" "}
          <a
            href="https://github.com/noonefr69"
            target="_blank"
            className="underline mx-1 text-blue-600"
          >
            Noone
          </a>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">a</div>
          <div>settings</div>
        </div>
      )}
    </>
  );
}
