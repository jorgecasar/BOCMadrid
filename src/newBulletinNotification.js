import { getLastBulletinData } from '../src/parser/getLastBulletinData.js';
import { sendNewBulletin } from '../src/telegram/sendNewBulletin.js';
import { tweetNewBulletin } from '../src/twitter/tweetNewBulletin.js';

export const newBulletinNotification = async () => {
	const { date, number, items, summary } = await getLastBulletinData();
	// Check if the latest bulletin is from current day (today).
	const bulletingDate = new Date(date.split('T')[0]).toLocaleDateString();
	const today = new Date().toLocaleDateString();
	console.log(`Today ${today} / Bulletin: ${bulletingDate} - ${number}`);
	if(bulletingDate !== today) {
		throw new Error('Bulletin is not from current day.');
	}
	const total = items.length;
	// const path = resolve(`./data/20210816.json`);
	// const { number, items, summary } = JSON.parse(readFileSync(path));
	const sectionsMap = items.reduce((acc, { section }) => {
		acc[section] = acc[section] || 0;
		acc[section] += 1;
		return acc;
	}, {});
	return Promise.allSettled([
		sendNewBulletin({ number, summary, total, sectionsMap }),
		tweetNewBulletin({ number, summary, total, sectionsMap })
	]);
};
