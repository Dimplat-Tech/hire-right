import React from 'react';
import Button from '../common/Button';

const resources = [
  {
    title: 'Our Newsroom',
    type: 'Press Release',
    description: 'HireRight Releases 2025 Global Benchmark Report.',
    details: 'Accuracy of results remains the top background screening according to global respondents to HireRight’s 18th annual benchmarking survey...',
    date: 'July 7, 2025',
    buttonText: 'Explore our newsroom',
    buttonLink: '/newsroom',
  },
  {
    title: 'Our Blog',
    type: 'Blog Article',
    description: 'Defining Success: Background Screening Implementation and Global Rollout.',
    details: 'What are the signs of a successful background screening implementation and global rollout? This blog post provides an overview of common considerations...',
    date: 'February 7, 2025',
    buttonText: 'Explore our blog library',
    buttonLink: '/blogs',
  },
  {
    title: 'Our Resources',
    type: 'Online books',
    description: 'Title: Top 3 red flags in hiring you should never ignore.',
    details: 'Avoid costly hiring mistakes and build your dream team with ease!',
    date: 'February 7, 2025',
    buttonText: 'Download ebook (PDF)',
    // PDF should be placed in public/pdfs/top-3-red-flags.pdf
    buttonLink: '/pdfs/top-3-red-flags.pdf',
  },
];

const Resources = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold font-space-grotesk text-blue-900">Insights & Resources</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border border-gray-200"
          >
            <div>
              <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-sm text-gray-500 mb-4 font-manrope">{resource.type}</p>
              <p className="text-base text-gray-700 font-medium mb-4 font-manrope">{resource.description}</p>
              <p className="text-sm text-gray-500 mb-4 font-manrope">{resource.details}</p>
              <p className="text-sm text-gray-400 font-manrope">{resource.date}</p>
            </div>
            <Button
              variant="primary"
              href={resource.buttonLink}
              className="mt-4"
            >
              {resource.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;