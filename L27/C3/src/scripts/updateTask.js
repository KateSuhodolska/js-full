import { renderTasks } from "./renderTask.js";
import { getItem, setItem } from "./storage.js";

export const onToggleTask = (event) => {
    const isCheckbox = event.target.classList.contains("list__item-checkbox");
    if (!isCheckbox) {
        return;
    }

    const tasksList = getItem("tasksList");
    const newTasksList = tasksList.map((el) => {
        if (el.id === Number(event.target.dataset.id)) {
            const done = !el.done;
            return {
                ...el,
                done,
                finishDate: done ? new Date().toString() : null,
            };
        }
        return el;
    });
    setItem("tasksList", newTasksList);
    renderTasks();
};