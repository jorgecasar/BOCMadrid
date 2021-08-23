
// Split by dot but with more than five letters before dot to avoid split acronyms (p.e. "S. L.")
const SPLIT_BY_DOT = /[\.]\s*(.[^.]{5,})\.\s?/g;
const BULLET = /([–|•](&nbsp;|\s))/g;
export const parseExtract = ($, context, section) => {
	let subsection;
	let area;
	let heading = '';
	let description = $('.field-name-field-short-description p', context)
		.html().trim().replace(BULLET, '');

	if (section.startsWith('Comunidad de Madrid')) {
		const match = description.match(/(.*)<br>(.*)/);
		if(match) {
			heading = match[1];
			description = match[2];
		}
	} else if (section.startsWith('Administración Local')) {
		[ subsection, area, heading, description = '' ] = description.split(SPLIT_BY_DOT);
	} else if (section.startsWith('Administración de Justicia')) {
		[area, heading, description = '' ] = description.split(/\.\s*/g);
	}

	return {
		subsection, area, heading, description
	};
}
