'use client';

import { useCallback, useState } from 'react';

import Input from '@/components/inputs/Input';
import Heading from '@/components/shared/Heading';
import useLoginModal from '@/stores/useLoginModal';
import useRegisterModal from '@/stores/useRegisterModal';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

import Modal from '../Modal';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchemaNewUser = Yup.object().shape({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email().required('Please enter a valid email'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Please enter a password'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationSchemaNewUser),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch(error => {
        toast.error('Something went wrong!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggleRegisterLoginModal = useCallback(() => {
    registerModal.onOpen();
    loginModal.onClose();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to ONE ART" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <div className="mt-4 text-center font-light text-lightgray">
        <div className="flex flex-row items-center justify-center gap-2 text-center">
          <div>Already have an account?</div>
          <div
            onClick={toggleRegisterLoginModal}
            className="cursor-pointer text-secondary hover:underline"
          >
            Sign in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
