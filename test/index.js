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

// 55 years, 7 lvl
// function openOrSenior(data) {
//     return data.map((el) => console.log(el) el.reduce((el) => {
//         console.log(el);
//         if (el[0] >= 55 || el[1] >= 7) {
//             return "Senior";
//         } else return "Open";
//     }));
// }

// function openOrSenior(data) {
//     return data.map((el) => {
//         return el[0] >= 55 && el[1] >= 7 ? "Senior" : "Open";
//     });
// }

// console.log(
//     openOrSenior([
//         [45, 12],
//         [55, 21],
//         [19, -2],
//         [104, 20],
//     ])
// );
// console.log(
//     openOrSenior([
//         [3, 12],
//         [55, 1],
//         [91, -2],
//         [53, 23],
//     ])
// );

// function countPositivesSumNegatives(input) {
//     if (input.length === 0 || input.includes((el) => el !== 0)) return [];
//     const resArr = [];
//     resArr.push(input.filter((num) => num > 0).length);
//     resArr.push(
//         input.filter((num) => num < 0).reduce((acc, num) => acc + num, 0)
//     );
//     return resArr;
// }

// console.log(
//     countPositivesSumNegatives([
//         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//     ])
// );
// console.log(countPositivesSumNegatives([0, 0]));

// function lovefunc(flower1, flower2) {
//     if (flower1 % 2 === 0 && flower2 % 2 === 1) {
//         return true;
//     }
//     if (flower1 % 2 === 1 && flower2 % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// console.log(lovefunc(8, 9));
// console.log(lovefunc(8, 10));

// function findNextSquare(sq) {
//     const sqrt = Math.sqrt(sq) + 1;
//     if (sqrt % 1 !== 0) return -1;
//     return sqrt ** 2;
// }

// console.log(findNextSquare(121));

// const reverseSeq = (n) => {
//     const arr = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(i);
//     }
//     return arr.reverse();
// };

// console.log(reverseSeq(5));

// eslint-disable-next-line consistent-return
// function validatePIN(pin) {
//     const arr = pin.split("").map((el) => {
//         return el === " " ? false : Number(el);
//     });
//     if (arr.length === 4 || arr.length === 6) {
//         if (arr.map((el) => Number.isInteger(el)).some((el) => el === false)) {
//             return false;
//         }
//         return true;
//     }
//     return false;
// }

// console.log(validatePIN("123 "));

// function reverseWords(str) {
//     return str
//         .split(" ")
//         .map((el) => el.split("").reverse().join(""))
//         .join(" ");
// }

// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

// const testCases = [1, 2, 3, 4, 5];

// function minMax(arr) {
//     const resArr = [];
//     resArr.push(Math.min(...arr), Math.max(...arr));
//     return resArr;
// }

// console.log(minMax(testCases));

// function descendingOrder(n) {
//     const arr = String(n)
//         .split("")
//         .map((el) => Number(el))
//         .sort((a, b) => b - a)
//         .join("");
//     return Number(arr);
// }

// console.log(descendingOrder(1021));

// function friend(friends) {
//     return friends
//         .map((el) => el.split(""))
//         .filter((el) => el.length === 4)
//         .map((el) => el.join(""));
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]));

function duplicateEncode(word) {
    const res = [];
    // eslint-disable-next-line array-callback-return
    word.split("").map((el) => {
        if (!res.includes(el)) {
            res.push(el);
        }
    });
    return res.join("");
}

console.log(duplicateEncode("din"));