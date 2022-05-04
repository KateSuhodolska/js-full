export const getTitleElement = () => {
    const titleElem = document.querySelector(".title");
    console.dir(titleElem);
};

export const getInputElement = () => {
    const inputElem = document.querySelector("input");
    inputElem.getAttribute("type", "text");
    console.dir(inputElem);
};