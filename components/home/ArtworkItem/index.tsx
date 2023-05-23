'use client';

import Image from 'next/image';

import { TArtworkListItemModel } from '@/lib/models/artwork.model';

import Card from '../../ui/Card';

type ArtworkProps = TArtworkListItemModel;

function ArtworkItem({
  artwork_id,
  image,
  title,
  artist,
  edition,
  remaining_edition,
  price,
  currency,
}: ArtworkProps) {
  return (
    <li>
      <Card>
        <div className="flex flex-col gap-4">
          <div className="flex h-[282px] w-[282px] overflow-hidden">
            <Image
              className="max-w-[282px] object-cover object-center"
              src={image}
              alt={title}
              width={800}
              height={600}
              // fill={true}
            />
          </div>

          <div>
            <p className="text-grey-900 text-lg">{artist}</p>
            <p className="text-grey-900 text-xl italic">{title}</p>
          </div>
        </div>
        <div>
          <p className="text-grey-900 text-sm">{`${edition} editions`}</p>
          <p className="text-grey-900 text-sm">{`${remaining_edition}/${edition} remaining`}</p>
          <p className="text-grey-900 text-sm font-bold">{`${price} ${currency}`}</p>
        </div>
      </Card>
    </li>
  );
}

export default ArtworkItem;
