// function isPalindrome(line) {
//     const reverseLine = line.split("").reverse().join("");
//     return line === reverseLine ? true : false;
//     // line === reverseLine ? return true : return false;
// }

// console.log(isPalindrome("anna"));

// const digitize = (n) =>
//     new String(n)
//     .split("")
//     .reverse()
//     .map((el) => Number(el));

// console.log(digitize(35231));

// const addLength = (str) => str.split(" ").map((el) => `${el} ${el.length}`);

// console.log(addLength("you will win"));

function findDifference(a, b) {
    const firstNum = a.reduce((acc, el) => acc * el);
    const secondNum = b.reduce((acc, el) => acc * el);
    return firstNum >= secondNum ? firstNum - secondNum : secondNum - firstNum;
}

console.log(findDifference([15, 18, 4], [3, 20, 28]));