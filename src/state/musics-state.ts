import { create } from "zustand";

interface MusicState {
  musics: FileList | null;
  setMusics: (files: FileList | null) => void;
  clearMusics: () => void;
}

export const useStoreMusics = create<MusicState>((set) => ({
  musics: null,

  setMusics: (files) => set({ musics: files }),
  clearMusics: () => set({ musics: null }),
}));
