'use client';

import FeaturedSection from '@/components/home/FeaturedSection';
import HeroSection from '@/components/home/HeroSection';
import { useGalleryStore } from '@/stores/store';

export default function Home() {
  const artworks = useGalleryStore(store => store.artworks);
  return (
    <div className="flex w-full flex-col justify-center gap-8 md:gap-16">
      <HeroSection artworks={artworks} />
      <FeaturedSection artworks={artworks} />
    </div>
  );
}
