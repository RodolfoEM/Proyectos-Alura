import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{ //Con la palabra reservada "extends" estamos heredando las funcionalidades de la clase "Cuenta".
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0); // la palabra reservada "super" permite llamar funciones internas del padre
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 5);
    }
}