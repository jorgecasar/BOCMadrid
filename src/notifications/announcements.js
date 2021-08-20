const SECTIONS = [
	"Comunidad de Madrid",
	"Disposiciones y Anuncios del Estado"
];

export const announcements = (data) => data.items
	.filter(item => SECTIONS.includes(item.section))
	.map(item => ({
		name: 'announcement',
		params: {
			title: item.area,
			description: item.description,
			file: item.files.find(file => file.type === 'pdf').url,
		}
	}));
