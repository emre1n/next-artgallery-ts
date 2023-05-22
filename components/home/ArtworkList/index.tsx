import Link from 'next/link';

import { TArtworkListItemModel } from '@/libs/models/artwork.model';
import { link } from 'fs';

import ArtworkItem from '../ArtworkItem';

type ArtworkListProps = {
  artworks: TArtworkListItemModel[];
};

export default function ArtworkList({ artworks }: ArtworkListProps) {
  return (
    <section className="flex justify-center md:mx-[120px] md:py-20">
      <ul className="flex flex-col gap-6 md:flex-row md:flex-wrap">
        {artworks.map(artwork => (
          <div key={artwork.artwork_id}>
            <Link href={`/artwork/${artwork.artwork_id}`}>
              <ArtworkItem
                artwork_id={artwork.artwork_id}
                image={artwork.image}
                title={artwork.title}
                artist={artwork.artist}
                description={artwork.description}
              />
            </Link>
          </div>
        ))}
      </ul>
    </section>
  );
}
