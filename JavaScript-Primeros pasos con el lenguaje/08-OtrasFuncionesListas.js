const ciudadesDisponibles = new Array ('Quito', 'Bogotá', 'Lima', 'Santiago', 'Motevideo')

const paisesDisponibles = ['Ecuador','Colombia','Perú','Chile','Brasil', 'Argentina','Uruguay'] //Definición de una lista de forma abreviada.

const cantidadCiudades = ciudadesDisponibles.length

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

// Remover el primer elemento
ciudadesDisponibles.shift();

// Remover el último elemento
ciudadesDisponibles.pop();

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);


// Filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e) => e == 'Brazil')

// Covertit lista en cadena de Caracteres
const paisesSeparados = paisesDisponibles.join('-'); // Separa cada elemento del array con un guión(-)
console.log(paisesSeparados);

//Ordenar la lista(modifica la lista)
const paisesOrdenados = paisesDisponibles.sort();
console.log(paisesOrdenados);
console.log(paisesDisponibles);

// Conociendo la posición
console.log(`Perú está en la posición: ${paisesDisponibles.indexOf('Perú')}`);

// Unificación de Listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesYCiudades);