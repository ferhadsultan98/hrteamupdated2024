import React from "react";
import "../main/main.css"
import TwoSection from "./twosection/twosection";
import Slider from "./onesection/onesection";
import Fivesection from "./fivesection/Fivesection";
import Commentsection from "./sixsection/Sixsection"
import MainThreeSection from "./threesection/MainThreeSection";




let Main = () => {
  return (
    <>
      <Slider />
      <TwoSection />
      <MainThreeSection/>
      <Commentsection/>
      <Fivesection />
    </>
  );
};

export default Main;
