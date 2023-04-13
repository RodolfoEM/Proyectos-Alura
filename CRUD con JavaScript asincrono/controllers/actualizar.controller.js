import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");


const obtenerInformacion = async () => {
    const url = new URL(window.location); // esta es una clase(URL) que ya viene instalada en JS
    const id = url.searchParams.get("id");

    if(id == null){
        window.location.href = "/screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]")
    const email = document.querySelector("[data-email]")

    try { // try cath se usa dentro de las funciones asincronas para el manejo de errores o excepciones
        const perfil = await clientServices.detalleCliente(id);
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        }else{
            throw new Error(); // Aquí hacemos llamado al catch en caso de que perfil(nombre e email) este vacío
        }
    } catch (error) {
        console.log("Catch error - ", error);
        alert("Hubo un error")
        window.location.href = "/screens/error.html"
    }

    //Este código se comenta ya que con el uso de async y await podemos manejarlo de otra forma, ejemplo: se crea la constante perfil en donde recibimos la respuesta, por lo que omitimos el uso de .then
    // clientServices.detalleCliente(id).then( perfil => {
    //     nombre.value = perfil.nombre;
    //     email.value = perfil.email;
    // })
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    const url = new URL(window.location); // esta es una clase(URL) que ya viene instalada en JS
    const id = url.searchParams.get("id");
    clientServices.actualizarCliente(nombre, email, id).then(() => {
        window.location.href = "/screens/edicion_concluida.html"
    })

})

obtenerInformacion();