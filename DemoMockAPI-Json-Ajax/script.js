function creerCarte(chat) {
    $("#aventuriers").append(`
        <li class="card col-3 m-2">
            <div class="card-body">
                <h2 class="card-title h5">${chat.nom}</h2>
                    <div class="card-text">
                        <p>Age : ${chat.age}</p>
                        <p>ID : ${chat.id}</p>
                        <input type="button" onclick="afficherDetails(${chat.id})" class="btn btn-primary" value="Voir détails" >
                        <input type="button" onclick="supprimer(${chat.id})" class="btn btn-primary" value="Supprimer">
                    </div>
            </div>
        </li>`);
}