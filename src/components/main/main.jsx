import React from "react";
import "../main/main.css"
import CommentSection from "./Commentsection/Commentsection";
import StatisticSection from "./StatisticSection/StatisticSection";
import SliderMain from "./MainHeadSlider/MainHeadSlider.jsx";
import Partners from "./Partners/Partners.jsx";
import Activity from "./Activity/Activity.jsx";







let Main = () => {
  return (
    <>
      <SliderMain />
      <Partners />
      <Activity />
      <CommentSection />
      <StatisticSection />
    </>
  );
};

export default Main;
