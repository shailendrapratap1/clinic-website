import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/features', label: 'Application' },
  { path: '/History', label: 'History' },
  { path: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[40px]  flex items-start justify-between px-8 z-100  bg-linear-to-r from-sky-100 to-sky-300 ">
      <h2 className="text-black text-2xl font-bold no-underline">E-<span className='text-sky-600'>Sheba</span></h2>

      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className=" font-medium transition-colors hover:text-white flex "
          >
            {link.label}
          </Link>
          
        ))}
          </div>
                <div className='hidden md:flex gap-5'>
<button className=" bg-sky-100 text-sky-500 font-semibold text-xl px-4 py-2 rounded-4xl md:w-26 border border-blue-300 cursor-pointer" >
  Log in
</button>
<button className=" bg-sky-500 text-white font-semibold text-xl px-4 py-2 rounded-4xl md:w-26 border border-blue-300 cursor-pointer"onClick={()=> <Link to='/signup'></Link>}>
sign up
</button>
</div>
    
       

     

      <button
        className="block md:hidden  border-none text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-black/95 p-4 flex flex-col gap-4 md:hidden">
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
         <button className="bg-sky-100 text-sky-500 font-semibold text-xl px-4 py-2 rounded-4xl md:w-26 border border-blue-300 cursor-pointer">
  Log in
</button>
<button className="bg-sky-500 text-white font-semibold text-xl px-4 py-2 rounded-4xl md:w-26 border border-blue-300 cursor-pointer">
sign up
</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;