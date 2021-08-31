import { createUpdateNotifications } from './createUpdateNotifications.js';
import * as twitter from './twitter/index.js';
import * as telegram from './telegram/index.js';

export const sendNext = async () => {
	const notifications = await createUpdateNotifications();
	if(notifications.length) {
		const {name, params} = notifications.shift();
		console.log(name, params);
		const results = await Promise.allSettled([
			telegram[name](params),
			twitter[name](params)
		]);

		results.forEach(result => {
			let message = result.status;
			if(result.status !== 'fulfilled') {
				message += `: ${result.reason.message}`;
			}
			console.log(message);
		})

		const someFulfilled = results.some(result => result.status === 'fulfilled');

		if(someFulfilled) {
			createUpdateNotifications({notifications});
		} else {
			throw new Error('No notifications sent');
		}
	}
}
