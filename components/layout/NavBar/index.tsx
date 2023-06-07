'use client';

import { useCallback, useState } from 'react';

import { signOut } from 'next-auth/react';
import Link from 'next/link';

import MenuItem from '@/components/shared/MenuItem';
import useLoginModal from '@/stores/useLoginModal';
import useRegisterModal from '@/stores/useRegisterModal';
import { User } from '@prisma/client';
import { BsList } from 'react-icons/bs';
import { BsX } from 'react-icons/bs';

import Logo from '../Logo';

type TNavbarProps = {
  currentUser?: User | null;
};

const NavBar = ({ currentUser }: TNavbarProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsOpen(value => !value);
  }, []);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toggleUserMenu = useCallback(() => {
    setIsUserMenuOpen(value => !value);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-white px-8">
      {isOpen ? (
        <div className="absolute left-0 top-16 h-screen w-full bg-white md:hidden">
          <ul className="flex flex-col items-center text-lightgray">
            <li className="border-b border-white py-2 duration-500 hover:border-primary hover:text-primary">
              <Link href="/collection" onClick={toggleMenu}>
                Collection
              </Link>
            </li>
            <li className="border-b border-white py-2 duration-500 hover:border-primary hover:text-primary">
              <Link href="/dashboard" onClick={toggleMenu}>
                Dashboard
              </Link>
            </li>
            <li className="border-b border-white py-2 duration-500 hover:border-primary hover:text-primary">
              <Link href="/login" onClick={toggleMenu}>
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
      <Logo />
      <nav>
        {isOpen ? (
          <BsX
            className="transition-all hover:cursor-pointer active:scale-90 md:hidden"
            size={20}
            onClick={toggleMenu}
          />
        ) : (
          <BsList
            className="transition-all hover:cursor-pointer active:scale-90 md:hidden"
            size={20}
            onClick={toggleMenu}
          />
        )}

        <ul className="hidden gap-8 text-lightgray md:flex">
          <li className="border-b border-white py-2 duration-500 hover:border-primary hover:text-primary">
            <Link href="/collection">Collection</Link>
          </li>
          <li className="border-b border-white py-2 duration-500 hover:border-primary hover:text-primary">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="cursor-pointer border-b border-white py-2 duration-500 hover:border-primary hover:text-primary">
            {currentUser ? (
              <div onClick={() => signOut()}>Sign out</div>
            ) : (
              <div onClick={toggleUserMenu}>Sign in</div>
            )}
          </li>
        </ul>
        {isUserMenuOpen && (
          <div className="absolute right-8 top-16 border text-lightgray">
            <>
              <MenuItem
                onClick={() => {
                  loginModal.onOpen();
                  toggleUserMenu();
                }}
                label="Sign in"
              />
              <MenuItem
                onClick={() => {
                  registerModal.onOpen();
                  toggleUserMenu();
                }}
                label="Sign up"
              />
            </>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
