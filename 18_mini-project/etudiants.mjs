import { ENDPOINT } from "./constants.mjs";
export class Etudiant {
  constructor(first_name, last_name, date, note) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.date = date;
    this.note = note;
  }
    
  getAge = () => (new Date()).getFullYear() - new Date(this.date).getFullYear()
  static allEtudiants = async function () {
    const response = await fetch(ENDPOINT);
    const etudiants = await response.json();
    return etudiants;
  };

  // pour ajouter les donnes d'apres le formulaire a la base de donnes
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
}
