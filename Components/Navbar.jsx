'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(useDark);
    document.documentElement.classList.toggle('dark', useDark);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="flex items-center justify-between px-5 py-4 mx-auto max-w-7xl md:px-12 lg:px-28">
        <Link href="/" className="font-mono text-xl font-bold text-black dark:text-white md:text-2xl">
          InkNest⚡
        </Link>

        <nav className="items-center hidden gap-8 font-mono text-black dark:text-white md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition duration-200 hover:text-blue-600"
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
          <Link
            href="/get-started"
            className="px-6 py-2 font-mono transition duration-300 bg-gray-600 border border-black rounded-md hover:bg-black hover:text-white"
          >
            Get Started
          </Link>
        </div>

        <button onClick={toggleMenu} className="text-2xl text-black dark:text-white md:hidden">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="px-5 pb-4 space-y-2 font-mono text-black bg-white dark:text-white dark:bg-gray-900 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 transition border-b border-gray-200 dark:border-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between mt-2">
            <Link
              href="/get-started"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-4 py-2 text-center border border-black rounded-md hover:bg-black hover:text-white"
            >
              Get Started
            </Link>
            <button
  onClick={() => {
    document.documentElement.classList.toggle('dark');
  }}
  className="btn"
>
  Toggle Theme
</button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
