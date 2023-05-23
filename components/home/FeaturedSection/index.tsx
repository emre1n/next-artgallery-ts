import Link from 'next/link';

import { TArtworkListItemModel } from '@/lib/models/artwork.model';

import ArtworkItem from '../../shared/ArtworkItem';

type FeaturedListProps = {
  artworks: TArtworkListItemModel[];
};

export default function FeaturedSection({ artworks }: FeaturedListProps) {
  return (
    <section className="flex flex-col justify-center gap-8 py-10 md:mx-[120px] md:py-20">
      <div className="text-lg">Featured artworks</div>
      <div>
        <ul className="flex flex-col gap-6 md:flex-row md:flex-wrap">
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
        </ul>
      </div>
    </section>
  );
}
