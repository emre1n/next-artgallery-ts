import Image from 'next/image';
import Link from 'next/link';

import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';

import LogoGray from '../../../public/logos/logo3gray.png';

export default function Footer() {
  return (
    <footer className="flex h-16 w-full items-center justify-between bg-gray-background px-8">
      <div className="flex gap-4">
        <Link href="/">
          <Image
            className="w-9"
            src={LogoGray}
            width={600}
            height={600}
            alt="Gray Gallery Logo"
          />
        </Link>
        <div className="flex items-center gap-8 text-gray-text">
          <div>© One Art 2023</div>
          <div>Terms</div>
          <div>Privacy</div>
          <div>v0.2.0</div>
        </div>
      </div>
      <div className="flex gap-4 text-gray-text">
        <BsTwitter size={24} />
        <BsInstagram size={24} />
        <BsDiscord size={24} />
      </div>
    </footer>
  );
}
