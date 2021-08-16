import { twit } from './twit.js';

export const updateStatus = async status => new Promise((resolve, reject) => {
	const path = 'statuses/update';
	twit.post(path, { status }, (error, data, response) => {
		if (error) reject(error);
		resolve(data);
	});
});
