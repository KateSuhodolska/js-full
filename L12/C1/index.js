const calc = (expression) => {
    const [a, operator, b] = expression.split(" ");
    let res;

    switch (operator) {
        case "+":
            res = +a + +b;
            break;
        case "-":
            res = a - b;
            break;
        case "*":
            res = a * b;
            break;
        case "/":
            res = a / b;
            break;
    }
    return `${expression} = ${res}`;
};

console.log(calc("12 / 4"));