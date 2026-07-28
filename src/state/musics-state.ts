import { create } from "zustand";

export interface Track {
  id: string;
  file: File;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string | null;
}

interface MusicState {
  tracks: Track[];
  isLoading: boolean;
  setMusic: (files: FileList | null) => Promise<void>;
  clearMusic: () => void;
}

export const useStoreMusics = create<MusicState>((set) => ({
  tracks: [],
  isLoading: false,

  setMusic: async (files) => {
    if (!files || files.length === 0) return;

    set({ isLoading: true });

    const parsedTracks: Track[] = [];

    for (const file of Array.from(files)) {
      try {
        const { parseBlob } = await import("music-metadata");
        const metadata = await parseBlob(file);

        let coverUrl: string | null = null;
        if (metadata.common.picture && metadata.common.picture.length > 0) {
          const picture = metadata.common.picture[0];
          const blob = new Blob([picture.data as BlobPart], {
            type: picture.format,
          });
          coverUrl = URL.createObjectURL(blob);
        }

        parsedTracks.push({
          id: crypto.randomUUID(),
          file,
          title: metadata.common.title || file.name,
          artist: metadata.common.artist || "Unknown Artist",
          album: metadata.common.album || "Unknown Album",
          duration: metadata.format.duration || 0,
          coverUrl,
        });
      } catch (error) {
        console.error(`Failed to parse ${file.name}:`, error);
      }
    }

    set({ tracks: parsedTracks, isLoading: false });
  },

  clearMusic: () => set({ tracks: [], isLoading: false }),
}));
