async function getAssessments(countryCode, token) {
    const API_URL_IUCN = `https://api.iucnredlist.org/api/v4/countries/${countryCode}`;
    if (!countryCode) {
        return {error : "Code de pays manquant."};
    }
    if (countryCode.length !== 2 || !/^[A-Z]+$/.test(countryCode)) {
        return {error : "Code de pays invalide."};
    }
    try {
        const response = await fetch(API_URL_IUCN, {
            headers: { 'Authorization': ` ${token}` }
        });
        const data = await response.json();
        return data;
    } catch(error){
        console.error("Erreur:", error);
        return "Erreur lors de la récupération des données.";
    }
};

module.exports = getAssessments;