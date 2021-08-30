// Ayuntamientos
export const councils = {
	"Alcobendas": "@ALCBDS_Ayto",
	"Alcorcón": "@AytoAlcorcon",
	"Algete": "@AytoDeAlgete",
	"Arganda del Rey": "@Arganda_Ayto",
	"Becerril de la Sierra": "@BecerrilSierra",
	"Boadilla del Monte": "@Ayto_Boadilla",
	"Buitrago del Lozoya": "@AytoBuitrago",
	"Brunete": "@AytoBrunete",
	"Cercedilla": "@AytoCercedilla",
	"Collado Villalba": "@AyuntamientoCV",
	"Colmenarejo": "@ColmenarejoAyto",
	"El Molar": "@AytoElMolar",
	"Fresno de Torote": "@FresnoDeTorote",
	"Fuenlabrada": "@AytoFuenlabrada",
	"Galapagar": "@AytoGalapagar",
	"Gargantilla del Lozoya y Pinilla de Buitrago": "#GargantillaDelLozoya y #PinillaDeBuitrago", //No twitter account
	"Getafe": "@AytoGetafe",
	"Guadarrama": "@Ayto_Guadarrama",
	"Horcajo de la Sierra-Aoslos": "@HorcajoAoslos",
	"Hoyo de Manzanares": "@Ayto_Hoyo",
	"La Acebeda": "#LaAcebeda", //No twitter account
	"Las Rozas de Madrid": "@Ayto_Las_Rozas",
	"Leganés": "@AytoLeganes",
	"Loeches": "@AytoDeLoeches",
	"Madrid": "@Madrid",
	"Meco": "@AytoMeco",
	"Morata de Tajuña": "@Ayto_Morata",
	"Navacerrada": "@AytoNavacerrada",
	"Navas del Rey": "#NavasDelRey", //No twitter account
	"Olmeda de las Fuentes": "#OlmedaDeLasFuentes", //No twitter account
	"Pozuelo de Alarcón": "@Ayto_Pozuelo",
	"Parla": "@AytoParla",
	"Quijorna": "#Quijorna", //No twitter account
	"San Agustín del Guadalix": "@AytoSanAgustin",
	"Santorcaz": "#Santorcaz", //No twitter account
	"Torrelodones": "@Ayto_Torre",
	"Tres Cantos": "@Ayto3Cantos",
	"Valdeolmos-Alalpardo": "@Alalpardo_Ayto",
	"Villamanrique de Tajo": "#VillamanriqueDeTajo", //No twitter account
	"Villamantilla": "#Villamantilla", //No twitter account
	"Villanueva de Perales": "#VillanuevaDePerales", //No twitter account
	"Villaviciosa de Odón": "@AytoVillaDeOdon",
};

// Consejerías
export const counseling = {
	"Consejería de Economía, Hacienda y Empleo": "@HaciendaCMadrid",
	// "Economía y Empleo Comunidad de Madrid": "@EmpleoCMadrid",
	"Consejería de Educación y Juventud": "@JuventudCMadrid",
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
	// "Asamblea de Madrid": "@AsambleaMadrid",
	// "Mujer Comunidad de Madrid": "@MujerCMadrid",
	// "Delegación del Gobierno en Madrid": "@DGobiernoMadrid",
	// "Discapacidad Comunidad de Madrid": "@DiscapacidadCM",
	// "Bibliotecas Comunidad de Madrid": "@LibrosCMadrid",
	// "Dirección General de Vivienda": "@ViviendaCMadrid",
	// "112 Comunidad Madrid":	"@112CMadrid",
}

export const accountNamesRegexp = new RegExp(`\b(${Object.keys(accounts).join("|")})\b`, 'gi');
export const councilFullNames = new RegExp(`(?:(?:(?:el|del)\\s+)?(?:Ayuntamiento de)\\s+)(${Object.keys(councils).join("|")})`, 'gi');
export const replaceByAccounts = str => str.replace(accountNamesRegexp, match => accounts[match]);
export const replaceFullNameCouncilByAccount = str => str.replace(councilFullNames, (match, $1) => councils[$1]);
