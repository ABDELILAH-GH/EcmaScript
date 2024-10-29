class Etudiant{
   // le consturtor a permet de crees des objects
          constructor (nom,prenom,age,ville){
           this.nom = nom,
           this.prenom = prenom,
           this.age = age,
           this.ville  = ville
          }
          // cette fonction a permet d'afficher les informations de l'etudiant
          info(){
           return `bonjour je m'appele: ${this.prenom} ${this.nom} j'ai: ${this.age} j'habite a: ${this.ville}`
          }
          //cette fonction permet d'ajoutrer 1ans a l'age actuale d'etudiant
          aniverssaire(){
                    this.age =+1
          }
          chnagerVille(nouvelVille){
                   this.ville =   nouvelVille  
          }
  }
  // un nouvel object et1 est crée par la commande new
  let et1 = new Etudiant('ghoummach','abdelilah',19,'el jadida')
   console.log(et1.info())
//  console.log(et1.aniverssaire())
//   console.log(et1.chnagerVille("casaBlanca"))
  