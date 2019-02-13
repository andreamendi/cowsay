const cowsay = require("cowsay");
const intro = require('./intro');
const nudo1 = require('./nudo1');
const nudo2 = require('./nudo2');
const fin = require('./fin');
const fs = require('fs');  //filesystem

//funcionPrincipal
fs.readFile('nombres.txt', 'utf-8', function(err, contenido){
	if(err) {    	//En esta linea cachamos el error
		throw err;
	}

	const nombres = contenido.split(',');   //funcion split para separar
	const nombreran = nombres[Math.floor(Math.random() * nombres.length)];
	const historiacompleta = juntarHistoria(nombreran);
	console.log(historiacompleta);

	fs.writeFile('historia.txt', historiacompleta, function(err){
		if(err){
			throw err;
		}
	})

	console.log(nombres.length);	//console.log   es para mandar a pantalla
	console.log(nombreran);  		// Si no hay error, se ejecuta esto <-
});

//Muestra la historia

function juntarHistoria(nombre){
	const inici = (intro.historia(nombre, equipo,edad,planeta));
  const nod = (nudo1.historia(ciudad, costo, edad_espectadores, visit, local));
  const nod1 = (nudo2.historia(edad,equipo, planeta, sospechoso));
	const finall =(fin.historia(edad, equipo, emocion));
	const historiacompleta = inici + nod + nod1 + finall;
	return historiacompleta;
	
}

//Variables
const edad_espectadores = 11;
const equipo = "Diablos";
;const planeta = "Tierra";
const ciudad = "Toronto";
const costo = "$5";
const fraceVaquita = "hola";
var visit = "visit";
var local = "local";
const sospechoso = "MundoTerrestre";
const emocion = "feliz como una lombriz, bien happy ";
var edad = Math.floor(Math.random() * 100);

console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
