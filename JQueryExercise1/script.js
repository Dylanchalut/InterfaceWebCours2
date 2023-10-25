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
        $("tbody").append("<tr><td>" + Choix + "</td><td>" + "Réussi" + "</td></tr>");
        //$("tbody").append("<td>" + "Réussi" + "</td>");
        $("#T").text("tentative réussi bravo!")
        for (Choix; Choix <= 100; Choix++){
            $("#" + Choix).remove();
        }
        for (Choix; Choix > 0; Choix--){
            $("#" + Choix).remove();
        }


    }
    else {
        tentative--
        if (tentative === 0) {
            $("#T").text("Plus aucune tentatives" + tentative)
        } else {
            $("#T").text("Tentatives restante : " + tentative)
        }
    }

    if (parseInt(Choix) > aleatoire){
        $("tbody").append("<tr><td>" + Choix + "</td><td>" + "Trop haut" + "</td></tr>");
        //$("tbody").append("<td>" + "Trop haut" + "</td>");

        for (Choix; Choix <= 100; Choix++){
            $("#" + Choix).remove();
        }
    }

    else if (parseInt(Choix) < aleatoire){
        $("tbody").append("<tr><td>" + Choix + "</td><td>" + "Trop bas" + "</td></tr>");
        //$("tbody").append("<td>" + "Trop bas" + "</td>");

        for (Choix; Choix >= 0; Choix--){
            $("#" + Choix).remove();
        }
    }

    $("#essai").val("");
}


$("#soumettre").click(Validation);
