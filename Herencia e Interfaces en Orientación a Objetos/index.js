/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Cuenta } from './Cuenta.js';
import { CuentaAhorro } from './CuentaAhorro.js';
import { CuentaCorriente } from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, "99985", "001", 0)

/*
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(25);
console.log(cuentaDeLeonardo.verSaldo());

console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(100);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(80);
console.log(cuentaAhorroLeonardo.verSaldo());

cuentaAhorroLeonardo.prueba();// Esta es una prueba para comprobar la sobre escritura de un método padre.
*/

const cuentaSimple = new Cuenta(cliente, "23", "099") // aquí estamos haciendo uso directo de la clase padre "Cuenta", lo cual no es correcto.
console.log(cuentaSimple);