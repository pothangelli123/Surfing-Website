import React from 'react';
import './About.css'; // We'll create this file for the animation styles

const About: React.FC = () => {
  const images = [
    '/hnssurftwiiter.jpeg',
    '/instagram 4.jpg',
    '/instagramsurf.jpg',
    '/instagram2.jpg',
    '/instagram6.jpg',
  ];

  return (
    <section id="about" className="py-16 bg-gray-100 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-black-600">About Hanalei Surf School</h2>
        
        <div className="image-scroll-container mb-12 overflow-hidden w-full">
          <div className="image-scroll-content">
            {[...images, ...images].map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`Surf School ${index + 1}`} 
                className="h-64 w-96 object-cover rounded-lg mr-4 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Founded by pro surfer Evan Valiere, Hanalei Surf School is deeply rooted in the rich surfing culture of Kauai's North Shore. Our passion for the ocean and commitment to sharing the art of surfing sets us apart.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With over 20 years of experience, our team of local, professional instructors offers personalized lessons for all skill levels. From first-timers to advanced surfers looking to refine their technique, we provide a safe and encouraging environment to help you ride the waves of the beautiful Hanalei Bay.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-gray-700">Professional Instructors</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-gray-700">All Skill Levels Welcome</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-gray-700">Top-quality Equipment</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block">
            Book Your Surf Adventure
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;