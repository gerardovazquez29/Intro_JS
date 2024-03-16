//* operador typeof (tipo de dato)

let cadena = 'hola';
let sumatoria = new Function('a','b','return a + b')
console.log(typeof sumatoria)

//* object

let objeto = {
    nombre: 'juan',
    edad: 30,
    telefono: 321232122
}
console.log(typeof objeto)

//* function

let a = 5
let b = 10
let suma = function (a, b) {
    return a + b
}
console.log(typeof suma);

//* Clase - funciones

class Usuario{
    constructor(nombre, edad, telefono) {
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
    }
}
console.log(Usuario)