const alerta = document.querySelector(".alert-info");
//const objeto = new Object(); // creamos un nuevo objeto

//objeto.nombrepropiedad;
//objeto.nombrefuncion([parametros]);

let fecha_actual = new Date();
let fechafincurso = new Date(2024, 4, 30);

console.log(`La fecha actual es ${fecha_actual}`);
console.log(`El curso acaba en ${fechafincurso}`);
let tiempo_restante = fechafincurso - fecha_actual;
console.log(`El curso acaba dentro de: ${tiempo_restante} milisegundos`);

console.log(fecha_actual.toString()); 
console.log(fecha_actual.toTimeString()); // Aquí vamos a tener la hora
console.log(fecha_actual.toDateString()); // Aquí vamos a tener la fecha

console.log(fecha_actual.toLocaleString()); 
console.log(fecha_actual.toLocaleTimeString());
console.log(fecha_actual.toLocaleDateString());
console.log(fecha_actual.toLocaleDateString("es-ES",{weekday:'long',year:'numeric',month:'long',day:'numeric'}));



const fecha_actual_legible = fecha_actual.toLocaleDateString("es-ES",{weekday:'long',year:'numeric',month:'long',day:'numeric'});
alerta.innerHTML = "<strong>HOY ES: </strong>" + fecha_actual_legible;
