export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío",
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, debe contener al menos una minúscula, una mayúsculas, un número y un símbolo especial"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacío",
        customError: "Debes tener al menos 18 años de edad"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "Debe contener de 10 a 40 caracteres. "
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "Debe contener de 10 a 40 caracteres. "
    },
    estado: {
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "Debe contener de 10 a 40 caracteres. "
    },
};

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje;
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