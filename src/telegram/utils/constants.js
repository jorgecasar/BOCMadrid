import dotenv from 'dotenv';
dotenv.config();

export const token = process.env.TELEGRAM_BOT_TOKEN;
export const baseUrl = 'https://api.telegram.org/bot';
export const chatId = process.env.TELEGRAM_CHAT_ID;
export const parseMode = 'MarkdownV2';

export const apiUrl = `${baseUrl}${token}`;

export const headers = {
	'Content-Type': 'application/json'
};
