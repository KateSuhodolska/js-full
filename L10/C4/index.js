const getMaxAbsoluteNumber = (arr) => {
    if (!Array.isArray(arr) || arr.length == 0) return null;
    const absoluteValues = arr.map((el) => Math.abs(el));

    const max = Math.max(...absoluteValues);
    return max;
};

// examples
console.log(getMaxAbsoluteNumber(2.1, 0, 1.6)); // ===> 10
getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777