'use client';

import { useState } from 'react';

import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Input from '@/components/inputs/Input';
import Heading from '@/components/shared/Heading';
import Button from '@/components/ui/Button';
import useLoginModal from '@/stores/useLoginModal';
import useRegisterModal from '@/stores/useRegisterModal';
import useSignOutModal from '@/stores/useSignOutModal';
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { GoSignOut } from 'react-icons/go';

import Modal from '../Modal';

const SignOutModal = () => {
  const signOutModal = useSignOutModal();
  // const [isLoading, setIsLoading] = useState(false);

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
      // disabled={isLoading}
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
