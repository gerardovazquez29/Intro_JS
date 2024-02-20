//* Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//* Forma anterior

 //* const precioProducto = producto.precio;
 //* const nombreProducto = producto.nombreProducto;

 //* console.log(precioProducto);
 //* console.log(nombreProducto);


//* Destructuring

const {precio, nombreProducto } = producto;  //* nueva sintaxis

console.log(precio);
console.log(nombreProducto);