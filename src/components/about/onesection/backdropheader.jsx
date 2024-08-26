import React from "react";
import "./backdropheader.css";
import { Link } from "react-router-dom";

const BackdropHeader = ({ backgroundImage, lastHeaderText }) => {
  return (
    <div className="AboutBackImage" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="AboutContent">
        <Link to='/'><h3>Əsas səhifə /</h3></Link>
        <h3>{lastHeaderText}</h3>
      </div>
    </div>
  );
};
export default BackdropHeader;
