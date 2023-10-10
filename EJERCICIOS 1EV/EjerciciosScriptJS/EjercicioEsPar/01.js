/* Realizar un script en 01-espar.html que solicite un número y nos
 diga si ese número es par o impar por consola. A continuación, agrega
 la lógica necearia para que compruebe primero si lo que has puesto
 es un número. */
 
const num = prompt("Introduzca un número: ");

if (isNaN(num)){
    console.log('No es un número');
} else {
    const info = num % 2 == 0 ? 'par' : 'impar' ;
    console.log(info);
}

