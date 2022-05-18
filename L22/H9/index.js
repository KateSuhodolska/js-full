const pagination = document.querySelectorAll(".pagination__page");
const handleClick = (event) => {
    console.log(event.target.dataset.pageNumber);
};
pagination.forEach((el) => {
    el.addEventListener("click", handleClick);
});