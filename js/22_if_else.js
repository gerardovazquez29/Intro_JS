//* if_ else

console.log('Inicio del Programa');

let isTired = true;

if (isTired) {
    console.log('Tomar Cafe');
} else {
    console.log('Tomar Agua');
}

//* negacion

isTired = !isTired;

if (!isTired) {
    console.log('Tomar Agua');
}

let grade = 30;

if (grade >= 70) {
    console.log('El Alumno aprueba la clase')
} else if (grade >= 60) {
    console.log('El Alumno aprueba la clase Por favor Estudie mas!');
} else {
    console.log('El Alumno No aprueba la clase');
}

console.log('Fin del Programa');

