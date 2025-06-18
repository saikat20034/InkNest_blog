'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || '');
        setPhotoURL(currentUser.photoURL || '');
      } else {
        router.push('/login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleSave = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      setMessage('Profile updated successfully!');
      setEditing(false);
      setUser({ ...user, displayName, photoURL });
    } catch (err) {
      setMessage('Failed to update profile. Try again.');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300">Loading profile...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="w-full max-w-md p-6 text-center bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          src={photoURL || '/default-avatar.png'}
          alt="User Avatar"
          className="w-24 h-24 mx-auto mb-4 border-4 border-blue-500 rounded-full"
        />
        {editing ? (
          <>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display Name"
              className="w-full px-3 py-2 mb-3 text-sm border rounded dark:bg-gray-700 dark:text-white"
            />
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Photo URL"
              className="w-full px-3 py-2 mb-3 text-sm border rounded dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={handleSave}
              className="w-full px-4 py-2 mb-2 text-white bg-green-600 rounded hover:bg-green-700"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditing(false)}
              className="w-full px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold">{user.displayName || 'User'}</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {user.email}
            </p>
            <p className="mt-2 text-sm">
              Email Verified: {user.emailVerified ? '✅ Yes' : '❌ No'}
            </p>
            {user.metadata?.creationTime && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Joined On: {new Date(user.metadata.creationTime).toLocaleDateString()}
              </p>
            )}
            <button
              onClick={() => setEditing(true)}
              className="w-full px-4 py-2 mt-5 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Edit Profile
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full px-4 py-2 mt-3 text-white bg-gray-600 rounded hover:bg-gray-700"
            >
              Back to Home
            </button>
          </>
        )}
        {message && (
          <p className="mt-4 text-sm text-center text-green-500 dark:text-green-400">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
