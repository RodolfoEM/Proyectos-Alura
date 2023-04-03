// Una clase es el molde de un objeto. Este puede contener propiedades y/o métodos
// Exportar clase
export class Cliente {
    nombreCliente; // este es una propiedad
    dniCliente;
    RFC;

    constructor(nombreCliente, dniCliente, RFC) {
        this.nombreCliente = nombreCliente; // este es una propiedad
        this.dniCliente = dniCliente;
        this.RFC = RFC;
    }
}