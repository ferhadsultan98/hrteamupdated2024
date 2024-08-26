import React, { useState, useEffect } from 'react';
import './scroll.css';
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
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


  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div className={`scroll-button ${isVisible ? 'visible' : ''}`} onClick={handleClick}>
     <i><FaCircleArrowUp /></i>
    </div>
  );
};

export default ScrollButton;
