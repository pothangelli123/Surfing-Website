import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Services.css';

const ServiceCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
  <motion.div 
    className="surf-service-card bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl text-black"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="surf-service-image mb-4 flex justify-center items-center h-32 overflow-hidden rounded-lg">
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </div>
    <h3 className="surf-service-title text-xl font-bold mb-2 text-center">{title}</h3>
    <p className="surf-service-description text-center text-sm">{description}</p>
  </motion.div>
);

const Services: React.FC = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const services = [
    {
      title: "Beginner Surf Lessons",
      description: "Perfect for first-timers. Learn the basics of surfing in a safe, fun environment with our expert instructors.",
      image: "/facebook1.jpg"
    },
    {
      title: "Intermediate Surf Coaching",
      description: "Take your surfing to the next level. Improve your technique and learn to read waves like a pro.",
      image: "/facebook2.jpg"
    },
    {
      title: "Advanced Surf Training",
      description: "For experienced surfers looking to master complex maneuvers and compete at higher levels.",
      image: "/facebook3.jpg"
    },
    {
      title: "SUP Lessons",
      description: "Discover the joy of stand-up paddleboarding. Great for all ages and fitness levels.",
      image: "/facebook4.jpg"
    },
    {
      title: "Surf & SUP Equipment Rentals",
      description: "High-quality boards and gear available for rent. Perfect for those who want to practice on their own.",
      image: "/instagram2.jpg"
    },
    {
      title: "Private Surf Tours",
      description: "Explore hidden surf spots around Hanalei with our experienced local guides.",
      image: "/facebook6.jpg"
    }
  ];

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  useEffect(() => {
    if (containerWidth === 0) return;

    const animateCards = async () => {
      await controls.start({
        x: [-containerWidth, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    };

    animateCards();

    return () => controls.stop();
  }, [controls, containerWidth]);

  return (
    <section id="services" className="surf-services-section py-16 bg-blue-50 text-black overflow-hidden">
      <div className="surf-services-container container mx-auto px-4">
        <h2 className="surf-services-heading text-4xl font-bold text-center mb-12 text-black">Our Services</h2>
        <div className="surf-services-carousel relative overflow-hidden" ref={containerRef}>
          <motion.div 
            className="surf-services-track flex"
            animate={controls}
            style={{ width: `${containerWidth * 2}px` }}
          >
            {[...services, ...services].map((service, index) => (
              <div key={index} className="surf-service-slide flex-shrink-0 mx-4">
                <ServiceCard {...service} />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="surf-services-cta mt-16 text-center">
          <motion.a 
            href="#contact" 
            className="surf-services-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Book a Service
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;