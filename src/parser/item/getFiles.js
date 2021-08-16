import { getAbsoluteUrl } from '../../utils/getAbsoluteUrl.js';

export const getFiles = ($, context) => {
	const nodes = $('a', context);
	const items = [];
	for(let node of nodes) {
		const item = {
			type: $(node).text().trim(),
			url: getAbsoluteUrl(node.attribs.href),
		};
		items.push(item);
	}
	return items;
};
