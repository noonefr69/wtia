import { create } from "zustand";

interface MusicState {
  music: FileList | null;
  setMusic: (files: FileList | null) => void;
  clearMusic: () => void;
}

export const useStoreMusics = create<MusicState>((set) => ({
  music: null,

  setMusic: (files) => set({ music: files }),
  clearMusic: () => set({ music: null }),
}));
