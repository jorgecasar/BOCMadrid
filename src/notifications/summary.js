export const summary = (data) => {
	let { number, items, summary } = data;
	const total = items.length;
	items = items.reduce((acc, { section }) => {
		acc[section] = acc[section] || 0;
		acc[section] += 1;
		return acc;
	}, {});

	return {
		name: 'summary',
		params: { number, summary, total, items }
	}
}
