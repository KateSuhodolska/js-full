const spinerEl = document.querySelector(".spinner");

export const showSpinner = () => {
    spinerEl.classList.remove(".spinner_hidden");
};

export const hideSpinner = () => {
    spinerEl.classList.add(".spinner_hidden");
};