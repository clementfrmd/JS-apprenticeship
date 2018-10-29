/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
console.log(solution)


var nombre;// = Number(prompt("Entrez un nombre entre 1 et 100 :"));

var essais = 1,
    found = false;
var reste = 5;

while (essais <= 6) {
    nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));
    if (nombre == solution) {
        found = true;
        break;
    }

    if (nombre < solution) {
        alert(nombre + " est trop petit. Il reste " + reste + " essai(s)");
    } else {
        alert(nombre + " est trop grand. Il reste " + reste + " essai(s)");
    }  
    essais++;
    reste--;
}
if (!found) {
    alert("Perdu... La solution était : " + solution);
} else {
    alert("Bravo ! La solution est " + solution + "\n Vous avez trouvé en " + essais + " essai(s)");
}

