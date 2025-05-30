import React from 'react';
import Navbar from './components/Navbar';
import HeaderSection from './components/sections/HeaderSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import ExperienceSection from './components/sections/ExperienceSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';
import FooterSection from './components/sections/FooterSection.jsx';
import CookieBanner from './components/CookieBanner.jsx';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
	const { i18n } = useTranslation();

	useEffect(() => {
		const cookieConsent = document.cookie.includes('cookie_consent=accepted');
		if (!cookieConsent) return;

		const savedLang = document.cookie
			.split('; ')
			.find(row => row.startsWith('i18n_lang='))
			?.split('=')[1];

		if (savedLang && i18n.languages.includes(savedLang)) {
			i18n.changeLanguage(savedLang);
		}
	}, [i18n]);
	return (
		<div>
			<Navbar />

			<main>
				<HeaderSection id='header' />
				<AboutSection id='about' />
				<ProjectsSection id='projects' />
				<ExperienceSection id='experience' />
				<ContactSection id='contact' />
				<FooterSection id='footer' />
			</main>

			<CookieBanner />
		</div>
	);
}

export default App;
