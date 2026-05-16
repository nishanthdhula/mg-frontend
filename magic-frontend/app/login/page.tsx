'use client';

import { useState } from 'react';
import api from '@/services/api';
// import useAuthStore from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useAuthStore } from "@/store/authStore";
export default function LoginPage() {

  const router = useRouter();

  const { setAuth } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {

    const response = await api.post('/login', {
      email,
      password
    });

    if (response.data.status) {
          localStorage.setItem(
              'token',
            response.data.token
         );
      setAuth(
        response.data.user,
        response.data.token
      );

      const role =
        response.data.user.roles[0]?.name;

      if (role === 'admin') {
        router.push('/admin');
      }
      else if (role === 'builder') {
        router.push('/builder');
      }
      else if (role === 'agent') {
        router.push('/agent');
      }
      else {
        router.push('/customer');
      }

    }
  };

  return (
    <div className='p-10 max-w-md mx-auto'>

      <h1 className='text-3xl font-bold mb-5'>
        Login
      </h1>

      <input
        type='email'
        placeholder='Email'
        className='border p-3 w-full mb-4'
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type='password'
        placeholder='Password'
        className='border p-3 w-full mb-4'
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className='bg-black text-white px-5 py-3 rounded'
      >
        Login
      </button>

    </div>
  );
}