import { getLastSummary } from './getLastSummary.js';
import { getBulletinData } from './getBulletinData.js';

export const getLastBulletinData = async (url) => {
	const fullBulletinUrl = url || await getLastSummary(await getLastSummary());
	return getBulletinData(fullBulletinUrl);
}
