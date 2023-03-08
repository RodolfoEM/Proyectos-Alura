const ciudadDestino = "Quito";
const ciudadesDisponibles = new Array ('Quito', 'Bogotá', 'Lima', 'Santiago', 'Montevideo')

let edadPasajero = 16;
let estaAcompanado = false;

// Verificamos si el pasajero cumple las reglas.
if (edadPasajero >= 18 || estaAcompanado) {
    //Evaluamos si la ciudad está disponible para viajar
    if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
        console.log("Pasaje disponible para venta");
    } else {
        console.log("Ciudad no disponible para viajar");
    }
} else {
    if (edadPasajero >= 16 && ciudadDestino == "Lima") {
        console.log("Pasaje disponible para venta");
    } else {
        console.log("El pasajero no cumple las reglas");
    }
}