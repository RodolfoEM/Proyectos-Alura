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

const listaClientes = () => {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    //CRUD: Create-POST, Read-GET, Update-PUT/PATCH, Delete-DELETE
    // Abrir-open http(recibe el método y la url). Con esto dejamos que JS se encargue de obtener la información
    http.open("GET", "http://localhost:3000/perfil");

    http.send(); //Esta funcion se encarga de enviar la petición

    http.onload = () => {
      //Aquí obtenemos la respuesta del servidor.
      const response = JSON.parse(http.response); // aquí convertimos en un objeto el texto que se nos envía como respuesta
      if (http.status >= 400) { // Aqupi validamos el código de respuesta del http, en caso de que sea mayopr o igual a 400 se entiende que hubo un error y se procede con el reject, en caso de que no se envía la respuesta.
        reject(response);
      } else {
        resolve(response);
      };
    };
  });
  return promise;
};

listaClientes().then((data) => { //Con esta función manejamos lo que sucederá en caso de obtener una respuesta de nmuestra promesa. La información de respuesta de la promesa la recibimos con el parámetro "data"
    data.forEach((perfil) => {
      // Aquí estamos iterando entre cada uno de los datos u objetos que se nos envía como respuesta.
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email); // Aquí creamos una constante que gusrdará el resultado de ejecutar la finción nueva línea, en dónde se recibe el nombre e email y lo guarda en un formato para html
      table.appendChild(nuevaLinea); // Aquí insertamos en la etiqueta padre de la tabla el html con la nueva información del usuario
    });
}).catch((error) => { alert("Ocurrió un error")}); // Agregamos un catch para manejar el error en caso de que suceda.
