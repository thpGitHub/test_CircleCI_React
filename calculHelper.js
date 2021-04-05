const calculAir = function(longeur, largeur) {
    return multiplication(longeur,largeur);
}
const calculAirCarre = function(longeur) {
    return multiplication(longeur, longeur);
}
const multiplication = function(a, b) {
    return a * b;
}

const afficheMessageCalculAir = (a, b) => {
    const air = calculAir(a, b);
    let libelle = `l'air de la surface est de ${air}`;
    if(isNaN(air)) {
        libelle = `l'air ne peut pas être calculée`;
    } 
    return libelle;
}

const isAdmin = (user) => {    
    if(user.role === "admin") {
        return true;
    } else {
        throw new Error('interdit');
    }
}

export {
    calculAir,
    calculAirCarre,
    multiplication,
    afficheMessageCalculAir,
    isAdmin
}
// export * from './calculHelper.js';