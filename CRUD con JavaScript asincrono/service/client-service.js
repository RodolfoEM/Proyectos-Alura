const http = new XMLHttpRequest();
//CRUD: Create-POST, Read-GET, Update-PUT/PATCH, Delete-DELETE
// Abrir-open http(recibe el método y la url). Con esto dejamos que JS se encargue de obtener la información
http.open("GET", "http://localhost:3000/perfil")

http.send(); //Esta funcion se encarga de enviar la petición

http.onload = () => { //Aquí obtenemos la respuesta del servidor.
    const data = http.response
    console.log(data);
}

console.log(http);