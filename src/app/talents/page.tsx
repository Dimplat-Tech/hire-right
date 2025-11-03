import TalentList from "@/components/spotLights/talentList"
import HeroSection from "@/components/common/HeroSection";

function Page(){
    return(
        <div className="overflow-x-hidden  m-w-[1440]">

            <HeroSection
        backgroundImage="/img/spotlight/light.jpg"
        titleFirst="Talent"
        titleSecond="Spotlights"
        gradientOn='first'
        subtitle="Explore and connect with the amazing talents we have under us and find which best fits the persona 
                   you want for your job vacacies."
        buttonText="Return to home"
        buttonLink="/services"
      />

           <TalentList />
        

        </div>
    )
}
 export default Page;