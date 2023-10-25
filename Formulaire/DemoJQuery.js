/*
let formulaire = document.getElementById("form")
formulaire.setAttribute("style", "background-color:yellow")

let titre = document.getElementsByTagName("h1")[0]
titre.innerHTML = "Yo Wassssup!<em>Formulaires JavaScript!</em>"
//Créer un element input pour le bouton, appendChild ajoute automatiqument aux dernier place
let bouton = document.createElement("input")
bouton.setAttribute("type", "reset")
formulaire.appendChild(bouton);

//fonction copier
function copier()
{
    let nom = document.getElementById("nom").value
    let p = document.createElement("p")
    p.innerText = nom
    formulaire.appendChild(p)
}
 */

//$("form").css("background-color", "yellow");

//$("h1").first().text("Formulaire JQueryExercise1");

//$("form").append("<input type='reset'>");

$("#copier").click(function(){
    $("form").append("<p>" + $("#nom").val() + "</p>");
});

