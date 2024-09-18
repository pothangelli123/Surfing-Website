import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-violet-300">Contact Us</h3>
            <p>5-5080 Kuhio Highway</p>
            <p>Hanalei, HI 96714</p>
            <p>Phone: (808) 826-9283</p>
            <p>Email: hanaleisurfschool@gmail.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-violet-300">Quick Links</h3>
            <ul>
            <li><a href="/" className="hover:text-violet-200 transition duration-300">Home</a></li>
            <li><a href="/" className="hover:text-violet-200 transition duration-300">Surf Lessons</a></li>
              <li><a href="/" className="hover:text-violet-200 transition duration-300">SUP Lessons</a></li>
              <li><a href="/" className="hover:text-violet-200 transition duration-300">Rentals</a></li>
              <li><a href="#services" className="hover:text-violet-200 transition duration-300">Services</a></li>
              <li><a href="#about" className="hover:text-violet-200 transition duration-300">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-violet-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-violet-200 transition duration-300">Facebook</a>
              <a href="https://instagram.com" className="hover:text-violet-200 transition duration-300">Instagram</a>
              <a href="https://twitter.com" className="hover:text-violet-200 transition duration-300">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Hanalei Surf School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;