const finishForm = () => {
    const form = document.createElement("input");
    const formInput = document.querySelector('input[name="password"]');
    form.setAttribute("type", "text");
    form.setAttribute("name", "password");
    formInput.type = "password";

    formInput.before(form);
};

finishForm();