import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Beginner Surfer",
    content: "Hanalei Surf School changed my life! The instructors were patient and encouraging. I went from being afraid of the water to riding waves in just a few days!",
    image: "/testi1.jpg",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Intermediate Surfer",
    content: "The advanced techniques I learned here took my surfing to the next level. The instructors really know their stuff and the waves at Hanalei Bay are perfect for learning.",
    image: "/testi1.jpg",
  },
  {
    id: 3,
    name: "Emma Watson",
    role: "Family Vacation",
    content: "Our family had an amazing time learning to surf together. The kids were naturals and the instructors made sure everyone was safe and having fun. Highly recommend!",
    image: "/testi1.jpg",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-black mb-16 relative">
          <span className="relative z-10">Surf Stories</span>
        </h2>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <svg className="w-3/4 h-3/4 text-white opacity-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 bg-white rounded-xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <motion.img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-300 shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <motion.p
                    className="text-gray-700 text-lg italic mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-semibold text-blue-600">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-blue-300 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;