const countOccurrences = (text = "", str) => {
    if (str === "") return null;
    return text.split(str).length - 1;
};

console.log(countOccurrences("12as dfas", "a"));
console.log(countOccurrences("12as dfasafdsdfd", "d"));
console.log(countOccurrences("123dss", 4));
console.log(countOccurrences("12"));
console.log(countOccurrences(12, 12));