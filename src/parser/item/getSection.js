import { parseSection } from './parseSection.js';
import { parseSubsection } from './parseSubsection.js';

export const getSection = ($, context) => {
	let { parentNode } = context
	let text = '';
	while(!text && parentNode) {
		if(parentNode.attribs.class === 'view-content') {
			text = $($('h3', parentNode)[0]).text().trim();
		} else {
			parentNode = parentNode.parentNode;
		}
	}
	let [ section, subsection = '' ] = text.split('|');
	section = parseSection(section);
	subsection = parseSubsection(subsection);
	return { section, subsection };
};
