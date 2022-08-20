const baseUrl =
    "https://62f900f53eab3503d1decd9d.mockapi.io/api/v1/users/user-form";

const registerButton = document.querySelector(".submit-button");
const loginForm = document.querySelector(".login-form");

const isValid = () => {
    if (loginForm.reportValidity()) {
        registerButton.removeAttribute("disabled");
    } else registerButton.setAttribute("disabled", true);
};

const getData = () =>
    fetch(baseUrl)
    .then((response) => response.json())
    .then((users) => users[users.length - 1])
    .then((data) => alert(JSON.stringify(data)));

const sendData = (event) => {
    event.preventDefault();

    return fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(Object.fromEntries(new FormData(loginForm))),
        })
        .then(() => getData())
        .then(() => loginForm.reset());
};

loginForm.addEventListener("change", isValid);
loginForm.addEventListener("submit", sendData);