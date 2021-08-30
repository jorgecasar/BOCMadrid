import {decode} from 'html-entities';
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
		let description;
		let { section, subsection } = getSection($, context);
		let organism = getOrganism($, context);
		let area = getArea($, context);
		const files = getFiles($, context);
		({ heading, description, subsection = subsection, area = area } = parseExtract($, context, section));
		items.push({
			section: decode(section.trim()),
			subsection: decode(subsection.trim()),
			organism: decode(organism.trim()),
			area: decode(area.trim()),
			heading: decode(heading.trim()),
			description: decode(description.trim()),
			files
		});
	}
	return items;
}
