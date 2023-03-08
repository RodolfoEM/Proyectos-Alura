const ciudadDestino = "Montevideo";
const ciudadesDisponibles = new Array ('Quito', 'Bogotá', 'Lima', 'Santiago', 'Montevideo')

let edadPasajero = 17;
let estaAcompanado = true;
let tienePasaporte = true;

// A && B || C
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 && edadPasajero >= 18 && tienePasaporte) {
        console.log("Pasaje disponible para venta");
} else {
    console.log("El pasajero no cumple las reglas para viajar");
}