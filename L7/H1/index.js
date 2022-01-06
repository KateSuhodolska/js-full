const squareArray = (arr) => {
    if (!Array.isArray(arr)) return null;
    return arr.map((square) => square * square);
};