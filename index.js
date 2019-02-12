const cowsay = require('cowsay');
const intro = require('./intro');
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
var edad = Math.floor(Math.random() * 100);


//console.log(historia);

console.log(intro.historia(ciudad, costo,edad));
console.log(nudo1.historia(ciudad, costo, edad_espectadores, visit, local));
//console.log(fin.historia(equipo, emocion));


console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
