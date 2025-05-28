import React from 'react';
import yourPhoto from '/assets/cv_pic.png';

const HeaderSection = ({ id }) => {
	const scrollToAbout = () => {
		const aboutSection = document.getElementById('about');
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id={id}
			className='min-h-screen bg-primary-dark pt-20 relative overflow-hidden'
		>
			<div className='container mx-auto px-4 md:px-8 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20'>
				{/* Zdjęcie */}
				<div className='w-full md:w-2/5 flex justify-center'>
					<div className='relative aspect-square w-64 sm:w-72 md:w-80 lg:w-96'>
						<img
							src={yourPhoto}
							alt='Oliwia Strzelec'
							className='rounded-full w-full h-full object-cover border-4 border-accent-blue shadow-lg hover:scale-105 transition-transform duration-300'
						/>
					</div>
				</div>

				{/* Tekst */}
				<div className='w-full md:w-3/5 text-center md:text-left'>
					<h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6'>
						Oliwia Strzelec
					</h1>
					<p className='text-accent-blue text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-8'>
						IT student looking for first job experience
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
						<a
							href='/assets/cv_oliwia_strzelec.pdf'
							download='Oliwia_Strzelec_CV.pdf'
							className='px-6 py-3 bg-transparent border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-text-light rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2'
						>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
								/>
							</svg>
							Download CV (PDF)
						</a>
					</div>
				</div>
			</div>

			{/* Nowa minimalistyczna strzałka-daszek */}
			<button
				onClick={scrollToAbout}
				aria-label='Przewiń do sekcji About'
				className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:cursor-pointer focus:outline-none text-accent-blue hover:text-accent-teal transition-colors'
			>
				<svg
					width='96' // Zwiększone 2x
					height='48' // Zwiększone 2x
					viewBox='0 0 48 24'
					className='transition-opacity'
				>
					<path
						d='M10 12 L24 20'
						stroke='currentColor'
						strokeWidth='3'
						strokeLinecap='round'
					/>
					<path
						d='M24 20 L38 12'
						stroke='currentColor'
						strokeWidth='3'
						strokeLinecap='round'
					/>
				</svg>
			</button>
		</section>
	);
};

export default HeaderSection;
