'use client';

import Image from 'next/image';
import Link from 'next/link';

import { TArtworkListItemModel } from '@/lib/models/artwork.model';

type TProps = { artworks: TArtworkListItemModel[] };

export default function HeroSection({ artworks }: TProps) {
  const featuredArtwork = artworks.find(
    artwork => artwork.onFrontpage === true,
  );

  const { artwork_id, image, title, artist }: TArtworkListItemModel =
    featuredArtwork!;
  return (
    <section className="flex w-full flex-col gap-8 md:flex-row">
      <aside className="flex w-full flex-col gap-4 md:w-1/2">
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
        <div className="flex w-full flex-col">
          <p className="text-xl text-primary">{artist}</p>
          <p className="text-xl italic text-secondary">{title}</p>
        </div>
      </aside>
      <aside className="flex flex-col items-center justify-center gap-8 md:w-1/2">
        <h2 className="font-serif text-3xl text-primary lg:text-4xl">
          Discover the brilliant works of contemporary artists
        </h2>
        <p className="font-serif text-lg text-secondary lg:text-xl">
          Discover art works from our collection of contemporary pieces
          <br />
          Our wide variety of curated galleries and local exhibitions presents
          the works of outstanding artists
        </p>
      </aside>
    </section>
  );
}
