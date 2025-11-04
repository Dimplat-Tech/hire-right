import React from 'react'
import HeroSection from '@/components/common/HeroSection'
import Section2 from '@/components/ebook/section2'

function page() {
  return (
    <div>
      <HeroSection
        backgroundImage="/img/ebook/ebook10.svg"
        titleFirst="Our"
        titleSecond="Ebook"
        gradientOn='second'
        subtitle="Top 3 Red Flags In Hiring That You Should Never Ignore."
        buttonText="Return to home"
        buttonLink="/blogs/lazy-youths"
      />
      <Section2 />
    </div>
  )
}

export default page
