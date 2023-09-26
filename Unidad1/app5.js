/* Estructura del condicional */
const flight = 100;
const hotel = 40;
const tour = 30;
const total = flight + hotel + tour;
const budget = 300;

if(budget > total){
    console.log('Si me voy de viaje');
} else if(budget===total){
    console.log('Si puedo ir , pero muy ajustado');
} else {
    console.log('No puedo ir');
}

/*OPERADORES TERNARIOS*/
const result = budget > total ? console.log('Si me voy'):console.log('No me voy');
const newresult = budget > total ?100:200;

/* E J E R C I C I O */

// Código que nos diga si NUM es par o impar
const NUM = "30" + 3;
    // En primer lugar debemos comprobar si se trata de un número
if (isNaN(NUM)){
    console.log('No es un número');
} else {
    const info = NUM % 2 == 0 ? 'par' : 'impar' ;
    console.log(info);
}

/* E J E R C I C I O */
// Tenemos la siguiente cadena de texto
const cade = "En un lugar de La Mancha, de cuyo nombre";
// Si la cadena es mayor de 27 carácteres, cortarla para que tenga 27
// Si la cadena es menor de 27 carácteres, añadir carácteres
// Realizar todas las comprobaciones para cumplir con las especificaciones que se piden

