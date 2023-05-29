import { DUMMY_ARTWORKS } from '@/data/artwork-data';
import { TArtworkListItemModel } from '@/libs/models/artwork.model';
import { create } from 'zustand';

type TGalleryStore = {
  artworks: TArtworkListItemModel[];
  addArtwork: (artwork: TArtworkListItemModel) => void;
};

export const useGalleryStore = create<TGalleryStore>()(set => ({
  artworks: DUMMY_ARTWORKS,
  addArtwork: (artwork: TArtworkListItemModel) =>
    set(state => ({
      artworks: [...state.artworks, artwork],
    })),
}));
