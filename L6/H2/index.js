function squareArray(arr) {
    const res = [];
    if (!Array.isArray(arr)) return null;
    for (let i = 0; i < arr.length; i++) {
        let square = 1;
        square = arr[i] * arr[i];
        res.push(square);
    }
    return res;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]