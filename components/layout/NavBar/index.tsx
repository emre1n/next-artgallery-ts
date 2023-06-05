'use client';

import { useCallback, useState } from 'react';

import Link from 'next/link';

import MenuItem from '@/components/shared/MenuItem';
import useRegisterModal from '@/stores/store';
import { BsList } from 'react-icons/bs';
import { BsX } from 'react-icons/bs';

import Logo from '../Logo';

const NavBar = () => {
  const registerModal = useRegisterModal();
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
            <div onClick={toggleUserMenu}>Login</div>
          </li>
        </ul>
        {isUserMenuOpen && (
          <div className="absolute right-8 top-16 border text-lightgray">
            <>
              <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              <MenuItem onClick={() => {}} label="Sign in" />
            </>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
