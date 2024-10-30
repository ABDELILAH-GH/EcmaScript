// ASYNC : possible d'executer deux chose en paralele
// SYNC: impossible d'executer quelque chose avant de finir l'execution presedente
const sum = (...numbers) => numbers.reduce((a,value)=> a+value)
// en a cette fonction pour clalculer la somme en voir le resultat apres 3 second
// en utillise setTimeou()
setTimeout(()=>{
   // console.log(sum(1,2,3,54,7))
},3000)//3000 c'set le nombre de seconds pour voir l'affichage de resultat

// ---------------------------promisses---------------------------------
// promisses: help to combine between (producing  code + consuming code)
// producing code : it's waste a lot of time to execute like senditg an email
// consouming code : it's depend an other function to execute for exemple setTimeout()
 const count = false
 // cette fonction s'apple callback of promise 
 let countFunction = function(resolve,reject){
         // resolve = sucsses and reject = error
          // cas1:PENDING quand nous avons taper google.com nous regardons le site a charnger 
         setTimeout(()=>{
            if (count === true){
               resolve( 'ok')// cas 2:FULFILLED lorseque le site a completer le chargment 
            }else{
               reject ('no')// cas3:REJECTED lorseque en un erruer dans le site 
            }
         },5000)
 }
 // create  promise
 let countValue = new Promise(countFunction)

 // mainetenant c'est comme de dire "Promise quand tu fait ton tache recuperer moi les values"
 countValue
.then((value) => console.log(value))
 // catch pour n'affiche le message d'erruer de systeme
.catch((error)=> console.log(error));
 
 console.log(countValue)