import Image from 'next/image';
import Link from 'next/link';

import { DUMMY_ARTWORKS } from '@/data/artwork-data';
import { TArtworkListItemModel } from '@/lib/models/artwork.model';

export default function HeroSection() {
  const featuredArtwork = DUMMY_ARTWORKS.find(obj => obj.onFrontpage === true);
  const { artwork_id, image, title, artist }: TArtworkListItemModel =
    featuredArtwork!;
  return (
    <section className="flex w-full flex-col gap-8 md:flex-row">
      <aside className="flex w-full flex-col md:w-1/2">
        <div className="w-full">
          <Link href={`/artwork/${artwork_id}`}>
            <Image
              className="w-full object-cover object-center"
              src={image}
              alt="Frontpage Image"
              width={1024}
              height={768}
              priority={true}
            />
          </Link>
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-xl text-gray-main">{artist}</p>
          <p className="text-xl italic text-gray-lightlabel">{title}</p>
        </div>
      </aside>
      <aside className="flex flex-col items-center justify-center md:w-1/2">
        <h2 className="font-serif text-4xl">
          Discover the brilliant works of contemporary artists
        </h2>
        <p className="font-serif text-xl">
          Discover art works from our collection of contemporary pieces
          <br />
          Our wide variety of curated galleries and local exhibitions presents
          the works of outstanding artists
        </p>
      </aside>
    </section>
  );
}
