// Arrow functions o funciones anónimas
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon"); // Se puede agregar más de una clase separando con coma y entre comillas la clase
    i.addEventListener("click", completeTask);
    return i;
};

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas"); // toggle valida si la clase existe, y si existe la quita y si no existe la pone
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};

export default checkComplete;