import twitterText from 'twitter-text';
import { sendMessage } from './utils/sendMessage.js';

const announcementTemplate = ({title, description, footer}) => `${title}

${description}

${footer}`;

export const announcement = ({ title, description, file }) => {
	const footer = `Ver sumario 👇
${file}`;
	let message = announcementTemplate({title, description, footer});
	const { valid, displayRangeEnd, validRangeEnd } = twitterText.parseTweet(message);
	if (!valid) {
		const extraCharacters = displayRangeEnd - validRangeEnd;
		description = description.substr(0, description.length - extraCharacters);
		description = description.substr(0, Math.min(description.length, description.lastIndexOf(" ")))
		description = `${description.slice(0, -3)}...`;
		message = announcementTemplate({title, description, footer});
	}
	return sendMessage(message);
}
