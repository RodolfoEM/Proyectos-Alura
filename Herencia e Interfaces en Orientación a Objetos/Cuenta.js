export class Cuenta{
    #cliente; //este es un atributo privado
    #saldo; //este es un atributo privado

    constructor(cliente, numero, agencia, saldo){
        this.numero = numero; //este es un atributo público
        this.agencia = agencia; //este es un atributo público
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        _retirarDeCuenta(valor, 0);
    }

    _retirarDeCuenta(valor, comision) {
        valor *= (1+comision/100);
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }

    prueba(){ // Este método es para testear la sobre escritura de un método del padre.
        console.log("Método Padre");
    }
}