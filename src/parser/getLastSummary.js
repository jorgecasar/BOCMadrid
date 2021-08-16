import { baseUrl } from "../utils/constants.js";
import { loadBody } from "../utils/loadBody.js";
import { getAbsoluteUrl } from "../utils/getAbsoluteUrl.js";

export const getLastSummary = (url = baseUrl) => loadBody(url)
	.then($ => $('.field-name-field-content-name a').attr('href'))
	.then(href => getAbsoluteUrl(href, baseUrl));
