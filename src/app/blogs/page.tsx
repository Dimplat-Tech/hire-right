import React from "react";
import HeroSection from "@/components/common/HeroSection";
import Section2 from "@/components/blog/Section2";

function page() {
  return (
    <div>
      <HeroSection
        backgroundImage="/img/blog/blog.svg"
        titleFirst="Our"
        titleSecond="Blog"
        gradientOn="second"
        subtitle="Insights & Ideas that shape the future of work! Stay ahead of the ever-changing world of talent, hiring, and workspace innovation. Our blog brings you expert perspectives, industry news, and actionable tips to help you 
make smarter hiring decisions, attract the right candidates, and build teams that thrive."
        buttonText="Return to home"
        buttonLink="/"
      />
      <Section2 />
    </div>
  );
}

export default page;
