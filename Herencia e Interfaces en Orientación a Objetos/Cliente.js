export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = "";
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    autenticable(clave){ //Esta es un método poliformico que sirve para conectar con la clase SistemaAutenticacion
        return clave === this.#clave;
    }
}