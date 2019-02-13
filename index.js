const cowsay = require("cowsay");
const intro = require('./intro');
const nudo1 = require('./nudo1');
const nudo2 = require('./nudo2');
const fs = require('fs');
const fin = require('./fin');
const ciudad = "Toronto";
const nombre = "Git";
const costo = "$5";
const fraceVaquita = "hola";
var visit = "visit";
var local = "local";
const equipo = "Diablos";
const planeta = "Marte"; 
const sospechoso = "MundoTerrestre";
const emocion = "feliz como una lombriz, bien happy ";
var edad = Math.floor(Math.random() * 100);
const edad_espectadores = edad;
const introHistoria = intro.historia(nombre, equipo,edad,planeta);
const introNudoUno = nudo1.historia(ciudad, costo, edad_espectadores, visit, local);
const introNudoDos = nudo2.historia(edad,equipo, planeta, sospechoso);
const introFin = fin.historia(edad, equipo, emocion);

const historiaCompleta = introHistoria + introNudoUno + introNudoDos + introFin;


console.log(historiaCompleta);

console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
