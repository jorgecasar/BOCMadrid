import { fetch } from './fetch.js';
import { createUpdateNotifications } from './createUpdateNotifications.js';

export const start = async () => {
	const data = await fetch();
	if(data) {
		await createUpdateNotifications();
	}
}
