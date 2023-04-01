// Importacion de Clases
import {CuentaCorriente} from "./CuentaCorriente.js"
import {Cliente} from "./Cliente.js"
// Aquí estamos realizando la creacion de una instancia apartir de las clases que ya hemos generado
const cliente1 = new Cliente();
cliente1.nombreCliente = "José"
cliente1.dniCliente = "13232"

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "2323456"
cuentaCorriente1.agencia = "00000012"
//cuentaCorriente1.#saldo = 300 // no se debe manipular un método privado, es por eso que manda error al querer manipularlo
cuentaCorriente1.depositoEnCuenta(100);
cuentaCorriente1.retirarDeCuenta(150);

console.log(cliente1);
console.log(cuentaCorriente1);


// Esta es otra instancia
const leonardoCliente = new Cliente(); // Al no definir nada para esta nueva instancia, se asignaran los valores por default del constructor
const cuentaDeLeonardo = new CuentaCorriente(); // Al no definir nada para esta nueva instancia, se asignaran los valores por default del constructor
// cuentaDeLeonardo.depositoEnCuenta(-10); // Aqui provamos que no se permitan los depósitos en negativo
// console.log(cuentaDeLeonardo);
// cuentaDeLeonardo.retirarDeCuenta(125); // Aqui provamos que no se permitan los retiros mayores al saldo en la cuenta
// console.log(cuentaDeLeonardo);

cuentaDeLeonardo.depositoEnCuenta(200);
let saldo = cuentaDeLeonardo.verSaldo(); //Aquí podemos obtener la información de nuestro saldo pese a ser un atributo privado
console.log(`El saldo actual de la cuenta es ${saldo}`);
