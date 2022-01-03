let sum = 0;

function checkSum(arr) {
    if (!Array.isArray(arr)) return null;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum > 100;
}
checkSum([7, 0, 11]);