const datos = [
    {
        'ciudad':'Bogotá',
        'precio': 500
    },
    {
        'ciudad':'Lima',
        'precio': 400
    },
    {
        'ciudad':'Santiago',
        'precio': 300
    },
    {
        'ciudad':'Montevideo',
        'precio': 200
    },
];

const presupuestoDisponible = 490;

let ciudadSeleccionada = '';
// While se ejecuta cero o más veces
// Do... while 1 o más veces
// while(i < datos.length && datos[i].precio > presupuestoDisponible ) { // aquí se recomienda primero evaluar si no hemos llegado al final de la lista, para evitar el undefined
//     i++;
// }

// if (i == datos.length) {
//     console.log("No tenemos ciudades disponibles");
// } else {
//     console.log(`Puedes comprar pasaje para: ${datos[i].ciudad}`);
// }

// for va desde un valor inicial para un valor final.

for (let i = 0; i < datos.length && ciudadSeleccionada == ''; i++) {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
    }
}


if (ciudadSeleccionada == '') {
    console.log("No tenemos ciudades disponibles");
} else {
    console.log(`Puedes comprar pasaje para: ${ciudadSeleccionada}`);
}