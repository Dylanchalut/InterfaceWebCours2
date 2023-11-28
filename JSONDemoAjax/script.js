/*const aventuriersLocal = [
    {
        "id": "1",
        "nom": "Oral Schmeler IV",
        "couleur": "#6c6b67",
        "avatar" : "https://picsum.photos/id/76/200"
    },
    {
        "id": "2",
        "nom": "Tad McLaughlin",
        "couleur": "#5d5c62",
        "avatar" : "https://picsum.photos/id/65/200"
    },
    {
        "id": "3",
        "nom": "Matteo Wunsch",
        "couleur": "#454f41",
        "avatar" : "https://picsum.photos/id/64/200"
    },
    {
        "id": "4",
        "nom": "Jack Beahan MD",
        "couleur": "#386b1f",
        "avatar" : "https://picsum.photos/id/22/200"
    }
];
*/
function creerCarte(aventurier) {
    $("#aventuriers").append(`
        <li class="card col-3 m-2">
            <img class="card-img-top" src="${aventurier.avatar}" alt="Avatar de ${aventurier.nom}">
            <div class="card-body">
                <h2 class="card-title">${aventurier.nom}</h2>
                    <div class="card-text">
                        <label for="heroes-${aventurier.id}">Ma couleur préférée</label>
                        <input type="color" value="${aventurier.couleur}" id="heroes-${aventurier.id}" disabled>
                    </div>
                <a href="#" class="btn btn-primary">Voir détails</a>
            </div>
        </li>`);
}

/*
aventuriersLocal.forEach(function(aventurier){
    creerCarte(aventurier);
});

 */

/*
$.getJSON('aventuriers_locals.json')
    .done(function(aventuriers){
        aventuriers.forEach(function (aventurier){
            creerCarte(aventurier);
        });
    })
    .fail(function (error){
        $('.alert').text(error.status).removeClass('d-none');
    });

 */

fetch('aventuriers_locals.json')
    .then(function(reponse){
        if(!reponse.ok){
            throw new Error ("Erreur"+reponse.status);
        }
        return reponse.json();
    })
    .then(function(aventuriers){
        aventuriers.forEach(function (aventurier) {
            creerCarte(aventurier);
        });
    })
    .catch(function (error){
        $('.alert').text(error.message).removeClass('d-none');
    });

