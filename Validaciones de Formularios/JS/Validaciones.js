export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    nacimiento: input => validarNacimiento(input)
}

// const inputNacimiento = document.querySelector("#birth");

// inputNacimiento.addEventListener("blur", (event) => {
//     validarNacimiento(event.target);
// });

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad"
    };
    input.setCustomValidity(mensaje); // el método setCustomValidity lo utilizamos para enviar el mensaje de error al html en caso de que el usuario tenga menos de 18 años de edad
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date(); // esto sirve para sacar la fecha actual
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaFechas < fechaActual;
}