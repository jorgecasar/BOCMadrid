export const getId = (date) => {
	const dateTrim = date.split('T')[0].replace(/-/g, '');
	return `${dateTrim}`;
}
