import { Kbd } from "@/components/ui/kbd";

export function PlayerStatus() {
  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center gap-1">
        <Kbd>space</Kbd> Play/Pause
      </span>

      <span className="flex items-center gap-1">
        <Kbd>h</Kbd>Prev
      </span>

      <span className="flex items-center gap-1">
        <Kbd>l</Kbd>
        Next
      </span>

      <span className="flex items-center gap-1">
        <Kbd>u</Kbd> Skip-
      </span>

      <span className="flex items-center gap-1">
        <Kbd>i</Kbd> Skip+
      </span>

      <span className="flex items-center gap-1">
        <Kbd>y</Kbd>
        Vol-
      </span>

      <span className="flex items-center gap-1">
        <Kbd>o</Kbd>
        Vol+
      </span>
    </div>
  );
}
