export const hashtags = {
	"Ofertas de empleo": "#Empleo",
}

export const hashtagsRegexp = new RegExp(Object.keys(hashtags).join("|"), 'i');
export const replaceByHashtags = str => str.replace(hashtagsRegexp, match => hashtags[match]);
