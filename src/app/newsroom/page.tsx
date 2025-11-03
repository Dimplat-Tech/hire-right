import React from "react";
import HeroSection from '@/components/common/HeroSection'
import CardList from "@/components/newsroom/card-list";

function Page (){
  return(
 <div  className="overflow-x-hidden max-w-[1280px] mx-auto">
      <HeroSection
        backgroundImage="/img/newsroom/room.svg"
        titleFirst="Our"
        titleSecond="Newsroom"
        gradientOn='second'
        subtitle=" Welcome to our Newsroom; a space where we capture our journey in pictures. From events
        to milestones, these moments reflect the work we do, the people we meet, and the impact we create. Explore our stories through these memories."
       
      />
            
    
      <CardList/>
    
    </div>
  )
}

export default Page;