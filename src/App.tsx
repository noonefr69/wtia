import { Card } from "@/components/ui/card";
import AppLayout from "./components/app-layout";
import { ToggleTheme } from "./components/themes/toggle-theme";

export default function App() {
  return (
    <div className="lg:p-10 md:p-6 p-2 h-screen max-w-400 mx-auto">
      <Card className="h-full p-4 grid grid-cols-1 grid-rows-12">
        <AppLayout />
      </Card>
      <ToggleTheme />
    </div>
  );
}
