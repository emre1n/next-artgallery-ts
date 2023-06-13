'use client';

import { signOut } from 'next-auth/react';

import Heading from '@/components/shared/Heading';
import useSignOutModal from '@/stores/useSignOutModal';

import Modal from '../Modal';

const SignOutModal = () => {
  const signOutModal = useSignOutModal();

  const handleSignOut = () => {
    signOut();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Signing out" subtitle="Are you sure want to sign out?" />
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <div className="mt-4 text-center font-light text-lightgray">
        <div className="flex flex-row items-center justify-center gap-2 text-center"></div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={signOutModal.isOpen}
      title="Sign out"
      actionLabel="Sign out"
      onClose={signOutModal.onClose}
      onSubmit={handleSignOut}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default SignOutModal;
