'use client';

import { useState, useEffect } from 'react';

import Button from '../common/Button';

const JobOpenings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const jobOpenings = [
    {
      id: 1,
      position: "Junior Architect",
      location: "Lagos, Nigeria",
      salary: "₦2,400,000 annually",
      type: "Full-Time"
    },
    {
      id: 2,
      company: "Hire Right",
      logo: "/img/landing/Logo.svg",
      position: "Engineering Lead",
      location: "Lagos, Nigeria",
      salary: "₦4,200,000-₦4,800,000 annually",
      type: "Full-Time"
    },
    {
      id: 3,
      company: "Hire Right",
      logo: "/img/landing/Logo.svg",
      position: "HR Manager",
      location: "Lagos, Nigeria",
      salary: "₦3,000,000-₦3,600,000 annually",
      type: "Full-Time"
    },
    {
      id: 4,
      company: "Microsoft",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
      position: "Area Sales Manager",
      location: "Lagos, Nigeria",
      salary: "₦4,800,000-₦7,200,200 annually",
      type: "Full-Time"
    },
    {
      id: 5,
      company: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      position: "UX Designer",
      location: "Lagos, Nigeria",
      salary: "₦2,400,000-₦3,000,000 annually",
      type: "Full-Time"
    }
  ];

  // Duplicate jobs for seamless loop
  const duplicatedJobs = [...jobOpenings, ...jobOpenings];

  // Auto-advance job cards every 5 seconds with seamless loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to 0 when we've scrolled through the original set
        if (nextIndex >= jobOpenings.length) {
          // Use setTimeout to avoid visual jump
          setTimeout(() => setCurrentIndex(0), 0);
          return jobOpenings.length;
        }
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [jobOpenings.length]);

  type Job = {
    id: number;
    position: string;
    location: string;
    salary: string;
    type: string;
  };

  const JobCard = ({ job }: { job: Job }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 min-w-[300px] md:min-w-[350px] flex-shrink-0">
      {/* Header with company logo and bookmark */}
   
      {/* Job details */}
      <div className="space-y-3 mb-6">
        <h4 className="text-lg font-semibold text-gray-900">
          {job.position}
        </h4>
        <p className="text-gray-600 text-sm">
          {job.location}
        </p>
        <p className="text-gray-900 font-semibold">
          {job.salary}
        </p>
      </div>

      {/* Apply button */}
     <Button variant='primary' className="w-full py-3 text-sm rounded-2xl  " href='https://forms.zohopublic.com/elvaridah1/form/TalentSubmissionForm1/formperma/UvdO4BbDrTv3O9D2TBGgFoICMm5dUCo43fAOxY7tEUc' arrow target='_blank'>
       Apply

     </Button>
    </div>
  );

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-space-grotesk md:text-5xl font-bold text-orange-500 mb-12">
          Job Openings
        </h2>

        {/* Job Cards Container */}
        <div className="relative">
          {/* Cards Slider */}
          <div className="overflow-hidden">
            <div 
              className={`flex gap-6 ${currentIndex >= jobOpenings.length ? 'transition-none' : 'transition-transform duration-700 ease-in-out'}`}
              style={{ 
                transform: `translateX(-${currentIndex * (350 + 24)}px)` // 350px card width + 24px gap
              }}
            >
              {duplicatedJobs.map((job, index) => (
                <JobCard key={`${job.id}-${index}`} job={job} />
              ))}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="px-8 py-3 text-base rounded-2xl flex items-center gap-2" href='/job-openings' arrow>
            View more
          </Button>
        </div>

        {/* Slider Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {jobOpenings.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                (currentIndex % jobOpenings.length) === index ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;