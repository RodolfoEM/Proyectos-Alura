// Una clase es el molde de un objeto. Este puede contener propiedades y/o métodos

import { Cliente } from "./Cliente.js";

// Exportar clase
export class CuentaCorriente {
    #cliente; // aquí realizamos la unión de una clase con otra, en este caso cuenta corriente con cliente.
    numero; // este es una propiedad
    agencia;
    #saldo; // Con el simbolo # definimos como privada la variable
    static cantidadCuentas = 0; // Este es un atributo estático(general o común para todas las clases)

    set cliente(valor){ // Este método sirve para asignar un valor a un objeto privado
        if(valor instanceof Cliente){ // Aquí validamos si el valor que le estamos pasando a cliente está dentro de la clase Cliente, en caso de que no, no se asigna. Esta es una forma de proteger los atributos privados.
            this.#cliente = valor;
        }
    }

    get cliente(){ // Esto sirve para obtener un el valor de un objeto privado
        return this.#cliente;
    }

    constructor(cliente, numero, agencia) { // Esto sirve para agreegar un valor defaul
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;
        // this.#cliente = cliente; // aquí realizamos la unión de una clase con otra, en este caso cuenta corriente con cliente.
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