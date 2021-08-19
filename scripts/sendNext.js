#!/usr/bin/env node

import { sendNext } from '../src/sendNext.js';

try {
	sendNext();
} catch (e) {
	console.error(`${e.name}: ${e.message}`);
	process.exit(1);
}
