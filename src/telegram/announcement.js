import { sendMessage } from './utils/sendMessage.js';
import { toEscapeMessage } from './utils/toEscapeMessage.js';

export const announcement = ({ title, description, file }) => {
	const footer = `[👉 anuncio](${file})`;
	const message = `*${title}*

${toEscapeMessage(description)}

${footer}`;
	return sendMessage(message);
}
