/**
 * Représente un pokemon
 * @param nom nom du nouveaux pokemon ou vide sinon
 * @param pts_vie 2 par défault, c'est point de vie du pokemon
 * @constructor
 */
function Pokemon(nom="", pts_vie=2){
    this.nom = nom;
    this.pts_vie = pts_vie;
}

/**
 * 1-interrompre la soummission
 * 2- construire objet
 * 3-envoyer objet dans sessionstorage
 * 4-porsuivre l'envoi
 */
$("form").on("submit", function(event){

    const pokemon = new Pokemon($("#pokemon").val(), $("#pts_vie").val());
    sessionStorage.setItem("pokemon", JSON.stringify(pokemon))
})