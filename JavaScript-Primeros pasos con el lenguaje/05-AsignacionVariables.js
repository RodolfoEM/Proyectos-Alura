// Palabra const
// Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "De la Cruz"

console.log(nombrePasajero);
console.log(apellidoPasajero);

// Palabra let
// Espacio de memoria que puede cambiar durante la ejecución del programa
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);

// Palabra Var
// Espacio de memoria que puede cambiar durante la ejecución del programa
// El alcance de la variable es total en el punto principal del programa
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);

// Bloque
{
    console.log(nombreCompletoPasajero);
    console.log(nombreCompletoDelPasajero);
}