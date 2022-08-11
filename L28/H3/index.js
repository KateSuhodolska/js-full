const sum = (num) => {
    if (num <= 0) {
        return;
    }

    let prevNum = num - 1;
    let res = num + prevNum;

    if (prevNum > 0) {
        return sum(prevNum);
    }
    return res;
};

console.log(sum(4));