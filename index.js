const cowsay = require('cowsay');
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
const emocion = "feliz como una lombriz";
var edad = Math.floor(Math.random() * 100);


<<<<<<< HEAD
console.log(intro.historia(nombre, equipo,edad,planeta));
console.log(nudo.historia(equipo, planeta, sospechoso));
console.log(nudo2.historia(edad,equipo, planeta, sospechoso));
console.log(fin.historia(equipo, emocion));
=======
//<<<<<<< HEAD
//console.log(historia);


console.log(nudo1.historia(ciudad, costo, edad_espectadores, visit, local));
//console.log(fin.historia(equipo, emocion));
//=======
//console.log(intro.historia(nombre, equipo,edad,planeta));
//console.log(nudo.historia(equipo, planeta, sospechoso));
//console.log(fin.historia(equipo, emocion));
//>>>>>>> f018561b226799daa781e61856ebdcb9aab11685
>>>>>>> 44e5b66eea3bd6abb86887bd1d83585ef0a3a49c


console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
