export const parseExtract = ($, context, section) => {
	let city;
	let area;
	let heading;
	let description = $('.field-name-field-short-description p', context)
		.html().trim()
		.replace(/(–&nbsp;|•\t)/g, '');
	const match = description.match(/(.*)<br>(.*)/);
	if(match) {
		heading = match[1];
		description = match[2];
	}
	if (section.startsWith('Sección: III.')) {
		[ city, area, heading, description = description ] = description.split(/[\.\?!][\'\"\u2018\u2019\u201c\u201d\)\]]*\s*(?<!\w\.\w.)(?<![A-Z][a-z][a-z]\.)(?<![A-Z][a-z]\.)(?<![A-Z]\.)\s+/);
	}

	return {
		city, area, heading, description
	};
}
