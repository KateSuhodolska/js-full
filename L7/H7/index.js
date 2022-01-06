const wordLength = 5;
const filterNames = (arr, text) =>
    arr
    .filter((word) => word.length > wordLength)
    .filter((word) => word.includes(text));