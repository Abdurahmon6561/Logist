"use client"
import React, { useState } from 'react';
import Logo from '../../public/images/logo.png';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header
        id="home-content"
        className="brand-bg text-white py-4 fixed top-0 left-0 right-0 w-full z-50"
      >
        <div className="container mx-auto flex justify-between items-center sm:px-0 px-2">
          <a href="/" className="text-2xl font-bold">
            <Image src={Logo} alt="logo" className="w-20 sm:w-28" />
          </a>
          <nav className={`sm:flex px-16 ${isMenuOpen ? 'block' : 'hidden'} sm:space-x-6 space-x-5 flex`}>
            <a href="#home" className="relative group">
              Home
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a href="#about-content" className="relative group">
              About Us
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a href="#contact-content" className="relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block sm:hidden text-2xl ml-[-180px] flex items-center justify-center"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              // Close Icon SVG
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon SVG
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
