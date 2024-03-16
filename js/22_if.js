
//*!condicional IF

let data = prompt('ingrese su edad');
let edad_usuario = parseInt(data);
console.log(typeof(edad_usuario), typeof(data));
if (edad_usuario < 18) {
    console.log(`el usuario es menor de edad  ${edad_usuario}`);
} else if(edad_usuario >= 18){
    console.log(`el usuario es mayor de edad : ${edad_usuario}`);
}