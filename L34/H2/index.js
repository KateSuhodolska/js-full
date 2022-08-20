const baseUrl =
    "https://62f900f53eab3503d1decd9d.mockapi.io/api/v1/users/user-form";

const registerButton = document.querySelector(".submit-button");
const email = document.querySelector('.form-input[type="email"]');
const text = document.querySelector('.form-input[type="text"]');
const password = document.querySelector('.form-input[type="password"]');
const loginForm = document.querySelector(".login-form");

const isValid = () =>
    email.reportValidity() && text.reportValidity() && password.reportValidity() ?
    registerButton.removeAttribute("disabled") :
    registerButton;

const getData = () =>
    fetch(baseUrl)
    .then((response) => response.json())
    .then((users) => users[users.length - 1])
    .then((data) =>
        alert(
            JSON.stringify({
                email: data.email,
                name: data.name,
                password: data.password,
            })
        )
    );

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

loginForm.addEventListener("input", isValid);
loginForm.addEventListener("submit", sendData);