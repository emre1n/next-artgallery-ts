'use client';

import Image from 'next/image';
import Link from 'next/link';

import Burger from '../../../public/images/navburger.png';
import Logo from '../../../public/logos/logo1.png';

const NavBar = () => {
  return (
    <header
      className={`sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-white px-8 transition-all`}
    >
      <Link className="max-w-[136px]" href="/">
        <Image src={Logo} alt="Gallery Logo" />
      </Link>
      <nav>
        <Link className="max-w-[90px] md:hidden" href="/">
          <Image src={Burger} width={20} alt="Hamburger Menu" />
        </Link>
        <ul className="hidden gap-8 text-gray-text md:flex">
          <li>
            <Link href="/">Collection</Link>
          </li>
          <li>
            <Link href="/add-new-artwork">Add New Artwork</Link>
          </li>
          <li>
            <Link href="/login">Sign in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
