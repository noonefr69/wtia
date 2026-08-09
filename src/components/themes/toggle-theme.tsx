import { useTheme } from "./theme-provider";
import { Button } from "../ui/button/button";

export function ToggleTheme() {
  const { setTheme } = useTheme();
  return (
    <div className="grid grid-cols-3">
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("darkCapucinu")}>Capucinu</Button>
      <Button onClick={() => setTheme("claude")}>Claude</Button>
    </div>
  );
}
