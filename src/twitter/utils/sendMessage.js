import { createTwitter } from './twitter.js';

export const sendMessage = async status => new Promise((resolve, reject) => {
	const path = 'statuses/update';
	try {
		const twitter = createTwitter();
		twitter.post(path, { status }, (error, data, response) => {
			if (error) reject(error);
			resolve(data);
		});
	} catch (error) {
		reject(error);
	}
});
