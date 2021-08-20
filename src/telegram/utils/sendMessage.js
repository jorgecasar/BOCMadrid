import { request } from './request.js';
import { chatId, parseMode } from './constants.js';
import { toEscapeMessage } from './toEscapeMessage.js';

export const sendMessage = async message => request('sendMessage', {
	chat_id: chatId,
	text: message,
	parse_mode: parseMode
});
