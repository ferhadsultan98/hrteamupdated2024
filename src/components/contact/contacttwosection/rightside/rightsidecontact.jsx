import React, { useEffect } from "react";
import "./rightside.css";
import Aos from 'aos';
import 'aos/dist/aos.css'

let RightSideContact = () => {
  useEffect(() => {
    Aos.init();
     }, [])
  return (
    <form action="#" className="ContactRightContainer" data-aos="fade-down-left">
      <div className="NameCompany">
        <div className="fullname">
          <label htmlFor="fullname">Tam ad</label>
          <input type="text" id="fullname" placeholder="Tam ad daxil edin" required/>
          <hr />
        </div>
        <div className="companyname">
          <label htmlFor="companyname">Şirkət adı</label>
          <input
            type="text"
            id="companyname"
            placeholder="Şirkət adı daxil edin"
            required
          />
          <hr />
        </div>
      </div>
      <div className="EmailPhone">
        <div className="emailss">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email daxil edin" required/>
          <hr />
        </div>
        <div className="phoness">
          <label htmlFor="phone">Telefon</label>
          <input type="text" id="phone" placeholder="Əlaqə nömrəsi daxil edin" required/>
          <hr />
        </div>
      </div>
      <div className="areaoftema">
        <label htmlFor="areaoftheme">Mövzu</label>
        <select id="areaoftheme">
          <option value="select">İnsan Resursları</option>
          <option value="option1">Satınalma</option>
          <option value="option2">Mühasib</option>
          <option value="option3">İnformasiya texnologiyaları</option>
        </select>
      </div>
      <div className="textareamessage">
        <label htmlFor="message">Mesaj</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Mesajınızı daxil edin"
          defaultValue={""}
        />
        <hr />
      </div>
      <button className="consultationbutton">Konsultasiya edin</button>
      </form>
  );
};

export default RightSideContact;
