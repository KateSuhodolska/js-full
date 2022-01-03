function swap(numbers) {
    const [start, ...rest] = numbers;
    return [...rest, start];
}

function swapManual(numbers) {
    const resArr = [...numbers];
    let firstEl = resArr.shift();
    resArr.push(firstEl);
    return resArr;
}

swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]