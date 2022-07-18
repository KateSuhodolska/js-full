// eslint-disable-next-line import/named
import { renderTasks } from "./renderTask.js";
import { getItem, setItem } from "./storage.js";

export const newTask = () => {
    const taskField = document.querySelector(".task-input");
    const text = taskField.value;

    if (!text) {
        return;
    }

    taskField.value = "";

    const tasksList = getItem("tasksList") || [];
    const newTasksList = tasksList.concat({
        text,
        done: false,
        time: new Date(),
        id: Math.random(),
    });
    setItem("tasksList", newTasksList);
    renderTasks();
};