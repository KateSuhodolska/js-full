export const setTitle = (text) => {
    const titleText = document.querySelector(".title");
    titleText.textContent = text;
};

setTitle("Today is Friday");