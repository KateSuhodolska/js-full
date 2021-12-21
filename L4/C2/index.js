// put your code here
const m = 21;
const n = 40;
let e = m;
let result = 1;

do {
    if (e % 2 === 1) {
        result *= e;
    }
    e++;
} while (e <= n);

console.log(result);