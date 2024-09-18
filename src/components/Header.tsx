import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#333] text-white sticky top-0 z-50 h-16 sm:h-20 md:h-24">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <a href="/" className="text-xl sm:text-2xl font-bold">Hanalei Surf School</a>
        <nav className="hidden md:flex space-x-2 lg:space-x-4">
          <a href="/" className="hover:text-blue-200 text-sm lg:text-base">Home</a>
          <a href="#surf-lessons" className="hover:text-blue-200 text-sm lg:text-base">Surf Lessons</a>
          <a href="#sup-lessons" className="hover:text-blue-200 text-sm lg:text-base">SUP Lessons</a>
          <a href="#rentals" className="hover:text-blue-200 text-sm lg:text-base">Rentals</a>
          <a href="#about" className="hover:text-blue-200 text-sm lg:text-base">About</a>
          <a href="#contact" className="hover:text-blue-200 text-sm lg:text-base">Contact</a>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-[#333] p-4">
          <a href="#surf-lessons" className="block py-2 hover:text-blue-200">Surf Lessons</a>
          <a href="#sup-lessons" className="block py-2 hover:text-blue-200">SUP Lessons</a>
          <a href="#rentals" className="block py-2 hover:text-blue-200">Rentals</a>
          <a href="#about" className="block py-2 hover:text-blue-200">About</a>
          <a href="#contact" className="block py-2 hover:text-blue-200">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;