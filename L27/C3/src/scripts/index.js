import { renderTasks } from "./renderTask.js";
import { initTodoListHandlers } from "./todoList.js";

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();
    initTodoListHandlers();
});

const onStorageChange = (event) => {
    if (event.key === "tasksList") {
        renderTasks();
    }
};

window.addEventListener("storage", onStorageChange);