import ArtworkList from '@/components/collection/ArtworkList';
import { getPrismaData } from '@/libs/db-service';
import { prismaGenerate } from '@/prisma/create';
import { useGalleryStore } from '@/stores/useGalleryStore';

import getArtworks from '../actions/getArtworks';

// import { useGalleryStore } from '@/stores/store';

async function Collection() {
  // const artworks = useGalleryStore(store => store.artworks);
  const artworks = await getArtworks();

  return (
    <section>
      <ArtworkList artworks={artworks} />
    </section>
  );
}

export default Collection;
