const getTotalPrice = (arr) => {
    const res = arr.reduce((acc, el) => acc + el);
    return `$${Math.floor(res * 100) / 100}`;
};

console.log(getTotalPrice([8.157, 7, 3.5, 2.1, 0]));