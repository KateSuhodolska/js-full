const counter = document.querySelector(".counter");
const counterNum = document.querySelector(".counter__num");

const onCounterChange = (event) => {
    const isButton = event.target.classList.contains("counter__button");
    if (!isButton) {
        return;
    }

    const action = event.target.dataset.action;
    const oldValue = Number(counterNum.textContent);
    const newValue = action === "decrease" ? oldValue - 1 : oldValue + 1;
    counterNum.textContent = newValue;
    localStorage.setItem("currentValue", JSON.stringify(newValue));
};

const onStorageChange = (event) => {
    counterNum.textContent = event.newValue;
};

window.addEventListener("storage", onStorageChange);
counter.addEventListener("click", onCounterChange);