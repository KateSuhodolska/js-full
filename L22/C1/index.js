const divEl = document.querySelector(".rect_div");
const pEl = document.querySelector(".rect_p");
const spanEl = document.querySelector(".rect_span");

const logTarget = (text, color) => {
    const eventsListItem = document.querySelector(".events-list");

    eventsListItem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, "div", "green");
const logGreenP = logTarget.bind(null, "p", "green");
const logGreenSpan = logTarget.bind(null, "span", "green");

const logGreyDiv = logTarget.bind(null, "div", "grey");
const logGreyP = logTarget.bind(null, "p", "grey");
const logGreySpan = logTarget.bind(null, "span", "grey");

const container = document.querySelector(".events-list");
const clearButton = document.querySelector(".clear-btn");

clearButton.addEventListener("click", () => {
    container.innerHTML = "";
});

const attach = () => {
    divEl.addEventListener("click", logGreyDiv, true);
    divEl.addEventListener("click", logGreenDiv);

    pEl.addEventListener("click", logGreyP, true);
    pEl.addEventListener("click", logGreenP);

    spanEl.addEventListener("click", logGreySpan, true);
    spanEl.addEventListener("click", logGreenSpan);
};

attach();

const attachHendler = document.querySelector(".attach-handlers-btn");
attachHendler.addEventListener("click", attach);

const remove = () => {
    divEl.removeEventListener("click", logGreyDiv, true);
    divEl.removeEventListener("click", logGreenDiv);

    pEl.removeEventListener("click", logGreyP, true);
    pEl.removeEventListener("click", logGreenP);

    spanEl.removeEventListener("click", logGreySpan, true);
    spanEl.removeEventListener("click", logGreenSpan);
};

const removeHendler = document.querySelector(".remove-handlers-btn");
removeHendler.addEventListener("click", remove);