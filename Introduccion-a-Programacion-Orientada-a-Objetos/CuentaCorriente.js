// Una clase es el molde de un objeto. Este puede contener propiedades y/o métodos
// Exportar clase
export class CuentaCorriente {
    #cliente; // aquí realizamos la unión de una clase con otra, en este caso cuenta corriente con cliente.
    numero; // este es una propiedad
    agencia;
    #saldo; // Con el simbolo # definimos como privada la variable

    set cliente(valor){
        this.#cliente = valor;
    }

    constructor() { // Esto sirve para agreegar un valor defaul
        this.#cliente = null; // aquí realizamos la unión de una clase con otra, en este caso cuenta corriente con cliente.
        this.numero = "";
        this.agencia = "";
        this.#saldo = 0;
    }

    depositoEnCuenta(valor) { // este es un método
        if(valor > 0){
            this.#saldo += valor;
            return this.#saldo;
        }
    }

    retirarDeCuenta(valor) { // este es un método
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return this.#saldo;
        }
    }

    verSaldo() { // Este método nos permite retornar el valor de nuestro atributo privado "saldo"
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}