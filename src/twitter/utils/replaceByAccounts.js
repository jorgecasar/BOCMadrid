// Ayuntamientos
export const councils = {
	"Algete": "@AytoDeAlgete",
	"Becerril de la Sierra": "@BecerrilSierra",
	"Cercedilla": "@AytoCercedilla",
	"Collado Villalba": "@AyuntamientoCV",
	"El Molar": "@AytoElMolar",
	"Fresno de Torote": "@FresnoDeTorote",
	"Galapagar": "AytoGalapagar",
	"Guadarrama": "@Ayto_Guadarrama",
	"Las Rozas de Madrid": "@Ayto_Las_Rozas",
	"Parla": "@AytoParla",
	"Villaviciosa de Odón": "@AytoVillaDeOdon",
	"Leganés": "@AytoLeganes",
	"Madrid": "@Madrid",
};

// Consejerías
export const counseling = {
	"Consejería de Economía, Hacienda y Empleo": "@HaciendaCMadrid",
	// "Economía y Empleo Comunidad de Madrid": "@EmpleoCMadrid",
	"Consejería de Medio Ambiente, Vivienda y Agricultura": "@MedioAmbienteCM",
	"Consejería de Administración Local y Digitalización": "@AdmonLocalCM",
	"Consejería de Familia, Juventud y Política Social": "@FamiliaCMadrid",
	"Consejería de Educación, Universidades, Ciencia y Portavocía": "@EducaCMadrid",
	"Consejería de Cultura, Turismo y Deporte": "@CulturaCMadrid",
	"Consejería de Sanidad": "@SaludMadrid",
};

// Organismos
export const organizations = {
	'HOSPITAL UNIVERSITARIO “12 DE OCTUBRE”': "@Hospital12deOct",
	'HOSPITAL UNIVERSITARIO “LA PAZ”': "@HospitalULaPaz",
	"METRO DE MADRID, S. A.": "@metro_madrid",
};

export const accounts = {
	"Comunidad de Madrid": "@ComunidadMadrid",
	...councils,
	...counseling,
	...organizations,

	// Otras
	// "Asamblea de Madrid": "@asambleamadrid",
	// "Mujer Comunidad de Madrid": "@MujerCMadrid",
	// "Delegación del Gobierno en Madrid": "@DGobiernoMadrid",
	// "Discapacidad Comunidad de Madrid": "@DiscapacidadCM",
	// "Juventud Comunidad de Madrid": "@juventudcmadrid",
	// "Bibliotecas Comunidad de Madrid": "@LibrosCMadrid",
	// "Dirección General de Vivienda": "@viviendaCMadrid",
	// "112 Comunidad Madrid":	"@112cmadrid",
}

export const accountNamesRegexp = new RegExp(Object.keys(accounts).join("|"), 'i');
export const councilFullNames = new RegExp(`(?:(?:(?:el|del)\\s+)?(?:Ayuntamiento de)\\s+)?(${Object.keys(councils).join("|")})`, 'gi');
export const replaceByAccounts = str => str.replace(accountNamesRegexp, match => accounts[match]);
export const replaceFullNameCouncilByAccount = str => str.replace(councilFullNames, (match, $1) => councils[$1]);
