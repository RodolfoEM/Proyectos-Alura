export class Cuenta{ // Cuenta es solo una clase abstracta, ya que solo es heredable, no es instanciable. Esto se logra manejando el acceso(vease la línea 8).
    #cliente; //este es un atributo privado
    #saldo; //este es un atributo privado

    constructor(cliente, numero, agencia, saldo){
        if(this.constructor === Cuenta){
            throw new Error("No se debe instanciar objetos de la clase cuenta"); // Esta es una forma de hacer la clase abtstracta y de manejar una funcionalidad que no deseamos que suceda. En este caso no queremos que se cree una cuenta directa, saltando las instancias de CuentaCorriente y CuentaAhorro. Esto valida si es una instancia directa de cuenta y en caso de que sí detiene el proceso y envia el mensaje
        }
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
        throw new Error("Debe de implementar el método retirarDeCuenta en su clase"); // Esta es una forma hacer el método Abstracto.
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