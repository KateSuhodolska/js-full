const asyncNum = (value, time) =>
    // eslint-disable-next-line no-new
    new Promise((resolve) => {
        setTimeout(() => {
            console.log(value);
            resolve(value);
        }, time);
    });

const num1 = asyncNum(27, 2000);
const num2 = asyncNum(13, 3000);
const num3 = asyncNum(10, 1000);

const getSum = (numbers) =>
    numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, el) => acc + Number(el));

const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then((num) => getSum(num))
        .catch(() => Promise.reject(new Error("Can't calculate")));
};

const res = asyncSum(num1, num2, num3).then((value) => console.log(value));