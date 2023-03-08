//Operadores de comparación
const ciudadDestino = "Montevideo";
const ciudadesDisponibles = new Array ('Quito', 'Bogotá', 'Lima', 'Santiago', 'Montevideo')

// Palabra reservada if
//Evalua una condición
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar");
}

const valorPasaje = "1000";

if (valorPasaje === 1000) {
    console.log("El pasaje vale 1000");
} else {
    console.log("El pasaje es diferente de 1000");
}

// Operadores lógicos
// Y (AND) - O (OR) - NO (NOT)
// AND - &&

let edadPasajero = 19;
let estaAcompanado = true;

if (edadPasajero >= 18 && estaAcompanado) {
    if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
        console.log("Pasaje disponible para venta");
    } else {
        console.log("Ciudad no disponible para viajar");
    }
} else {
    console.log("El pasajero es menor de edad o no está acompañado");
}
// OR - ||
edadPasajero = 19;
estaAcompanado = false;

if (edadPasajero >= 18 || estaAcompanado) {
    if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
        console.log("Pasaje disponible para venta");
    } else {
        console.log("Ciudad no disponible para viajar");
    }
} else {
    console.log("El pasajero es menor de edad o no está acompañado");
}

// NOT - !

edadPasajero = 15;
estaAcompanado = false;

if (!(edadPasajero <= 17) || estaAcompanado) {
    if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
        console.log("Pasaje disponible para venta");
    } else {
        console.log("Ciudad no disponible para viajar");
    }
} else {
    console.log("El pasajero es menor de edad o no está acompañado");
}
