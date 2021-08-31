import { fetch } from '../src/fetch.js';

try {
	fetch(process.argv[2]);
} catch (e) {
	console.error(`${e.name}: ${e.message}`);
	process.exit(1);
}
