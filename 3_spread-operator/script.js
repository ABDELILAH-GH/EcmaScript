// -----------------------spread oparetor------------------------------
// le role de spread oparator est fetcher les données

const contries = ["maroc","algerie","tunisie"]
const contries2 = ["usa","canada","brazil"]
// console.table(...contries) //maroc algerie tunisie
// pour faire un copier d'un tableau
const newTab = [...contries]
// console.log('newTab: ',newTab)

// console.table([...contries])// retourner un tableau
// console.table(contries)// retoutner un tableau


//  ---------------array merge(concat)-----------------------
// la defrence entre concat et merge c'est quand nous fairons merge nous avons un table sans duplication
// console.table([...contries,...contries2])



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
// console.log({...fruit})
// console.log({...fruit2})
// pour faire un copier 
const obj = {...contries}
// -----------------------------object merge--------------------
// console.log({...fruit,...fruit2})


//Exercice1: pour supprimer un champ
const obj1 = { nom: "abdelilah", groupe: "groupe1" };
const { groupe, ...obj2 } = obj1;
// console.log(obj2)


// exercice2:
const person = {
       id: 55,
       name: "hamza",
       adress: {
           street: 'Med 5',
           num: 45
       },
       phone: '0608155178'
   }; 
   // Création d'une copie de `person` avec un nouveau numéro de téléphone
   const updatedPerson = {...person,phone: '0777777777' 
   };
//    console.log(updatedPerson);
   

// pour ajouter un ville a l'adresse
const person2 = {...person,adress:{...person.adress,city:'Rabat'}}
console.log(person2)
