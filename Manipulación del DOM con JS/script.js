import checkComplete from "./components/ckeckComplete.js";
import trashItem from "./components/deleteTask.js";

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

        //Aquí realizamos el armado de los items que se irán agregando
        list.appendChild(task);
        task.appendChild(taskContainer);
        taskContainer.appendChild(checkComplete());
        taskContainer.appendChild(titleTask);
        task.appendChild(trashItem());
    };

    btn.addEventListener("click", createTask);

})();