function getPrimes(n) {
    if (n < 0 && n % 1 !== 0) return;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i) && i !== 1) console.log(i);
    }
}

function isPrime(number) {
    for (let i = number - 1; i > 1; i--) {
        if (number % i === 0) return false;
    }
    return true;
}