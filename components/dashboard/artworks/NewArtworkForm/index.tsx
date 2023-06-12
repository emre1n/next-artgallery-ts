'use client';

import { useRouter } from 'next/navigation';

import { CURRENCY_CODES } from '@/libs/constants/CURRENCY_CODES';
import { TArtworkListItemModel } from '@/libs/models/artwork.model';
import { useGalleryStore } from '@/stores/useGalleryStore';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

import ImageUpload from '../ImageUpload';

export default function AddNewArtworkForm() {
  const router = useRouter();
  const addArtwork = useGalleryStore(store => store.addArtwork);

  const validationSchemaAddForm = Yup.object().shape({
    image: Yup.mixed().required('Please select an image file'),
    title: Yup.string().min(2).required(),
    artist: Yup.string().min(2).required(),
    description: Yup.string().min(2).required(),
    isFeatured: Yup.boolean(),
    onFrontpage: Yup.boolean(),
    edition: Yup.number().min(1).required(),
    // remaining_edition: Yup.number().min(1).required(),
    price: Yup.number().min(1).required(),
    currency: Yup.string().min(2).required(),
  });

  const addArtworkHandler = (data: TArtworkListItemModel) => {
    data.remaining_edition = data.edition;
    console.log('Artwork Data', data);
    addArtwork(data);
    axios
      .post('/api/artworks', data)
      .then(() => {
        toast.success('Artwork Created!');
        router.refresh();
        reset();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<TArtworkListItemModel>({
    resolver: yupResolver(validationSchemaAddForm),
    defaultValues: {
      artwork_id: uuidv4(),
      image: '',
      title: '',
      artist: '',
      description: '',
      isFeatured: false,
      onFrontpage: false,
      edition: 0,
      remaining_edition: 0,
      price: 0,
      currency: '',
    },
  });
  const image = watch('image');
  const setCustomValue = (id: any, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(addArtworkHandler)}
      noValidate
    >
      <div className="flex flex-col">
        <label>Title</label>
        <input
          className="border-b border-lightgray focus:outline-none"
          type="text"
          {...register('title')}
        />
        <p className="text-red-500">{errors.title?.message}</p>
      </div>
      <div className="flex flex-col">
        <label>Artist</label>
        <input
          className="border-b border-lightgray focus:outline-none"
          type="text"
          {...register('artist')}
        />
        <p className="text-red-500">{errors.artist?.message}</p>
      </div>
      <div className="flex flex-col">
        <label>Description</label>
        <textarea
          className="border-b border-lightgray focus:outline-none"
          {...register('description')}
        />
        <p className="text-red-500">{errors.description?.message}</p>
      </div>
      <div className="flex flex-col">
        <label>Number of Editions</label>
        <input
          className="border-b border-lightgray focus:outline-none"
          type="number"
          {...register('edition')}
        />
        <p className="text-red-500">{errors.edition?.message}</p>
      </div>

      <div className="flex justify-end gap-4">
        <div className="flex flex-col">
          <label>Price per edition</label>
          <input
            className="border-b border-lightgray focus:outline-none"
            type="number"
            {...register('price')}
          />
          <p className="text-red-500">{errors.price?.message}</p>
        </div>
        <div className="flex flex-col">
          <label>Currency</label>
          <select
            {...register('currency')}
            defaultValue={CURRENCY_CODES.keys[0]}
            className="border-b border-lightgray focus:outline-none"
          >
            {CURRENCY_CODES.keys.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <p className="text-red-500">{errors.currency?.message}</p>
        </div>
      </div>

      {/* <div className="flex flex-col gap-2">
        <label>Artwork Image</label>
        <input
          className="w-full text-sm text-lightgray
          duration-500 file:mr-4
          file:border-0 file:bg-gray-200
          file:px-4
          file:py-2 file:font-semibold
          file:duration-500 hover:file:bg-primary hover:file:text-white
        "
          type="file"
          {...register('image')}
        />
        <p>{errors.image?.message}</p>
      </div> */}
      <ImageUpload
        value={image}
        onChange={value => setCustomValue('image', value)}
      />
      <div className="flex">
        <div className="flex gap-4">
          <label>Featured</label>
          <input
            className="border-b border-lightgray"
            type="checkbox"
            {...register('isFeatured')}
          />
          <p className="text-red-500">{errors.isFeatured?.message}</p>
        </div>
        <div className="flex gap-4">
          <label>On Frontpage</label>
          <input
            className="border-b border-lightgray"
            type="checkbox"
            {...register('onFrontpage')}
          />
          <p className="text-red-500">{errors.onFrontpage?.message}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-lightgray px-4 py-1 text-white duration-500 hover:bg-background hover:text-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
