import { create } from "zustand";

interface SettingsType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const useSettingStatus = create<SettingsType>((set) => ({
  isOpen: false,

  setIsOpen: (open) => set({ isOpen: open }),
}));
