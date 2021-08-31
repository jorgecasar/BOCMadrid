import { fetch } from './fetch.js';
import { createUpdateNotifications } from './createUpdateNotifications.js';

export const start = async (url) => {
	const data = await fetch(url);
	if(data) {
		await createUpdateNotifications({data});
	}
}
