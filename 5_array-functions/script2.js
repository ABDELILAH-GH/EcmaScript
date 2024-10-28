/*
affichage d'un tableau
les fonctions qui faire des changement dans le tableau
*/
//--------------------affichage d'un table---------------------------
// la methode normal
const fruits = ['php','javaScript','react','laravel']
const display = function(fruit,key){
         console.log(`${key} : ${fruit}`)
}
fruits.forEach(display)

// using map
const show = fruits.map((fruit,key)=>{
        console.log(`id :${key} ¤ element :${fruit} `)
})
console.log(show)

//-------les fonctions qui faire des changement dans le tableau---------
// map: pour boucler
const numbers = [1,2,3,4,5,6]
const dubleNum = numbers.map((number) => number*2)
console.log(dubleNum)//[ 2, 4, 6, 8, 10, 12 ]

//filter: pour filtrer
const num = [1,2,3,4,5,6]
console.log(num.filter((value)=> value >3))//[ 4, 5, 6 ]

//some:
/*some: c'est comme filter mais elle a retourner TRUE si la condition
vrai et false si la condition faux
remarque: some et filter retourne true si un SEUL element a enquete la condition
*/ 
const nombres = [1,2,3,4,5,6,]
console.log(nombres.some((value)=> value >= 3))//true

//every retouner true si la tous les element enquete la condition
const num2 = [1,2,3,4,5,6]
console.log(num2.every((value)=> value > 3))