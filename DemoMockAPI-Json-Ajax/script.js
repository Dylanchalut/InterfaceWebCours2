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

//Façon jQuery
function afficherTout(){
    $('#aventuriers').text("");
    $.getJSON('https://656f2fab6529ec1c62378219.mockapi.io/chat')
        .done(function(chat){
            chat.forEach(function (chat){
                creerCarte(chat);
            });
        })
        .fail(function (error){
            $('.alert').text(error.status).removeClass('d-none');
        });
}

afficherTout();


function afficherDetails(id){
    $('#aventuriers').text("");
    $.getJSON('https://656f2fab6529ec1c62378219.mockapi.io/chat/'+id)
        .done(function(chat){
            creerCarte(chat);
        })
        .fail(function (error){
            $('.alert').text(error.status).removeClass('d-none');
        });
}


function supprimer(id){
    fetch('https://656f2fab6529ec1c62378219.mockapi.io/chat/'+id, {
        method: 'DELETE',
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        throw new Error ("Erreur"+res.status);
    }).then(chat => {
        // Do something with deleted task
        afficherTout()
    }).catch(error => {
        // handle error
        $('.alert').text(error.status).removeClass('d-none');
    })
}
