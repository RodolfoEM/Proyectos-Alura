import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta{
    constructor(cliente, numero, agencia, saldo) {
        super(cliente, numero, agencia, saldo); // la palabra reservada "super" permite llamar funciones internas del padre
    }

    prueba(){
        super.prueba(); // Este es un ejemplo de como se accede al método padre a traves del método hijo.
        console.log("Método hijo"); // este Log sirve para testear como podemos sobreescribir un método del padre. Supon que del padre ocupas el 90% de lo que tiene, pero el 10% puede ser de la clase en especifico que se usa, en este caso "CuentaAhorro"
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 2);
    }
}