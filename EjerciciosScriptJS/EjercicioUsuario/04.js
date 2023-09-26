const correo = prompt("Introduzca un correo electronico: ");
let nombreUsuario

nombreUsuario = correo.trim().replace('@hotmail.com','').replace('@gmail.com','').replace('@gmail.es','').replace('@outmail.es','')


console.log(`El nombre del usuario es: ${nombreUsuario}`);