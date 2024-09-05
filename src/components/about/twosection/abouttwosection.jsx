import React from "react";
import "./abouttwosection.css";
import LogoImg from '../../../assets/hrteamlogo.png';
import serviceData from './serviceData.json'; 

const AboutTwoSection = () => {
  const getImageUrl = (path) => {
    try {
      return require(`../../../assets/${path}`).default;
    } catch (e) {
      console.error(`Image not found at ${path}`);
      return '';
    }
  };

  return (
    <section id="about" className="about-two-section">
      <div className="container">
        <div className="header">
          <img src={LogoImg} alt="HR Team Logo" className="logo" />
          <h1>Hakkımızda</h1>
        </div>
        <p className="intro-text">
          HR Team şirkəti Azərbaycanda Biznes Proseslərinin Autsorsinqi üzrə ən öndə gələn müəssisələrdən biridir. Müəssisəmiz 2022-ci ildən bəri uğurla fəaliyyət göstərməkdədir.
        </p>
        <div className="services">
          <h2>Xidmətlərimiz</h2>
          <div className="service-list">
            {serviceData.map((service, index) => (
              <div 
                className="service-item" 
                key={index} 
                style={{ backgroundImage: `url(${getImageUrl(service.img)})` }}
              >
                <div className="service-content">
                  <h3>{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-choose-us">
          <h2>Niyə Biz?</h2>
          <p>
            Siz HR Team şirkətini seçməklə rahatlıqla öz biznesinizin inkişafı haqqında düşünə bilərsiniz, əlavə olaraq bununla siz yüksək məvacibli işçi heyətindən, ofis xərclərindən və digər məsrəflərdən azad olursunuz. Şirkətimiz sizin güvəninizə və etibarınıza arxalanaraq biznesinizin inkişafı üçün yüksək ixtisaslı komandası ilə xidmət göstərməyi özünə başlıca missiya seçmişdir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTwoSection;
