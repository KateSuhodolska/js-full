const taskStatus = document.querySelector(".task-status");

taskStatus.addEventListener("change", (event) => {
    console.log(event.target.checked);
});

// taskStatus.addEventListener("change", () => {
//     taskStatus.checked ? console.log("true") : console.log("false");
// });