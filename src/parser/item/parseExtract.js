// Split by dot but with more than one letter before dot to avoid split acronyms (p.e. "S. L.")
const SPLIT_BY_DOT = /[\.]\s*(?<![A-Z]\.)\s+/g;
const BULLET = /([–|•](&nbsp;|\s))/g;
export const parseExtract = ($, context, section) => {
	let subsection;
	let area;
	let heading;
	let description = $('.field-name-field-short-description p', context)
		.html().trim().replace(BULLET, '');

	if (section.startsWith('Comunidad de Madrid')) {
		const match = description.match(/(.*)<br>(.*)/);
		if(match) {
			heading = match[1];
			description = match[2];
		}
	}
	if (section.startsWith('Administración Local')) {
		[ subsection, area, heading, description = description ] = description.split(SPLIT_BY_DOT);
		description = description
			.replace(`${subsection} .`, '')
			.replace(`${area} .`, '')
			.replace(`${heading} .`, '');
	} else if (section.startsWith('Administración de Justicia')) {
		[heading, description = description] = description.split(SPLIT_BY_DOT);
	}

	return {
		subsection, area, heading, description
	};
}
