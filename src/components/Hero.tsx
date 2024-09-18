import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0 animate-slower-pan" style={{backgroundImage: "url('/surf9.jpg')"}}></div>
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Experience the Thrill of Surfing in Hanalei
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
          Join Hanalei Surf School for unforgettable lessons on Kauai's beautiful North Shore. 
          From beginners to advanced surfers, we've got the perfect wave for you.
        </p>
        <a 
          href="#contact" 
          className="bg-blue-600 hover:bg-light-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg inline-block"
        >
          Book Your Lesson Now
        </a>
      </div>
    </section>
  );
};

export default Hero;