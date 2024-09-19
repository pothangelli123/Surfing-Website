import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white text-gray-800 shadow-md' : 'bg-transparent text-white'
  }`;

  const navItemClasses = `hover:text-blue-500 transition-colors duration-300 text-sm lg:text-base`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 h-16 sm:h-20 md:h-24 flex justify-between items-center">
        <motion.a
          href="/"
          className="text-xl sm:text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hanalei Surf School
        </motion.a>
        <nav className="hidden md:flex space-x-2 lg:space-x-4">
          {['Home', 'Surf Lessons', 'SUP Lessons', 'Rentals', 'About', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
              className={navItemClasses}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? '×' : '☰'}
        </motion.button>
      </div>
      <motion.nav
        className={`md:hidden bg-white shadow-lg absolute w-full ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        {['Surf Lessons', 'SUP Lessons', 'Rentals', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="block py-3 px-4 text-gray-800 hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </motion.nav>
    </header>
  );
};

export default Header;