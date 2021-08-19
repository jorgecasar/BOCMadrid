#!/usr/bin/env node

import { start } from '../src/start.js';

try {
	start();
} catch (e) {
	console.error(`${e.name}: ${e.message}`);
	process.exit(1);
}
