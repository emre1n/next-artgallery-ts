import FeaturedSection from '@/components/home/FeaturedSection';
import HeroSection from '@/components/home/HeroSection';
import { getPrismaData } from '@/libs/db-service';
import { TArtworkListItemModel } from '@/libs/models/artwork.model';

type TProps = { artworks: TArtworkListItemModel[] };

export default async function Home() {
  // const fetchArtworks = useGalleryStore(store => store.fetchArtworks);
  // const artworks = useGalleryStore(store => store.artworks);
  // fetchArtworks();
  // console.log('state', artworksState);
  const artworks = await getPrismaData();

  console.log('prisma', artworks);
  return (
    <div className="flex w-full flex-col justify-center gap-8 md:gap-16">
      <HeroSection artworks={artworks} />
      <FeaturedSection artworks={artworks} />
    </div>
  );
}
