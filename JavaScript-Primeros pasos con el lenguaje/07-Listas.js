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