export const getAbsoluteUrl = (url, baseUrl) =>
	url.startsWith('http') ?
	url :
	`${baseUrl}${url}`;
