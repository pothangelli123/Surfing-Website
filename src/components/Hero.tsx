import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section ref={heroRef} id="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/surf9.jpg')",
          y: scrollY * 0.5, // Parallax effect
        }}
      />
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <motion.div 
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Ride the Waves in Hanalei
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl mb-10 leading-relaxed"
        >
          Experience the thrill of surfing with Hanalei Surf School on Kauai's breathtaking North Shore.
        </motion.p>
        <motion.a 
          href="#contact" 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Start Your Adventure
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;