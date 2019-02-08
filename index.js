var cowsay = require('cowsay');

let nombre = "Anuar";
let fraceVaquita = "Surcaré los 7 mares de pasto";

let historia = "Hola, mi nombre es " + nombre + ". Y hoy me enconté con una vaquita pitara que decía: " + fraceVaquita;

console.log(historia);

console.log(cowsay.say({
  text : fraceVaquita,
  e : "x-o",
  T : "v "
}));
