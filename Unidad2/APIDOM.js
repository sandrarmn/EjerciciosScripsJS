// voy a guardar en una variable todo lo que contiene 
let contenido = document.querySelector(".cabecera.titulo"); 
console.log(contenido);

// Si yo quiero borrar algún elemento de mi HTML
// document.querySelector(".contenido").remove();

// Si quiero localizar más de un elemento que tenga la misma clase o etiqueta
let parrafos = document.querySelectorAll("p");
console.log(parrafos);
//let matches = document.querySelectorAll("div.highlighted>p")
//let matches = document.querySelectorAll("div.nota, div.alert") va a buscar todo lo que sea de la clase nota, y todo lo que sea de la clase alerta, no de ambas

// Ahora vamos a saber la localización
let localizacion = document.location;
console.log(localizacion);

// Devolver lo que contiene la etiqueta título
let titulo = document.title;
console.log(titulo);

// Ahora vamos a ver, si yo quiero ver le contenido de una etiqueta. 
let valor1 = document.querySelector("#pie").innerText;
console.log(valor1);

// Sacamos todo lo que está dentro de la etiqueta que tiene el identificador
let valor = document.querySelector("#pie").innerHTML;
console.log(valor);

let valor3 = document.querySelector("#miboton").value;
console.log(valor3);
