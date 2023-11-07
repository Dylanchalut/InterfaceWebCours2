/*
Cette fonction AjoutezJoueur récupère les valeurs
des champs saisie, valide que les champs soit remplis sinon
un message d'erreur va apparaitre , affiche dans le tableau html
 et efface les champs lors d'ajout compléter.
 */
function AjoutezJoueur() {

    let NomJ = $("#NomJoueur").val();
    let CourrielJ = $("#CourrielJoueur").val();
    let PaysJ = $("#PaysJoueur").val();
    let AgeJ = $("#AgeJoueur").val();
    let TypeJeux = $('input[name="RadioOption"]:checked').val();



    //Afficher un Erreur en alert si il y a un des champ vide
    if (!NomJ || !CourrielJ || !PaysJ || !AgeJ || !TypeJeux) {
        alert('Erreur! Veuillez remplir tous les champs');
        return;
    }

    //Vérifie si ses faux et affiche le message d'erreur
    if(!validateNom(NomJ)){
        $("#ErreurNom").text("Erreur! Le nom doit commencer par une majuscule");
        $('#NomJoueur').val('');
        return;
    }

    //Vérifie si ses faux et affiche le message d'erreur
    if(!validateCourriel(CourrielJ)){
        $("#ErreurCourriel").text("Le courriel est invalide");
        $('#CourrielJoueur').val('');
        return;
    }

    //Vérifie si ses faux et affiche le message d'erreur
    if(!validateAge(AgeJ)){
        $("#ErreurAge").text("L'âge est invalide");
        $('#AgeJoueur').val('');
        return;
    }
    /*Si aucune erreur ce produit reintialise les message d'erreur
    et ajoute les valeur des champs dans le tableau des joueurs qui jeux*/
    else{
    $("#ErreurNom").text("");
    $("#ErreurCourriel").text("");
    $("#ErreurAge").text("");
    $("#Reussi").text("L'ajout du joueur est soumis avec succès");
    $("#TableJoueur tbody").append(`
            <tr>
                <td>${NomJ}</td>
                <td>${CourrielJ}</td>
                <td>${PaysJ}</td>
                <td>${AgeJ}</td>
                <td>${TypeJeux}</td>
            </tr>
        `);
}

    /*vérifie si le champ radio type de jeux à cochez blackjack
    si oui, il ajoute le joueur dans le tableau blackjack*/
    if(TypeJeux === "Blackjack"){
        $("#TableBlackjack tbody").append(`
                <tr>
                    <td>${NomJ}</td>
                    <td>${PaysJ}</td>
                    <td>${AgeJ}</td>
                </tr>
            `);
    }

    /*vérifie si le champ radio type de jeux à cochez Roulette
    si oui, il ajoute le joueur dans le tableau Roulette*/
    if(TypeJeux === "Roulette"){
        $("#TableRoulette tbody").append(`
                <tr>
                    <td>${NomJ}</td>
                    <td>${PaysJ}</td>
                    <td>${AgeJ}</td>
                </tr>
            `);
    }

    /*vérifie si le champ radio type de jeux à cochez Machine à sous
    si oui, il ajoute le joueur dans le tableau Machine à sous*/
    if(TypeJeux === "Machine à sous"){
        $("#TableMachineSous tbody").append(`
                <tr>
                    <td>${NomJ}</td>
                    <td>${PaysJ}</td>
                    <td>${AgeJ}</td>
                </tr>
            `);
    }

    //reintialise les champ lors de l'ajout des joueurs
    ReintilisationChamps()
}

//Ajoute les joueurs avec le button ajouter en vérifiant la fonction AjoutezJoueur()
$("#AjoutezJ").click(AjoutezJoueur);



//reintialise les champ
function ReintilisationChamps(){
    $('#NomJoueur').val('');
    $('#CourrielJoueur').val('');
    $('#PaysJoueur').val('');
    $('#AgeJoueur').val('');
    $('input[name="RadioOption"]:checked').prop("checked", false);
}

/*fonction qui valide en Regex le nom du joueur
Commence par une lettre majuscule et doit avoir
une longueur entre 2 et 20*/
function validateNom(NomJ){
    return /^[A-Z]{1}[a-z]{2,19}$/.test(NomJ);
}

/*fonction qui valide en Regex le courriel du joueur
exemple : 123@gmail.com*/
function validateCourriel(CourrielJ){
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,3}$/.test(CourrielJ);
}

/*fonction qui valide en Regex l'age du joueur
qui doit être numerique et entre 18 et 120 ans*/
function validateAge(AgeJ){
    return /^\d+$/.test(AgeJ) && AgeJ >= 18 && AgeJ <= 120;
}
