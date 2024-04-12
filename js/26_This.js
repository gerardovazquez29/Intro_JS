//* This

const reservacion0 = {
    nombre: 'Gerardo',          
    informacion: function() {
        console.log(`El Cliente ${this.nombre}`);
    }
}
reservacion0.informacion();
//* cuando vienen con this es recomendable que contenga la funcion con function y asi hace referencia al nombre que en ves de un arrow funcion esa hace referencia ala ventana global y da como resultado undefine


const reservacion = {
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();