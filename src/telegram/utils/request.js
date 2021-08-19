import fetch from 'node-fetch';
import { apiUrl, headers } from './constants.js';

export const request = async (method, data) => {
	const url = `${apiUrl}/${method}`;
	const options = {
		method: 'POST',
		headers,
		body: JSON.stringify(data)
	};
	const response = await fetch(url, options);
	const result = await response.json();
	if(!result.ok) {
		const error = new Error(result.errorCode);
		error.message = result.description;
		throw error;
	}
	return result;
}
