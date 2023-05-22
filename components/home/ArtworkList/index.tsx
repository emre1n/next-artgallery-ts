import Link from 'next/link';

import { TArtworkListItemModel } from '@/libs/models/artwork.model';

import ArtworkItem from '../ArtworkItem';

type ArtworkListProps = {
  artworks: TArtworkListItemModel[];
};

export default function ArtworkList({ artworks }: ArtworkListProps) {
  return (
    <section className="flex justify-center py-10 md:mx-[120px] md:py-20">
      <ul className="flex flex-col gap-6 md:flex-row md:flex-wrap">
        {artworks.map(
          ({
            artwork_id,
            image,
            title,
            artist,
            description,
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
                  edition={edition}
                  remaining_edition={remaining_edition}
                  price={price}
                  currency={currency}
                />
              </Link>
            </div>
          ),
        )}
      </ul>
    </section>
  );
}
