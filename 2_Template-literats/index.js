let nom = "ghoummach";
let prenom = "abdelilah";

// la methode normal de concatination
let age = 18;
isAdulte = "adulte";
if (age < 18) {
  isAdulte = "mineur";
}
let str = "hello " + prenom + " "
+'\n' + nom + ", " + isAdulte;
// '\n' pour faire un retour a la ligne 




// la nouvele methode de concatination
// "ENTRER" aussi cette methode pour faire la retour a la ligne
let newStr = `hello ${prenom} ${nom} 
\n 
${(age < 18 ? "mineur" : "adulte".toUpperCase())}`;



document.querySelector("#str").innerHTML = str;
document.querySelector("#str2").innerHTML = newStr;
