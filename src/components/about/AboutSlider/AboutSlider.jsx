import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutSlider.css';

const testimonials = [
  {
    name: 'Elşən Əliyev',
    title: 'İşçi Məmnuniyyəti üzrə Mütəxəssis',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'Şirkətimizdə insan resursları idarəçiliyi çox peşəkardır. Bizim komanda, işçilərin inkişafını və məmnuniyyətini ön planda saxlayır.',
    rating: 5,
  },
  {
    name: 'Nurana Novruzlu',
    title: 'İnsan Resursları Meneceri',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: 'İşçilərin məmnuniyyətini artırmaq üçün tətbiq etdiyimiz tədbirlər və strategiyalar çox təsirlidir. Bizim işçilərimiz özlərini qiymətləndirilmiş hiss edirlər.',
    rating: 5,
  },
  {
    name: 'Ramin Məmmədov',
    title: 'Rekruter',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    text: 'Yeni istedadların cəlb edilməsi və uyğun namizədlərin seçilməsi prosesindəki effektiv yanaşmamız müsbət nəticələr verir. İşə qəbul prosesi şəffaf və sürətlidir.',
    rating: 4,
  },
  {
    name: 'Aynur Quliyeva',
    title: 'Təlim və İnkişaf üzrə Mütəxəssis',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    text: 'Təlim proqramlarımız işçilərin peşəkar inkişafını dəstəkləyir. Şirkətimiz mütəmadi olaraq işçilərin bacarıqlarını artırmaq üçün yeni imkanlar təqdim edir.',
    rating: 5,
  },
  {
    name: 'Tural Rzayev',
    title: 'İşçi Resursları üzrə Məsləhətçi',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    text: 'İşçi resursları ilə bağlı verəcəyimiz məsləhətlər işçilərin və təşkilatın inkişafına kömək edir. Təklif etdiyimiz həllər praktik və effektivdir.',
    rating: 4,
  },
  {
    name: 'Nigar Rəhimova',
    title: 'Komanda Meneceri',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    text: 'Komanda idarəçiliyi üzrə təqdim etdiyimiz xidmətlər yüksək səviyyədədir. Bizim komandamız əməkdaşların birgə işini artırmaq və məhsuldarlığı yüksəltmək üçün çalışır.',
    rating: 5,
  },
];



const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 2, // Scroll 2 slides at a time
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(Math.floor(newIndex / 2)),
  };

  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index * 2); 
    setActiveIndex(index);
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-left">
        <h3 className="section-title">Şirkətimiz haqqında fikirlər</h3>
        <p className="section-description">Şirkət 2021-ci ildə qurulub.</p>
        <div className="custom-dots">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="testimonial-right">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-card-header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              </div>
              <div className="testimonial-card-body">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
