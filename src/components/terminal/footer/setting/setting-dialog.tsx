import { ShortCuts } from "@/components/shortcuts";
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
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { focuesNumbers } from "@/consts/focused";
import { listShortCuts } from "@/consts/list-shortcuts";
import { playerShortCuts } from "@/consts/player-shortcuts";
import { useSaturationImage } from "@/state/saturation-image";
import { useSettingStatus } from "@/state/setting-open";

export function SettingDialog() {
  const { isOpen, setIsOpen } = useSettingStatus();
  const { isItTrue, setIsItTrue } = useSaturationImage();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex items-center gap-0.5 md:px-2 px-0"
        >
          <Kbd>S</Kbd>etting
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-2/3">
        <DialogHeader className="gap-0">
          <DialogTitle>settings</DialogTitle>
          <DialogDescription>nobody cares.</DialogDescription>
          <div className="mt-2">
            <h1 className="text-lg font-semibold">All shortcuts</h1>

            <div className="mt-2">
              <span className="text-muted-foreground mb-1">focus</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {focuesNumbers.map((focus) => (
                  <ShortCuts
                    key={focus.kbd}
                    kbd={focus.kbd}
                    kbdInfo={focus.kbdInfo}
                  />
                ))}
              </div>
            </div>

            <div className="mt-2">
              <span className="text-muted-foreground mb-1">list</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {listShortCuts.map((sc) => (
                  <ShortCuts kbd={sc.kbd} kbdInfo={sc.kbdInfo} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-2">
            <span className="text-muted-foreground mb-1">player</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {playerShortCuts.map((sc) => (
                <ShortCuts kbd={sc.kbd} kbdInfo={sc.kbdInfo} />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold mt-4">Preference</h1>
            <div className="flex items-center justify-between">
              <h4 className="flex items-center gap-2">Image Saturation</h4>
              <Input
                type="checkbox"
                className="w-fit"
                checked={isItTrue}
                onChange={(e) => setIsItTrue(e.target.checked)}
              />
            </div>
          </div>

          <div className="flex items-center mt-2 justify-between">
            <h4 className="flex items-center gap-2">Theme</h4>
            <ToggleTheme />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
