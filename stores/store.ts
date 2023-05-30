import { GetServerSideProps } from 'next';

import { DUMMY_ARTWORKS } from '@/data/artwork-data';
import { TArtworkListItemModel } from '@/lib/models/artwork.model';
import { PrismaClient } from '@prisma/client';
import { create } from 'zustand';

type TGalleryStore = {
  artworks: TArtworkListItemModel[];
  addArtwork: (artwork: TArtworkListItemModel) => void;
  fetchArtworks: (data: TArtworkListItemModel[]) => void;
};

export const useGalleryStore = create<TGalleryStore>()(set => ({
  artworks: DUMMY_ARTWORKS,
  addArtwork: (artwork: TArtworkListItemModel) =>
    set(state => ({
      artworks: [...state.artworks, artwork],
    })),
  fetchArtworks: async (data: TArtworkListItemModel[]) => {
    set(state => ({
      artworks: data,
    }));
  },
}));
