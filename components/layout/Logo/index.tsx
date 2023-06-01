'use client';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/logos/logo1.png';

const Logo = () => {
  return (
    <>
      <Link className="max-w-[136px]" href="/">
        <Image
          src={logo}
          width={600}
          height={600}
          alt="Gallery Logo"
          priority={true}
        />
      </Link>
    </>
  );
};

export default Logo;
