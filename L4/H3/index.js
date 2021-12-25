const start = 17;
let m = start;
const end = 75;
let n = end;
let result = 0;
do {
    if (m % 5 === 0) {
        console.log(m);
    } else if (m % 2 === 0 && m % 4 !== 0) {
        result += m;
    } else if (m % 3 === 0) {
        result -= m;
    } else if (m % 4 === 0) {
        result *= m;
    }
    m++;
} while (m <= n);