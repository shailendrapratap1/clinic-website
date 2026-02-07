
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/testimonial', label: 'Testimonial' },
  { path: '/history', label: 'History' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-12.5 flex items-center justify-between px-8 z-50 bg-linear-to-r from-sky-100 to-sky-300">
      <h2 className="text-black text-2xl font-bold no-underline">
        E-<span className="text-sky-600">Sheba</span>
      </h2>

      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="font-medium transition-colors hover:text-white flex"
        >
            {link.label}
          </Link>
        ))}

        <div className="flex gap-5">
          <Link
            to="/login"
            className="bg-sky-100 text-sky-500 font-semibold text-xl px-4 py-2 rounded-3xl border border-blue-300 cursor-pointer"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-sky-500 text-white font-semibold text-xl px-4 py-2 rounded-3xl border border-blue-300 cursor-pointer"
          >
            Sign up
          </Link>
        </div>
      </div>

      <button
        className="block md:hidden border-none text-black cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-15 left-0 right-0 bg-gray-900 p-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white no-underline py-2 border-b border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-800">
            <Link
              to="/login"
              className="bg-sky-100 text-sky-500 font-semibold text-xl px-4 py-2 rounded-3xl border border-blue-300 cursor-pointer text-center"
              onClick={() => setIsOpen(false)}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-sky-500 text-white font-semibold text-xl px-4 py-2 rounded-3xl border border-blue-300 cursor-pointer text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
