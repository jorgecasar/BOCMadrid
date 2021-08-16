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
	section = section.trim().replace(/:$/g, '').split('. ')[1] || undefined;
	subsection = subsection.trim().replace(/:$/ , '').split(') ')[1] || undefined;
	return { section, subsection };
};
