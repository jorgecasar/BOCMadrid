import { resolve } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { dataDirPath } from './constants.js';

export const ensureDataDir = (dirPath  = dataDirPath) => {
	const dir = resolve(dirPath);
	if(!existsSync(dir)) {
		console.log(`Create ${dir}`);
		mkdirSync(dir, { recursive: true });
	}
	return dir;
}
