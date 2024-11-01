import { ENDPOINT } from "./constants.mjs"
export default class Etudiant {
    constructor(name,age,note) {
        this.name = name
        this.age = age
        this.note
    }

    afficher = function(){
        return `${this.name},${this.age}.${this.note}`
  }
    // all = function(){
    //          let etudiants = fetch(ENDPOINT)
    //          .then(response => response.json())
    //          .then (etudiants=>console.log(etudiants))
              
    // }

}