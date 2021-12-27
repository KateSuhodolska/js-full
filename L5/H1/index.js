const getSum = (firstNum, secondNum) => {
    let sum = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 2 === 0) sum += i;
    }
    return sum;
};