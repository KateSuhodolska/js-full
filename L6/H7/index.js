const checker = (arr) => {
    if (!Array.isArray(arr)) return null;
    let minNum = 0;
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) maxNum = arr[i];
        if (arr[i] < minNum) minNum = arr[i];
    }
    return maxNum + minNum > 1000;
};