import Link from 'next/link';

import AddNewArtworkForm from '@/components/dashboard/add-new-artwork/NewArtworkForm';

export default function ArtworksListPage() {
  return (
    <section className="w-full px-8 py-4">
      <Link href="/dashboard/artworks/new">Add New Artwork</Link>
    </section>
  );
}
