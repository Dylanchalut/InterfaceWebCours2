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

function creerFormulaire(chat) {
    $("#aventuriers").append(`
        <li class="card col-3 m-2">
            <div class="card-body">
                <h2 class="card-title h5">${chat.id}</h2>
                    <div class="card-text">
                        <form onsubmit="modifier(${chat.id})">
                            <div class="mb-3">
                                <label for="nom-mod" class="form-label">Nom</label>
                                <input type="text" class="form-control" id="nom-mod" value="${chat.nom}" required>
                            </div>
                            <div class="mb-3">
                                <label for="age-mod" class="form-label">Age</label>
                                <input type="number" class="form-control" id="age-mod" required min="0" value="${chat.age}">
                            </div>
                            <button type="submit" class="btn btn-primary">Modifier</button>
                        </form>
                        <input type="button" onclick="supprimer(${chat.id})" class="btn btn-primary" value="Supprimer">
                    <\div>
            <\div>
        <\li>`);
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
            creerFormulaire(chat)
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

function Chat(nom = "", age = 0){
    this.nom = nom;
    this.age = age;
}
function ajouter(){
    event.preventDefault();
    const chat = new Chat($('#nom').val(), $('#age').val())

    fetch('https://656f2fab6529ec1c62378219.mockapi.io/chat', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(chat)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        throw new Error ("Erreur"+res.status);
    }).then(chat => {
        // do something with the new task
        afficherTout()
    }).catch(error => {
        // handle error
        $('.alert').text(error.status).removeClass('d-none');
    })
}

function modifier(id){
    event.preventDefault();
    const chat = new Chat($('#nom-mod').val(), $('#age-mod').val())


    fetch('https://656f2fab6529ec1c62378219.mockapi.io/chat/'+ id, {
        method: 'PUT', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify(chat)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        throw new Error ("Erreur"+res.status);
    }).then(task => {
        // Do something with updated task
        afficherTout()
    }).catch(error => {
        // handle error
        $('.alert').text(error.status).removeClass('d-none');
    })
}