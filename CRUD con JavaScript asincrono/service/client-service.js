//Fetch API
const listaClientes = () =>
  // El código de un arrow function puede omitir los return si omitiumos las llaves, como en este ejemplo.
  fetch("http://localhost:3000/perfil") //Fetch es una función que sirve para realizar peticiones y obtener respues de http. Recibe como parámetro el tipo de solicitud y la URL(en caso de no venir el tipo de solicitud, se asume GET).
    .then(
      (
        respuesta // Seguido colocamos el .then en donde colocaremos la función con la indicación de lo que queremos que se haga con la respuesta
      ) => respuesta.json() // Aquí le damos un formato de JSON a la respuesta
    );

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST", // Dentro del objeto de fetch colocamos el tipo de petición
    headers: { //Dentro de headers definimos el tipo de contenido que enviaremos.
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4()}) // Aqupi definimos el contenido que enviaremos. JSON.stringify permite convertir a texto el objeto ya que es el formato que usa http.
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
});
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`)
  .then((respuesta) => respuesta.json()
  );
};

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT", // Dentro del objeto de fetch colocamos el tipo de petición, en este caso es un envió
    headers: { //Dentro de headers definimos el tipo de contenido que enviaremos.
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email}) // Aquí definimos el contenido que enviaremos. JSON.stringify permite convertir a texto el objeto ya que es el formato que usa http.
  })
  .then( respuesta => respuesta)
  .catch(err => console.log(err));
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente
};