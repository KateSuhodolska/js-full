const uniqueCount = (arr) => {
    if (!Array.isArray(arr)) return null;
    const outArray = [];

    for (const str of arr) {
        if (!outArray.includes(str)) {
            outArray.push(str);
        }
    }

    return outArray.length;
};

console.log(uniqueCount([1, 2, 3, 4, 1, 2, 3, 4, 5, 5, 6, 2, 1]));