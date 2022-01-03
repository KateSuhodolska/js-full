function getSum(arr) {
    let sumOfNumbers = 0;
    if (!Array.isArray(arr)) return null;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        sumOfNumbers += arr[i];
    }
    return sumOfNumbers;
}

getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null