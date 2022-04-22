function sumOfSquares() {
    return [...arguments]
        .map((num) => num * num)
        .reduce((acc, el) => acc + el, 0);
}

console.log(sumOfSquares(9, 6, 2, 3));