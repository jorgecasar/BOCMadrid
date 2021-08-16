import { baseUrl } from '../utils/constants.js';
import { getAbsoluteUrl } from '../utils/getAbsoluteUrl.js';

export const getBulletinFileFull = $ => {
	const url = $('.field-name-field-pdf-file a').attr('href');
	return getAbsoluteUrl(url, baseUrl);
}
