import { create } from "zustand";

export type focusedPanelTypes = "header" | "list" | "player" | "footer" | null;

interface FocusedDivProps {
  focusedPanel: focusedPanelTypes;
  setFocusedPanel: (panel: focusedPanelTypes) => void;
}

export const useFocusedDiv = create<FocusedDivProps>((set) => ({
  focusedPanel: null,

  setFocusedPanel: (panel) => set({ focusedPanel: panel }),
}));
