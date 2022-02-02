const splitText = (text, len = 10) => {
    if (typeof text !== "string") return null;

    const strArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) break;
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;
    }

    return strArr.join("\n");
};

console.log(splitText("12as dfas", 4));
console.log(splitText("12as dfasafdsdfd"));
console.log(splitText("123dss", 4));
console.log(splitText("12"));
console.log(splitText(12, 12));