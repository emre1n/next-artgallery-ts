'use client';

import Link from 'next/link';

import { TArtworkListItemModel } from '@/libs/models/artwork.model';
import { useGalleryStore } from '@/stores/store';

import ArtworkItem from '../../shared/ArtworkItem';

type TProps = { artworks: TArtworkListItemModel[] };

export default function FeaturedSection({ artworks }: TProps) {
  return (
    <section className="flex flex-col justify-center gap-8">
      <h3 className="text-lg">Featured artworks</h3>
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
          }: TArtworkListItemModel) =>
            isFeatured ? (
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
            ) : null,
        )}
      </div>
    </section>
  );
}
