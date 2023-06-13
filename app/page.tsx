import FeaturedSection from '@/components/home/FeaturedSection';
import HeroSection from '@/components/home/HeroSection';
import { TArtworkListItemModel } from '@/libs/models/artwork.model';

import getArtworks from './actions/getArtworks';

type TProps = { artworks: TArtworkListItemModel[] };

export default async function Home() {
  const artworks = await getArtworks();

  console.log('prisma', artworks);
  return (
    <div className="flex w-full flex-col justify-center gap-8 md:gap-16">
      <HeroSection artworks={artworks} />
      <FeaturedSection artworks={artworks} />
    </div>
  );
}
