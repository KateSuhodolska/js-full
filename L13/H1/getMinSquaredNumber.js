export const getMinSquaredNumber = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let res = arr.map(Math.abs);
    return Math.pow(Math.min(...res), 2);
};

console.log(getMinSquaredNumber([88, 91, 43, 11, -90, -2]));