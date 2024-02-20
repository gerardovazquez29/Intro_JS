//* "use strict"; // Correr JS en modo estricto
//* Objetos


const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//*Object.freeze(producto); //* bloquea todo no podras agregar, eliminar y modificar una propiedad

Object.seal(producto); //* No permite agregar mas propiedades ni eliminar propiedades pero si puedes modificar los existentes

producto.imagen = 'imagen.jpg'; //* para agregar nuevas propiedades

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);