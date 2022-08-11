const maxFibonacci = (number) => {
    if (number < 0) {
        return;
    }

    let a = 0;
    let b = 1;
    let res = 0;

    if (res + a <= number) {
        res = a + b;
        a = b;
        b = res;
    }
};

console.log(maxFibonacci(9));