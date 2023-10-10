//Pedimos al usuario que introduzca un número
const num = prompt("Introduce un número: ");

// Para el texto


// Calcular tabla de multiplicar de dicho número
if (!isNaN(num) && num >= 0){
const contenedor = document.querySelector(".container");
const nuevo_div = document.createElement("div");



const encabezado = document.createElement("h1");
nodoTexto = document.createTextNode("Tabla del " + num);
encabezado.appendChild(nodoTexto);
    
contenedor.appendChild(encabezado);

    

    for  (let i = 1; i<=10; i++) {
        const resultado = `${num} * ${i} = ${num * i}`;
        console.log(resultado);
        
        const parrafo = document.createElement("p");
        

        let nodoTexto = document.createTextNode(num + " * " + i + " = " + num * i);
        nuevo_div.appendChild(nodoTexto);
        console.log(nuevo_div);
        
        contenedor.appendChild(nuevo_div);
        parrafo.appendChild(nodoTexto);
        nuevo_div.appendChild(parrafo);
    }
    } else {
        console.warn("Número incorrecto"); 
    }
