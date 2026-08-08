import { ToggleTheme } from "@/components/themes/toggle-theme";
import { Button } from "@/components/ui/button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Kbd } from "@/components/ui/kbd";
import { useSettingStatus } from "@/state/setting-open";

export function SettingDialog() {
  const { isOpen, setIsOpen } = useSettingStatus();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="flex items-center gap-0.5">
          <Kbd>S</Kbd>etting
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-0">
          <DialogTitle>settings</DialogTitle>
          <DialogDescription>nobody cares.</DialogDescription>
          <div className="mt-4">
            <ToggleTheme />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
