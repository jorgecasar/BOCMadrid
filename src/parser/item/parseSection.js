
const sectionsMap = {
	"Sección: I. COMUNIDAD DE MADRID": "Comunidad de Madrid",
	"Sección: II. DISPOSICIONES Y ANUNCIOS DEL ESTADO": "Disposiciones y Anuncios del Estado",
	"Sección: III. ADMINISTRACIÓN LOCAL AYUNTAMIENTOS": "Administración Local",
	"Sección: IV. ADMINISTRACIÓN DE JUSTICIA": "Administración de Justicia",
	"Sección: V. OTROS ANUNCIOS": "Otros Anuncios"
}

export const parseSection = (str = '') => {
	const section = str.trim();
	return sectionsMap[section] || section;
}
