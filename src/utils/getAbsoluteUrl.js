import { baseUrl as BASE_URL } from './constants.js';

export const getAbsoluteUrl = (url, baseUrl = BASE_URL) =>
	url.startsWith('http') ?
	url :
	`${baseUrl}${url}`;
