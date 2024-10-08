import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoImg from "../../assets/hrteamlogo.png";
import "./header.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Flag from 'react-world-flags';
import { CiSearch } from "react-icons/ci";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Spin as Hamburger } from 'hamburger-react';
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isSearchAnimatingOut, setSearchAnimatingOut] = useState(false);

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    Aos.init();
  }, []);

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalDocScroll = docHeight - winHeight;
      const scrollPercent = (scrollTop / totalDocScroll) * 100;

      setScrollProgress(scrollPercent);
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Toggle language menu
  const toggleLanguageMenu = () => setLanguageMenuOpen(!languageMenuOpen);

  // Show search overlay
  const handleSearchClick = () => {
    setSearchVisible(true);
    setSearchAnimatingOut(false);
  };

  // Hide search overlay with animation
  const handleCloseSearch = () => {
    setSearchAnimatingOut(true);
    setTimeout(() => setSearchVisible(false), 500); // Match animation duration
  };

  // Scroll down
  const scrollPageDown = () => {
    window.scrollBy({ top: 830, behavior: 'smooth' });
  };

  // Change language
  const changeLanguage = (lng) => {
    const newPath = location.pathname.replace(`/${i18n.language}`, `/${lng}`);
    navigate(newPath);
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
  };

  const currentLanguage = i18n.language;
  const basePath = `/${currentLanguage}`;

  // Handle body overflow based on menu state
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset overflow style
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      {/* Top Header */}
      <div className="topheader">
        <div className="contactsu">
          <div className="phone">
            <h3>
              <a href="tel:+994703308607">
                <IoCall /> +994 70-330-86-07
              </a>
            </h3>
          </div>
          <div className="mails">
            <h3>
              <a href="mailto:info@hrteam.az">
                <MdEmail /> info@hrteam.az
              </a>
            </h3>
          </div>
        </div>
        <div className="socials">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="BottomHeader">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        <div className="LogoSide">
          <Link to={basePath}><img src={LogoImg} alt="Logo" /></Link>
        </div>

        <ul className={`Navbar ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to={basePath}>{t('header.homepage')}</Link>
          </li>
          <li>
            <Link to={`${basePath}/about`}>{t('header.about')}</Link>
          </li>
          <li className="dropdown">
            <Link to={basePath} className='firsta'>
              {t('header.services')}
              <RiArrowDownWideFill className="arrow-icon" />
            </Link>
            <ul className="dropdown-menu">
              <li><Link to={`${basePath}/services/oneservice`}>{t('header.service1')}</Link></li>
              <li><Link to={`${basePath}/services/twoservice`}>{t('header.service2')}</Link></li>
              <li><Link to={`${basePath}/services/threeservice`}>{t('header.service3')}</Link></li>
              <li><Link to={`${basePath}/services/fourservice`}>{t('header.service4')}</Link></li>
              <li><Link to={`${basePath}/services/fiveservice`}>{t('header.service5')}</Link></li>
              <li><Link to={`${basePath}/services/sixservice`}>{t('header.service6')}</Link></li>
              <li><Link to={`${basePath}/services/sevenservice`}>{t('header.service7')}</Link></li>
              <li><Link to={`${basePath}/services/eightservice`}>{t('header.service8')}</Link></li>
            </ul>
          </li>
          <li>
            <Link to={`${basePath}/vacancies`}>{t('header.vacancies')}</Link>
          </li>
          <li>
            <Link to={`${basePath}/contact`}>{t('header.contact')}</Link>
          </li>
        </ul>

        <button className="hirebutton" onClick={scrollPageDown}>
          <span className="text"><Link to={`${basePath}/contact`}>{t('header.startbtn')}</Link></span>
          <div className="wave" />
        </button>

        <div className="HamburgerAndLanguage">
          <div className="language-menu">
            <button onClick={toggleLanguageMenu}>
              {currentLanguage === 'en' ? 'EN' : currentLanguage === 'ru' ? 'RU' : 'AZ'}
            </button>
            {languageMenuOpen && (
              <ul className="language-dropdown">
                <li onClick={() => changeLanguage('az')}><Flag code="AZ" /></li>
                <li onClick={() => changeLanguage('en')}><Flag code="GB" /></li>
                <li onClick={() => changeLanguage('ru')}><Flag code="RU" /></li>
              </ul>
            )}
          </div>
          <div className="hamburger">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
          </div>
          <button className="search-icon" onClick={handleSearchClick}><CiSearch /></button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchVisible && (
        <div className={`search-overlay ${isSearchAnimatingOut ? 'not-active' : 'active'}`}>
          <button className="close-button" onClick={handleCloseSearch}><AiTwotoneCloseCircle /></button>
          <div className="search-container"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="400">
            <input type="text" className="search-input" placeholder="Search..." />
            <div className="news-section">
              <h2>Latest HR News</h2>
              <div className="news-cards">
                <div className="news-card">
                  <h3>News Title 1</h3>
                  <p>Brief description of the news article. This is where the summary goes.</p>
                  <a href="#">Read more</a>
                </div>
                <div className="news-card">
                  <h3>News Title 2</h3>
                  <p>Brief description of the news article. This is where the summary goes.</p>
                  <a href="#">Read more</a>
                </div>
                <div className="news-card">
                  <h3>News Title 3</h3>
                  <p>Brief description of the news article. This is where the summary goes.</p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
