'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(useDark);
    if (useDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const commonLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const privateLinks = [
    { name: 'Add Blog', href: '/add-blog' },
    { name: 'My Added Blog', href: '/added-blog' },
  ];

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setMenuOpen(false);
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="flex items-center justify-between px-3 py-4 mx-auto max-w-7xl md:px-6 lg:px-1">
        <Link
          href="/"
          className="font-mono text-xl font-bold text-black dark:text-white md:text-2xl"
        >
          InkNest⚡
        </Link>

        <nav className="items-center hidden gap-8 font-mono text-black dark:text-white md:flex">
          {commonLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="transition duration-200 hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
          {user &&
            privateLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="transition duration-200 hover:text-orange-500"
              >
                {link.name}
              </Link>
            ))}
        </nav>

        <div className="items-center hidden gap-4 md:flex">
          <button
            onClick={toggleTheme}
            className="text-xl transition-colors hover:text-yellow-400"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
                <img
                  src={user.photoURL || '/default-avatar.png'}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm hover:underline">
                  {user.displayName || user.email}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-sm border border-gray-700 rounded hover:bg-red-600 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 text-sm border border-black rounded hover:bg-orange-500 hover:text-white"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-sm border border-black rounded hover:bg-orange-500 hover:text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          onClick={toggleMenu}
          className="text-2xl text-black dark:text-white md:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="px-5 pb-4 space-y-2 font-mono text-black bg-white dark:text-white dark:bg-gray-900 md:hidden">
          {commonLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 transition border-b border-gray-200 dark:border-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}

          {user &&
            privateLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition border-b border-gray-200 dark:border-gray-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

          <div className="mt-4 space-y-2">
            {user ? (
              <>
                <Link
                  href="/app/profile/page.jsx"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2 border-b border-gray-200 dark:border-gray-700 hover:text-blue-600"
                >
                  <img
                    src={user.photoURL || '/default-avatar.png'}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm">
                    {user.displayName || user.email}
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-center border border-black rounded-md hover:bg-red-600 hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    handleGoogleLogin();
                    setMenuOpen(false);
                  }}
                  className="block w-full px-4 py-2 mb-2 text-center border border-red-500 rounded-md hover:bg-red-500 hover:text-white"
                >
                  Sign in with Google
                </button>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-4 py-2 mb-2 text-center border border-black rounded-md hover:bg-black hover:text-white"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-4 py-2 text-center border border-black rounded-md hover:bg-black hover:text-white"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;