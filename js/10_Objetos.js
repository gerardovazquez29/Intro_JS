//* Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

            //* sintaxis de punto sirven para acceder a un valor del objeto.
//* console.log(producto.precio);
//* console.log(producto.nombreProducto);
//* console.log(producto.disponible);

               //* Misma sintaxis para acceso
//* console.log(producto["precio"]);

//* Agregar nuevas propiedades
producto.imagen = 'imagen.jpg'; 

//* Eliminar propiedades
delete producto.disponible;


console.log(producto);