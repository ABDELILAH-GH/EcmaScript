/*Devoir Javascript
Une API nous envoie un objet JSON (Buteurs) de la forme :*/
const Buteurs = [
   { 
     "id": 1,
     "player": { "player_id": 19779, "player_name": "Karim Benzema" },
     "team": "Real Madrid",
     "goals": { "home": 7, "away": 7 }
   },
   { 
     "id": 2,
     "player": { "player_id": 4934, "player_name": "Robert Lewandowski" },
     "team": "FC Bayern Munich",
     "goals": { "home": 9, "away": 4 }
   }
 ];
 
// 1) Ecrire le code JS qui renvoie le nombre de buts marqués par le joueur qui a
// le nom Karim Benzema
const ButsKarim = Buteurs.find((buteur)=> buteur.player.player_name === "Karim Benzema")
const NbButsKarim = ButsKarim ? ButsKarim.goals.home + ButsKarim.goals.away : 0;
console.log('nombre de buts pour Karim benzima: '+NbButsKarim)

// 2) Ecrire le code JS qui renvoie les noms des joueurs qui ont marqué plus que 3
// buts à l’extérieur (away)
const ButsExter = Buteurs.filter((buts)=> buts.goals.away >= 3)
const NomJoueurs = ButsExter.map((buteur)=> buteur.player.player_name)
console.log('les noms des joueurs : '+NomJoueurs)

// 3) Ecrire le code JS qui renvoie le plus grand nombre de buts marqués à
// l’intérieur (home)
const MaxButsHome = Math.max(...Buteurs.map(buteur => buteur.goals.home))
console.log('le max buts "home": '+MaxButsHome)


// 4) Ecrire le code JS qui renvoie le nombre total des buts qui sont marqués à
// l’extérieur (away)
const NbButsAway = Buteurs.reduce((acc,buteur)=> acc + buteur.goals.away,0)
console.log("le nombres des buts en AWAY: "+NbButsAway)


// 5) Ecrire le code JS qui renvoie le nom de l’équipe qui a marqué le plus grand
// nombre de buts à l’extérieur (away)
const equipePlusButsAway = Buteurs.reduce((max, buteur) => {
   return (buteur.goals.away > max.goals.away) ? buteur : max;
}, Buteurs[0]).team;
console.log(equipePlusButsAway);


//
const stagiaires = [
  { id: 777, nom: "stage1", groupe: "DEV101" },
  { id: 444, nom: "stage2", groupe: "DEV101" }
];

const notes = stagiaires.map(stagiaire => ({
  id: stagiaire.id,
  nom: stagiaire.nom,
  groupe: stagiaire.groupe,
  notes: [
    { matiere: "React", note: 16 },
    { matiere: "Agile", note: 15 }
  ]
}));
console.log(notes)
