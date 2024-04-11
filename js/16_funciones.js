
//* Declaración de Función
function sumar() {
    console.log(10 + 10);
}

sumar();


//* Expresión de la función en este caso marca error porque la marca como constante
const sumar2 = function() { 
    console.log( 3 + 3); 
} 
sumar2(); 

//* diferencia de las dos funciomes la declaracion si la mandas a llamar antes de que la expeses sigue funcionando en cambio la expresion marca error.



//* IIFE  no ocupa de llamarse se utilizan en gcueri
(function() {
    console.log('Esto es una funcion');
})();

