// Una clase es el molde de un objeto. Este puede contener propiedades y/o métodos
// Exportar clase
export class CuentaCorriente {
    numero; // este es una propiedad
    #saldo; // Con el simbolo # definimos como privada la variable
    agencia;

    constructor() { // Esto sirve para agreegar un valor defaul
        this.numero = ""
        this.#saldo = 0;
        this.agencia = ""
    }

    depositoEnCuenta(valor) { // este es un método
        if(valor > 0){
            this.#saldo += valor;
            return this.#saldo
        }
    }

    retirarDeCuenta(valor) { // este es un método
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return this.#saldo
        }
    }

        verSaldo() { // Este método nos permite retornar el valor de nuestro atributo privado "saldo"
            return this.#saldo;
        }
}