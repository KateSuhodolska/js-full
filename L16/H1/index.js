const createArrayOfFunctions = (num) => {
    if (typeof num !== "number") return null;

    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(function() {
            return i;
        });
    }

    return arr;
};
console.log(createArrayOfFunctions()[6]());