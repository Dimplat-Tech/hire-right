import React from "react"
import SectionTwo from "@/components/about-us/sectionTwo"
import SectionThree from "@/components/about-us/sectionThree";
import SectionFour from "@/components/about-us/sectionFour";
import HeroSection from "@/components/common/HeroSection";


function Page(){
  return(
  <div className="overflow-x-hidden  m-w-[1440]">
  <HeroSection
        backgroundImage="/img/aboutUs/hr.jpg"
        titleFirst="About"
        titleSecond="Us"
        gradientOn='second'
        subtitle="At HireRight, we believe people are the heartbeat of every successful
         company. No matter your industry, size, or goals, your growth depends on the 
      strength of your team. That’s where we come in. We help businesses find the right
       people and build the right teams for sustainable, long-term success."
        buttonText="Learn More"
        buttonLink="/services"
      />
         <SectionTwo />
         <SectionThree /> 
         <SectionFour />
         </div>
  );
}
export default Page;