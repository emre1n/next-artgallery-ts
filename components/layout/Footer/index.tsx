import Image from 'next/image';
import Link from 'next/link';

import LogoGray from '../../../public/logos/logo3gray.png';

export default function Footer() {
  return (
    <footer className="flex h-16 w-full items-center bg-gray-background">
      <Link href="/">
        <Image
          className="w-12"
          src={LogoGray}
          width={600}
          height={600}
          alt="Gray Gallery Logo"
        />
      </Link>
    </footer>
  );
}
