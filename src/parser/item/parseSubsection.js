import { titleCase } from '../utils/titleCase.js';

export const parseSubsection = (str = '') => {
	return titleCase(str.trim()
		.replace(/^[A-Z]\)\s*/g, '')
		.replace(/:$/, ''));
}


