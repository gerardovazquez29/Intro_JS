//* For Loop

for( let i = 0; i < 10; i++ ) {
     console.log(i);
 }

for( let i = 1; i <= 20; i++ ) {
     if( i % 2 === 0 ) {
         console.log(`El Número ${i} es PAR`);
     } else {
         console.log(`El Número ${i} es IMPAR`);
     }
 }

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },  //* areglo con for
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

for(let i = 0; i < carrito.length; i++ ) {
    console.log( carrito[i].nombre );
}



//* While Loop

let j = 20; //* Indice

while(j < 10) { //* Condición

     console.log('Desde el while loop'); //* primero evalua antes de ejecutar.

     j++;  //* Incremento
 }



//* Do While Loop

let i = 100;

do {            //* el do while se ejecuta una vez y despues evalua
    console.log(i);

    i++;
} while( i < 10);

