/*
string to array
find
findIndex
filter
*/
//-----------pour transformer de string ------> array---------------
// slipt("separateur",nombre des elements) 
let str = "maroc,algerie,tunisie"
console.log(str.split(",",2))

// dans EcmaScript en utilise array.from(nomDeChaineCaractere)
let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const tab = (Array.from(alphabets))
console.log(tab)//[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", … ]


//  ----------------------search--------------------------------
const str1 = "php,js,laravle,react,roby"
const languages = str1.split(",")
console.log(languages )// [ "php", "js", "laravel", "react","roby" ]
// ---------1_find
//find pour recuperer un le PREMIER element 
const find = languages.find(function(value){
     return value === 'php'
})
console.log(find)
//using arrow function
const newFind = languages.find((value)=> value.startsWith("r"))
console.log(newFind) //react


// --------2_filter
// pour recuperer TOUS  les elemnt en utilise FILTER
const filter = languages.filter((value)=> value.startsWith("r"))
console.log(filter)//['react','roby']


// ---------3_findIndex
const findIndex = languages.findIndex((value)=> value.endsWith("p"))
console.log(findIndex)//0