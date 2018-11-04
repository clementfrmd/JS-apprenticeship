/*
Création liste de courses
*/

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});

document.querySelector("button").addEventListener("click", function () {
    var nomProduit = prompt("Entrez un nouveau produit :\n(pour modifier un produit, cliquer simplement dessus)");

    var produitElt = document.createElement("li");
    produitElt.textContent = nomProduit;
    produitElt.addEventListener("click", function (e) {
        var nouveauNom = prompt("Modifiez le nom du produit :", e.target.textContent);
        e.target.textContent = nouveauNom;
    });

    document.getElementById("produit").appendChild(produitElt);
});
