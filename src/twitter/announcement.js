import twitterText from 'twitter-text';
import { sendMessage } from './utils/sendMessage.js';

const announcementTemplate = ({title, description, footer}) => `${title}
${description}
${footer}`;

export const announcement = ({ title, description, file }) => {
	const footer = `👉 ${file}`;
	const resolutionRegexp = /, por la que /gi;
	if(description.match(resolutionRegexp)) {
		description = description.split(resolutionRegexp)[1];
		description = description[0].toUpperCase() + description.slice(1);
	}
	let message = announcementTemplate({title, description, footer});
	const { valid, displayRangeEnd, validRangeEnd } = twitterText.parseTweet(message);
	if (!valid) {
		const elipsis = '…';
		const extraCharacters = displayRangeEnd - validRangeEnd;
		description = description.substr(0, description.length - extraCharacters - elipsis.length);
		description = description.substr(0, Math.min(description.length, description.lastIndexOf(" "))) + elipsis;
		message = announcementTemplate({title, description, footer});
	}
	return sendMessage(message);
}
