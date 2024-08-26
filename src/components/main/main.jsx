import React from "react";
import "../main/main.css"
import TwoSection from "./twosection/twosection";
import Slider from "./onesection/onesection";
import Foursection from "./forusection/foursection";
import Fivesection from "./fivesection/Fivesection";
import Commentsection from "./sixsection/Sixsection"
import MainThreeSection from "./threesection/MainThreeSection";




let Main = () => {
  return (
    <>
      <Slider />
      <TwoSection />
      <Foursection />
      <MainThreeSection/>
      <Commentsection/>
      <Fivesection />
    </>
  );
};

export default Main;
