import { baseUrl } from '../utils/constants.js';
import { getAbsoluteUrl } from '../utils/getAbsoluteUrl.js';

export const getBulletinFileSummary = $ => {
	const url = $('.field-name-field-summary-file a').attr('href');
	return getAbsoluteUrl(url, baseUrl);
}
