import twitterText from 'twitter-text';
import { sendMessage } from './utils/sendMessage.js';
import { replaceByAcronym } from './utils/replaceByAcronym.js';
import { replaceByAccounts, replaceFullNameCouncilByAccount } from './utils/replaceByAccounts.js';
import { replaceByHashtags } from './utils/replaceByHashtags.js';
import { elipsisText } from './utils/elipsisText.js';

const announcementTemplate = ({title, description, footer}) => `${title}
${description}
${footer}`;

export const announcement = ({ title, description, file }) => {
	const footer = `👉 ${file}`;
	title = `🏛 ${replaceByAccounts(title)}`;

	description = description.replace(/^(.*?)(?:,.*?,)( (por la que|sobre la))/, "$1$2");
	description = replaceByAcronym(description);
	description = replaceByHashtags(description);
	description = replaceFullNameCouncilByAccount(description);
	description = replaceByAccounts(description);

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
