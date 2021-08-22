import { resolve } from 'path';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { ensureDataDir } from './utils/ensureDataDir.js';
import { fileBasename } from './utils/constants.js';
import { getLastBulletinData } from './parser/getLastBulletinData.js';

export const fetch = async () => {
	const dir = ensureDataDir();
	const path = resolve(dir, `${fileBasename}.json`);
	if(existsSync(path)) {
		return JSON.parse(readFileSync(path));
	}
	console.log(`Fetching data...`);
	const data = await getLastBulletinData();
	const newFileBasename = data.date.split('T')[0];
	if(fileBasename === newFileBasename) {
		console.log(`Write ${path}`);
		writeFileSync(path, JSON.stringify(data, null, 2));
		return data;
	}
	throw new Error(`No bulletin data yet`);
};
