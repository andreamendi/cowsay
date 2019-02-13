const cowsay = require('cowsay');
const intro = require('./intro');
const fs = require ('fs');

//const nudo = require('./nudo');
const nudo2 = require('./nudo2');

const nudo1 = require('./nudo1');

const fin = require('./fin');

const edad_espectadores = 11;
const ciudad = "Toronto";
const costo = "$5";
const fraceVaquita = "hola";
var visit = "visit";
var local = "local";
const sospechoso = "MundoTerrestre";
const emocion = "feliz como una lombriz";
var edad = Math.floor(Math.random()*100);

const introHistoria = intro.historia(nombre, equipo,edad,planeta);
const historiaCompleta = introHistoria+ finalHistoria;

console.log(introHistoria);
console.log(nudo1.historia(ciudad, costo, edad_espectadores, visit, local));
console.log(nudo2.historia(edad,equipo, planeta, sospechoso));
console.log(fin.historia(equipo, emocion));


console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
