import { sendMessage } from './utils/sendMessage.js';

export const sendNewBulletin = ({ number, sectionsMap, total, summary }) => {
	const content = Object.entries(sectionsMap).map(([key, value]) => `\\- ${key} \\(${value}\\)`).join('\n');
	const heading = `🔔 Ya disponible el *Boletín nº ${number}*, con ${total} anuncios:`;
	const footer = `[Ver sumario 👇](${summary})`;
	const message = `${heading}
${content}
${footer}`;
	return sendMessage(message);

}
