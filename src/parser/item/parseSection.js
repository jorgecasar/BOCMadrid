import { titleCase } from '../utils/titleCase.js';

export const parseSection = (str = '') => {
	return titleCase(str.trim().replace(/.*:\s.*\.\s/g, ''));
}
