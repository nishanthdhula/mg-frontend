'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import api from '@/services/api';

interface PropertyImage {
  id: number;
  image: string;
}

interface Property {
  id: number;
  title: string;
  images: PropertyImage[];
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function PropertyPage({
  params,
}: PageProps) {

  const [property, setProperty] =
    useState<Property | null>(null);

  useEffect(() => {

  const fetchProperty = async () => {

    try {

      const response = await api.get(
        `/property/${params.id}`
      );

      setProperty(response.data);

    } catch (error) {

      console.error(
        'Error fetching property:',
        error
      );

    }

  };

  fetchProperty();

}, [params.id]);

  if (!property) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className='p-10'>

      <h1 className='text-4xl font-bold mb-5'>
        {property.title}
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

        {property.images.map(
          (image: PropertyImage) => (

            <Image
              key={image.id}
              src={`http://127.0.0.1:8000/storage/${image.image}`}
              alt={property.title}
              width={500}
              height={300}
              className='rounded-xl h-52 w-full object-cover'
            />

          )
        )}

      </div>

    </div>
  );
}