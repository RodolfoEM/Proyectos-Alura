//Tipos de datos
//Alfanumerico

let nombrePasajero = "Pedro Silva";
console.log(nombrePasajero);
nombrePasajero = "Ramón Silva";
console.log(nombrePasajero);

//Numérico
let valorBoleto = 1650;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

console.log(valorBoleto);
console.log(typeof valorBoleto); // Esto permite imprimir en pantalla el tipo de dato de la variable "valorBoleto"


//Lógicos (true, false)
let boletoActivo = true;

//Operaciones Aritméticas
//Suma
let totalBoletos = valorBoleto + 65.45 + 100;
console.log(totalBoletos);

//Orden de presedencia
let total = valorBoleto + valorBoleto*porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos);

//Concatenación de texto
let nombre = "Leonardo";
let apellido = "De la Cruz";

console.log(nombre + " " +apellido);

// controlar que el tipo de dato sea numérico
let multiplicacion = parseInt("1000") / parseInt    ("10")
console.log(multiplicacion);