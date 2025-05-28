import React from 'react';
import CVphoto from '/assets/cv_pic.png';
import CV from '/assets/CV_Oliwia_Strzelec.pdf';

const HeaderSection = () => {
	const handleDownloadCV = () => {
		window.open(CV, '_blank');
	};

	return (
		<section
			id='header'
			className='min-h-screen bg-primary-dark flex items-center justify-center py-16'
		>
			<div className='container mx-auto px-4 flex flex-col md:flex-row items-center gap-12'>
				{/* Photo */}
				<div className='w-full md:w-1/3 flex justify-center lg:mr-8'>
					<div className='relative'>
						<div className='w-64 h-64 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 rounded-full overflow-hidden border-4 border-cv-frame'>
							<img
								src={CVphoto}
								alt='Twoje zdjęcie'
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='absolute -inset-4 border-2 border-cv-photo rounded-full pointer-events-none'></div>
					</div>
				</div>

				{/* Text and button */}
				<div className='w-full md:w-2/3 text-center md:text-left'>
					<h1 className='text-4xl md:text-5xl 2xl:text-6xl font-bold text-text-light mb-4'>
						<span className='block'>Oliwia</span>
						<span className='block text-accent-blue'>Strzelec</span>
					</h1>

					<h2 className='text-xl md:text-2xl text-text-gray mb-8'>
						Computer Science Student / Information Systems Engineering
					</h2>

					<p className='text-text-gray mb-8 max-w-lg mx-auto md:mx-0'>
						Bridging theoretical knowledge with practical solutions through
						code. Passionate about problem-solving and turning complex concepts
						into functional applications.
					</p>

					<button
						onClick={handleDownloadCV}
						className='px-6 py-2 bg-accent-blue hover:bg-accent-teal text-text-light rounded-md font-medium transition-colors shadow-lg hover:shadow-xl'
					>
						Download CV (PDF)
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeaderSection;