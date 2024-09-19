import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#3b82f6] to-blue-900 text-white py-12 overflow-hidden">
      <div className="wave-container">
        <div className="wave"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Contact Us</h3>
            <p className="text-blue-100">5-5080 Kuhio Highway</p>
            <p className="text-blue-100">Hanalei, HI 96714</p>
            <p className="text-blue-100">Phone: (808) 826-9283</p>
            <p className="text-blue-100">Email: hanaleisurfschool@gmail.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Surf Programs</h3>
            <ul>
              <li><a href="/lessons" className="text-blue-100 hover:text-cyan-200 transition duration-300">Surf Lessons</a></li>
              <li><a href="/sup-lessons" className="text-blue-100 hover:text-cyan-200 transition duration-300">SUP Lessons</a></li>
              <li><a href="/rentals" className="text-blue-100 hover:text-cyan-200 transition duration-300">Equipment Rentals</a></li>
              <li><a href="/camps" className="text-blue-100 hover:text-cyan-200 transition duration-300">Surf Camps</a></li>
              <li><a href="/about" className="text-blue-100 hover:text-cyan-200 transition duration-300">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Connect With Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="https://www.facebook.com/HanaleiSurfSchool/" className="text-blue-100 hover:text-cyan-200 transition duration-300 flex items-center">
                <FaFacebookF className="mr-2" /> Facebook
              </a>
              <a href="https://www.instagram.com/hanaleisurfschool/" className="text-blue-100 hover:text-cyan-200 transition duration-300 flex items-center">
                <FaInstagram className="mr-2" /> Instagram
              </a>
              <a href="https://x.com/surf_hanalei" className="text-blue-100 hover:text-cyan-200 transition duration-300 flex items-center">
                <FaTwitter className="mr-2" /> Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-blue-200">&copy; 2024 Hanalei Surf School. Ride the waves with us!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Add this to your globals.css or a new styles file
// @keyframes wave {
//   0% { background-position-x: 0; }
//   100% { background-position-x: 1440px; }
// }
// 
// .animate-wave {
//   animation: wave 20s linear infinite;
// }