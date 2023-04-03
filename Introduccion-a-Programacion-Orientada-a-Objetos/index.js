// Importacion de Clases(previamente se debe de indicar el type:module en el htgml o en el json del atchivo generado al crear elñ proyecto en npm init)
import {CuentaCorriente} from "./CuentaCorriente.js"
import {Cliente} from "./Cliente.js"
// // Aquí estamos realizando la creacion de una instancia apartir de las clases que ya hemos generado
// const cliente1 = new Cliente("José", "13232", "000000"); // aqui pasamos los valores de la instancia mediante un parámetro
// cliente1.nombreCliente = "José"; // aqui pasamos los valores de la instancia 1 por uno
// cliente1.dniCliente = "13232";
// cliente1.RFC = "000000"
// const cuentaCorriente1 = new CuentaCorriente(cliente1, "2323456", "00000012");
// cuentaCorriente1.cliente = cliente1; // aquí realizamos la unión de una clase con otra, en este caso cuenta corriente con cliente.
//cuentaCorriente1.#saldo = 300 // no se debe manipular un método privado, es por eso que manda error al querer manipularlo
// cuentaCorriente1.depositoEnCuenta(100);
// cuentaCorriente1.retirarDeCuenta(150);

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Esta es otra instancia
const clienteLeonardo = new Cliente("Leonardo","1234", "LEO29283") // Gracias al constructor que creamos, podemos pasar mediante parámetros los valores que necesita nuestra nueva instancia. Esto permite ahorrar lineas de código y tener un mejor manejo.
const clienteMaria = new Cliente("Maria", "120292", "MPRO002803MSJÑ00");

const cuentaDeLeonardo = new CuentaCorriente(clienteLeonardo, "01", "100")
const cuentaDeMaria = new CuentaCorriente(clienteMaria, "09", "100");

let saldo = cuentaDeLeonardo.verSaldo(); //Aquí podemos obtener la información de nuestro saldo pese a ser un atributo privado
saldo = cuentaDeLeonardo.depositoEnCuenta(200);
console.log(`El saldo actual de la cuenta es ${saldo}`);

//--------------------------------------------------------------------------------------------------------------------------------------------------



let saldoDeMaria = cuentaDeMaria.verSaldo(); //Aquí podemos obtener la información de nuestro saldo pese a ser un atributo privado
console.log(`El saldo actual de la cuenta(Cuenta de Maria) es ${saldoDeMaria}`);

cuentaDeLeonardo.transferirParaCuenta(150,cuentaDeMaria); // Aquí se realizz la transferencia de dinero de la cuenta de Leonardo a la cuenta de Maria
let saldoDeLeonardo = cuentaDeLeonardo.verSaldo(); // creamos esta variable para consultar el saldo de la cuenta de Leonardo
console.log(`El saldo actual de la cuenta(Cuenta de Leonardo) es ${saldoDeLeonardo}`); // Consultamos nuevamente el saldo de la cuenta de Leonardo
saldoDeMaria = cuentaDeMaria.verSaldo(); // Consultamos nuevamente el saldo de la cuenta de Maria
console.log(`El saldo actual de la cuenta(Cuenta de Maria) es ${saldoDeMaria}`); // Consultamos nuevamente el saldo de la cuenta de Maria

console.log(cuentaDeMaria.getCliente);// Aquí mostramos el valor del atributo privado de cliente en la cuenta corriente.