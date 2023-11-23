// to-do list
const formulario = document.getElementById("formulario");
const listaTareas = document.getElementById("lista-tareas");
const input = document.getElementById("input");

const templateItem = document.getElementById("template-item");

const fragment = document.createDocumentFragment();
let tareas = {};

document.addEventListener("DOMContentLoaded", () => {
    pintarTareas();
});

listaTareas.addEventListener("click", e => {
    btnAccion(e);
});

formulario.addEventListener("submit", e => {
    e.preventDefault();
    setTarea(e);
});

const setTarea = e => {
    if (input.value.trim() === "") {
        console.log("No hay valor");
    } else {
        // generar ID pseudoaleatorios con el date.now
        const tarea = {
            id: Date.now(),
            texto: input.value.trim(),
            completada: false
        }

        tareas[tarea.id] = tarea;

        console.log(tareas);
        formulario.reset();
        input.focus();

        pintarTareas();
    }
}

const pintarTareas = e => {
    if (Object.values(tareas).length) {
        listaTareas.innerHTML = "";
        Object.values(tareas).forEach(tarea => {
            const clone = templateItem.content.cloneNode(true);
            if (tarea.completada) {
                clone.querySelector(".alert").classList.replace("alert-warning", "alert-info");
                clone.querySelector(".fa-check").classList.replace("fa-check", "fa-undo-alt");
                clone.querySelector("p").style.textDecoration = "line-through";
            } else {
                clone.querySelector(".alert").classList.replace("alert-info", "alert-warning");
                clone.querySelector("p").style.textDecoration = "";
            }
            clone.querySelector("p").textContent = tarea.texto;
            clone.querySelector(".fa-check").dataset.id = tarea.id;
            clone.querySelector(".fa-times-circle").dataset.id = tarea.id;
            fragment.appendChild(clone);
        });
    } else {
        listaTareas.innerHTML = `
            <div class="alert alert-secondary d-flex justify-content-between align-items-center">
                <p class="m-0">No hay tareas</p>
            </div>`;
    }

    listaTareas.appendChild(fragment);
}

const btnAccion = e => {
    if (e.target.classList.contains("fa-check")) {
        tareas[e.target.dataset.id].completada = true;
    } else if (e.target.classList.contains("fa-times-circle")) {
        delete tareas[e.target.dataset.id];
    } else if (e.target.classList.contains("fa-undo-alt")) {
        tareas[e.target.dataset.id].completada = false;
    }
    pintarTareas();
    e.stopPropagation();
};
