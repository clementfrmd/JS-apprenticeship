/*
Activité 2
*/
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");

// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});

// Création d'un conteneur div pour la confirmation d'ajout du nouveau lien
var cntConfirm = document.createElement("div");
cntConfirm.id = "cntConfirm";
cntConfirm.style.marginBottom = "20px";
document.body.insertBefore(cntConfirm, contenu);

// Création d'un conteneur div pour le formulaire
var cntForm = document.createElement("div");
cntForm.id = "cntForm";
cntForm.style.marginBottom = "25px";
document.body.insertBefore(cntForm, contenu);

// Création du bouton "Ajouter un lien"
var buttonElt = document.createElement("button");
buttonElt.textContent = "Ajouter un lien";

// Positionnement du bouton "Ajouter un lien"
document.getElementById("cntForm").appendChild(buttonElt);

// Ajout d'événement au click sur le bouton "Ajouter un lien"
buttonElt.addEventListener("click", function (e) {
    buttonElt.style.display = "none";

    // Création du formulaire
    var form = document.createElement("form");

    // Création des éléments du formulaire
    var inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("type", "text");
    inputAuthor.id = "auteur";
    inputAuthor.setAttribute("name", "auteur");
    inputAuthor.setAttribute("required", "required");
    inputAuthor.setAttribute("placeholder", "Entrez votre nom");
    inputAuthor.style.marginRight = "10px";

    var inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.id = "titre";
    inputTitle.setAttribute("name", "titre");
    inputTitle.setAttribute("required", "required");
    inputTitle.setAttribute("placeholder", "Entrez le titre du lien");
    inputTitle.style.width = "20%";
    inputTitle.style.marginRight = "10px";

    var inputLink = document.createElement("input");
    inputLink.setAttribute("type", "url");
    inputLink.id = "url";
    inputLink.setAttribute("name", "url");
    inputLink.setAttribute("required", "required");
    inputLink.setAttribute("placeholder", "Entrez l'URL du lien");
    inputLink.style.width = "29%";
    inputLink.style.marginRight = "10px";

    // Création du bouton "Submit"
    var inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type", "submit");
    inputSubmit.value = "Ajouter";

    // Insertion des éléments
    form.appendChild(inputAuthor);
    form.appendChild(inputTitle);
    form.appendChild(inputLink);
    form.appendChild(inputSubmit);

    // Insertion du formulaire
    document.getElementById("cntForm").appendChild(form);

    // Ajout d'événement "Submit" au clic sur le bouton "Ajouter"
    form.addEventListener("submit", function (e) {

        var newLink = Object.create(listeLiens);
        newLink.titre = form.elements.titre.value;
        newLink.url = form.elements.url.value;
        newLink.auteur = form.elements.auteur.value;

        var addNewLink = creerElementLien(newLink);

        // Insertion du nouveau lien
        var lien = document.getElementsByClassName("lien");
        for (var i = 0; i < lien.length; i++) {
            document.getElementById("contenu").insertBefore(addNewLink, lien[0]);
        }

        form.style.display = "none";
        buttonElt.style.display = "inline";

        // Création du message de confirmation d'ajout du nouveau lien
        var msgConfirm = document.createElement("p");
        msgConfirm.textContent = 'Le lien ' + '"' + newLink.titre + '"' + ' a bien été ajouté !';
        msgConfirm.style.color = "#428bca";
        msgConfirm.style.backgroundColor = "#d7ecf6";
        msgConfirm.style.padding = "25px";
        msgConfirm.style.border = "1px solid #428bca";
        msgConfirm.style.borderRadius = "5px";
        document.getElementById("cntConfirm").appendChild(msgConfirm);

        // Suppression du message de confirmation au bout de 2s
        setTimeout(function () {
            cntConfirm.removeChild(msgConfirm);
        }, 2000);

        e.preventDefault();
    });
});
