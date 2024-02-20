//* Arreglos o Arrays

const numeros = [10,20,30,40,50];

//* const arreglo = ['hola', 10, true, {nombre: 'Gerardo', trabajo: 'programador'}, [1,2,3]];//* En un arreglo puedes almacenar todo lo que quieras objetos y arreglos string numeros

//*console.log(arreglo);


//* Acceder a los valores de un arreglo

//* console.log(numeros[0]);
//* console.log(numeros[1]);
//* console.log(numeros[2]);
//* console.log(numeros[3]);
//* console.log(numeros[4]);

//* Conocer la extensión de un arreglo
//*const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
//* console.log(meses.length);


 numeros.forEach( function(numero) {
     console.log(numero);
 })  //* esta funcion te permite entrar a cada uno de los elementos del arreglo

numeros.push(60,70,80); //* .push agrega un elemento y lo manda al final del arreglo
numeros.unshift(-10,-20,-30); //*.unshift agrega un elemento al inicio del arreglo */

console.table(numeros); //* .table = Muestra los arreglos en una tabla

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//* meses.pop(); //* elimina el último elemento */
//* meses.shift(); //* elimina el primer elemento */
//*  */
//* meses.splice(2, 1); //* elimina todos los elmentos menos los  *//* que indica */
//* console.table(meses); */


//* Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio']; //* con este arreglo agrega nuevos elementos sin modificar los anteriores arreglos y si se quiere mover al principio se cambia de lugar lo que quieres modificar.
console.log(nuevoArreglo);
