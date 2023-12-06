/*
Création d'un constructeur du personnage
Le personnage possède, à sa création
-un montant d'argent
- Un score d'attaque
- Un score de défense
 */
function PersonnageCreation(montant_argent = 0,score_attaque = 0,score_defense = 0){
    this.MontantArgent = montant_argent;
    this.ScoreAttaque = score_attaque;
    this.ScoreDefense = score_defense;
}


const statistique = new PersonnageCreation(600,6,3)
MisAJour()
function MisAJour(){

    $("#argent").text(statistique.MontantArgent);
    $("#attaque").text(statistique.ScoreAttaque);
    $("#defense").text(statistique.ScoreDefense);
}

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

//Appel Asynchrones
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
            CreationSelectOption(item)
        });
        /*
        obj.items.forEach(function(object){
            CreationSelectOption(object)
        });*/
    })
    .catch(function(error){
        $('.alert').text(error.message);
    });


// Fonction qui gère l'achat d'un objet
function AchatItemModifiez(e){
    e.preventDefault(); // Annule le comportement par défaut du formulaire

    fetch('items.json')
        .then(function(reponse){
            if(!reponse.ok){
                throw new Error ("Erreur"+reponse.status)
            }
            return reponse.json()
        })
        .then(function(obj){
            obj.items.forEach(function(objet){
                if ($("#achat option:selected").text() === objet.nom)
                    if (statistique.MontantArgent >= objet.prix.replace("$", "")){
                        statistique.MontantArgent -= objet.prix.replace("$", "");
                        statistique.ScoreAttaque += objet.attaque;
                        statistique.ScoreDefense += objet.defense;
                        // Mettre à jour les propriétés du personnage dans la page HTML
                        MisAJour()
                        $("#erreur").addClass('invisible');
                    } else{
                        $("#erreur").removeClass('invisible');
                    }
            })
        })
}

$("form").on("submit", AchatItemModifiez)


/*
 acheterItem(item) {
    if (this.argent >= item.prix) {
      this.argent -= item.prix;
      this.attack += item.attack;
      this.defense += item.defense;
      // Mettre à jour les propriétés du personnage dans la page HTML
      document.getElementById("argent").textContent = this.argent;
      document.getElementById("attack").textContent = this.attack;
      document.getElementById("defense").textContent = this.defense;
    } else {
      alert("Vous n'avez pas assez d'argent pour acheter cet item !");
    }
 }
}
// Définir un objet Item avec les statistiques de l'item
class Item {
 constructor(nom, prix, attack, defense) {
    this.nom = nom;
    this.prix = prix;
    this.attack = attack;
    this.defense = defense;
 }
}

// Définir un objet Personnage avec les propriétés du personnage
class Personnage {
 constructor(nom, argent, attack, defense) {
    this.nom = nom;
    this.argent = argent;
    this.attack = attack;
    this.defense = defense;
 }

 // Méthode pour acheter un item
 acheterItem(item) {
    if (this.argent >= item.prix) {
      this.argent -= item.prix;
      this.attack += item.attack;
      this.defense += item.defense;
      // Mettre à jour les propriétés du personnage dans la page HTML
      document.getElementById("argent").textContent = this.argent;
      document.getElementById("attack").textContent = this.attack;
      document.getElementById("defense").textContent = this.defense;
    } else {
      alert("Vous n'avez pas assez d'argent pour acheter cet item !");
    }
 }
}

// Exemple d'utilisation
let item1 = new Item("Epée en acier", 100, 5, 3);
let personnage1 = new Personnage("Jean", 500, 10, 10);
personnage1.acheterItem(item1);

 */