'use client';

import { useState } from 'react';
import Image from 'next/image';
import api from '@/services/api';

export default function AddPropertyPage() {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const [images, setImages] =
    useState<File[]>([]);

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    setImages(files);
  };

  const uploadImages = async (
    propertyId: number
  ) => {

    const formData = new FormData();

    images.forEach((image) => {
      formData.append('images[]', image);
    });

    await api.post(
      `/property/${propertyId}/upload-images`,
      formData,
      {
        headers: {
          'Content-Type':
            'multipart/form-data',
        },
      }
    );
  };

  const submit = async () => {

    try {

      const response = await api.post(
        '/property/store',
        {
          title,
          price,
          location,
          property_type: 'Apartment',
          listing_type: 'Sale',
        }
      );

      const propertyId =
        response.data.property.id;

      await uploadImages(propertyId);

      alert('Property Added');

    } catch (error) {

      console.error(error);

    }
  };

  return (

    <div className='p-10 max-w-xl'>

      <h1 className='text-3xl font-bold mb-5'>
        Add Property
      </h1>

      <input
        placeholder='Title'
        className='border p-3 w-full mb-4'
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        placeholder='Price'
        className='border p-3 w-full mb-4'
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <input
        placeholder='Location'
        className='border p-3 w-full mb-4'
        onChange={(e) =>
          setLocation(e.target.value)
        }
      />

      <input
        type='file'
        multiple
        onChange={handleImage}
        className='mb-5'
      />

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-5'>

        {images.map((image, index) => (

          <Image
            key={index}
            src={URL.createObjectURL(image)}
            alt='Preview'
            width={200}
            height={200}
            className='h-32 w-full object-cover rounded'
          />

        ))}

      </div>

      <button
        onClick={submit}
        className='bg-black text-white px-5 py-3 rounded'
      >
        Submit
      </button>

    </div>
  );
}