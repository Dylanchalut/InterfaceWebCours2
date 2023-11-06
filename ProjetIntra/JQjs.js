let ListeJoueurs = [];
let NomJ = $("#NomJoueur").val();
let CourrielJ = $("#CourrielJoueur").val();
let PaysJ = $("#PaysJoueur").val();
let AgeJ = $("#AgeJoueur").val();

/*
La fonction ici CreationJoueurs
prend 4 paramètre qui crée un nouveau joueurs et le return
 */
function CreationJoueurs(nom, courriel, pays, age) {
    return {
        nom,
        courriel,
        pays,
        age
    };
}

/*
Cette fonction est responsable d'afficher le joueur
dans la table Html
 */
function DispositionJ(player){
    $('#TableJoueur').append(`
                <tr>
                    <td>${player.nom}</td>
                    <td>${player.courriel}</td>
                    <td>${player.pays}</td>
                    <td>${player.age}</td>
                </tr>
            `);
}

/*
Cette fonction AjoutezJoueur récupère les valeurs
des champs saisie, valide que les champs soit remplis sinon
un message d'erreur va apparaitre et créer un nouveau joueur
à l'aide de la fonction CreationJoueurs() , le joueur est ajouté à la ListeJouers
, afficher dans le tableau html et efface les champs lors d'ajout compléter.
 */
function AjoutezJoueur() {

    if (!NomJ || !CourrielJ || !PaysJ || !AgeJ) {
        alert('Erreur! Veuillez remplir tous les champs');
        return;
    }

    let NouveauJoueur = new CreationJoueurs(NomJ, CourrielJ, PaysJ, AgeJ);
    ListeJoueurs.push(NouveauJoueur);
    DispositionJ(NouveauJoueur);

    //Réintilisation des champs
    $('#NomJoueur').val('');
    $('#CourrielJoueur').val('');
    $('#PaysJoueur').val('');
    $('#AgeJoueur').val('');
}


$("#AjoutezJ").click(AjoutezJoueur);



