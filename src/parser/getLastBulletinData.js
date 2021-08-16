import { getLastSummary } from './getLastSummary.js';
import { getBulletinData } from './getBulletinData.js';

export const getLastBulletinData = async () => {
	const summaryUrl = await getLastSummary();
	const fullBulletinUrl = await getLastSummary(summaryUrl);
	return getBulletinData(fullBulletinUrl);
}
