// put your code here
const reverseArray = (arr) => {
    let reverse = [];
    if (!Array.isArray(arr)) return null;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        reverse.unshift(num);
    }
    return reverse;
};

reverseArray([4, 7, 9, 0, 1]);