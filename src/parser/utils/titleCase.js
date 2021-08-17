const SMALL_WORDS = /\b(?:o|y|e|de|lo|el|la|lo)\b/i;

const capitalize = str => {
	if (str.length) {
		if(!SMALL_WORDS.test(str)) {
			return str[0].toUpperCase() + str.slice(1).toLowerCase()
		}
		return str.toLowerCase();
	}
  return '';
};

const escape = str => str.replace(/./g, c => `\\${c}`);

export const titleCase = (sentence = '', seps = ' _-/') => {
  const wordPattern = new RegExp(`[^${escape(seps)}]+`, 'g');
  return sentence.replace(wordPattern, capitalize);
};
