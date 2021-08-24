import twitterText from 'twitter-text';
import { sendMessage } from './utils/sendMessage.js';

const replacements = {
	"BOLETÍN OFICIAL DE LA COMUNIDAD DE MADRID": "BOCM",
}

const announcementTemplate = ({title, description, footer}) => `${title}
${description}
${footer}`;

export const announcement = ({ title, description, file }) => {
	const footer = `👉 ${file}`;
	description = description.replace(/^(.*?)(?:,.*?,)( por la que)/, "$1$2");
	Object.entries(replacements).forEach((value, key) => {
		description = description.replace(key, value);
	});

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
