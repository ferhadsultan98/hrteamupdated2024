import React, { useEffect } from "react";
import "./leftside.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

let LeftSideContact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="ContactLeftContainer" data-aos="fade-down-right">
      <button>Əlaqə</button>
      <div className="Info">
        <h1>
          Konsultasiya üçün <h1>əlaqə saxlayın</h1>
        </h1>
        <p>
          Mütəxəssislərimizlə heç bir öhdəlik götürmədən, pulsuz 20 dəqiqəlik
          Məhsuldarlığın Qiymətləndirilməsini sifariş edin. Komandamızın
          biznesinizi ən yaxşı şəkildə necə dəstəkləyə biləcəyini kəşf edin
        </p>
      </div>
      <div className="InfoOne">
        <a href="">
        <div className="adressbar">

           <div className="iconn"> <FaLocationDot /></div>

          <div className="adres">
            <h3>Ünvan</h3>
            <p>Abdulvahab Salamzadə küçəsi ev 65a</p>
          </div>
        </div>
        </a>
        <a href="">
        <div className="adressbar">
       <div className="iconn">
            <IoMdMail />
            </div>
          <div className="adres">
            <h3>Email</h3>
            <p>info@hrteam.az</p>
          </div>
        </div>
        </a>
      </div>
      <div className="InfoTwo">
        <a href="">
        <div className="adressbar">
          <div className="iconn">
            <IoCall />
            </div>
          <div className="adres">
            <h3>Tel</h3>
            <p>+994 70-330-86-07</p>
          </div>
        </div>
        </a>
      </div>
      <iframe
        className="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451.5895823618563!2d49.848930276430856!3d40.410612198690814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030878d55752945%3A0xec9ee16e7eff54fc!2sOlimp%20Engineering%20Services!5e0!3m2!1sen!2saz!4v1717875191876!5m2!1sen!2saz"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default LeftSideContact;
