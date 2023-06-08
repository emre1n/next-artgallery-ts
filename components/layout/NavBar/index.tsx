'use client';

import { useCallback, useState } from 'react';

import Link from 'next/link';

import { SafeUser } from '@/app/types';
import MenuItem from '@/components/shared/MenuItem';
import useLoginModal from '@/stores/useLoginModal';
import useRegisterModal from '@/stores/useRegisterModal';
import { BsList, BsX } from 'react-icons/bs';

import Logo from '../Logo';
import SignInSignOut from '../SignInSignOut';

type TNavbarProps = {
  currentUser?: SafeUser | null;
};

const NavBar = ({ currentUser }: TNavbarProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isOpen, setIsOpen] = useState(false);

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
              <Link href="/collection">
                <button>Collection</button>
              </Link>
            </li>
            <li className="border-b border-white py-2 duration-500 hover:border-primary hover:text-primary">
              <Link href="/dashboard">
                <button>Dashboard</button>
              </Link>
            </li>
            <li className="border-b border-white py-2 duration-500 hover:border-primary hover:text-primary">
              <button>Signin</button>
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
            onClick={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <BsList
            className="transition-all hover:cursor-pointer active:scale-90 md:hidden"
            size={20}
            onClick={() => {
              setIsOpen(true);
            }}
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
            <SignInSignOut currentUser={currentUser} />
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
                label="Signin"
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
