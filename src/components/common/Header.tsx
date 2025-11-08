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
	const [aboutOpen, setAboutOpen] = useState(false); // desktop hover state
	const [mobileAboutOpen, setMobileAboutOpen] = useState(false); // mobile accordion

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
									// Render a dropdown for "About Us"
									if (link.name === 'About Us') {
										const isActive = pathname === link.href || pathname.startsWith('/about-us') || pathname.startsWith('/newsroom') || pathname.startsWith('/blogs');
										return (
											<div
												key="about-dropdown"
												className="relative"
											>
												{/* Desktop / default link label */}
												<button
													type="button"
													onClick={() => {
														// toggle dropdown on click for both desktop and mobile
														setAboutOpen((v) => !v);
														if (isMenuOpen) setMobileAboutOpen((v) => !v);
													}}
													className={`w-full text-left text-base font-[Space_Grotesk] font-[400] transition-colors duration-150 px-2 flex items-center justify-between ${
														isActive
															? 'bg-gradient-to-r from-[#F27933] via-[#9b603c] to-[#003780] text-transparent bg-clip-text'
															: 'text-[#060606]'
													}`}
												>
													<span>{link.name}</span>
													<span className={`ml-2 transform transition-transform duration-200 ${aboutOpen || mobileAboutOpen ? 'rotate-180' : 'rotate-0'}`}>
														{/* Chevron SVG */}
														<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
															<path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</button>

												{/* Dropdown menu - visible when toggled (click) or when mobileAboutOpen is true (mobile) */}
												<div className={`origin-top-right lg:absolute lg:top-full lg:right-0 mt-2 lg:w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${aboutOpen || (isMenuOpen && mobileAboutOpen) ? 'block' : 'hidden'}`}>
													<div className="py-1">
														<Link href="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
														<Link href="/newsroom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Newsroom</Link>
														<Link href="/blogs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
													</div>
												</div>

												{/* Mobile expandable list (inside hamburger menu) */}
												{isMenuOpen && mobileAboutOpen && (
													<div className="mt-2 pl-4">
														<Link href="/about-us" className="block px-2 py-1 text-sm text-gray-700">About Us</Link>
														<Link href="/newsroom" className="block px-2 py-1 text-sm text-gray-700">Newsroom</Link>
														<Link href="/blogs" className="block px-2 py-1 text-sm text-gray-700">Blog</Link>
													</div>
												)}
											</div>
										);
									}

									const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
									return (
										<Link
											key={link.name}
											href={link.href}
											className={`text-base font-[Space_Grotesk] font-[400] transition-colors duration-150 px-2 ${
												isActive
													? 'bg-gradient-to-r from-[#F27933] via-[#9b603c] to-[#003780] text-transparent bg-clip-text'
													: 'text-[#060606]'
											}`}
										>
											{link.name}
										</Link>
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
