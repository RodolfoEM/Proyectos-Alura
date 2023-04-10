import { clientServices } from "../service/client-service.js";
const crearNuevaLinea = (nombre, email) => {
    // Esta función recibe como parámetros los datos del usuario(nombre e email)
    const linea = document.createElement("tr"); // Aquí estamos creando la etiqueta <tr> donde meteremos todo el contenido(información de los usuarios)
    // Esta constante contiene la estructura de HTML en el que se insertarán los datos
    const contenido = `
      <td class="td" data-td>
        ${nombre}
      </td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html"
              class="simple-button simple-button--edit"
            >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button">
              Eliminar
            </button>
          </li>
        </ul>
      </td>`;
    linea.innerHTML = contenido; // Aquí insertamos el contenido en tr
    return linea; // aquí regresamos el bloque de HTML con la información
};

const table = document.querySelector("[data-table]"); // Cramos una variable en donde guardaremos la etiqueta que tenga como referencia data-table

clientServices
    .listaClientes()
    .then((data) => {
        //Con esta función manejamos lo que sucederá en caso de obtener una respuesta de nmuestra promesa. La información de respuesta de la promesa la recibimos con el parámetro "data"
        data.forEach((perfil) => {
            // Aquí estamos iterando entre cada uno de los datos u objetos que se nos envía como respuesta.
            const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email); // Aquí creamos una constante que gusrdará el resultado de ejecutar la finción nueva línea, en dónde se recibe el nombre e email y lo guarda en un formato para html
            table.appendChild(nuevaLinea); // Aquí insertamos en la etiqueta padre de la tabla el html con la nueva información del usuario
        });
    })
    .catch((error) => alert("Ocurrió un error")); // Agregamos un catch para manejar el error en caso de que suceda.
