const createButton = (buttonText) => {
    const button = document.createElement("button");
    button.innerHTML = buttonText;
    document.body.append(button);
};

createButton("This is button");