let num = 0;

export const add = (number) => (num += number);

export const decrease = (number) => (num = number - num);

export const reset = () => (num = 0);

export const getMemo = () => num;

console.log(add(6));
console.log(decrease(2));
console.log(add(3));
console.log(reset());
console.log(add(5));
console.log(decrease(2));
console.log(getMemo());