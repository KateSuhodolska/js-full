const m = 15;
let sum = "1";
let e = 2;

do {
    sum += String(e);
    e++;
} while (e <= 15);

console.log(sum);