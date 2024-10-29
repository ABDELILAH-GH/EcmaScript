//  dectructuring for tables and objects

// ------------------------------------1_les tableaux--------------------------------
const t = [11, 22, 33];
let e = t[0];
let f = t[1];
let g = t[2];
console.log("le cas normal", e, f, g);
//  pour eviter tous ça en utilise destructuring
//cas:1
let [l, m, n] = t;
console.log("table cas1: ", l, m, n);
//cas:2
let [x, y] = [2, 4];
console.log("table ca2: ", x, y);
//--------------default value
let q, s;
[q = 2, s = 4] = [9];
console.log("defeult value for table: ", q, s);


// ------------------------------------2_les objects----------------------------------------
const obj = {d:10,f:23}
// cas 1
let = {d,f} =obj
console.log("object cas1: ",d,f)
// ---------------default value
let {k = 10,h = 43} = {k : 3}
console.log("default value for object: ",k,h) 
//---------------nom variable = nom clé
// pour chnger les noms des  variables il doit faire ça 
let {a:v,b:w} = obj
console.log(v,w)


// -----------------------------------3_exemples of using the destructing
const countries = ["Maroc", "Egypte", "Tunisie", "Ghana", "Sénegal"];
//console.log(...countries)

const [b, , ...rest] = countries;

const fruit = { id: 1, name: "apple", weight: 1 };
let { weight, name, color = "red", ...restObj } = fruit;
console.log(color);
