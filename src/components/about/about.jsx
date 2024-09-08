import React from "react";
import "../about/about.css";
import AboutTwoSection from "./twosection/abouttwosection";
import ThreeSection from "./threesection/threesection";

import TestimonialSlider from "./AboutSlider/AboutSlider";

import AboutBackImage from "../../assets/hrabouts.jpg";
import BackdropHeader from "./onesection/backdropheader";
import Activity from "../main/Activity/Activity";



let About = () => {
  return (
    <>
      <BackdropHeader
        backgroundImage={AboutBackImage}
        lastHeaderText="Haqqımızda"
      />
      <AboutTwoSection />

      <Activity />
      <TestimonialSlider />
      <ThreeSection />

    </>
  );
};

export default About;
