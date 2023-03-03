const nombrePasajero = "Leonardo";
const apellidoPasajero = "De la Cruz"

// Template String(Plantillas de texto)
// Se pueden escribir variables y strings en concatenación con el uso de `` y poniendo entre estas el texto, las variables deben de ir dentro de ${} para que el sistema sepa que son variables.
let nombreCompleto = `El nombre completo es:${nombrePasajero} ${apellidoPasajero}`;
console.log(nombreCompleto);

// Mutabilidad de los datos.
// Las variables declaradas con let pueden ser cambiadas.
let segundoPasajero = "Diego Castillo";
console.log(`El nombre del segundo pasajero es: ${segundoPasajero}`);

segundoPasajero = 13804050;
console.log(`El nombre del segundo pasajero es: ${segundoPasajero}`);
