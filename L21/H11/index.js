const squaredNumbers = () => {
    const firstNum = document.querySelectorAll(".number");

    firstNum.forEach((el) => {
        const num = el.getAttribute("data-number");
        el.setAttribute("data-squared-number", num * num);
    });
};

squaredNumbers();