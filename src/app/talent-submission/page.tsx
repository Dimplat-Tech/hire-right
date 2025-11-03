import React from "react";
import HeroSection from '@/components/common/HeroSection'
import TalentForm from '@/components/talentSubmission/form'


function  TalentFormPage (){
  return(
       <div className='overflow-x-hidden max-w-[1280px] mx-auto' >

      <HeroSection

       backgroundImage="/img/talentSubmission/office.svg"
        titleFirst="Talent"
        titleSecond="Submission Form"
        gradientOn="first"
        subtitle  ="We are building a community of exceptional talent across Nigeria to bridge the unemployment gap. By connecting the right skills sets with the the right opportunities, we are shaping the future of work." 
     
      />  
      <TalentForm/>
      
    </div>
  )
}

export default TalentFormPage