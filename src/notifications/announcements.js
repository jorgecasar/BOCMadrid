import { councils } from '../twitter/utils/replacements/councils.js';
import { getRegex } from '../twitter/utils/replacements.js';

const section1DisabledHeadings = [
	'Notificación'
];
const section1 = (data) => data.items
	.filter(item => item.section === 'Comunidad de Madrid')
	.filter(item => !section1DisabledHeadings.includes(item.heading))
	.map(item => ({
		name: 'announcement',
		params: {
			title: item.area,
			description: item.description,
			file: item.files.find(file => file.type === 'pdf').url,
		}
	}));

const section2 = (data) => data.items
	.filter(item => item.section === 'Disposiciones y Anuncios del Estado')
	.map(item => ({
		name: 'announcement',
		params: {
			title: item.organism ? `${item.section} - ${item.organism}`: item.section,
			description: item.description,
			file: item.files.find(file => file.type === 'pdf').url,
		}
	}));

const section3 = (data) => data.items
	.filter(item => item.section === 'Administración Local Ayuntamientos')
	.map(item => {
		if(!getRegex(councils).test(item.subsection)) {
			console.log(item.subsection);
		}
		return item;
	})
	.map(item => ({
		name: 'announcement',
		params: {
			title: item.subsection,
			description: `${item.area}: ${item.heading}`,
			file: item.files.find(file => file.type === 'pdf').url,
		}
	}));

export const announcements = (data) => ([
	...section1(data),
	...section2(data),
	...section3(data),
]);
