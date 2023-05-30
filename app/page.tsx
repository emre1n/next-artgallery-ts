'use client';

import { useEffect } from 'react';

import { GetServerSideProps } from 'next';

import FeaturedSection from '@/components/home/FeaturedSection';
import HeroSection from '@/components/home/HeroSection';
import { TArtworkListItemModel } from '@/lib/models/artwork.model';
import { useGalleryStore } from '@/stores/store';
import { PrismaClient } from '@prisma/client';

type TProps = {
  data: TArtworkListItemModel[];
};

export default function Home({ data }: TProps) {
  const getArtworks = useGalleryStore(store => store.fetchArtworks);
  const artworks = useGalleryStore(store => store.artworks);

  useEffect(() => {
    getArtworks(data);
  }, [data, getArtworks]);

  return (
    <div className="flex w-full flex-col justify-center gap-8 md:gap-16">
      <HeroSection artworks={artworks} />
      <FeaturedSection artworks={artworks} />
    </div>
  );
}

type TPrismaProps = {
  data: TArtworkListItemModel[];
};

export const getServerSideProps: GetServerSideProps<
  TPrismaProps
> = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.artwork.findMany();
  return { props: { data } };
};
