const button = document.querySelector(".single-use-btn");

const click = () => {
    console.log("cliced");
    button.removeEventListener("click", click);
};
button.addEventListener("click", click);