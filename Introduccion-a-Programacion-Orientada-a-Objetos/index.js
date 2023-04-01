// Importacion de Clases
import {CuentaCorriente} from "./CuentaCorriente.js"
import {Cliente} from "./Cliente.js"
// Aquí estamos realizando la creacion de una instancia apartir de las clases que ya hemos generado
const cliente1 = new Cliente();
cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "2323456";
cuentaCorriente1.agencia = "00000012";
cuentaCorriente1.cliente = cliente1; // aquí realizamos la unión de una clase con otra, en este caso cuenta corriente con cliente.
//cuentaCorriente1.#saldo = 300 // no se debe manipular un método privado, es por eso que manda error al querer manipularlo
cuentaCorriente1.depositoEnCuenta(100);
cuentaCorriente1.retirarDeCuenta(150);

console.log(cliente1);
console.log(cuentaCorriente1);
//--------------------------------------------------------------------------------------------------------------------------------------------------
// Esta es otra instancia
const leonardoCliente = new Cliente(); // Al no definir nada para esta nueva instancia, se asignaran los valores por default del constructor
const cuentaDeLeonardo = new CuentaCorriente(); // Al no definir nada para esta nueva instancia, se asignaran los valores por default del constructor
// cuentaDeLeonardo.depositoEnCuenta(-10); // Aqui provamos que no se permitan los depósitos en negativo
// console.log(cuentaDeLeonardo);
// cuentaDeLeonardo.retirarDeCuenta(125); // Aqui provamos que no se permitan los retiros mayores al saldo en la cuenta
// console.log(cuentaDeLeonardo);

let saldo = cuentaDeLeonardo.verSaldo(); //Aquí podemos obtener la información de nuestro saldo pese a ser un atributo privado
saldo = cuentaDeLeonardo.depositoEnCuenta(200);
console.log(`El saldo actual de la cuenta es ${saldo}`);

//--------------------------------------------------------------------------------------------------------------------------------------------------

const clienteMaria = new Cliente();
clienteMaria.nombreCliente = "Maria";
clienteMaria.dniCliente = "120292";
clienteMaria.RFC = "MPRO002803MSJÑ00"

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = "09";
cuentaDeMaria.agencia = "100";
cuentaDeMaria.cliente = clienteMaria;

let saldoDeMaria = cuentaDeMaria.verSaldo(); //Aquí podemos obtener la información de nuestro saldo pese a ser un atributo privado
console.log(`El saldo actual de la cuenta(Cuenta de Maria) es ${saldoDeMaria}`);

cuentaDeLeonardo.transferirParaCuenta(150,cuentaDeMaria); // Aquí se realizz la transferencia de dinero de la cuenta de Leonardo a la cuenta de Maria
let saldoDeLeonardo = cuentaDeLeonardo.verSaldo(); // creamos esta variable para consultar el saldo de la cuenta de Leonardo
console.log(`El saldo actual de la cuenta(Cuenta de Leonardo) es ${saldoDeLeonardo}`); // Consultamos nuevamente el saldo de la cuenta de Leonardo
saldoDeMaria = cuentaDeMaria.verSaldo(); // Consultamos nuevamente el saldo de la cuenta de Maria
console.log(`El saldo actual de la cuenta(Cuenta de Maria) es ${saldoDeMaria}`); // Consultamos nuevamente el saldo de la cuenta de Maria

