import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Navbar.css';

const SECTIONS = ['header', 'about', 'projects', 'experience', 'contact'];

const Navbar = () => {
	const [activeSection, setActiveSection] = useState('header');
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { t } = useTranslation('navbar');

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;
			const documentHeight = document.documentElement.scrollHeight;

			if (window.scrollY < 100) {
				setActiveSection('header');
				return;
			}

			if (window.innerHeight + window.scrollY >= documentHeight - 100) {
				setActiveSection('contact');
				return;
			}

			for (let i = SECTIONS.length - 1; i >= 0; i--) {
				const section = SECTIONS[i];
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop + offsetHeight * 0.3) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();
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
		<nav aria-label={t('ariaLabels.mainNav')} className='navbar'>
			<div className='navbar-container'>
				<div className='navbar-inner'>
					{/* Logo */}
					<a
						href='#header'
						onClick={e => {
							e.preventDefault();
							scrollToSection('header');
						}}
						className='navbar-logo'
						aria-label={t('ariaLabels.home')}
					>
						<span
							key={activeSection === 'header' ? 'logo' : 'name'}
							className='logo-text'
						>
							{activeSection === 'header' ? t('logo') : 'Oliwia Strzelec'}
						</span>
					</a>

					{/* Desktop Navigation */}
					<ul
						className='navbar-desktop-menu'
						role='menubar'
						aria-label={t('ariaLabels.sections')}
					>
						{SECTIONS.map(section => (
							<li key={section} className='navbar-menu-item' role='none'>
								<button
									role='menuitem'
									aria-current={activeSection === section ? 'page' : undefined}
									onClick={() => scrollToSection(section)}
									className={`navbar-menu-button ${
										activeSection === section ? 'active' : ''
									}`}
								>
									{t(`sections.${section}`)}
								</button>
							</li>
						))}
					</ul>

					{/* Mobile menu button */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className='navbar-mobile-button'
						aria-label={t(
							`ariaLabels.menuToggle.${mobileMenuOpen ? 'close' : 'open'}`
						)}
						aria-expanded={mobileMenuOpen}
						aria-controls='mobile-menu'
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							style={{
								strokeWidth: 2,
								color: 'var(--color-text-light)',
							}}
						>
							{mobileMenuOpen ? (
								<path d='M6 18L18 6M6 6l12 12' />
							) : (
								<path d='M4 6h16M4 12h16M4 18h16' />
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				<div
					id='mobile-menu'
					className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
					role='menu'
				>
					<ul className='navbar-mobile-list'>
						{SECTIONS.map(section => (
							<li key={section} className='navbar-mobile-item' role='none'>
								<button
									role='menuitem'
									aria-current={activeSection === section ? 'page' : undefined}
									onClick={() => scrollToSection(section)}
									className={`navbar-mobile-link ${
										activeSection === section ? 'active' : ''
									}`}
								>
									{t(`sections.${section}`)}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
