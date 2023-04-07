export class Empleado{
    #nombre;
    #dni;
    #salario;
    #clave;

    constructor(nombre, dni, salario){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = "";
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    autenticable(clave){ //Esta es un método poliformico que sirve para conectar con la clase SistemaAutenticacion
        return clave === this.#clave;
    }

    verBonificacion(){
        return this.#salario;
    }

    _verBonificacion(bono){
        return this.#salario + (this.#salario*(bono/100));
    }
}