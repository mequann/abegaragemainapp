import React from "react";
//import the bottom banner
import BottomBanner from "../components/BottomBanner/BottomBanner";
//import ToBanner conponent
import TopBanner from "../components/Topbanner/TopBanner";


const About = () => {
  return (
   <div>
     <TopBanner props={'About Us'}
     props1={'About us'}/>
     <BottomBanner />
   </div>
  );
};

export default About;
