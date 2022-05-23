const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const emailErrorEl = document.querySelector(".error-text_email");
const passwordErrorEl = document.querySelector(".error-text_password");

const isRequired = (value) => (value ? undefined : "Required");

const isEmail = (value) =>
    value.includes("@") ? undefined : "Should be an email";

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired],
};

const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
        .map((validator) => validator(value))
        .filter((errorText) => errorText)
        .join(", ");
};

const onEmailChange = (event) => {
    const errorText = validate("email", event.target.value);
    emailErrorEl.textContent = errorText;
};

const onPasswordChange = (event) => {
    const errorText = validate("password", event.target.value);
    passwordErrorEl.textContent = errorText;
};

emailInput.addEventListener("input", onEmailChange);
passwordInput.addEventListener("input", onPasswordChange);

const formElem = document.querySelector(".login-form");

// const onFormSubmit = () => {
//     const formFields = [...new FormData(formElem)];
//     const formData = formFields.reduce(function(acc, formField) {
//         const [prop, value] = formField;
//         return {
//             ...acc,
//             [prop]: value,
//         };
//     }, {});
//     alert(JSON.stringify(formData));
// };

const onFormSubmit = () => {
    const formData = Object.fromEntries(new FormData(formElem));
    alert(JSON.stringify(formData));
};

formElem.addEventListener("submit", onFormSubmit);