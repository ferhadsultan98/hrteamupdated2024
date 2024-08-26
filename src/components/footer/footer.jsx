import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../footer/footer.css";
import ScrollButton from "../scroll/scroll";
import { RiUserFollowLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <ScrollButton />
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section information">
            <h1>{t('header.contact')}</h1>
            <p><a href="https://maps.app.goo.gl/txWq2nTwBBEc9zzQ8" target="_blank" rel="noopener noreferrer">{t('footer.maps')}</a></p>
            <p><a href="mailto:info@hrteam.az">info@hrteam.az</a></p>
            <p><a href="tel:+994703308607">+994 70-330-86-07</a></p>
            <ul className="social-medias">
              <li className="icon facebook">
                <span className="tooltip">Facebook</span>
                <FaFacebookF />
              </li>
              <li className="icon twitter">
                <span className="tooltip">Linkedin</span>
                <FaLinkedinIn />
              </li>
              <li className="icon instagram">
                <span className="tooltip">Instagram</span>
                <FaInstagram />
              </li>
            </ul>
          </div>
          <div className="footer-section useful-links">
            <h1>{t('footer.usefullinks')}</h1>
            <p><a href="#">{t('header.about')}</a></p>
            <p><a href="#">{t('footer.news')}</a></p>
            <p><a href="#">{t('header.services')}</a></p>
            <p><a href="#">{t('footer.support')}</a></p>
          </div>
          <div className="footer-section our-services">
            <h1>{t('header.services')}</h1>
            <div className="services">
              {[...Array(8)].map((_, i) => (
                <p key={i}><a href="#">{t(`header.service${i + 1}`)}</a></p>
              ))}
            </div>
          </div>
          <div className="footer-section latest-update">
            <h1>{t('footer.latestupdate')}</h1>
            <p>{t('footer.subs')}</p>
            <form className="subscribe-latest" action="#">
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t('footer.inputholder')}
                required
                autoComplete="off"
              />
              <button id="subscribe-button" type="submit"><RiUserFollowLine /></button>
            </form>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Copyright © 2024 | Powered by{" "}
          <a href="https://www.instagram.com/ferhad.sultann" target="_blank" rel="noopener noreferrer">
            Sultanov
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
