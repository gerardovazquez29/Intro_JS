//* for

let limite = 100;

for (let i = 0; i <= limite ; i++) {
    //* if (i === 5) { */
    //*     continue; *///* le dice al programa que continue asta llagar al objetivo
    //* } */
    
    console.log(`let i: ${i}`);
    if (i === 5) {
        break;  //*detiene el contador 
    }
}
console.log('fin del programa');
