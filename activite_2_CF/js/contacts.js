/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

/*
Activité : gestion des contacts
*/
 
var Contact = {
    // initialise les attributs du contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    // Renvoie la description du contact
    decrire: function () {
        return "Nom : " + this.nom + ", prénom : " + this.prenom;
    }
};
 
var carole = Object.create(Contact);
carole.init("Lévisse", "Carole");
var melodie = Object.create(Contact);
melodie.init("Nelsonne", "Mélodie");
 
var contacts = [];
contacts.push(carole);
contacts.push(melodie);
 
console.log("Bienvenue dans le gestionnaire des contacts !");
var choix;
while (choix !== "0") {
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    var choix = prompt("Choisissez une option :");
 
    switch (choix) {
    case "1":
        console.log("Voici la liste de tous vos contacts :");
        // Avec une boucle for
        for (var i = 0; i < contacts.length; i++) {
            console.log(contacts[i].decrire());
        }
        // Avec une boucle foreach
        /*contacts.forEach(function (contact) {
            console.log(contact.decrire());
        });*/
        break;
    case "2":
        var nom = prompt("Entrez le nom du nouveau contact :");
        var prenom = prompt("Entrez le prénom du nouveau contact :");
        var contact = Object.create(Contact);
        contact.init(nom, prenom);
        contacts.push(contact);
        console.log("Le nouveau contact a été ajouté");
        break;
    }
    console.log(); // Passe une ligne
}
console.log("Au revoir !");
    
