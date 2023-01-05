// Partie 1

/* creation des variable */

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence = ["wakanda forever", "is", "the best"];
/**
Correcteur: Yannick GOUGUIA

Merci de bien formater ton code.

la variable myWatchedSeriesSentence est un tableau pour un meilleur affichage il faut le convertir en string en utilisant la methode toString
*/

console.log("I watched", myWatchedSeriesLength, "series", ":", myWatchedSeriesSentence);

// Partie 2

/* remplacement de "the big bang theory" par "friends" */


myWatchedSeries.splice(2,1,"friends");
console.log(myWatchedSeries);

/* Ajout du nom d'une autre serie */

myWatchedSeries.push("IMA");
console.log(myWatchedSeries);

/* Ajouter au début le nom de la serie préferé */

myWatchedSeries.unshift("wakanda forever");
console.log(myWatchedSeries);

/* suppression de la serie black mirror */

myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

/* retourner la troisième lettre de "money heist" */

/**
Correcteur: Yannick GOUGUIA

Je ne suis pas sur que cette reponse retourne bien le 3e caractere du mot.
essaie d'utiliser chartAt
*/
console.log(myWatchedSeries[2][3]);

/* affichage du tableau */

console.log(myWatchedSeries)







