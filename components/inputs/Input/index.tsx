'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

const Input = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  register,
  required,
  errors,
}: InputProps) => {
  return (
    <div className="relative w-full">
      {formatPrice && (
        <BiDollar size={24} className="absolute left-2 top-5 text-secondary" />
      )}
      <form>
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder=" "
          type={type}
          autoComplete=""
          className={`
        peer
        w-full
        rounded-md
        border-2
        bg-background
        p-4
        pt-6
        font-light
        outline-none
        transition 
        disabled:cursor-not-allowed disabled:opacity-70
        ${formatPrice ? 'pl-9' : 'pl-4'}
        ${errors[id] ? 'border-red-500' : 'border-lightgray'}
        ${errors[id] ? 'focus:border-red-500' : 'focus:border-secondary'}
        `}
        />
        <label
          className={`
      text-md
      absolute
      top-5
      z-10
      origin-[0]
      -translate-y-3
      transform
      duration-150
      ${formatPrice ? 'left-9' : 'left-4'}
      peer-placeholder-shown:translate-y-0
      peer-placeholder-shown:scale-100
      peer-focus:-translate-y-4
      peer-focus:scale-75
      ${errors[id] ? 'text-red-500' : 'text-lightgray'}
      `}
        >
          {label}
        </label>
      </form>
    </div>
  );
};

export default Input;
