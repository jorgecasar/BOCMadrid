import { titleCase } from '../utils/titleCase.js';

export const getArea = ($, context) => {
	let { previousSibling } = context
	let subsection;
	while(!subsection && previousSibling) {
		if(previousSibling.tagName?.toLowerCase() === 'h4') {
			subsection = $(previousSibling).text().trim();
		} else {
			previousSibling = previousSibling.previousSibling;
		}
	}
	return titleCase(subsection);
};
