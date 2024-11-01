/*
Fonction pure : afficherSomme affiche une somme sans effets de bord.
function addition(a, b) {
   return a + b;
}

Fonction impure : afficherEtIncrementer modifie une variable globale et affiche son état à chaque appel
let compteur = 0;
function incrementerCompteur() {
   compteur += 1; // Modifie la variable globale 'compteur'
   return compteur;
}
.
*/
// les fonctions impure
let compteur = 0;

function afficherEtIncrementer() {
    compteur += 1; 
    console.log(compteur); 
    return compteur;
}
// afficherEtIncrementer(); //  1
// afficherEtIncrementer(); //  2
// afficherEtIncrementer(); //  3
// les fonctions pure
function afficherSomme(a, b) {
   const somme = a + b;
   console.log(somme); // Affiche la somme
   return somme; // Renvoie également la somme
}
// afficherSomme(2, 3); // Affiche 5
// afficherSomme(2, 3); // Affiche à nouveau 5



//-------------------------------------exemples----------------------------------------
// pour inserer un element au milieu de tableau
function SetElementInMiddle(tableau,element){
   const milieu = Math.floor(tableau.length/2)
   return [
      ...tableau.slice(0,milieu)
      ,element,
      ...tableau.slice(milieu)
   ]
}
//console.log(SetElementInMiddle([1,2,3,4],9))


// pour inserer a n'import quelle place
const t = [1,2,3,4]
function f (index,value){
    return [...t.slice(0,index),value,...t.slice(index)]
}
// console.logt(f(3,9))


// nous avons suppprimé l'element qu'est id: 1
const list = [
   { id: 1, nom: "nom1", groupe: "dev201" },
   { id: 2, nom: "nom2", groupe: "dev202" },
   { id: 3, nom: "nom3", groupe: "dev203" },
   { id: 4, nom: "nom4", groupe: "dev204" }
];

function supprimerParId(id) {
   // alors filter a retourner tous les element sauf element qu'est id:1
   const  nouvelleListe = [...list.filter(item => item.id !== id)];
   return nouvelleListe
}
// console.log("Nouvelle liste ", supprimerParId(1)); 


// je veux modifier le groupe 
const updateGroupe = function (id,newGroupe){
   const newList = list.map(item => 
      item.id === id ? { ...item, groupe: newGroupe } : item
   );
   return newList;
}
console.log(updateGroupe(1,'dev206'))