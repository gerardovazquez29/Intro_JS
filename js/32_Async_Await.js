//* Async_Await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Los Clientes fueron Descargados');
        }, 5000 );
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Los Pedidos fueron Descargados');
        }, 3000 );
    });
}

async function app() {
   try {
    //* con este modo no es conveniente por que las dos funciones se ploquean asta que la primera se complete.

    //*    const clientes = await descargarNuevosClientes();
    //*    const pedidos = await descargarUltimosPedidos();
    //*    console.log(clientes);
    //*    console.log(pedidos);

    const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
    console.log(resultado[0]);      //* las dos funciones se ejecutan al mismo tiempo
    console.log(resultado[1]);
   } catch (error) {
       console.log(error);
   }

  
}

app();

