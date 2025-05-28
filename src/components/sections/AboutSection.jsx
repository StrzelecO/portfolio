import React from 'react';
import aboutData from '../../data/aboutData.json';
import AboutBlock from '../AboutBlock.jsx';

const AboutSection = ({ id }) => {
	const { aboutText, education, technicalSkills, additionalSkills } = aboutData;

	return (
		<section
			id={id}
			className='min-h-screen bg-primary-base py-16 md:pt-20 px-4 sm:px-6 lg:px-8'
			aria-label="About me section"
		>
			<div className='max-w-5xl mx-auto'>
				<h2 className='text-text-light text-2xl sm:text-4xl font-bold mb-16 text-center'>
					About Me
				</h2>

				<div className='grid grid-cols-1 gap-y-12'>
					{/* Who I Am */}
					<AboutBlock title='Who I Am' aria-label="Personal description">
						{aboutText.map((text, idx) => (
							<p key={idx} className='text-text-gray mb-4 leading-relaxed'>
								{text}
							</p>
						))}
					</AboutBlock>

					{/* Grid of 3 columns */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8' aria-label="Skills and education information">
						{/* Education */}
						<AboutBlock title='Education' dotSize='w-3 h-3' aria-label="Education background">
							<ul className='space-y-4 text-sm'>
								{education.map((edu, idx) => (
									<li key={idx} aria-label={`Education: ${edu.title}`}>
										<h4 className='text-accent-blue font-medium'>
											{edu.title}
										</h4>
										<p className='text-text-gray font-light'>{edu.years}</p>
										<p className='text-text-gray'>{edu.description}</p>
									</li>
								))}
							</ul>
						</AboutBlock>

						{/* Technical Skills */}
						<AboutBlock title='Technical Skills' dotSize='w-3 h-3' aria-label="Technical skills list">
							<ul className='space-y-3 text-sm'>
								{technicalSkills.map((skill, idx) => (
									<li key={idx} className='flex items-start' aria-label={`Technical skill: ${skill}`}>
										<span className='text-accent-blue mr-2 leading-[1.6]'>
											•
										</span>
										<span className='text-text-gray'>{skill}</span>
									</li>
								))}
							</ul>
						</AboutBlock>

						{/* Additional Skills */}
						<AboutBlock title='Additional Skills' dotSize='w-3 h-3' aria-label="Additional skills and certificates">
							<div className='space-y-4 text-sm'>
								<div aria-label="Language skills">
									<h4 className='text-accent-blue font-medium mb-1'>
										Languages
									</h4>
									<ul className='text-text-gray space-y-1'>
										{additionalSkills.languages.map((lang, idx) => (
											<li key={idx} aria-label={`Language: ${lang}`}>{lang}</li>
										))}
									</ul>
								</div>
								<div aria-label="Certifications">
									<h4 className='text-accent-blue font-medium mb-1'>
										Certificates
									</h4>
									<ul className='text-text-gray space-y-1'>
										{additionalSkills.certificates.map((cert, idx) => (
											<li key={idx} aria-label={`Certificate: ${cert}`}>{cert}</li>
										))}
									</ul>
								</div>
							</div>
						</AboutBlock>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;