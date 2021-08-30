import twitterText from 'twitter-text';
import { sendMessage } from './utils/sendMessage.js';
import {
	replaceAcronyms,
	replaceHashtags,
	replaceFullNameCouncil,
	replaceOrganizationsAccounts,
	replaceCounselingAccounts,
	replaceCouncilsAccounts,
} from './utils/replacements.js';
import { elipsisText } from './utils/elipsisText.js';

const announcementTemplate = ({title, description, footer}) => `${title}
${description}
${footer}`;

export const announcement = ({ title, description, file }) => {
	const footer = `👉 ${file}`;
	title = replaceCounselingAccounts(title);
	title = replaceCouncilsAccounts(title);
	title = `🏛 ${title}`;

	description = description.replace(/^(.*?)(?:,.*?,)( (por la que|sobre la))/, "$1$2");
	description = replaceAcronyms(description);
	description = replaceHashtags(description);
	description = replaceOrganizationsAccounts(description);
	description = replaceCounselingAccounts(description);
	description = replaceFullNameCouncil(description);

	let message = announcementTemplate({title, description, footer});
	const { valid, validRangeEnd, displayRangeEnd } = twitterText.parseTweet(message);
	if (!valid) {
		const extraCharacters = displayRangeEnd - validRangeEnd;
		description = elipsisText(description, description.length - extraCharacters)
		message = announcementTemplate({title, description, footer});
	}
	console.log(`Tweet:\n${message}`);
	return sendMessage(message);
}
