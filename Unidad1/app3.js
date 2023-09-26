// typeof
const num = 20;
console.log("El tipo es: " + typeof num);

// NaN
const variable = 4 * "hola";
console.log(variable);
console.log("El tipo de variable es: " + variable);

// Infinity
const division =  4/0;
console.log(division);
console.log("El tipo de división es: " + typeof division);

// isNaN
const numberstring = "30";
const string = "20 años";
console.log(isNaN(variable)); // me da verdadero porque variable no es un número
console.log(isNaN(division)); // me da falso porque división es un número
console.log(isNaN("12")); // me da falso porque para JS es un string y un número
console.log(isNaN(12));
console.log(isNaN(numberstring));
console.log(isNaN(string)); // me da verdadero porque al tener 20, que es un número, y años que es letra, no es un número
console.log(isNaN(NaN));

// toString
const number = 100;
console.log(number);
console.log(number.toString()); // Debemos tener cuidado con los () de toString().
console.log(typeof number);
console.log(typeof number.toString());

// toFixed
console.log(number.toFixed(4));
    // Calcular un script que calcule cuánto toca pagar a cada persona de una cena que costó 102 euros y asistieron 6 personas
    const precio = 102 / 6;
    console.log(precio.toFixed(2) + "€ a cada persona");

// Función Boolean devuelve verdadero
console.log(Boolean(200)); // Devuelve verdadero si es mayor que 1
console.log(Boolean("Cosa"));
console.log(Boolean(3.14)); // Devuelve verdadero si es coma flotante
console.log(Boolean(100>5));
console.log(Boolean('1'==1));

// Función Boolean devuelve falso
console.log(Boolean(0)); // Devuelve falso si es 0 o -0
console.log(Boolean("")); // Devuelve falso si tenemos una cadena vacía
console.log(Boolean(NaN)); 
console.log(Boolean(null));
console.log(Boolean('1'===1));
console.log(Boolean(undefined));



