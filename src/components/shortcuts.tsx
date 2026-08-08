import { Kbd } from "./ui/kbd";

export function ShortCuts({ kbd, kbdInfo }: { kbd: string; kbdInfo: string }) {
  return (
    <div className="flex items-center gap-1">
      <Kbd>{kbd}</Kbd>
      <span>{kbdInfo}</span>
    </div>
  );
}
