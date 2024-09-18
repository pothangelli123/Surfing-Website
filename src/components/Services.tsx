import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="text-blue-600 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Beginner Surf Lessons",
      description: "Perfect for first-timers. Learn the basics of surfing in a safe, fun environment with our expert instructors.",
      icon: "🏄‍♂️"
    },
    {
      title: "Intermediate Surf Coaching",
      description: "Take your surfing to the next level. Improve your technique and learn to read waves like a pro.",
      icon: "🌊"
    },
    {
      title: "Advanced Surf Training",
      description: "For experienced surfers looking to master complex maneuvers and compete at higher levels.",
      icon: "🏆"
    },
    {
      title: "SUP Lessons",
      description: "Discover the joy of stand-up paddleboarding. Great for all ages and fitness levels.",
      icon: "🏄‍♀️"
    },
    {
      title: "Surf & SUP Equipment Rentals",
      description: "High-quality boards and gear available for rent. Perfect for those who want to practice on their own.",
      icon: "🏄‍♂️"
    },
    {
      title: "Private Surf Tours",
      description: "Explore hidden surf spots around Hanalei with our experienced local guides.",
      icon: "🗺️"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black-600">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            Book a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;