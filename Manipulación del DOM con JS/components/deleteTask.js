const trashItem = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon"); // Se puede agregar más de una clase separando con coma y entre comillas la clase
    i.addEventListener("click", deleteTask)
    return i;
}

const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove()
}

export default trashItem;