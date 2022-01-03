const increaseEvenEl = (arr, delta) => {
    let res = [];

    if (!Array.isArray(arr, delta)) return null;
    for (let i = 0; i < arr.length; i++) {
        let num = 1;
        if (arr[i] % 2 === 0) {
            num = arr[i] + delta;
        } else num = arr[i];
        res.push(num);
    }
    return res;
};

increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []