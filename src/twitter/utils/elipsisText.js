export const elipsisText = (text, maxLength) => {
	const elipsis = '…';
	text = text.substr(0, maxLength - elipsis.length);
	text = text.substr(0, Math.min(text.length, text.lastIndexOf(" "))) + elipsis;
	return text;
};
