import React from "react";
import HeroSection from '@/components/common/HeroSection'

function page() {
  return (
    <div>
      <HeroSection
        backgroundImage="/img/landing/hr1.jpg"
        backgroundPosition="center"
        titleFirst="Job"
        titleSecond="Openings"
        gradientOn='first'
        subtitle="Explore our numerous job openings and find which one best matches what you are looking,
openings cut across various industries and sectors so there is a perfect fit for everyone."
      />
    </div>
  )
}

export default page