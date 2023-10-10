/* Crea un script 03-carta.html que cree una carta personalizada
sustituyendo los datos de las variables que solicite al usuario y luego
lo muestre en el documento. Ha de usar la función trim en cada
dato que lea para eliminar los espacios*/

const nombre = prompt("Introduzca su nombre: ");
const curso = prompt("Introduzca nombre del curso: ");
const localidad = prompt("Introduzca la localidad del curso: ");
const fechainicio = prompt("Introduzca fecha de inicio del curso: ");
const fechafin = prompt("Introduzca fecha de fin del curso: ");

let carta = `
Estimado ${nombre.trim()},

Bienvenido al curso de ${curso.trim()} que se celebrará en la localidad de ${localidad.trim()} entre las fechas ${fechainicio.trim()} y ${fechafin.trim()}. Espero que el curso se desarrolle según sus expectativas. Estaremos encantados de atenderle

Atentamente, 
La dirección.` 

console.log(carta);