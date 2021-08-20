import { sendMessage } from './utils/sendMessage.js';

export const summary = async ({ number, summary, total, items }) => {
	const description = Object.entries(items).map(([key, value]) => `- ${key} (${value})`).join('\n');
	const title = `🔔 Boletín nº ${number} (${total} anuncios)`;
	const footer = `👉 ${summary}`;
	const message = `${title}

${description}

${footer}`;
	return sendMessage(message);
}
