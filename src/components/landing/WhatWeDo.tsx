import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';

const Section3: React.FC = () => {
	return (
		<section className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-0">
			{/* Left: Tilted Images with Decorative Lines */}
			<div className="flex-1 flex flex-col items-center justify-center relative">
				<div className="relative ">
				  <div className="flex flex-col md:flex-row  relative">
						{/* First Image */}
						<div className="rounded-2xl overflow-hidden rotate-0 md:rotate-10 ">
						  <Image
							src="/img/landing/group 11.svg" // replace with your actual image path
							alt="Team working together"
							width={350}
							height={300}
							className=" object-cover"
						  />
						</div>
				
						{/* Second Image */}
						<div className=" hidden md:block overflow-hidden  -ml-4  -rotate-13">
						  <Image
							src="/img/landing/Group 10.svg" // replace with your actual image path
							alt="Business discussion"
							width={350}
							height={300}
							className=" object-cover"
						  />
						</div>
				
						{/* Decorative lines */}
						
				
					{/* Decorative lines */}
					{/* <span className="absolute -top-4 left-16 w-24 h-1 bg-gradient-to-r from-[#003780] to-[#FF9500] rounded-full" />
					<span className="absolute bottom-2 left-2 w-24 h-1 bg-gradient-to-r from-[#003780] to-[#FF9500] rounded-full" />
					<span className="absolute top-8 right-0 w-1 h-24 bg-gradient-to-b from-[#FF9500] to-[#003780] rounded-full" />
					<span className="absolute bottom-2 right-2 w-24 h-1 bg-gradient-to-r from-[#FF9500] to-[#003780] rounded-full" /> */}
				</div>
				</div>
			</div>

			{/* Right: Text and Button */}
			<div className="flex-1 flex flex-col items-start justify-center md:pl-8">
				<h2 className="text-4xl md:text-[60px]  font-[500] text-primary-orange mb-4 font-space-grotesk">What we do best</h2>
				<p className="text-lg text-gray-900 mb-6 font-manrope">
					We connect exceptional talent with forward - thinking organizations. From recruitment and talent verification to training and career development, our services are designed to bridge the gap between skilled professionals and companies seeking growth.
				</p>
				<Button variant="secondary" className="px-6 py-3 text-base rounded-2xl flex items-center gap-2 " href='/services' arrow>
					Learn more
				</Button>
			</div>
		</section>
	);
};

export default Section3;
