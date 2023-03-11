const ciudadesDisponibles = new Array ( 'Bogotá', 'Lima', 'Santiago', 'Montevideo');
const precioCiudades = [500,400,300,200];
const presupuestoDisponible = 690;

let i = 0;
// While se ejecuta cero o más veces
// Do... while 1 o más veces
while(precioCiudades[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
    i++;
}

if (i == ciudadesDisponibles.length) {
    console.log("No tenemos ciudades disponibles");
} else {
    console.log(`Puedes comprar pasaje para: ${ciudadesDisponibles[i]}`);
}