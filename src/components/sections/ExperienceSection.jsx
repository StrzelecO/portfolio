import React from 'react';
import experiences from '/src/data/experience.json';

const ExperienceSection = ({ id }) => {
	return (
		<section id={id} className='min-h-screen bg-primary-base py-16 md:pt-20 px-4 sm:px-6 lg:px-8'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
				<h2 className='text-text-light text-3xl sm:text-4xl font-bold mb-16 text-center'>
					Work experience
				</h2>

				<div className='space-y-6 sm:space-y-8 max-w-3xl mx-auto'>
					{experiences.map((exp, index) => (
						<div
							key={index}
							className='border-l-4 border-accent-blue pl-4 sm:pl-6 relative'
						>
							<div className='absolute -left-2 sm:-left-2.5 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-accent-blue rounded-full'></div>
							<div className="bg-primary-dark border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
								<h3 className='text-lg sm:text-xl font-semibold text-text-light hover:text-accent-blue'>
									{exp.role}
								</h3>
								<p className='text-sm sm:text-base text-accent-teal mb-1'>
									{exp.company} • {exp.period}
								</p>
								<p className='text-sm sm:text-base text-text-gray'>
									{exp.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
