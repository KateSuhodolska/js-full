const getRandomNumbers = (length, from, to) => {
    if (Math.floor(from) === Math.floor(to)) return null;
    let arr = new Array(length);
    return arr
        .fill(null)
        .map(() => Math.ceil(Math.random() * (to - from) + from));
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
