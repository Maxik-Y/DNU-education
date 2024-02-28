import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './style.css';

const BtnScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.button
      id="scrollToTopBtn"
      title="Go to top"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
      whileTap={{ scale: 0.9 }}
    >
    </motion.button>
  );
};

export default BtnScrollTop;