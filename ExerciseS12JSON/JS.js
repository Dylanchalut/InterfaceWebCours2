/*
Création d'un constructeur du personnage
Le personnage possède, à sa création
-un montant d'argent
- Un score d'attaque
- Un score de défense
 */
function PersonnageCreation(montant_argent,score_attaque,score_defense){
    this.MontantArgent = montant_argent;
    this.ScoreAttaque = score_attaque;
    this.ScoreDefense = score_defense;
}

$(document).ready(function(){
    const statistique = new PersonnageCreation(
        $("#argent").text(600),
        $("#attaque").text(6),
        $("#defense").text(3)
    )
});

/*
Fonction qui au chargement de la page
charge la liste des items disponible
dans le fichier items.json : ce sont les
items qui seront disponible à l'achat
 */
function CreationTableau(item){
    $("#ListeEquipements").append(`
    <tr>
        <th>${item.nom}</th>
        <td>${item.defense}</td>
        <td>${item.attaque}</td>
        <td>${item.prix}</td>
    </tr>`);
}

function CreationSelectOption(object){
    $("#achat").append(`
    <option value="${object.id}">${object.nom}</option>
    `);
}

fetch('items.json')
    .then(function(reponse){
        if(!reponse.ok){
            throw new Error ("Erreur"+reponse.status)
        }
        return reponse.json()
    })
    .then(function(obj){
        obj.items.forEach(function(item){
            CreationTableau(item);
        });
        obj.items.forEach(function(object){
            CreationSelectOption(object)
        });
    })
    .catch(function(error){
        $('.alert').text(error.message);
    });