import { loadBody } from '../utils/loadBody.js';
import { getId } from './getId.js';
import { getNumber } from './getNumber.js';
import { getDate } from './getDate.js';
import { getItems } from './getItems.js';
import { getBulletinFileFull } from './getBulletinFileFull.js';
import { getBulletinFileSummary } from './getBulletinFileSummary.js';

export const getBulletinData = url => loadBody(url)
	.then($ => {
		const number = getNumber($);
		const date = getDate($);
		const file = getBulletinFileFull($);
		const summary = getBulletinFileSummary($);
		const items = getItems($);
		const id = getId(date);
		return {
			id,
			url,
			number,
			date,
			file,
			summary,
			items
		};
	});
