"use client";

import ProfileCard from "./talentCard";
import Button from "../common/Button";
import React, { useRef, useEffect, useState } from "react";

const profiles = [
  {name: "Sam Smith", photo: "/img/spotlight/image 27.svg", gender: "Male", location: "Lagos, Nigeria", role: "Business Development Manager", experience: "10 Years"},
  {name: "Grace Favour", photo: "/img/spotlight/image 24.svg", gender: "Female", location: "Lagos, Nigeria", role: "Business Operations Manager", experience: "5 Years"},
  {name: "Daniel James", photo: "/img/spotlight/image 26.svg", gender: "Male", location: "Lagos, Nigeria", role: "Accountant", experience: "4 Years"},
  {name: "Peace Bright", photo: "/img/spotlight/image 25.svg", gender: "Female", location: "Lagos, Nigeria", role: "Operations Manager", experience: "6 Years"},
  {name: "Sam Smith", photo: "/img/spotlight/image 27.svg", gender: "Male", location: "Lagos, Nigeria", role: "Digital Marketing Executive", experience: "4 Years"},
  {name: "Daniel James", photo: "/img/spotlight/image 26.svg", gender: "Male", location: "Lagos, Nigeria", role: "Digital Marketing Executive", experience: "4 Years"}
];

function TalentList() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScroll = () => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    };

    container.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check

    return () => container.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative max-w-[1440px] mx-auto px-4 py-8">
      {/* Navigation Arrows */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transform transition hover:scale-110"
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="#003780" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transform transition hover:scale-110"
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="#003780" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Sliding Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 py-4 px-2 hide-scrollbar scroll-smooth"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] scroll-snap-align-start"
            style={{ scrollSnapAlign: 'start' }}
          >
            <ProfileCard
              name={profile.name}
              ImgUrl={profile.photo}
              gender={profile.gender}
              location={profile.location}
              role={profile.role}
              experience={profile.experience}
            />
          </div>
        ))}
      </div>

      {/* Return Button */}
      <div className="flex justify-center mt-10">
        <Button variant="secondary" href="/" className="mx-auto" arrow>
          Return to home
        </Button>
      </div>

      {/* Hide Scrollbar Styles */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default TalentList;




































































