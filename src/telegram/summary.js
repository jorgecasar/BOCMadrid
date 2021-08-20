import { sendMessage } from './utils/sendMessage.js';
import { toEscapeMessage } from './utils/toEscapeMessage.js';

export const summary = ({ number, summary, total, items }) => {
	const description = Object.entries(items).map(([key, value]) => `- ${key} (${value})`).join('\n');
	const title = toEscapeMessage(`🔔 *Boletín nº ${number}* (${total} anuncios)`);
	const footer = `[👉 sumario](${summary})`;
	const message = `${title}

${toEscapeMessage(description)}

${footer}`;
	return sendMessage(message);
}
