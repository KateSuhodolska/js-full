// eslint-disable-next-line import/no-cycle
import { getItem, setItem } from "./storage.js";

const listElem = document.querySelector(".list");

export const renderTasks = () => {
    const taskList = getItem("tasksList") || [];
    listElem.innerHTML = "";
    const tasksElems = taskList
        .sort((a, b) => a.done - b.done || a.time - b.time)
        .map(({ id, text, done, index }) => {
            const listItemElem = document.createElement("li");
            listItemElem.classList.add("list__item");
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.checked = done;
            checkbox.dataset.id = id;
            checkbox.classList.add("list__item-checkbox");
            if (done) {
                listItemElem.classList.add("list__item_done");
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};