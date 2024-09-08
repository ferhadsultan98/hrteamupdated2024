import React, { useState, useEffect, useRef } from 'react';
import './MainHeadSlider.css'; 
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import imagesData from './MainHeadSlider.json'

const SliderMain = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);
  const { t } = useTranslation(); 

  useEffect(() => {
    const nextImage = () => {
      setImageIndex(prevIndex => (prevIndex + 1) % imagesData.length);
    };

    intervalRef.current = setInterval(nextImage, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrevClick = () => {
    setImageIndex(prevIndex => (prevIndex - 1 + imagesData.length) % imagesData.length);
    resetInterval();
  };

  const handleNextClick = () => {
    setImageIndex(prevIndex => (prevIndex + 1) % imagesData.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % imagesData.length);
    }, 3000);
  };

  const handleMouseEnter = () => {
    const arrows = sliderRef.current.querySelectorAll('.nav-arrow');
    arrows.forEach(arrow => arrow.classList.add('visible'));
  };

  const handleMouseLeave = () => {
    const arrows = sliderRef.current.querySelectorAll('.nav-arrow');
    arrows.forEach(arrow => arrow.classList.remove('visible'));
  };

  return (
    <div className="sliderbodys" ref={sliderRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="slider-container">
        <div className="image-container">
          {imagesData.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === imageIndex ? 'slide-active' : ''}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="slide-image"
              />
              <div className="slide-text">
                <p>{t(slide.text)}</p>
                <a href="#more-info" className="read-more-button">{t('header.contact')}</a>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow prev-arrow" onClick={handlePrevClick}><MdArrowBackIos /></button>
        <button className="nav-arrow next-arrow" onClick={handleNextClick}><MdArrowForwardIos /></button>
      </div>
    </div>
  );
};

export default SliderMain;
