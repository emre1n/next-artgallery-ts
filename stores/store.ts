import getArtworks from '@/app/actions/getArtworks';
import { DUMMY_ARTWORKS } from '@/data/artwork-data';
import { TArtworkListItemModel } from '@/libs/models/artwork.model';
import { create } from 'zustand';

type TGalleryStore = {
  artworks: TArtworkListItemModel[];
  addArtwork: (artwork: TArtworkListItemModel) => void;
  // fetchArtworks: () => void;
};

export const useGalleryStore = create<TGalleryStore>()(set => ({
  artworks: DUMMY_ARTWORKS,
  addArtwork: (artwork: TArtworkListItemModel) =>
    set(state => ({
      artworks: [...state.artworks, artwork],
    })),
  // fetchArtworks: async () => {
  //   const data = await getArtworks();
  //   set(state => ({
  //     artworks: [...state.artworks, ...data],
  //   }));
  // },
}));

type TRegisterModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useRegisterModal = create<TRegisterModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
