'use client';

import Link from 'next/link';

import { TArtworkListItemModel } from '@/libs/models/artwork.model';

import ArtworkItem from '../../shared/ArtworkItem';

type ArtworkListProps = {
  artworks: TArtworkListItemModel[];
};

export default function ArtworkList({ artworks }: ArtworkListProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <div className="text-lg">Collection</div>
      <div>
        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap">
          {artworks.map(
            ({
              artwork_id,
              image,
              title,
              artist,
              description,
              isFeatured,
              edition,
              remaining_edition,
              price,
              currency,
            }: TArtworkListItemModel) => (
              <div key={artwork_id}>
                <Link href={`/artwork/${artwork_id}`}>
                  <ArtworkItem
                    artwork_id={artwork_id}
                    image={image}
                    title={title}
                    artist={artist}
                    description={description}
                    isFeatured={isFeatured}
                    edition={edition}
                    remaining_edition={remaining_edition}
                    price={price}
                    currency={currency}
                  />
                </Link>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
