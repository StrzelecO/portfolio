import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PolicyModal from '../PolicyModal';

const ContactSection = ({ id }) => {
	const [modal, setModal] = useState(null);
	const { t } = useTranslation('footer');

	return (
		<section id={id} className='bg-primary-dark py-2 pb-8'>
			<div className='container mx-auto px-4'>
				{/* Footer with legal links */}
				<div className='mt-8 pt-6 border-t border-primary-base'>
					<p className='text-text-gray text-center'>
						{t('footer.copyright', { year: new Date().getFullYear() })}
					</p>
					<div className='flex justify-center gap-4 mt-2'>
						<button
							onClick={() => setModal('privacy')}
							className='text-sm text-accent-teal hover:underline hover:cursor-pointer'
						>
							{t('footer.privacyPolicy')}
						</button>
						<button
							onClick={() => setModal('cookies')}
							className='text-sm text-accent-teal hover:underline hover:cursor-pointer'
						>
							{t('footer.cookiePolicy')}
						</button>
					</div>
					<p className='text-text-gray text-center text-xs mt-2'>
						{t('footer.cookieNotice')}
					</p>
				</div>
			</div>

			{modal && <PolicyModal policy={modal} onClose={() => setModal(null)} />}
		</section>
	);
};

export default ContactSection;
