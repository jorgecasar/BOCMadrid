export const acronyms = {
	"BOLETÍN OFICIAL DE LA COMUNIDAD DE MADRID": "BOCM",
}

export const acronymsRegexp = new RegExp(Object.keys(acronyms).join("|"), 'i');
export const replaceByAcronym = str => str.replace(acronymsRegexp, match => acronyms[match]);
