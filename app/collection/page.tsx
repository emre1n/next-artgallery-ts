'use client';

import ArtworkList from '@/components/collection/ArtworkList';
import { useGalleryStore } from '@/stores/store';

function Collection() {
  const artworks = useGalleryStore(store => store.artworks);

  return (
    <section>
      <ArtworkList artworks={artworks} />
    </section>
  );
}

export default Collection;
