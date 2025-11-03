import React from 'react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
			return (
				<section className="relative w-full max-w-[1280px] mx-auto mt-4 md:mt-8 rounded-3xl overflow-hidden shadow-lg">
					{/* Background Video */}
					<div className="absolute inset-0 w-full h-full">
						<video
							src="/img/landing/hireright.mp4"
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-full object-cover z-0"
						/>
						<div className="absolute inset-0 bg-black/20 bg-opacity-10 z-10" />
					</div>

					{/* Content */}
					<div className="relative z-20 flex flex-col items-center justify-center h-[400px] sm:h-[500px] md:h-[700px] px-4 sm:px-6 text-center">
						<h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-bold leading-tight mb-2">
							<span className="bg-gradient-to-r from-[#FF9500] via-[#A16B4A] to-[#003780] text-transparent bg-clip-text">Hire</span>
							<span className="text-white ml-2">Now</span>
						</h1>
						<h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-bold leading-tight mb-4">
							<span className="text-white">Hire</span>
							<span className="bg-gradient-to-r from-[#FF9500] via-[#A16B4A] to-[#003780] text-transparent bg-clip-text ml-2">Right</span>
						</h2>
						<p className="text-white text-base sm:text-lg md:text-xl font-medium mb-8 max-w-md sm:max-w-xl">
							At HireRight, we specialize in connecting businesses<br />
							with top-tier talent tailored to their unique needs.
						</p>
						<Button variant="secondary" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-2xl" href='/talent-submission'>Join Our Talent Pool</Button>
					</div>
				</section>
			);
};

export default HeroSection;
