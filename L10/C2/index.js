function getParsedIntegers(arr) {
    return arr.map((el) => Number.parseInt(el));
}

function getParsedIntegersV2(arr) {
    return arr.map((el) => parseInt(el));
}

function getParsedFloats(arr) {
    return arr.map((el) => Number.parseFloat(el));
}

function getParsedFloatsV2(arr) {
    return arr.map((el) => parseFloat(el));
}

console.log(getParsedFloats([9.81, 0, -87.1, NaN, undefined, 8.0]));