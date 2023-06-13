'use client';

import Image from 'next/image';

import { TArtworkListItemModel } from '@/libs/models/artwork.model';
import { useGalleryStore } from '@/stores/useGalleryStore';

type TProps = { artwork_id: string };

export default function ArtworkDetailsPage({ params }: { params: TProps }) {
  const artworks = useGalleryStore(store => store.artworks);
  const artwork: TArtworkListItemModel | undefined = artworks.find(
    artwork => artwork.artwork_id === params.artwork_id,
  );
  console.log('params', params);
  return (
    <div className="flex max-w-4xl flex-col gap-16 bg-background p-16">
      <Image
        src={artwork!.image}
        alt={`Artwork by ${artwork!.artist}`}
        className="h-72 w-full object-contain"
        width={769}
        height={1024}
      />
      <div className="flex flex-col gap-2">
        <div className="text-xl font-bold text-primary">{artwork!.title}</div>
        <p className="italic text-secondary">{artwork!.artist}</p>
        <p className="text-secondary">{artwork!.description}</p>
        <hr />
        <p className="text-secondary">
          {`Price: ${artwork!.price} ${artwork!.currency}`}
        </p>
        <p className="text-secondary">{`Editions: ${
          artwork!.remaining_edition
        }/${artwork!.edition}`}</p>
      </div>
    </div>
  );
}
