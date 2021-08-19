import { sendMessage } from './utils/sendMessage.js';

export const summary = ({ number, summary, total, items }) => {
	const content = Object.entries(items).map(([key, value]) => `\\- ${key} \\(${value}\\)`).join('\n');
	const heading = `🔔 Ya disponible el *Boletín nº ${number}*, con ${total} anuncios:`;
	const footer = `[Ver sumario 👇](${summary})`;
	const message = `${heading}
${content}
${footer}`;
	return sendMessage(message);
}
