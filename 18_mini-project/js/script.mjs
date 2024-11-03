import { Etudiant } from "../etudiants.mjs";


const filtersettings = {
  
}
// cette fonction pour recuperer les donnes
const displayEtudiants = function () {
  return Etudiant.allEtudiants().then(function (response) {
    return response.map((data) => {
      const {id,first_name, last_name, date, note} = data;
      const etudiant = new Etudiant( first_name, last_name, date, note)
      return `
           <tr>
                <td>${id}</td>
                <td>${etudiant.first_name}</td>
                <td>${etudiant.last_name}</td>
                <td>${etudiant.getAge()} ans</td>
                <td><span class="badge rounded-pill ${etudiant.isAdmitted () ? 'text-bg-success':'text-bg-warning' } ">
                ${etudiant.note} / ${Etudiant.MAX_NOTE}<span></td>
                <td><button class = "btn btn-danger btn-ms delete" onclick ="deleteEtudiants(${id})">supprimer</button></td>
           </tr>
           `;
    });
  });
};

//cette fonction pour afficher les donnes dans le tableau
const renderEtudiants = function () {
  // selectioner tbody
  let body = document.querySelector(".liste-stagiaire");
  // afficher les donnes dans le tableau
  displayEtudiants().then((data) => {
    body.innerHTML = data.join(" "); // si en utilise pas join en voir
    // que entre les lignes de tableau dans le fichier html il'ya un espace
    init()
  });
};
renderEtudiants();

//cette fonction a permet d'ajouter un stagiaire
const addEtudiants = ()=>{
   // event.preventDefault() = onsubmit="return false"
   const  [first_name,last_name,date,note] = document.querySelectorAll('#first_name,#last_name,#date,#note')
   const etudiant = new Etudiant (first_name.value,last_name.value,date.value,note.value)
   etudiant.addEtudiant()   
};


// cette fonction permet de supprimer un stagiaire 
window.deleteEtudiants =(id)=>{
  Etudiant.deleteEtudiants(id).then(alert('tu peut supprimer ce etudiant ?'))
}


// cette fonction pour actualiser le tableau des etudiants
const init = function () {
  const refreshButton = document.querySelector("#refresh");
  const addButton = document.querySelector("#add");
  const deleteButton = document.querySelector(".delete");
   // pour actualiser
  refreshButton.addEventListener("click", () => {
     renderEtudiants()
  });
    // pour ajouter
  addButton.addEventListener("click", () => {
     addEtudiants()
  });

};
renderEtudiants()


