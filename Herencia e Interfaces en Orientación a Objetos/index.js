/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js'
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

// Referencias a Cuenta. Se comentan para probar la parte de Empleado

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave("010101");
console.log(SistemaAutenticacion.login(cliente, "010101"));


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

/*
const cuentaSimple = new Cuenta(cliente, "23", "099") // aquí estamos haciendo uso directo de la clase padre "Cuenta", lo cual no es correcto.
console.log(cuentaSimple);
*/

// Referencias a Empleado. Se comentan para probar la parte de Cuenta
const empleado = new Empleado("Juan Perez", "12121212", 10000);
empleado.asignarClave("12345");
const gerente = new Gerente("Helena Moreno", "92929", 12000);
gerente.asignarClave("09876");
const director = new Director("Raúl Jimenez", "92929203", 15000);
director.asignarClave("5678");
/*
console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());
*/

console.log(SistemaAutenticacion.login(empleado, "12345"));
console.log(SistemaAutenticacion.login(gerente, "1"));