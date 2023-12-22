$(document).ready(function () {
    $.ajax({
        url: "https://mockapi.com/api/v1/objects",
        type: "GET",
        dataType: "json",
        success: function (data) {
            $.each(data, function (key, value) {
                $("#objets").append(`
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${value.image}" class="card-img-top" alt="${value.nom}">
                            <div class="card-body">
                                <h5 class="card-title">${value.nom}</h5>
                                <p class="card-text">${value.description}</p>
                            </div>
                        </div>
                    </div>
                `);
            });
        },
        error: function (error) {
            console.log("Erreur lors de la récupération des objets: ", error);
        },
    });
});