import ArtworkList from '@/components/collection/ArtworkList';
import { getPrismaData } from '@/libs/db-service';

// import { useGalleryStore } from '@/stores/store';

async function Collection() {
  // const artworks = useGalleryStore(store => store.artworks);
  const artworks = await getPrismaData();

  return (
    <section>
      <ArtworkList artworks={artworks} />
    </section>
  );
}

export default Collection;
