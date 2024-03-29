// import { useMemo } from 'react';
import Link from 'next/link';

import getArtworks from '@/app/actions/getArtworks';
import ArtworkTable from '@/components/dashboard/artworks/ArtworkTable';
import { getPrismaData } from '@/libs/db-service';
import { useGalleryStore } from '@/stores/useGalleryStore';

// import { useGalleryStore } from '@/stores/store';

export default async function ArtworksListPage() {
  const artworks = await getArtworks();

  // const data = useMemo(() => artworks, [artworks]);

  return (
    <section className="flex w-full flex-col items-center gap-4 px-8 py-4 md:items-start">
      <Link
        className="w-40 bg-lightgray px-4 py-1 text-white duration-500 hover:bg-background hover:text-primary"
        href="/dashboard/artworks/new"
      >
        Add New Artwork
      </Link>
      <ArtworkTable data={artworks} />
    </section>
  );
}
