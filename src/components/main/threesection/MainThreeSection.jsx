import React, { useEffect } from "react";
import "../../main/threesection/MainThreeSection.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Acqusition from '../../../assets/slider/acquisition.png'
import EmployeeBenefit from '../../../assets/slider/employebenefits.png'
import TrainingDevops from '../../../assets/slider/trainingdevelop.png'
import PerformanceManagement from '../../../assets/slider//performance management.jpg'
import EmployeeEngament from '../../../assets/slider/slider1.jpg'



// Kart verileri (İnsan Kaynakları ile ilgili görseller)
const cardData = [
  {
    id: 1,
    title: "Talent Acquisition",
    description:
      "Expert strategies for attracting and hiring the best talent to fit your company's needs.",
    image: Acqusition,
  },
  {
    id: 2,
    title: "Employee Benefits",
    description:
      "Comprehensive benefits packages designed to attract and retain top talent.",
    image: EmployeeBenefit,
  },
  {
    id: 3,
    title: "Training & Development",
    description:
      "Programs and workshops aimed at enhancing employee skills and career growth.",
    image: TrainingDevops,
  },
  {
    id: 4,
    title: "Performance Management",
    description:
      "Systems and strategies to assess and improve employee performance effectively.",
    image: PerformanceManagement,
  },
  {
    id: 5,
    title: "Employee Engagement",
    description:
      "Techniques and strategies to foster a positive work environment and improve employee satisfaction.",
    image: EmployeeEngament,
  },
];

// Slider ayarları
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // Otomatik geçişi aktif et
  autoplaySpeed: 3000, // 3 saniye aralıklarla geçiş yapar
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MainThreeSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <div className="Threesection">
        <h1>Fəaliyyət sahələrimiz</h1>
        <Slider {...sliderSettings} className="ThreeSectionSlider">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="ExpertiseCards"
              data-aos="fade-up" 
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
            >
              <div className="OneCardMain">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="OneCardFooter">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MainThreeSection;