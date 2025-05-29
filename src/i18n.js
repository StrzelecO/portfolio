import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './data/translations/resources';

const getSavedLanguage = () => {
  if (typeof window !== 'undefined') {
    const consent = localStorage.getItem('cookie_consent');
    const savedLang = localStorage.getItem('i18n_lang');
    
    if (consent === 'accepted' && savedLang) {
      return savedLang;
    }
  }
  return 'en'; // default
};

i18n.use(initReactI18next).init({
	resources,
	lng: getSavedLanguage(),
	fallbackLng: 'pl',
	interpolation: {
		escapeValue: false,
	},
	ns: [
		'header',
		'about',
		'projects',
		'experience',
		'contact',
		'cookies',
		'navbar',
		'policies',
	],
	defaultNS: 'header',

	backend: {
		loadPath: './data/translations/{{lng}}/{{ns}}.json',
	},
});


export const changeLanguageWithLoading = async lng => {
	const namespaces = i18n.options.ns;

	try {
		for (const ns of namespaces) {
			if (!i18n.hasResourceBundle(lng, ns)) {
				const translation = await import(
					`./data/translations/${lng}/${ns}.json`
				);
				i18n.addResourceBundle(lng, ns, translation.default);
			}
		}

		await i18n.changeLanguage(lng);
	} catch (error) {
		console.error('Error loading language:', error);
	}
};

export default i18n;
