import { ENDPOINT } from "./constants.mjs";
export class Etudiant {
  static MAX_NOTE = 20
  constructor(first_name, last_name, date, note) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.date = date;
    this.note = note;
  }
  // cette fonction pour calculer l'age des stagiaire d'apres leur date de naissance
  getAge = () => new Date().getFullYear() - new Date(this.date).getFullYear();

  // cette fonction pour voir si le  stagiaire et admit ou non
  isAdmitted = ()=> this.note >= 10 
  static allEtudiants = async function () {
    const response = await fetch(ENDPOINT);
    const etudiants = await response.json();
    return etudiants;
  };

  // pour ajouter les donnes d'apres le formulaire a la base de donnes
  //http://localhost:3000/etudiants (POST) AJOUTER
  addEtudiant = async function () {
    const response = await fetch(ENDPOINT, {
      // methode post pour ajouter
      method: "POST",
      // tu dis au serveur json que j'envoyais les donnes json
      headers: {
        "Content-Type": "application/json",
      },
      // ajouter au body
      body: JSON.stringify({
        first_name: this.first_name,
        last_name: this.last_name,
        date: this.date,
        note: this.note,
      }),
    });

    // console.log(response);
    return response;
  };
 // cette fonction a permet de supprimer un stagiaire  
 //http://localhost:3000/etudiants/{id} (DELETE) SUPPRIMER
  static deleteEtudiants = async function (id) {
    const response = await fetch (ENDPOINT + '/'+id,{
       method:'DELETE',
       headers:{
         "Content-Type": "application/json"
       }
    })
    return response
  }
}
