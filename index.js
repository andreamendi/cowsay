const cowsay = require("cowsay");
const fs = require ('fs');
const intro = require('./intro');
const nudo1 = require('./nudo1');
const nudo2 = require('./nudo2');
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

//fs.readFile(Recibe ek archivo a leer,como la va a leer, func
//En este caso es una funcion anonima que recibe error y contenido
fs.readFile ('personajes.txt','utf-8',function (error,contenido){
  if (error){
    throw err; // el throw manda  un mensaje en consola
  }
  const personajes = contenido.split(',')
  const numeropersonaje = Math.floor(Math.random()*personajes.length);
  const personajerandom= personajes[numeropersonaje];

  const historiacompletaotra = juntarhistoria(personajerandom);

  console.log (historiacompletaotra);
  console.log (personajerandom);
  console.log (personajes.length);
  console.log (personajes [0]);


});


//Partes de la finalhistoria
function juntarhistoria (personaje) {
  const introhistoria =intro.historia(personaje, equipo,edad,planeta);
  const nud1 = nudo1.historia(ciudad, costo, edad_espectadores, visit, local)
  const nud2 = nudo2.historia(edad,equipo, planeta, sospechoso)
  const finalhistoria = fin.historia(edad, equipo, emocion);
  const historiacompleta = introhistoria + nud1 + nud2+ finalhistoria;
  return historiacompleta;

}


//const introhistoria =intro.historia(nombre, equipo,edad,planeta);
//const finalhistoria = fin.historia(edad, equipo, emocion);
//console.log(introhistoria);
//console.log(nudo1.historia(ciudad, costo, edad_espectadores, visit, local));
//console.log(nudo2.historia(edad,equipo, planeta, sospechoso));
//console.log(finalhistoria);






console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
