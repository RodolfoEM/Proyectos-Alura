const btn = document.querySelector('[data-form-btn]');


// Inmediattely invoked function expression 
( () => {
    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card')
        input.value = "";
        //backticks
        const taskContainer = document.createElement("div");
        const titleTask = document.createElement("span")
        titleTask.classList.add("task")
        titleTask.innerText = value

        //task.innerHTML = content;
        list.appendChild(task);
        task.appendChild(taskContainer);
        taskContainer.appendChild(checkComplete());
        taskContainer.appendChild(titleTask);
        task.appendChild(trashItem());
    };

    btn.addEventListener("click", createTask);

    // Arrow functions o funciones anónimas
    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon"); // Se puede agregar más de una clase separando con coma y entre comillas la clase
        i.addEventListener("click", completeTask);
        return i;
    }

    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle("fas"); // toggle valida si la clase existe, y si existe la quita y si no existe la pone
        element.classList.toggle("completeIcon")
        element.classList.toggle("far");
    }

    const trashItem = () => {
        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon"); // Se puede agregar más de una clase separando con coma y entre comillas la clase

        return i;
    }
})();