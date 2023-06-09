import React from 'react';
import { useCallback } from 'react';

import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';

import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var cloudinary: any;
}

type TImageUploadProps = {
  onChange: (value: string) => void;
  value: string;
};

const ImageUpload = ({ onChange, value }: TImageUploadProps) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange],
  );
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="iwomqky1"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
        relative
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        gap-4
        border-2
        border-dashed
        border-lightgray
        p-20
        text-lightgray
        transition
        hover:opacity-70
        "
          >
            <TbPhotoPlus size={50} />
            <div className="text-lg font-semibold">Click to upload</div>
            {value && (
              <div className="absolute inset-0 h-full w-full">
                <Image
                  alt="Upload"
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
