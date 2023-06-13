'use client';

import React from 'react';

import { SafeUser } from '@/app/types';
import useLoginModal from '@/stores/useLoginModal';
import useSignOutModal from '@/stores/useSignOutModal';

type TProps = {
  currentUser?: SafeUser | null;
};

const SignInSignOut = ({ currentUser }: TProps) => {
  const loginModal = useLoginModal();
  const signOutModal = useSignOutModal();

  return (
    <>
      {currentUser ? (
        <button
          onClick={() => {
            signOutModal.onOpen();
          }}
        >
          Sign out
        </button>
      ) : (
        <button
          onClick={() => {
            loginModal.onOpen();
          }}
        >
          Sign in
        </button>
      )}
    </>
  );
};

export default SignInSignOut;
