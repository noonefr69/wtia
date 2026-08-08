import { useFocusedDiv } from "@/state/app-ref";
import { useStoreMusics } from "@/state/musics-state";
import { HeaderStatus } from "./status/header-status";
import { ListStatus } from "./status/list-status";
import { PlayerStatus } from "./status/player-status";
import { FooterStatus } from "./status/footer-status";
import { SettingDialog } from "./setting/setting-dialog";

export default function TerminalFooter() {
  const tracks = useStoreMusics((s) => s.tracks);
  const focusedPanel = useFocusedDiv((s) => s.focusedPanel);

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
          <div className="items-center gap-2 md:flex hidden">
            {focusedPanel === "header" ? (
              <HeaderStatus />
            ) : focusedPanel === "list" ? (
              <ListStatus />
            ) : focusedPanel === "player" ? (
              <PlayerStatus />
            ) : focusedPanel === "footer" ? (
              <FooterStatus />
            ) : null}
          </div>
          <SettingDialog />
        </div>
      )}
    </>
  );
}
