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
			description: `${item.heading}: ${item.description}`,
			file: item.files.find(file => file.type === 'pdf').url,
		}
	}));

const section2 = (data) => data.items
	.filter(item => item.section === 'Disposiciones y Anuncios del Estado')
	.map(item => ({
		name: 'announcement',
		params: {
			title: item.section,
			description: item.description,
			file: item.files.find(file => file.type === 'pdf').url,
		}
	}));

const section3 = (data) => data.items
	.filter(item => item.section === 'Administración Local Ayuntamientos')
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
