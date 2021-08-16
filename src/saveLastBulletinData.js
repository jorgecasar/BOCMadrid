import { resolve } from 'path';
import { writeFileSync } from 'fs';
import { getLastBulletinData } from '../src/parser/getLastBulletinData.js';

export const saveLastBulletinData = async () => {
	const data = await getLastBulletinData();
	const path = resolve(`./data/${data.id}.json`);
	writeFileSync(path, JSON.stringify(data, null, 2));
};
