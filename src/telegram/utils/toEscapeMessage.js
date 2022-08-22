export const toEscapeMessage = (message) => message
	.replace(/\./gm, "\\.")
	.replace(/\+/gm, "\\+")
	.replace(/\-/gm, "\\-")
	.replace(/\(/gm, "\\(")
	.replace(/\)/gm, "\\)");
