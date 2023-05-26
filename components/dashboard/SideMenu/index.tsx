import Link from 'next/link';

const SideMenu = () => {
  return (
    <div className="h-screen w-28 border-r border-gray-text pr-2 text-gray-text hover:text-black">
      <p className="text-center duration-500 hover:border-b hover:border-b-black">
        <Link href="/dashboard/artworks">Artworks</Link>
      </p>
    </div>
  );
};

export default SideMenu;
