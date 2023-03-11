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

const presupuestoDisponible = 590;

let i = 0;
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

do {
    if (datos[i].precio < presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
    }
    i++;
} while(i < datos.length && ciudadSeleccionada == '')

if (ciudadSeleccionada == '') {
    console.log("No tenemos ciudades disponibles");
} else {
    console.log(`Puedes comprar pasaje para: ${ciudadSeleccionada}`);
}