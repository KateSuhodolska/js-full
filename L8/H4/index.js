const pickProps = (obj, props) => {
    const newObj = {};

    for (let key in obj) {
        props.forEach((element) => {
            if (key === element) newObj[element] = obj[element];
        });
    }
    return newObj;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"]));
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"])); // ==> { a: 1, c: 3 }