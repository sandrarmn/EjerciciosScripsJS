// Pedimos al usuario que introduzca un número
const num = prompt("Introduce un número: ");

// Verificamos si el valor ingresado es un número válido y mayor o igual a 0
if (!isNaN(num) && num >= 0) {
    const contenedor = document.querySelector(".container");

    // Crear un encabezado
    const encabezado = document.createElement("h1");
    const nodoTexto = document.createTextNode("Tabla del " + num);
    encabezado.appendChild(nodoTexto);
    contenedor.appendChild(encabezado);

    // Crear un div para mostrar la tabla
    const nuevo_div = document.createElement("div");

    for (let i = 1; i <= 10; i++) {
        const resultado = `${num} * ${i} = ${num * i}`;
        console.log(resultado);

        // Crear un párrafo para cada multiplicación
        const parrafo = document.createElement("p");
        const nodoTexto = document.createTextNode(resultado);
        parrafo.appendChild(nodoTexto);
        nuevo_div.appendChild(parrafo);
    }

    // Agregar el div con la tabla al contenedor
    contenedor.appendChild(nuevo_div);
} else {
    console.warn("Número incorrecto");
}