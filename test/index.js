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

// function findDifference(a, b) {
//     const firstNum = a.reduce((acc, el) => acc * el);
//     const secondNum = b.reduce((acc, el) => acc * el);
//     return firstNum >= secondNum ? firstNum - secondNum : secondNum - firstNum;
// }

// console.log(findDifference([15, 18, 4], [3, 20, 28]));

// function XO(str) {
//     const arr = str.toLowerCase().split("");

//     const xEl = arr.reduce((acc, el) => (el === "x" ? acc + 1 : acc), 0);
//     const oEl = arr.reduce((acc, el) => (el === "o" ? acc + 1 : acc), 0);
//     return xEl === oEl ? true : false;
// }

// console.log(XO("xxOo"));

// function getMiddle(s) {
//     const middleNum = s.length / 2;
//     return middleNum % 2 === 0 ?
//         s.substr(middleNum - 1, 2) :
//         s.substr(middleNum, 1);
// }

// console.log(getMiddle("test"));
// console.log(getMiddle("tests"));
// console.log(getMiddle("middle"));

// function getCount(str) {
//     const vowels = ["a", "e", "i", "o", "u"];

//     return str.split("").filter((el) => vowels.includes(el)).length;
// }

// console.log(getCount("abracadabra"));

// function solution(str, ending) {
//     return str.endsWith(ending);
// }
// console.log(solution("abcde", "cde"));
// console.log(solution("abcde", "ade"));

function openOrSenior(data) {}

console.log(
    openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
    ])
);
console.log(
    openOrSenior([
        [3, 12],
        [55, 1],
        [91, -2],
        [53, 23],
    ])
);