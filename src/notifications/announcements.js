const SECTION = "Comunidad de Madrid";

export const announcements = (data) => data.items
	.filter(item => item.section === SECTION)
	.map(item => ({
			name: 'announcement',
			params: {
				title: item.area,
				description: item.description,
				file: item.files.find(file => file.type === 'pdf').url,
			}
		}));
