import React from 'react';

const ContactSection = ({ id }) => {
	return (
		<section id={id} className='bg-primary-dark py-8'>
			<div className='container mx-auto px-4'>
				<h2 className='text-2xl font-bold text-text-light mb-6 text-center'>
					Contact
				</h2>

				<div className='flex flex-col sm:flex-row justify-center sm:items-center gap-12 sm:gap-32 px-8 sm:px-12'>
					{/* Lewa kolumna - telefon i email */}
					<div className='flex flex-col gap-6'>
						{/* Telefon */}
						<a
							className='flex items-center gap-3 text-text-gray hover:text-accent-blue transition-colors text-lg'
						>
							<PhoneIcon className='w-6 h-6' />
							<span>+48 577 336 146</span>
						</a>

						{/* Email */}
						<a
							className='flex items-center gap-3 text-text-gray hover:text-accent-blue transition-colors text-lg'
						>
							<EmailIcon className='w-6 h-6' />
							<span>strzelecoliwia24@email.com</span>
						</a>
					</div>

					{/* Prawa kolumna - GitHub i LinkedIn */}
					<div className='flex flex-col justify-start gap-6'>
						{/* GitHub */}
						<a
							href='https://github.com/twojprofil'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-3 text-text-gray hover:text-accent-teal transition-colors text-lg'
						>
							<GitHubIcon className='w-6 h-6' />
							<span>GitHub</span>
						</a>

						{/* LinkedIn */}
						<a
							href='https://linkedin.com/in/twojprofil'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-3 text-text-gray hover:text-accent-teal transition-colors text-lg'
						>
							<LinkedInIcon className='w-6 h-6' />
							<span>LinkedIn</span>
						</a>
					</div>
				</div>

				<div className='mt-8 pt-6 border-t border-primary-base'>
					<p className='text-text-gray text-center'>
						© {new Date().getFullYear()} Portfolio. All rights reserved. 
					</p>
				</div>
			</div>
		</section>
	);
};

// SVG Icon Components
const PhoneIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
	</svg>
);

const EmailIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
		<polyline points='22,6 12,13 2,6'></polyline>
	</svg>
);

const GitHubIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
	</svg>
);

const LinkedInIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
		<rect x='2' y='9' width='4' height='12'></rect>
		<circle cx='4' cy='4' r='2'></circle>
	</svg>
);

export default ContactSection;
