const cowsay = require('cowsay');
const intro = require('./intro');
const nudo = require('./nudo');
const fin = require('./fin');

const nombre = "Mook";
const equipo = "Astros";
const fraceVaquita = "hola";
const planeta = "Marte";
const sospechoso = "MundoTerrestre";
const emocion = "feliz como una lombriz";
var edad = Math.floor(Math.random() * 100);
let historia = `${nombre} es un marciano que tiene ${edad}`

console.log(historia);

console.log(intro.historia(nombre, equipo,edad,planeta));
console.log(nudo.historia(equipo, planeta, sospechoso));
console.log(fin.historia(equipo, emocion));


console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));


