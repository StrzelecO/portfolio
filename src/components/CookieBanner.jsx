import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const CookieBanner = () => {
	const [showBanner, setShowBanner] = useState(false);
	const { t, i18n } = useTranslation(['cookies', 'common']);

	const setCookie = (name, value, days = 30) => {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`;
	};

	const getCookie = name => {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(';').shift();
	};

	useEffect(() => {
		if (typeof window !== 'undefined' && !getCookie('cookie_consent')) {
			setShowBanner(true);
		}
	}, []);

	const handleAccept = () => {
		setCookie('cookie_consent', 'accepted');
		setCookie('i18n_lang', i18n.language);
		setShowBanner(false);
	};

	const handleDecline = () => {
		setCookie('cookie_consent', '', -1);
		setCookie('i18n_lang', '', -1);
		setShowBanner(false);
	};

	if (!showBanner) return null;

	return (
		<div
			role='dialog'
			aria-modal='true'
			aria-labelledby='cookie-banner-heading'
			aria-describedby='cookie-banner-description'
			className='fixed bottom-0 left-0 right-0 bg-cookie-banner-primary text-text-light p-4 shadow-lg z-50 animate-fade-in-up'
		>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
				<div>
					<h2 id='cookie-banner-heading' className='sr-only'>
						{t('banner.title')}
					</h2>
					<p
						id='cookie-banner-description'
						className='text-sm md:text-base text-center md:text-left'
					>
						{t('banner.description')}
					</p>
				</div>

				<div className='flex flex-col sm:flex-row gap-4'>
					<button
						onClick={handleDecline}
						className='px-4 py-2 text-sm font-medium rounded border border-primary-light hover:opacity-80 hover:cursor-pointer transition-all duration-200'
						aria-label={t('banner.ariaLabels.decline')}
					>
						{t('banner.decline')}
					</button>
					<button
						onClick={handleAccept}
						className='px-4 py-2 text-sm font-medium rounded bg-cookie-banner-btn hover:opacity-80 hover:cursor-pointer transition-all duration-200'
						aria-label={t('banner.ariaLabels.accept')}
					>
						{t('banner.accept')}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CookieBanner;
