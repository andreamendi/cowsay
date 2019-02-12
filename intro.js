module.exports = {
    historia: function(nombre, equipo, edad){
        if(edad >= 18 && edad <= 79) {
            return `${nombre} amaba el basball pero estaba frustrado porque ${equipo} nunca llegaba a nada en los partidos, siempre pierde. `
        }else if (edad >= 80) {
            return ` ${nombre},logró ver a los ${equipo}, en la Serie Mundial y lanzó la primera bola del partido 7, donde ganarón los ${equipo} .`

        } else{
            return ` ${nombre}, y práctico basball, me encantaría ir a ver a los ${equipo}, porque es mi equipo favorito en el mundo mundial, espero ir pronto.`
        }


    }
 }

 