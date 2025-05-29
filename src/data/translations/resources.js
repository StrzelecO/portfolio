import enHeader from './en/header.json';
import plHeader from './pl/header.json';

import enAbout from './en/about.json';
import plAbout from './pl/about.json';

import enProjects from './en/projects.json';
import plProjects from './pl/projects.json';

import enExperience from './en/experience.json';
import plExperience from './pl/experience.json';

import enContact from './en/contact.json';
import plContact from './pl/contact.json';

import enCookies from './en/cookies.json';
import plCookies from './pl/cookies.json';

import enNavbar from './en/navbar.json';
import plNavbar from './pl/navbar.json';

import enPolicies from './en/policies.json';
import plPolicies from './pl/policies.json';

export const resources = {
	en: {
		header: enHeader,
		about: enAbout,
		projects: enProjects,
		experience: enExperience,
		contact: enContact,
		cookies: enCookies,
		navbar: enNavbar,
		policies: enPolicies,
	},
	pl: {
		header: plHeader,
		about: plAbout,
		projects: plProjects,
		experience: plExperience,
		contact: plContact,
		cookies: plCookies,
		navbar: plNavbar,
		policies: plPolicies,
	},
};

export const loadTranslations = async (lang, namespace) => {
	try {
		const translation = await import(`./${lang}/${namespace}.json`);
		return translation.default;
	} catch (error) {
		console.error(`Error loading translation: ${lang}/${namespace}`, error);
		return {};
	}
};
