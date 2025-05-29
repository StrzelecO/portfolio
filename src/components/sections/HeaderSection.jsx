import React from 'react';
import { useTranslation } from 'react-i18next';
import CVphoto from '/assets/cv_pic.png';
import CV_PL from '/assets/CV_Oliwia_Strzelec_PL.pdf';
import CV_EN from '/assets/CV_Oliwia_Strzelec_EN.pdf';
import LanguageSwitcher from '../LanguageSwitcher';

const HeaderSection = () => {
	const { t,  i18n } = useTranslation('header');
	const handleDownloadCV = () => {
		const cvFile = i18n.language === 'pl' ? CV_PL : CV_EN;
		window.open(cvFile, '_blank');
	};

	return (
		<section
			id='header'
			className='min-h-screen bg-primary-dark flex items-center justify-center py-16 relative'
			aria-label={t('ariaLabels.section')}
		>
			<div className='absolute top-20 right-6 z-10'>
				<LanguageSwitcher />
			</div>

			<div className='container mx-auto px-4 flex flex-col md:flex-row items-center gap-12'>
				{/* Photo */}
				<div className='w-full md:w-1/3 flex justify-center lg:mr-8'>
					<div className='relative'>
						<div className='w-64 h-64 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 rounded-full overflow-hidden border-4 border-cv-frame'>
							<img
								src={CVphoto}
								alt={t('ariaLabels.photo')}
								className='w-full h-full object-cover'
								aria-label={t('ariaLabels.photo')}
							/>
						</div>
						<div
							className='absolute -inset-4 border-2 border-cv-photo rounded-full pointer-events-none'
							aria-hidden='true'
						></div>
					</div>
				</div>

				{/* Text and button */}
				<div className='w-full md:w-2/3 text-center md:text-left'>
					<h1 className='text-4xl md:text-5xl 2xl:text-6xl font-bold text-text-light mb-4'>
						<span className='block'>{t('name')}</span>
						<span className='block text-accent-blue'>{t('surname')}</span>
					</h1>

					<h2 className='text-xl md:text-2xl text-text-gray mb-8'>
						{t('title')}
					</h2>

					<p className='text-text-gray mb-8 max-w-lg mx-auto md:mx-0'>
						{t('description')}
					</p>

					<button
						onClick={handleDownloadCV}
						className='px-6 py-2 bg-accent-blue hover:bg-accent-teal text-text-light rounded-md font-medium transition-colors shadow-lg hover:shadow-xl hover:cursor-pointer'
						aria-label={t('ariaLabels.cvButton')}
					>
						{t('downloadCv')}
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeaderSection;
