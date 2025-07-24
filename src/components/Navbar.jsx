import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // or any icon library like react-icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{ fontFamily: 'PrimerFont' }}
      className="w-full bg-white h-14 md:h-20 lg:h-24 flex items-center justify-between px-6 md:px-16 fixed z-50"
    >
      {/* Logo */}
      <Link to="/">
        <img src="/logo.png" alt="Logo" className=" w-[100px] md:w-[130px]" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row justify-between gap-10 text-[1.4vw]">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Hamburger Icon (visible on small screens) */}
      <div className="md:hidden">
        {menuOpen ? (
          <X size={28} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-md flex flex-col items-start p-4 gap-4 md:hidden z-40 text-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
