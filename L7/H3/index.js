const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) return null;
    return arr.map((num) => {
        if (num % 2 === 0) {
            return (num += delta);
        }
        return num;
    });
};