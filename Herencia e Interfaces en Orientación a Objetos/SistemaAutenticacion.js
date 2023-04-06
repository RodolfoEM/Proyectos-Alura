export class SistemaAutenticacion{
    static login(usuario, clave){ // La palabra reservada "static" convierte estafunción/método en estatico, lo que quiere decir que solo se crea una vez.
        return usuario.clave === clave;
    }
}