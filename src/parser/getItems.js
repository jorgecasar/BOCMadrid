import { getSection } from "./item/getSection.js";
import { getArea } from "./item/getArea.js";
import { parseExtract } from "./item/parseExtract.js";
import { getFiles } from "./item/getFiles.js";
import { getOrganism } from "./item/getOrganism.js";

export const getItems = ($) => {
	const nodes = $('.views-row')
	const items = [];
	for(let context of nodes) {
		let heading;
		let city;
		let description;
		let { section, subsection } = getSection($, context);
		let organism = getOrganism($, context);
		let area = getArea($, context);
		const files = getFiles($, context);
		({ heading, description, city, area = area } = parseExtract($, context, section));
		items.push({
			section,
			subsection,
			organism,
			city,
			area,
			heading,
			description,
			files
		});
	}
	return items;
}
