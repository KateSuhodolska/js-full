export const setButton = (buttonText) => {
    const setBody = document.querySelector("body");
    setBody.innerHTML = `<button>${buttonText}</button>`;
};

setButton("good evening");