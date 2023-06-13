import ArtworkList from '@/components/collection/ArtworkList';

import getArtworks from '../actions/getArtworks';

async function Collection() {
  const artworks = await getArtworks();

  return (
    <section>
      <ArtworkList artworks={artworks} />
    </section>
  );
}

export default Collection;
