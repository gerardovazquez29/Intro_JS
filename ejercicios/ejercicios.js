

//* Números FizzBuzz
//*Descripción: Imprime los números del 1 al 100. Para los múltiplos de 3, 
//*imprime "Fizz" en lugar del número, y para los múltiplos de 5, imprime "Buzz". 
//*Si el número es múltiplo de ambos (3 y 5), imprime "FizzBuzz".
//*Objetivo: Practicar el uso de condicionales.

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }else if (i % 3 === 0) {
        console.log('Fizz');
    }else if (i % 5 === 0) {
        console.log('Buzz');
    }else {
        console.log(i);
    }
}