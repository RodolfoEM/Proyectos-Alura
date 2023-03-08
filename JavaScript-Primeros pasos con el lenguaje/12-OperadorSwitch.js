const ciudadDestino = "Montevideo";
const ciudadesDisponibles = new Array ('Quito', 'Bogotá', 'Lima', 'Santiago', 'Montevideo')

let valorPasaje = 0;

// Solución con if
// if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
//     // Validación de costo aplicable
//     if(ciudadDestino == "Bogotá") {
//         valorPasaje = 500;
//     } else if (ciudadDestino == "Montevideo") {
//         valorPasaje = 400;
//     } else if (ciudadDestino == "Lima") {
//         valorPasaje = 300;
//     } else if (ciudadDestino == "Santiago") {
//         valorPasaje = 200;
//     } else {
//         valorPasaje = 600;
//     }
// } else {
//     console.log("Ciudad no disponible para viajar");
// }

console.log(`El valor del pasaje es ${valorPasaje}`);

//Solución con Switch
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
    // Validación de costo aplicable
    switch(ciudadDestino){
        case "Bogotá":
            valorPasaje = 500;
            break;
        case "Quito":
            valorPasaje = 400;
            break;
        case "Lima":
            valorPasaje = 300;
            break;
        case "Montevideo":
            valorPasaje = 200;
            break;
        default:
            console.log("No hay pasajes para la ciudad indicada");
            break;
    }
} else {
    console.log("Ciudad no disponible para viajar");
}

console.log(`El valor del pasaje es ${valorPasaje}`);