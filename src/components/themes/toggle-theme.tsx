import { useTheme } from "./theme-provider";
import { Button } from "../ui/button/button";

export function ToggleTheme() {
  const { setTheme } = useTheme();
  return (
    <div>
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("system")}>System</Button>
    </div>
  );
}
