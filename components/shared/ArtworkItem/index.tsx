'use client';

import Image from 'next/image';

import { TArtworkListItemModel } from '@/lib/models/artwork.model';

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
    <div className="flex h-[460px] w-full flex-col justify-between md:w-[282px]">
      <div className="flex flex-col gap-4">
        <div className="flex h-[300px]">
          <Image
            className="object-cover object-center md:max-w-[282px]"
            src={image}
            alt={title}
            width={800}
            height={600}
          />
        </div>
        <div>
          <p className="text-lg text-gray-main">{artist}</p>
          <p className="text-xl italic text-gray-lightlabel">{title}</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-main">{`${edition} editions`}</p>
        <p className="text-sm text-gray-main">{`${remaining_edition}/${edition} remaining`}</p>
        <p className="text-sm font-bold text-gray-main">{`${price} ${currency}`}</p>
      </div>
    </div>
  );
}

export default ArtworkItem;
