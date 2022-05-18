const buttons = document.querySelectorAll(".btn");
const handleClick = (event) => {
    console.log(event.target.textContent);
};
buttons.forEach((el) => el.addEventListener("click", handleClick));