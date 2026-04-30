"use client"
import React from 'react';
import { HeroSection, Newsletter,  } from '@/components/landing';
import Button from '@/components/common/Button';
import OpportunitiesSpotlight from '@/components/landing/OpportunitiesSpotlight';
import Resources from '@/components/landing/Resources';
import Section2 from '@/components/landing/AboutUs';
import Satisfied from '@/components/landing/Satisfied';
import Talent from '@/components/landing/Talent';
import Section3 from '@/components/landing/WhatWeDo';
import Testimonial from '@/components/landing/Testimonial';
export default function HomePage(): React.ReactNode {
  return (
    <div className='flex flex-col gap-[40px]'>
      <HeroSection />
      <Section2 />
      <Satisfied />
      <Talent />
      <Section3 />
      <Testimonial />
      <OpportunitiesSpotlight />

      {/* <AboutUs /> */}
      {/* <Achievements />
      <Package /> */}

      {/* <Services /> */}
      <Resources />
      <Newsletter />

      {/* Home app button and privacy policy */}
      <div className="w-full flex flex-col items-center gap-4 my-8">
        <Button href="https://hirerightapp.com/" variant="primary" target="_blank">
          Open Hire Right Web App
        </Button>
        <Button href="/privacy" variant="outline">Privacy Policy</Button>
      </div>
    </div>
  );
}
