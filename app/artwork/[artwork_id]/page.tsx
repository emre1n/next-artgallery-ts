'use client';

import Image from 'next/image';

import { useGalleryStore } from '@/stores/store';

type TProps = { artwork_id: string };

export default function ArtworkDetailsPage({ params }: { params: TProps }) {
  const artworks = useGalleryStore(store => store.artworks);
  const artwork = artworks.find(
    artwork => artwork.artwork_id === params.artwork_id,
  );
  console.log('params', params);
  return (
    <>
      <h1>Detail Page</h1>
      <p>id: {params.artwork_id}</p>
      <Image
        src={artwork!.image}
        width={1024}
        height={768}
        alt={artwork!.title}
      />
    </>
  );
}
