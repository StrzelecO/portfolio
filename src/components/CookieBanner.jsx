import { useEffect, useState } from 'react';

const CookieBanner = () => {
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const consent = localStorage.getItem('cookie_consent');
			if (consent === null) {
				setShowBanner(true);
			}
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem('cookie_consent', 'accepted');
		setShowBanner(false);
	};

	const handleDecline = () => {
		localStorage.setItem('cookie_consent', 'declined');
		setShowBanner(false);
	};

	if (!showBanner) return null;

	return (
		<div 
			role="dialog"
			aria-modal="true"
			aria-labelledby="cookie-banner-heading"
			aria-describedby="cookie-banner-description"
			className='fixed bottom-0 left-0 right-0 bg-cookie-banner-primary text-text-light p-4 shadow-lg z-50 animate-fade-in-up'
		>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
				<div>
					<h2 id="cookie-banner-heading" className="sr-only">Cookie Consent</h2>
					<p id="cookie-banner-description" className='text-sm md:text-base text-center md:text-left'>
						This website uses cookies to improve functionality.
					</p>
				</div>

				<div className='flex flex-col sm:flex-row gap-4'>
					<button
						onClick={handleDecline}
						className='px-4 py-2 text-sm font-medium rounded border border-primary-light hover:opacity-80 hover:cursor-pointer transition-all duration-200'
						aria-label="Odrzuć pliki cookies"
					>
						Accept
					</button>
					<button
						onClick={handleAccept}
						className='px-4 py-2 text-sm font-medium rounded bg-acc bg-cookie-banner-btn hover:opacity-80 hover:cursor-pointer transition-all duration-200'
						aria-label="Akceptuję pliki cookies"
					>
						Decline
					</button>
				</div>
			</div>
		</div>
	);
};

export default CookieBanner;