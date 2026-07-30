import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
import { ThemeProvider } from "@/components/themes/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="font-fira">
        <App />
        <Toaster />
      </main>
    </ThemeProvider>
  </StrictMode>,
);
