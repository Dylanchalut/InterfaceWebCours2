/*
let liste = document.getElementById("liste")
let totals = document.getElementById("totals")
let total = 81
function Ajouter()
{
    let desc = document.getElementById("desc").value
    let values = document.getElementById("valeur").value
    let p = document.createElement("p")
    p.setAttribute("style", "border-top: black solid 1px")
    let v = document.createElement("span")
    p.innerText = desc
    v.innerText = values + "$"
    liste.appendChild(p).appendChild(v)
    total += parseFloat(values);
    totals.textContent = 'Total : ' + total + '$';

}
 */

/*
$("form").css("background-color", "yellow");

$("h1").first().text("Formulaire JQuery");

$("form").append("<input type='reset'>");

$("#copier").click(function(){
    $("form").append("<p>" + $("#nom").val() + "</p>");
});
 */

$("#ajouter").click(function(){
    $("#liste").css("border-top", "black solid 1px");
    $("#liste").append("<p>" + $("#desc").val() + "</p>");
    $("#liste p").last().append("<span>" + $("#valeur").val() + "</span>");
});