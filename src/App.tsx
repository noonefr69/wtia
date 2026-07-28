import MediaInput from "./components/music-input";
import { Button } from "./components/ui/button/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button variant={"outline"}>Click me</Button>
      <MediaInput />
    </div>
  );
}

export default App;
