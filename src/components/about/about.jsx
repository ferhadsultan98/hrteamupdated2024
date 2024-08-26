import React from "react";
import "../about/about.css";
import AboutTwoSection from "./twosection/abouttwosection";
import ThreeSection from "./threesection/threesection";
import MainThreeSection from "../main/threesection/MainThreeSection";
import TestimonialSlider from "./AboutSlider/AboutSlider";

import AboutBackImage from "../../assets/hrabouts.jpg";
import BackdropHeader from "./onesection/backdropheader";



let About = () => {
  return (
    <>
      <BackdropHeader
        backgroundImage={AboutBackImage}
        lastHeaderText="Haqqımızda"
      />
      <AboutTwoSection />
     
      <MainThreeSection />
      <TestimonialSlider />
      <ThreeSection />

    </>
  );
};

export default About;
