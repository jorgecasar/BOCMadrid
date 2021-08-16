import { updateStatus } from './utils/updateStatus.js';

export const tweetNewBulletin = ({ number, sectionsMap, total, summary }) => {
	const sectionList = Object.entries(sectionsMap).map(([key, value]) => `- ${key} (${value})`).join('\n');

	const message = `🔔 Ya disponible el Boletín nº ${number}, con ${total} anuncios:
${sectionList}

Ver sumario 👇
${summary}`;

	updateStatus(message);
}
