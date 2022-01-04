const removeDuplicates = (array) => {
    if (!Array.isArray(array) || array.length === 0) return null;
    const seenArray = [];
    const outArray = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (seenArray[array[i]] !== 1) {
            seenArray[array[i]] = 1;
            outArray[j++] = array[i];
        }
    }
    return outArray;
};

console.log(removeDuplicates([1, 2, 1, 3, 4, 5, 5, 5, 6, 5, 7, 3, 8, 9]));