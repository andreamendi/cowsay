const cowsay = require("cowsay");
const intro = require('./intro');
<<<<<<< HEAD
const nudo = require('./nudo');
const nudo2 = require('./nudo2');
=======
const nudo1 = require('./nudo1');
>>>>>>> 44e5b66eea3bd6abb86887bd1d83585ef0a3a49c
const fin = require('./fin');

const edad_espectadores = 11;
const ciudad = "Toronto";
const costo = "$5";
const fraceVaquita = "hola";
var visit = "visit";
var local = "local";
const sospechoso = "MundoTerrestre";
const emocion = "feliz como una lombriz, bien happy ";
var edad = Math.floor(Math.random() * 100);



console.log(intro.historia(nombre, equipo,edad,planeta));
console.log(nudo1.historia(ciudad, costo, edad_espectadores, visit, local));
console.log(nudo2.historia(edad,equipo, planeta, sospechoso));
console.log(fin.historia(edad, equipo, emocion));






console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
