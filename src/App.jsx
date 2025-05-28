import React from 'react';
import Navbar from './components/Navbar';
import HeaderSection from './components/sections/HeaderSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import ExperienceSection from './components/sections/ExperienceSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';
import CookieBanner from './components/CookieBanner.jsx';

function App() {
	return (
		<div className='relative'>
			<Navbar />

			<main>
				<HeaderSection id='header' />
				<AboutSection id='about' />
				<ProjectsSection id='projects' />
				<ExperienceSection id='experience' />
				<ContactSection id='contact' />
			</main>

      <CookieBanner />
		</div>
	);
}

export default App;
