import FeaturedSection from '@/components/home/FeaturedSection';
import HeroSection from '@/components/home/HeroSection';
import { DUMMY_ARTWORKS } from '@/data/artwork-data';

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center gap-8 md:gap-16">
      <HeroSection />
      <FeaturedSection artworks={DUMMY_ARTWORKS} />
    </div>
  );
}
