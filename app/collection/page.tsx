import ArtworkList from '@/components/collection/ArtworkList';
import { DUMMY_ARTWORKS } from '@/data/artwork-data';

function Collection() {
  return (
    <section>
      <ArtworkList artworks={DUMMY_ARTWORKS} />
    </section>
  );
}

export default Collection;
