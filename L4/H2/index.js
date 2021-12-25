const n = 15;
let sum = "1";
let i = 2;

do {
    sum += String(i);
    i++;
} while (i <= 15);

console.log(sum);