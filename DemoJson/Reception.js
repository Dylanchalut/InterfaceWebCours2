const pokemon = JSON.parse(sessionStorage.getItem("pokemon"));

$("#nom").text(pokemon.nom);
$("#pts_vie").text(pokemon.pts_vie);

sessionStorage.clear();