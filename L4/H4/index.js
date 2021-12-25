let sum = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 2 === 1) {
        sum += i;
        console.log("Found");
    }
}
if (sum < 5000) console.log("Smaller or equal");

if (sum > 5000) console.log("Bigger");