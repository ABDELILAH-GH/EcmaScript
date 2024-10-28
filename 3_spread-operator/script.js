// -----------------------spread oparetor------------------------------
// le role de spread oparator est fetcher les données

const contries = ["maroc","algerie","tunisie"]
const contries2 = ["usa","canada","brazil"]
console.table(...contries) //maroc algerie tunisie
console.table([...contries])// retourner un tableau
console.table(contries)// retoutner un tableau


//  ---------------array merge(concat)-----------------------
// la defrence entre concat et merge c'est quand nous fairons merge nous avons un table sans duplication
console.table([...contries,...contries2])



// ----------object----------------
const fruit = {
       name : "apple",
       color: 'red',
       price : '2'
}
const fruit2 = {
       name : 'apple',
       color : 'green',
       weight : "0,1"
}
console.log({...fruit})
console.log({...fruit2})
// -----------------------------object merge--------------------
console.log({...fruit,...fruit2})