import React, { useState, useEffect } from 'react';

const Navbar = () => {
	const [activeSection, setActiveSection] = useState('header');
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const sections = ['header', 'about', 'projects', 'experience', 'footer'];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = sectionId => {
		const element = document.getElementById(sectionId);
		if (element) {
			window.scrollTo({
				top: element.offsetTop,
				behavior: 'smooth',
			});
		}
		setMobileMenuOpen(false);
	};

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 bg-primary-dark shadow-lg py-4`}
		>
			<div className='container mx-auto px-4'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<div
						className='text-2xl font-bold text-text-light cursor-pointer hover:text-accent-blue transition-colors'
						onClick={() => scrollToSection('header')}
					>
						Portfolio
					</div>

					{/* Desktop Navigation */}
					<ul className='hidden md:flex space-x-4'>
						{['header', 'about', 'projects', 'experience', 'footer'].map(
							section => (
								<li key={section}>
									<button
										onClick={() => scrollToSection(section)}
										className={`capitalize px-4 py-2 rounded-md text-sm font-medium transition-colors ${
											activeSection === section
												? 'text-accent-blue bg-primary-base'
												: 'text-text-light hover:text-accent-teal hover:bg-primary-base'
										} hover:cursor-pointer`}
									>
										{section === 'header' ? 'Home' : section}
									</button>
								</li>
							)
						)}
					</ul>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className='text-text-light hover:text-accent-blue focus:outline-none hover:cursor-pointer'
							aria-label='Toggle menu'
						>
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								{mobileMenuOpen ? (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								) : (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
					<ul className='px-2 pt-2 pb-4 space-y-1'>
						{['header', 'about', 'projects', 'experience', 'footer'].map(
							section => (
								<li key={section}>
									<button
										onClick={() => scrollToSection(section)}
										className={`capitalize block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
											activeSection === section
												? 'text-accent-blue bg-primary-base'
												: 'text-text-light hover:text-accent-teal hover:bg-primary-base'
										} hover:cursor-pointer`}
									>
										{section === 'header' ? 'Home' : section}
									</button>
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
