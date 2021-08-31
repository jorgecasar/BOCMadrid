const SMALL_WORDS = /\b(?:o|y|e|de|del|lo|el|la|lo)\b/gi;
const ROMAN_NUMERALS = /\b(?=[ivxlcdm]+\b)(m{0,4}(?:cm|cd|d?c{0,3})(?:xc|xl|l?x{0,3})(?:ix|iv|v?i{0,3}))\b/gi;


const capitalize = str => {
	if (str.length) {
		if(!SMALL_WORDS.test(str)) {
			if(ROMAN_NUMERALS.test(str)) {
				return str.toUpperCase();
			}
			return str[0].toUpperCase() + str.slice(1).toLowerCase()
		}
		return str.toLowerCase();
	}
  return '';
};

const escape = str => str.replace(/./g, c => `\\${c}`);

export const titleCase = (sentence = '', seps = ' _-/') => {
  const wordPattern = new RegExp(`[^${escape(seps)}]+`, 'g');
  return sentence.replace(wordPattern, capitalize).replace(/\s{2,}/g, ' ');
};
