function compareSums(a, b, c, d) {
    return getSum(a, b) > getSum(c, d);
}

function getSum(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
}