const panier = {
    pommes : 2,
    poires : 0,
    prunes : 0
}

// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;

/**
 * Le panier d'achats comporte trois propriétés :
 * pommes, poires, prunes.
 * Chaque propriété représente un type de fruits et est un objet.
 * Pour chaque type de fruits on stocke son prix, son poids et sa quantité.
 *
 * @param nbPommes le nombre de pommes dans
 * le panier à la construction du panier (entier)
 * @param nbPoires le nombre de poires dans
 * le panier à la construction du panier (entier)
 * @param nbPrunes le nombre de prunes dans
 * le panier à la construction du panier (entier)
 */
function Panier(nbPommes, nbPoires, nbPrunes){
    this.pommes = new Sacsfruits('pommes', 13.50, 10, nbPommes);
    this.poires = new Sacsfruits('poires', 20, 12, nbPoires);
    this.prunes = new Sacsfruits('prunes', 22, 15, nbPrunes);
}


/**
 * Le sac de fruits représente un sac d'une sorte de fruits donné
 * Il est responsable de retourner  toutes les
 * infroamtion à propes des saces de fruits de ce type
 *
 * @param type le type de fruits sous forme d'une chaine de charactère (ex.Pomme)
 * @param prix le prix pour un saces de ce type de fruits (float)
 * @param poids le poids d'un sac de ce type de fruits (lbs)
 * @param qte la quantité acheté de sacs de ce type
 * @constructeur
 */
function Sacsfruits(type = 'fruits', prix = 0, poids = 0, qte = 0){
    this.type = type;
    this.prix = prix;
    this.poids = poids;
    this.qte = qte;
}

const panier = new Panier(0,0,0);
const fruits = ["pommes", "poires", "prunes"];

/**
 * Fonction qui retourne la propriété d'un fruits
 * passé en para. Par exemple si 'pommes' et 'prix' sont passés
 * en param, la fonction  retournera le coût total des saces de pommes achetés.
 *
 * @param fruit le fruit ( en chaine de charactère) pour lequel on veut
 * connaitre la propriété passée en param
 *
 * @param propriete la propriété qu'on veut connaitre ( en chaine de charactère) : qte, prix ou poids
 * @returns {number} le total pour la propriété du fruit passé en param
 */
function getTotalFruit(fruit, propriete = "qte"){
    return propriete === "qte" ? panier[fruit]["qte"]:
        (panier[fruit][propriete] * panier[fruit]["qte"])
}