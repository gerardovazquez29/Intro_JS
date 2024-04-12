
//*  Fetch_Api

//* empleados.json

//* se puede usar con fetch o await

async function obtenerEmpleados() {

  const archivo = 'empleados.json';

   fetch(archivo)       
      .then( resultado => resultado.json())
      .then( datos => {
     
        const { empleados} = datos;
        console.log(empleados);
      });
}
obtenerEmpleados();


//* se puede usar con  await o  fetch 

async function obtenerEmpleados() {

    const archivo = 'empleados.json';

    const resultado = await fetch(archivo); 
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();

console.log('_________________________________________');


