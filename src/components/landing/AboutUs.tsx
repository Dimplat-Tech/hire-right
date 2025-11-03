import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Section2: React.FC = () => {
	const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

	return (
		<section
			ref={ref}
			className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-16 my-[40px] px-4 md:px-0"
		>
			{/* Left: Text */}
			<div className="flex-1 flex flex-col items-start justify-center md:pr-8">
				<h2 className="text-4xl md:text-[60px]  font-[500] text-[#FF9500] mb-4 font-space-grotesk">About Us</h2>
				<p className="text-lg text-gray-900 mb-6">
					At <span className="font-bold font-manrope">HireRight</span>, we know people are the heartbeat of success. Regardless of your industry or goals, your growth depends on a strong team.
				</p>
				<Button variant="secondary" className="px-6 py-3 text-base rounded-2xl flex items-center gap-2" href='/about-us' arrow>
					Learn more
					
				</Button>
				{/* Stats */}
				<div className="flex gap-8 mt-10">
					<div className="flex flex-col items-center">
						<span className="text-3xl font-bold text-gray-900">
							<CountUp
								start={inView ? 0 : undefined}
								end={inView ? 200 : 0}
								duration={2}
								redraw={true}
							/>
							<span className="text-[#FF9500]">+</span>
						</span>
						<span className="text-sm text-[#FF9500] mt-2">Successful Hires</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-3xl font-bold text-gray-900">
							<CountUp
								start={inView ? 0 : undefined}
								end={inView ? 150 : 0}
								duration={2}
								redraw={true}
							/>
							<span className="text-[#003780]">+</span>
						</span>
						<span className="text-sm text-[#003780] mt-2">Businesses Served</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-3xl font-bold text-gray-900">
							<CountUp
								start={inView ? 0 : undefined}
								end={inView ? 10 : 0}
								duration={2}
								redraw={true}
							/>
							<span className="text-[#FF9500]">+</span>
						</span>
						<span className="text-sm text-[#FF9500] mt-2">Industries Served</span>
					</div>
				</div>
			</div>
			{/* Right: Image */}
			<div className=" max-w-[600px] w-full m-auto rotate-0  md:rotate-7 ">
				<Image
					src="/img/landing/about-1.svg"
					alt="Team group"
					width={487}
					height={437}
					// objectFit="cover"/
					className="rounded-2xl mx-auto"

				/>
			</div>
		</section>
	);
};

export default Section2;
