import FeaturedSection from '@/components/home/FeaturedSection';
import HeroSection from '@/components/home/HeroSection';
import { DUMMY_ARTWORKS } from '@/data/artwork-data';
import { getPrismaData } from '@/libs/db-service';
import { TArtworkListItemModel } from '@/libs/models/artwork.model';

import getArtworks from './actions/getArtworks';

type TProps = { artworks: TArtworkListItemModel[] };

export default async function Home() {
  // const fetchArtworks = useGalleryStore(store => store.fetchArtworks);
  // const artworks = useGalleryStore(store => store.artworks);
  // fetchArtworks();
  // console.log('state', artworksState);

  // const artworks = await getPrismaData();
  const artworks = await getArtworks();

  console.log('prisma', artworks);
  return (
    <div className="flex w-full flex-col justify-center gap-8 md:gap-16">
      <HeroSection artworks={artworks} />
      <FeaturedSection artworks={artworks} />
    </div>
  );
}
