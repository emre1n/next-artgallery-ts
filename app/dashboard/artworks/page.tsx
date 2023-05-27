'use client';

import { useMemo } from 'react';

import Link from 'next/link';

import ArtworkTable from '@/components/dashboard/artworks/ArtworkTable';
import { useGalleryStore } from '@/stores/store';

export default function ArtworksListPage() {
  const artworks = useGalleryStore(store => store.artworks);
  const data = useMemo(() => artworks, [artworks]);

  return (
    <section className="flex w-full flex-col gap-4 px-8 py-4">
      <Link
        className="w-40 bg-slate-500 px-4 py-1 text-white"
        href="/dashboard/artworks/new"
      >
        Add New Artwork
      </Link>
      <ArtworkTable data={data} />
    </section>
  );
}
