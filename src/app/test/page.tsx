// components/WhatWeDo.tsx
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Side - Images */}
      <div className="flex flex-col md:flex-row  relative">
        {/* First Image */}
        <div className="rounded-2xl overflow-hidden  rotate-6">
          <Image
            src="/img/landing/w1.svg" // replace with your actual image path
            alt="Team working together"
            width={350}
            height={300}
            className=" object-cover"
          />
        </div>

        {/* Second Image */}
        <div className=" overflow-hidden  -ml-10 mt-[20px] -rotate-10">
          <Image
            src="/img/landing/w2.svg" // replace with your actual image path
            alt="Business discussion"
            width={350}
            height={300}
            className=" object-cover"
          />
        </div>

        {/* Decorative lines */}
        <span className="absolute -left-6 top-6 h-10 w-1 bg-gradient-to-b from-orange-500 to-blue-600 rounded-full"></span>
        <span className="absolute -bottom-6 left-10 h-10 w-1 bg-gradient-to-b from-blue-600 to-orange-500 rounded-full"></span>
        <span className="absolute -right-6 top-12 h-10 w-1 bg-gradient-to-b from-orange-500 to-blue-600 rounded-full"></span>
      </div>

      {/* Right Side - Text */}
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          <span className="text-orange-500">What</span> we do best
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We connect exceptional talent with forward-thinking organizations. From recruitment
          and talent verification to training and career development, our services are designed
          to bridge the gap between skilled professionals and companies seeking growth.
        </p>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
          Learn more →
        </button>
      </div>
    </section>
  );
}
