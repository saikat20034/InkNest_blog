'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-5 py-4 mx-auto max-w-7xl md:px-12 lg:px-28">
        <Link href="/" className="font-mono text-xl font-bold text-black md:text-2xl">
        InkNest⚡
        </Link>

        <nav className="items-center hidden gap-8 font-mono text-black md:flex">
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

        <div className="hidden md:block">
          <Link
            href="/get-started"
            className="px-6 py-2 font-mono transition duration-300 bg-gray-600 border border-black rounded-md hover:bg-black hover:text-white"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="text-2xl text-black md:hidden">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="px-5 pb-4 space-y-2 font-mono text-black bg-white md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 transition border-b border-gray-200 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/get-started"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 mt-2 text-center transition border border-black rounded-md hover:bg-black hover:text-white"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
