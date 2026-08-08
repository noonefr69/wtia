import { Kbd } from "@/components/ui/kbd";

export function ListStatus() {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-1">
        <Kbd>Tab</Kbd>
        Down
      </span>
      <span className="flex items-center gap-1">
        <Kbd>shift + tab</Kbd>
        Up
      </span>

      <span className="flex items-center gap-1">
        <Kbd>space</Kbd>
        select
      </span>
    </div>
  );
}
