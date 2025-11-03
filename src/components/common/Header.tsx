"use client";

import React, { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Our Services', href: '/services' },
	{ name: 'About Us', href: '/about-us' },
	{ name: 'Find Jobs', href: '/job-openings' },
];

const Header: React.FC = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

			return (
				<>
					<header className="w-full  bg-white sticky top-0 left-0 z-50 shadow-lg">
						<nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8">
							{/* Logo */}
							<div className="flex items-center gap-2">
								<Link href="/">
									<Image src="/img/landing/Logo.svg" alt="HireRight Logo" width={190} height={55} priority />
								</Link>
							</div>

							{/* Hamburger Menu for Mobile */}
							<div className="lg:hidden">
								<button
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									className="text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
								>
									<span className="sr-only">Toggle menu</span>
									{isMenuOpen ? '✖' : '☰'}
								</button>
							</div>

							{/* Navigation Links */}
							<div
								className={`lg:flex items-center gap-8 ${
									isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50' : 'hidden'
								} lg:static lg:bg-transparent lg:shadow-none lg:p-0`}
							>
								{navLinks.map((link) => {
									const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
									return (
										<a
											key={link.name}
											href={link.href}
											className={`text-base font-[Space_Grotesk] font-[400] transition-colors duration-150 px-2 ${
												isActive
													? 'bg-gradient-to-r from-[#F27933] via-[#9b603c] to-[#003780] text-transparent bg-clip-text'
													: 'text-[#060606]'
											}`}
										>
											{link.name}
										</a>
									);
								})}
							</div>

							{/* Buttons */}
							<div className="hidden lg:flex items-center gap-4">
								<Button variant="outline" href='/lets-talk'>Hire Now</Button>
								<Button variant="secondary" href='https://forms.zohopublic.com/elvaridah1/form/TalentSubmissionForm1/formperma/UvdO4BbDrTv3O9D2TBGgFoICMm5dUCo43fAOxY7tEUc'>Join Our Talent Pool</Button>
							</div>
						</nav>
					</header>
				
				</>
			);
};

export default Header;
