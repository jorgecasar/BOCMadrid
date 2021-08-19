#!/usr/bin/env node

import { newBulletin } from '../src/newBulletinNotification.js';

try {
	newBulletin();
} catch (e) {
	console.error(`${e.name}: ${e.message}`);
	process.exit(1);
}
