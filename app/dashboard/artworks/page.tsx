import { useMemo } from 'react';

import Link from 'next/link';

import ArtworkTable from '@/components/dashboard/artworks/ArtworkTable';
import { DUMMY_ARTWORKS } from '@/data/artwork-data';

export default function ArtworksListPage() {
  const data = useMemo(() => DUMMY_ARTWORKS, []);

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
