import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';

const talents = [
	{ name: 'Sam Smith', role: 'Product designer', img: '/img/landing/image 27.svg' },
	{ name: 'Grace Favour', role: 'Software developer', img: '/img/landing/image 24.svg' },
	{ name: 'Daniel James', role: 'Project manager', img: '/img/landing/image 26.svg' },
	{ name: 'Peace Bright', role: 'HR manager', img: '/img/landing/image 25.svg' },
	// { name: 'Sam Smith', role: 'Product designer', img: '/img/landing/hr1.jpg' },
];

const Talent: React.FC = () => {
	return (
		<section className="w-full py-16 px-0">
			<h2 className="text-4xl font-bold text-[#003780] font-space-grotesk text-center mb-10">Talent Spotlight</h2>
			<div className="overflow-hidden w-full">
				<div className="flex gap-8 animate-talent-scroll items-center" style={{ minWidth: '100%' }}>
					{talents.map((talent, idx) => (
						<div key={talent.name + idx} className="relative w-[329px] h-[393px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 bg-white">
							<Image
								src={talent.img}
								alt={talent.name}
								layout="fill"
								objectFit="cover"
								className="rounded-2xl"
								priority={idx === 0}
							/>
							<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[rgba(204,215,230,0.7)] rounded-xl px-4 py-2 text-center w-[180px]">
								<span className="block font-semibold text-gray-900 text-base">{talent.name}</span>
								<span className="block text-gray-600 text-sm">{talent.role}</span>
							</div>
						</div>
					))}
					{/* Repeat for infinite scroll effect */}
					{talents.map((talent, idx) => (
						<div key={talent.name + '-repeat-' + idx} className="relative w-[329px] h-[393px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 bg-white">
							<Image
								src={talent.img}
								alt={talent.name}
								layout="fill"
								objectFit="cover"
								className="rounded-2xl"
								priority={false}
							/>
							<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[rgba(204,215,230,0.7)] rounded-xl px-4 py-2 text-center w-[180px]">
								<span className="block font-semibold text-gray-900 text-base">{talent.name}</span>
								<span className="block text-gray-600 text-sm">{talent.role}</span>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-center mt-10">
				<Button variant="outline" className="px-8 py-3 text-base rounded-2xl flex items-center gap-2" href='/talents' arrow>
					View more
				</Button>
			</div>
			<style jsx>{`
				@keyframes talent-scroll {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
				.animate-talent-scroll {
					animation: talent-scroll 22s linear infinite;
				}
			`}</style>
		</section>
	);
};

export default Talent;
