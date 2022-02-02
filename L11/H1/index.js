const splitString = (text, index = 10) => {
    if (typeof text !== "string") return null;

    const newArr = [];
    let startPosition = 0;
    let dots = "";

    while (true) {
        let chunk = text.substr(startPosition, index);
        if (chunk.length === 0) break;

        if (chunk.length < index) {
            for (let i = chunk.length; i < index; i += 1) {
                dots += ".";
            }
            newArr.push(chunk + dots);
            return newArr;
        }

        newArr.push(chunk);
        startPosition += index;
    }

    return newArr;
};

console.log(splitString("12as dfas", 4));
console.log(splitString("12as dfasafdsdfd"));
console.log(splitString("123dss", 4));
console.log(splitString("12"));
console.log(splitString(12, 12));