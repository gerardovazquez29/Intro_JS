//* Clases


class Producto {                  //* clase
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {                //* metodo
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());


console.log('_______________________________________________________');




//* Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto() } y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revolución', 120, '910313981389139');


console.log(libro.formatearProducto() );
