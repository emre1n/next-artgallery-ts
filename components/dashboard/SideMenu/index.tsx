import Link from 'next/link';

import { BsPalette } from 'react-icons/bs';

const SideMenu = () => {
  return (
    <div className="h-screen w-32 flex-col border-r border-lightgray pr-2 text-lightgray">
      <span className="flex gap-2 p-2 text-center duration-500 hover:border-b hover:border-b-primary hover:text-primary">
        <BsPalette className="inline place-self-center" />
        <Link href="/dashboard/artworks">Artworks</Link>
      </span>
    </div>
  );
};

export default SideMenu;
