import { create } from "zustand";

interface SaturationImageType {
  isItTrue: boolean;
  setIsItTrue: (value: boolean) => void;
}

export const useSaturationImage = create<SaturationImageType>((set) => ({
  isItTrue: false,
  setIsItTrue: (value) => {
    set({ isItTrue: value });
  },
}));
