import FeaturedSection from '@/components/home/FeaturedSection';
import HeroSection from '@/components/home/HeroSection';
import { DUMMY_ARTWORKS } from '@/data/artwork-data';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedSection artworks={DUMMY_ARTWORKS} />
    </main>
  );
}
