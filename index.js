//modulos
const cowsay = require("cowsay");
const intro = require('./intro');
const nudo1 = require('./nudo1');
const nudo2 = require('./nudo2');
const fs = require('fs');
const fin = require('./fin');

//variables globales
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

function selectPersonaje(){
  fs.readFile('personajes.txt','utf-8', function(err, contenido){
    if(err){
      //THROW Detecta algo y lo manda tipo return
      throw err;
    }
  
    const personajes = contenido.split(','); //Se está separando el archivo txt por comas y lo vuelve un array
    const personajesNumero = Math.floor(Math.random() * personajes.length); // Se hace un número random entre el length del txt.
    const personajesRandom = personajes[personajesNumero]; // Se imprime el personaje que está en la posición random del punto de arriba.
   
    selectEquipo(personajesRandom)
  

  
    // const historiaCompleta= juntarHistoria(personajesRandom); //Se ejecuta con esté personaje
    // console.log(historiaCompleta);
    // console.log(personajes.length);
    // console.log(personajesRandom);
    
  });
}


function selectEquipo(personajesRandom){
  fs.readFile('equipo.txt','utf-8', function(err, contenido){

    if(err){
      //THROW Detecta algo y lo manda tipo return
      throw err;
    }
  
    const equipo = contenido.split(',');
    const numeroEquipo = Math.floor(Math.random() * equipo.length);
    const randomEquipo = equipo[numeroEquipo];
  
    juntarHistoria(personajesRandom, randomEquipo)
  });
}


selectPersonaje()

//Se ejecuta la historia

function juntarHistoria(randomPersonaje, randomEquipo){
  const introHistoria = intro.historia(randomPersonaje,randomEquipo,edad,planeta);
  const introNudoUno = nudo1.historia(ciudad, costo, edad_espectadores, visit, local);
  const introNudoDos = nudo2.historia(edad,randomEquipo, planeta, sospechoso);
  const introFin = fin.historia(edad, randomEquipo, emocion);
  const historiaCompleta = introHistoria + introNudoUno + introNudoDos + introFin;
  console.log(historiaCompleta);

  fs.writeFile('historia.txt', historiaCompleta, function(err){
    if(err){
      throw err;
    }
  });
}


console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
