import { fetch } from '../src/fetch.js';

try {
	fetch();
} catch (e) {
	console.error(`${e.name}: ${e.message}`);
	process.exit(1);
}
