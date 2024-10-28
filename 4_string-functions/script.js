let fruit = "apple";
// -----------------1_include------------------
// tu donne la lettre que tu veux tester et include retourner true ou false
// tu peut aussi donne la position includes(a,position)
// document.querySelector("#app").innerHTML = fruit.includes('p',3);

// ------------------2_startWith------------------------
// document.querySelector('#app').innerHTML = fruit.startWith('a')

// -----------------3_endsWith----------------------------
// document.querySelector('#app').innerHTML = fruit.endsWith('e')

// ------------------ES 2017 -------------------------
let clientNumber = "1";
// document.querySelector('#app').innerHTML = clientNumber.padStart(4,'0')
document.querySelector("#app").innerHTML = clientNumber.padEnd(4, "#");
/*
les banques
000000001
000000002
000000010
*/

// ------------------ES 2029 trim() trimStart() trimend()------------------------------
// pour supprimer l'espace
let str = "      hello     ";
document.querySelector("#trim").innerHTML = str.trimStart();//supprimer au debut 
document.querySelector("#trim").innerHTML = str.trimEnd();//supprimer a  la fin
document.querySelector("#trim").innerHTML = str.trimEnd();//supprimer au debut et a la fin

// ------------------ES 2022 at()- ---------------------------------
document.querySelector("#app").innerHTML = fruit.at(1) 
//              ou  
document.querySelector("#app").innerHTML = fruit[1]
