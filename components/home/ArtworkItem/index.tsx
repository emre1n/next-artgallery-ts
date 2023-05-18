'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { TArtworkListItemModel } from '@/libs/models/artwork.model';

import Card from '../../ui/Card';

type ArtworkProps = TArtworkListItemModel;

function ArtworkItem({ id, image, title, artist }: ArtworkProps) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/artwork/' + id);
  };

  return (
    <li className="mx-0 my-4">
      <Card>
        <div className="h-80 w-full overflow-hidden rounded-t-md">
          <Image
            className="object-cover"
            src={image}
            alt={title}
            width={500}
            height={500}
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-grey-900 text-xl">{title}</h3>
          <h4>{artist}</h4>
        </div>
        <div className="p-6 text-center">
          <button
            className="cursor-pointer rounded-md border border-gray-600 bg-transparent px-6 py-2 font-normal text-gray-600 hover:bg-gray-300 active:bg-gray-300"
            onClick={showDetailsHandler}
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ArtworkItem;
