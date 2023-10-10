class Persona {
    constructor (nombre, apellidos, anno, estudios, poblacion) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._year = anno;
        this._estudios = estudios;
        this._poblacion = poblacion;
    }

    get annoNacimiento() {
        return this._year;
    }

    get poblacion(){
        return this._poblacion
    }
}

const p1 = new Persona("Jose","García","1999");

// Métodos para estudios y población y los métodos para obtener cada uno de los atributos
const p2 = new Persona("Ana","Ruiz","1992","Madrid","Bachillerato");

const Personas = (lista) => {
    let contador = 0;
    lista.forEach(elemento => {
        console.log(elemento.estudios());
        console.log(elemento.poblacion());
        contador += 1;
    })
    return contador;
}

// Métodos para estudios y población y los métodos para obtener cada uno de los atributos