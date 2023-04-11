import { clientServices } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento) => { // Aquí creamos un escuchador de evento del frmulario, para que cuando se de submit al formulario se comience una acción
    evento.preventDefault(); // Aquíe realizamosun manejo para evitar el comportamiento por defecto del formulario
    const nombre = document.querySelector("[data-nombre]").value // Creamos una constante que guarde el valor del formulario correspondiente al nombre, en este caso con data-nombre y .value(este es importante, de lo contreario nos traeriamos el objeto html completo)
    const email = document.querySelector("[data-email]").value // Creamos una constante que guarde el valor del formulario correspondiente al nombre, en este caso con data-email y .value(este es importante, de lo contreario nos traeriamos el objeto html completo)
    console.log(nombre, "-", email);
    clientServices
        .crearCliente(nombre, email)
        .then(respuesta => {
            window.location.href = "/screens/registro_completado.html"
        })
        .catch(err => console.log(err))
});