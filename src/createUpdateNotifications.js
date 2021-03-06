import { resolve } from 'path';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { notificationFileName } from './utils/constants.js';
import { ensureDataDir } from './utils/ensureDataDir.js';
import { summary } from './notifications/summary.js';
import { announcements } from './notifications/announcements.js';
import { fetch } from './fetch.js';

export const createUpdateNotifications = async ({data, notifications} = {}) => {
	const dir = ensureDataDir();
	let path = resolve(dir, notificationFileName());
	if (!notifications) {
		data = data || (await fetch());
		path = resolve(dir, notificationFileName(data.date));
		if(existsSync(path)) {
			return JSON.parse(readFileSync(path));
		}
		console.log(`Creating notifications...`);
		notifications = [
			summary(data),
			...announcements(data),
		];
	}
	console.log(`Write ${path}`);
	writeFileSync(path, JSON.stringify(notifications, null, 2));
	return notifications;
}
