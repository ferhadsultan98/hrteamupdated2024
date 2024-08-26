import React from "react";
import "../contact/contact.css";
import LeftSideContact from "./contacttwosection/leftside/leftsidecontact";
import RightSideContact from "./contacttwosection/rightside/rightsidecontact";

import ContactBackImage from "../../assets/contactback.jpg";
import BackdropHeader from "../about/onesection/backdropheader";




let Contact = () =>{
    return (
        <>
        <BackdropHeader
        backgroundImage={ContactBackImage}
        lastHeaderText="Əlaqə"
        />
        <div className="Sides">
        <LeftSideContact/>
        <RightSideContact/>
        </div>
        </>
    )
}

export default Contact