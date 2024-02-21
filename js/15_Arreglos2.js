//* Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//* Arreglo de objetos
const carrito = [ 
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

//* forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

//* Includes
let resultado = meses.includes('Diciembre');//* este elemento te dice si existe algo en el arreglo

//* Some ideal para arreglo de objetos para saber si existe algo
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular PRO'
})

//* Reduce  para saber el precio total
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);


//* Filter   para saber si algo es mayor
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});

//* Filter para mostrar algo que no sea lo que pides o lo que ocupas
resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular'
});



console.log(resultado);
