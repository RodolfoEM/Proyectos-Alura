const ciudad1 = "Bogotá";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

// Definición de una lista con tipo de dato alfanumérico
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago");
console.log(ciudadesDisponibles);

// Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina"];
console.log(paisesDisponibles);

{
    ciudadesDisponibles.push("Motevideo"); // El método "push" agrega un elemento al final del Array(Arreglo)
    paisesDisponibles.push("Uruguay"); // El método "push" agrega un elemento al final del Array(Arreglo)

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);

    ciudadesDisponibles.unshift("Quito"); // El método "unshift" agrega un elemento al inicio del Array(Arreglo)
    paisesDisponibles.unshift("Ecuador"); // El método "unshift" agrega un elemento al inicio del Array(Arreglo)

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);

}

// Mostrar un elemento especifico dentro de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[1]);

// Uso de splice(elimina y a la ves agrega elementos a la lista)
paisesDisponibles.splice(1,2, 'Venzuela', 'Paraguay') // Los numeros indican la posición en donde se encuentran los elementos que se rquieren eliminar
console.log(paisesDisponibles);
