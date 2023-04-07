// Clase para revisar el tema de polimorfismo(puede ser llamada por clases distintas que no heredan o tiene algo en comun, en este caso cliente y empleado)

export class SistemaAutenticacion{
    static login(usuario, clave){ // La palabra reservada "static" convierte estafunción/método en estatico, lo que quiere decir que solo se crea una vez.
        if("autenticable" in usuario && usuario.autenticable instanceof Function){ // esta validacion nos permite validar que se valide ai el método autenticable esta dentro de la clase(del usuario, "cliente" o "empleadp") que la manda a llamar. En la primera parte valida si se encuentra como atributo y en la segunda, despues del &&(AND) si se encuentra como función.
            return usuario.autenticable(clave);
        } else {
            return false;
        }
        //return usuario.clave === clave;
    }
}