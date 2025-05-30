import { useTranslation } from 'react-i18next';
import { changeLanguageWithLoading } from '../i18n';
import { useState } from 'react';

function LanguageSwitcher() {
	const { i18n } = useTranslation();
	const [isChanging, setIsChanging] = useState(false);

	const handleLanguageChange = async lng => {
		if (i18n.language === lng || isChanging) return;

		setIsChanging(true);
		try {
			await changeLanguageWithLoading(lng);
			const hasConsent = document.cookie.includes('cookie_consent=accepted');
			if (hasConsent) {
				document.cookie = `i18n_lang=${lng}; path=/; max-age=${
					30 * 24 * 60 * 60
				}; SameSite=Lax`;
			}
		} finally {
			setIsChanging(false);
		}
	};

	const handleKeyDown = (e, lng) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleLanguageChange(lng);
		}
	};

	return (
		<div className='flex items-center gap-1 p-1 bg-primary-base rounded-full'>
			{['en', 'pl'].map(lng => (
				<button
					key={lng}
					onClick={() => handleLanguageChange(lng)}
					onKeyDown={e => handleKeyDown(e, lng)}
					disabled={isChanging}
					aria-label={`Change language to ${lng.toUpperCase()}`}
					aria-current={i18n.language === lng}
					className={`
            relative px-3 py-1 rounded-full text-sm font-medium
            transition-all duration-300 ease-in-out cursor-pointer
            ${
							i18n.language === lng
								? 'bg-accent-blue text-text-light shadow-md'
								: 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
						}
            ${isChanging ? 'opacity-70 cursor-not-allowed' : ''}
            
          `}
				>
					{lng.toUpperCase()}
					{i18n.language === lng && (
						<span className='absolute inset-x-1/2 -bottom-1 h-0.5 w-4 bg-accent-teal rounded-full transform -translate-x-1/2' />
					)}
				</button>
			))}
		</div>
	);
}

export default LanguageSwitcher;
