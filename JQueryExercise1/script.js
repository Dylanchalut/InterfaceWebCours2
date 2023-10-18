let aleatoire = Math.ceil(Math.random()*100); //le nombre à deviner

let tentative = 10

// exemple ajout pour le nombre et resultat pour essaie $(tr).append("<td>" + item.Id + "</td>");
// $(tr).append("<td>" + item.Name + "</td>"
//$("#ajouter").click(function(){
//     $("#liste").css("border-top", "black solid 1px");
//     $("#liste").append("<p>" + $("#desc").val() + "</p>");
//     $("#liste p").last().append("<span>" + $("#valeur").val() + "</span>");
// });
function Validation(){
    let Choix = $("#essai").val();

    if (parseInt(Choix) === aleatoire){
        $("tbody").append("<td>" + Choix + "</td>");
        $("tbody").append("<td>" + "Réussi" + "</td>");

    }

}




$("#soumettre").click(Validation);