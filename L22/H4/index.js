const button = document.querySelector(".search__btn");
const buttonText = document.querySelector(".search__input");
button.addEventListener("click", () => {
    console.log(buttonText.value);
});