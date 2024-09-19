import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
  <motion.div 
    className="surf-service-card bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl text-black"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="surf-service-icon text-8xl mb-6 flex justify-center items-center h-32">{icon}</div>
    <h3 className="surf-service-title text-2xl font-bold mb-4 text-center">{title}</h3>
    <p className="surf-service-description text-center">{description}</p>
  </motion.div>
);

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        rotateY: direction > 0 ? 45 : -45,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        rotateY: direction < 0 ? 45 : -45,
      };
    },
  };

  const swipeConfidenceThreshold = 3000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoPlaying) {
      intervalId = setInterval(() => paginate(1), 3000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, paginate]);

  return (
    <section id="services" className="surf-services-section py-16 bg-gray-100 text-black">
      <div className="surf-services-container container mx-auto px-4">
        <h2 className="surf-services-heading text-4xl font-bold text-center mb-12 text-black">Our Services</h2>
        <div 
          className="surf-services-carousel relative overflow-hidden"
          style={{ perspective: 1000 }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full md:w-2/3 mx-auto"
            >
              <ServiceCard {...services[Math.abs(page) % services.length]} />
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-md"
          >
            &#8592;
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-md"
          >
            &#8594;
          </button>
        </div>
        <div className="surf-services-indicators flex justify-center mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-blue-200'
              }`}
            />
          ))}
        </div>
        <div className="surf-services-cta mt-16 text-center">
          <motion.a 
            href="#contact" 
            className="surf-services-button bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
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