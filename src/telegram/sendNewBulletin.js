import { sendMessage } from './utils/sendMessage.js';

export const sendNewBulletin = ({
	number, sectionsMap, total, summary
}) => {
	const sectionList = Object.entries(sectionsMap).map(([key, value]) => `\\- ${key} \\(${value}\\)`).join('\n');

	const message = `🔔 Ya disponible el *Boletín nº ${number}*, con ${total} anuncios:
${sectionList}
[Ver sumario 👇](${summary})`;

	return sendMessage(message);

}
