'use client';

import { TArtworkListItemModel } from '@/lib/models/artwork.model';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

export default function AddNewArtworkForm() {
  const validationSchemaAddForm = Yup.object().shape({
    image: Yup.mixed().required('Please select an image file'),
    title: Yup.string().min(2).required(),
    artist: Yup.string().min(2).required(),
    // description: Yup.string().min(2).required(),
    // isFeatured: Yup.boolean().required(),
    // onFrontpage: Yup.boolean().required(),
    // edition: Yup.number().min(1).required(),
    // remaining_edition: Yup.number().min(1).required(),
    // price: Yup.number().min(1).required(),
    // currency: Yup.string().min(2).required(),
  });

  const addArtworkHandler = (data: {
    title: string;
    artist: string;
    image: string;
  }) => {
    console.log('Artwork Data', data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ title: string; artist: string; image: string }>({
    resolver: yupResolver(validationSchemaAddForm),
    defaultValues: {
      // artwork_id: '',
      image: '',
      title: '',
      artist: '',
      // description: '',
      // isFeatured: false,
      // onFrontpage: false,
      // edition: 0,
      // remaining_edition: 0,
      // price: 0,
      // currency: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(addArtworkHandler)} noValidate>
      <div>
        <label className="label">Title</label>
        <input
          className="border border-slate-500"
          type="text"
          {...register('title')}
        />
        <p>{errors.title?.message}</p>
      </div>
      <div>
        <label>Artist</label>
        <input
          className="border border-slate-500"
          type="text"
          {...register('artist')}
        />
        <p>{errors.artist?.message}</p>
      </div>
      <div>
        <label>Artwork Image</label>
        <input
          className="border border-slate-500"
          type="file"
          {...register('image')}
        />
        <p>{errors.artist?.message}</p>
      </div>
      <div>
        <button className="bg-slate-500">Submit</button>
      </div>
    </form>
  );
}
