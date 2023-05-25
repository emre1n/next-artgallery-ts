'use client';

import Image from 'next/image';
import Link from 'next/link';

import Burger from '../../../public/images/navburger.png';
import Logo from '../../../public/logos/logo1.png';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-white px-8">
      {/* <div className="absolute left-0 top-16 h-screen w-full bg-slate-400"></div> */}
      <Link className="max-w-[136px]" href="/">
        <Image src={Logo} width={600} height={600} alt="Gallery Logo" />
      </Link>

      <nav>
        <Image
          className="transition-all hover:cursor-pointer active:scale-90 md:hidden"
          src={Burger}
          width={20}
          height={20}
          alt="Hamburger Menu"
        />
        <ul className="hidden gap-8 text-gray-text md:flex">
          <li className="border-b border-white py-2 duration-500 hover:border-black hover:text-black">
            <Link href="/collection">Collection</Link>
          </li>
          <li className="border-b border-white py-2 duration-500 hover:border-black hover:text-black">
            <Link href="/add-new-artwork">Add New Artwork</Link>
          </li>
          <li className="border-b border-white py-2 duration-500 hover:border-black hover:text-black">
            <Link href="/login">Sign in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
