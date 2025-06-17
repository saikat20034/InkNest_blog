'use client';

import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async e => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: name });
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md dark:bg-gray-800"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-sm text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 font-bold text-white bg-black rounded hover:bg-gray-800"
        >
          Sign Up
        </button>

        <div className="relative w-full py-2 text-center">
          <span className="absolute px-2 text-sm text-gray-400 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 dark:bg-gray-800">
            or
          </span>
          <div className="border-b border-gray-300 dark:border-gray-600"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full py-2 font-bold text-black bg-white border border-gray-300 rounded hover:bg-gray-100"
        >
          Sign up with Google
        </button>

        <p className="text-sm text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
