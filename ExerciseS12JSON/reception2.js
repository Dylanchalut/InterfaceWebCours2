const items = JSON.parse(sessionStorage.getItem('achat'));
console.log(items);

for (const item of items) {

    $("#aventuriers").append(`<tr>
         <td id="nomval">${item.nom}</td>
         <td id="deffval">${item.defense}</td>
         <td id="attaqueval">${item.attaque}</td>
         <td id="prix">${item.prix}</td>
       </tr>`);
}