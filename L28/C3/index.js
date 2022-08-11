const mult = (value1) => (value2) => value1 * value2;
const twice = mult(2);
const triple = mult(3);

console.log(triple(3));