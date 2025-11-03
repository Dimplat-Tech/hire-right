import React from 'react';
import LetsTalk from '@/components/lets-talk/section'

import HeroSection from '@/components/common/HeroSection'


function LetsTalkPage (){
  return(
   <div className='overflow-x-hidden max-w-[1280px] mx-auto' >
  
      <HeroSection

       backgroundImage="/img/lets-talk/ready.svg"
        titleFirst="Ready To"
        titleSecond="Begin"
        gradientOn="second"
        subtitle  ="At HireRight, we specialize in connecting forward-thinking organizations like yours with top-tier talent acros industries. Whether you are hiring for one role or scaling an entire department, we are here to simplify the process and deliver results. 
       Fill out the form below to share your hiring needs, and let us help you find candidates who are not just qualified - but the right fit for  your company's long term growth." 
     
      />  
   
 
          <LetsTalk/>
       </div>
  )
}

export default LetsTalkPage;

