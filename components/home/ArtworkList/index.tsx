import { TArtworkListItemModel } from '@/libs/models/artwork.model';

import ArtworkItem from '../ArtworkItem';

type ArtworkListProps = {
  artworks: TArtworkListItemModel[];
};

export default function ArtworkList({ artworks }: ArtworkListProps) {
  return (
    <ul className="flex flex-col items-center border-none">
      {artworks.map(artwork => (
        <ArtworkItem
          key={artwork.id}
          id={artwork.id}
          image={artwork.image}
          title={artwork.title}
          artist={artwork.artist}
          description={artwork.description}
        />
      ))}
    </ul>
  );
}
