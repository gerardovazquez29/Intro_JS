//* POO 

//* Object Literal

const producto = {
    nombre: 'Tablet',
    precio: 500
}

//* Object Constructor

function Producto(nombre, precio, marca) {  //* parametros
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
}
const producto2 = new Producto('Monitor Curvo de 49"', 800, 'LG' );  //* argumentos
const producto3 = new Producto('Laptop', 300, 'Lenovo');

console.log(producto2);
console.log(producto3);

console.log('____________________________________________________');

//*El prototype. Crear funciones que solo se utilizan en un objeto en especifico.


Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}


console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );


console.log('____________________________________________________');


function Cliente(nombre, apellido) {  
    this.nombre = nombre;
    this.apellido = apellido;
}
const cliente = new Cliente('Juan', 'De la torre');

console.log(cliente);

console.log('____________________________________________________');

Cliente.prototype.formatearCliente = function() {   
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

console.log(cliente.formatearCliente() );











