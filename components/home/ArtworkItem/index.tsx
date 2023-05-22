'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { TArtworkListItemModel } from '@/libs/models/artwork.model';

import Card from '../../ui/Card';

type ArtworkProps = TArtworkListItemModel;

function ArtworkItem({ artwork_id, image, title, artist }: ArtworkProps) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/artwork/' + artwork_id);
  };

  return (
    <li>
      <Card>
        <div className="relative h-[282px] w-[282px] overflow-hidden">
          <Image
            className="object-cover"
            src={image}
            alt={title}
            // width={500}
            // height={500}
            fill={true}
          />
        </div>
        <div className="bg-slate-100">
          <p className="text-grey-900 text-lg">{artist}</p>
          <p className="text-grey-900 text-xl italic">{title}</p>
        </div>
      </Card>
    </li>
  );
}

export default ArtworkItem;
