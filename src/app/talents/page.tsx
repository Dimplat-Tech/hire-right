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
        subtitle="Discover exceptional professionals within our network. Talent Spotlight helps you explore verified talents, understand their strengths, and identify the perfect fit for your role and company culture."
        buttonText="Return to home"
        buttonLink="/services"
      />

           <TalentList />
        

        </div>
    )
}
 export default Page;